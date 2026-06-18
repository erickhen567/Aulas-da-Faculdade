import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Alert, Modal, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../config/firebase';
import { logout } from '../services/AuthService';
import { atualizarStatus } from '../services/AlunoService';
import { CadastroAluno } from '../types';
import { RootStackParamList } from '../navigation/AppNavigator';
type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'PainelAtendente'> };
export default function PainelAtendenteScreen({ navigation }: Props) {
  const [cadastros, setCadastros] = useState<CadastroAluno[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [atualizando, setAtualizando] = useState<string | null>(null);
  const [modalVisivel, setModalVisivel] = useState(false);
  const [cadastroSelecionado, setCadastroSelecionado] = useState<CadastroAluno | null>(null);
  useEffect(() => {
    const q = query(collection(db, 'cadastros'), orderBy('criadoEm', 'desc'));
    const cancelar = onSnapshot(q, (snapshot) => {
      setCadastros(snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as Omit<CadastroAluno, 'id'>) })));
      setCarregando(false);
    });
    return () => cancelar();
  }, []);
  async function handleAtualizarStatus(cadastro: CadastroAluno) {
    if (cadastro.status === 'entregue') { Alert.alert('Aviso', 'Este cadastro já foi validado.'); return; }
    Alert.alert('Confirmar', `Validar o cadastro de ${cadastro.nomeCompleto}?`, [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Confirmar', onPress: async () => {
        setAtualizando(cadastro.id!);
        try { await atualizarStatus(cadastro.id!, 'entregue'); }
        catch (error: any) { Alert.alert('Erro', error.message); }
        finally { setAtualizando(null); }
      }},
    ]);
  }
  async function handleLogout() {
    try { await logout(); navigation.replace('Login'); }
    catch { Alert.alert('Erro', 'Não foi possível sair.'); }
  }
  function renderCard({ item }: { item: CadastroAluno }) {
    const isPendente = item.status === 'pendente';
    const estaAtualizando = atualizando === item.id;
    return (
      <View style={styles.card}>
        <View style={styles.cardTopo}>
          <Text style={styles.cardNome} numberOfLines={1}>{item.nomeCompleto}</Text>
          <View style={[styles.badge, isPendente ? styles.badgePendente : styles.badgeEntregue]}>
            <Text style={[styles.badgeTexto, isPendente ? styles.badgeTextoPendente : styles.badgeTextoEntregue]}>{isPendente ? 'Pendente' : 'Entregue'}</Text>
          </View>
        </View>
        <View style={styles.cardInfo}>
          <View style={styles.infoLinha}><Ionicons name="mail-outline" size={14} color="#6B7280" /><Text style={styles.infoTexto}>{item.email}</Text></View>
          <View style={styles.infoLinha}><Ionicons name="book-outline" size={14} color="#6B7280" /><Text style={styles.infoTexto}>{item.cursoEscolhido}</Text></View>
          <View style={styles.infoLinha}><Ionicons name="document-attach-outline" size={14} color="#6B7280" /><Text style={styles.infoTexto}>{item.documentos.length} documento(s)</Text></View>
        </View>
        <View style={styles.cardBotoes}>
          <TouchableOpacity style={styles.botaoVerDoc} onPress={() => { setCadastroSelecionado(item); setModalVisivel(true); }}>
            <Ionicons name="eye-outline" size={16} color="#2563EB" />
            <Text style={styles.botaoVerDocTexto}>Ver detalhes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botaoValidar, !isPendente && styles.botaoValidado, estaAtualizando && styles.botaoDesabilitado]} onPress={() => handleAtualizarStatus(item)} disabled={!isPendente || estaAtualizando}>
            {estaAtualizando ? <ActivityIndicator size="small" color="#FFF" /> : (<><Ionicons name={isPendente ? 'checkmark-outline' : 'checkmark-done-outline'} size={16} color="#FFF" /><Text style={styles.botaoValidarTexto}>{isPendente ? 'Validar' : 'Validado'}</Text></>)}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitulo}>Painel do Atendente</Text>
          <Text style={styles.headerSubtitulo}>{cadastros.length} cadastro(s)</Text>
        </View>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutBotao}>
          <Ionicons name="log-out-outline" size={22} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.resumoContainer}>
        <View style={[styles.resumoCard, styles.resumoPendente]}>
          <Text style={styles.resumoNumero}>{cadastros.filter(c => c.status === 'pendente').length}</Text>
          <Text style={styles.resumoLabel}>Pendentes</Text>
        </View>
        <View style={[styles.resumoCard, styles.resumoEntregue]}>
          <Text style={styles.resumoNumero}>{cadastros.filter(c => c.status === 'entregue').length}</Text>
          <Text style={styles.resumoLabel}>Entregues</Text>
        </View>
      </View>
      {carregando ? <ActivityIndicator size="large" color="#2563EB" style={styles.loading} /> :
        cadastros.length === 0 ? (
          <View style={styles.vazioContainer}><Ionicons name="people-outline" size={48} color="#D1D5DB" /><Text style={styles.vazioTexto}>Nenhum cadastro encontrado.</Text></View>
        ) : (
          <FlatList data={cadastros} keyExtractor={(item) => item.id!} renderItem={renderCard} contentContainerStyle={styles.lista} />
        )
      }
      <Modal visible={modalVisivel} animationType="slide" onRequestClose={() => setModalVisivel(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitulo}>Detalhes do Aluno</Text>
            <TouchableOpacity onPress={() => setModalVisivel(false)}><Ionicons name="close-outline" size={28} color="#FFFFFF" /></TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.modalContent}>
            {cadastroSelecionado && (
              <>
                <Text style={styles.secaoTitulo}>Dados Pessoais</Text>
                <View style={styles.dadosCard}>
                  {[
                    { icone: 'person-outline', label: 'Nome', valor: cadastroSelecionado.nomeCompleto },
                    { icone: 'card-outline', label: 'CPF', valor: cadastroSelecionado.cpf },
                    { icone: 'mail-outline', label: 'E-mail', valor: cadastroSelecionado.email },
                    { icone: 'call-outline', label: 'Telefone', valor: cadastroSelecionado.telefone },
                    { icone: 'book-outline', label: 'Curso', valor: cadastroSelecionado.cursoEscolhido },
                  ].map((item) => (
                    <View key={item.label} style={styles.dadoLinha}>
                      <Ionicons name={item.icone as any} size={16} color="#2563EB" />
                      <Text style={styles.dadoLabel}>{item.label}:</Text>
                      <Text style={styles.dadoValor}>{item.valor}</Text>
                    </View>
                  ))}
                </View>
                <Text style={styles.secaoTitulo}>Documentos Enviados</Text>
                {cadastroSelecionado.documentos.length === 0 ? (
                  <View style={styles.semDocumentos}><Ionicons name="warning-outline" size={24} color="#D97706" /><Text style={styles.semDocumentosTexto}>Nenhum documento enviado ainda.</Text></View>
                ) : (
                  cadastroSelecionado.documentos.map((doc, index) => (
                    <View key={index} style={styles.documentoCard}>
                      <Text style={styles.documentoTipo}>{doc.tipo === 'rg_cpf' ? '🪪 Documento de Identidade' : '📄 Certificado de Conclusão'}</Text>
                      <Image source={{ uri: doc.url }} style={styles.documentoImagem} resizeMode="contain" />
                      <Text style={styles.documentoData}>Enviado em: {new Date(doc.uploadedAt).toLocaleString('pt-BR')}</Text>
                    </View>
                  ))
                )}
                {cadastroSelecionado.status === 'pendente' && (
                  <TouchableOpacity style={styles.botaoValidarModal} onPress={() => { setModalVisivel(false); handleAtualizarStatus(cadastroSelecionado); }}>
                    <Ionicons name="checkmark-circle-outline" size={20} color="#FFF" />
                    <Text style={styles.botaoValidarTexto}>Validar este cadastro</Text>
                  </TouchableOpacity>
                )}
              </>
            )}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EFF6FF' },
  header: { backgroundColor: '#2563EB', paddingTop: 52, paddingBottom: 20, paddingHorizontal: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  headerTitulo: { fontSize: 20, fontWeight: '700', color: '#FFFFFF' },
  headerSubtitulo: { fontSize: 13, color: '#BFDBFE', marginTop: 2 },
  logoutBotao: { padding: 8, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 8 },
  resumoContainer: { flexDirection: 'row', gap: 12, padding: 16 },
  resumoCard: { flex: 1, borderRadius: 12, padding: 16, alignItems: 'center' },
  resumoPendente: { backgroundColor: '#FEF3C7' },
  resumoEntregue: { backgroundColor: '#DCFCE7' },
  resumoNumero: { fontSize: 28, fontWeight: '700', color: '#1E3A5F' },
  resumoLabel: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  loading: { marginTop: 60 },
  lista: { padding: 16, paddingTop: 0 },
  vazioContainer: { alignItems: 'center', marginTop: 80, gap: 12 },
  vazioTexto: { color: '#9CA3AF', fontSize: 15 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 14, padding: 16, marginBottom: 12, elevation: 3 },
  cardTopo: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
  cardNome: { fontSize: 15, fontWeight: '700', color: '#1E3A5F', flex: 1, marginRight: 8 },
  badge: { borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3 },
  badgePendente: { backgroundColor: '#FEF3C7' },
  badgeEntregue: { backgroundColor: '#DCFCE7' },
  badgeTexto: { fontSize: 11, fontWeight: '600' },
  badgeTextoPendente: { color: '#92400E' },
  badgeTextoEntregue: { color: '#166534' },
  cardInfo: { gap: 5, marginBottom: 14 },
  infoLinha: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  infoTexto: { fontSize: 13, color: '#6B7280' },
  cardBotoes: { flexDirection: 'row', gap: 8 },
  botaoVerDoc: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, borderWidth: 1, borderColor: '#2563EB', borderRadius: 8, paddingVertical: 9 },
  botaoVerDocTexto: { color: '#2563EB', fontWeight: '600', fontSize: 13 },
  botaoValidar: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, backgroundColor: '#2563EB', borderRadius: 8, paddingVertical: 9 },
  botaoValidado: { backgroundColor: '#16A34A' },
  botaoDesabilitado: { opacity: 0.6 },
  botaoValidarTexto: { color: '#FFFFFF', fontWeight: '600', fontSize: 13 },
  modalContainer: { flex: 1, backgroundColor: '#EFF6FF' },
  modalHeader: { backgroundColor: '#2563EB', paddingTop: 52, paddingBottom: 20, paddingHorizontal: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  modalTitulo: { fontSize: 18, fontWeight: '700', color: '#FFFFFF' },
  modalContent: { padding: 24, paddingBottom: 48 },
  secaoTitulo: { fontSize: 14, fontWeight: '700', color: '#6B7280', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 10, marginTop: 20 },
  dadosCard: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, gap: 10, elevation: 2 },
  dadoLinha: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  dadoLabel: { fontSize: 13, color: '#6B7280', fontWeight: '600', width: 80 },
  dadoValor: { fontSize: 13, color: '#111827', flex: 1 },
  semDocumentos: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#FFFBEB', borderRadius: 10, padding: 14 },
  semDocumentosTexto: { color: '#92400E', fontSize: 13 },
  documentoCard: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 14, marginBottom: 12, elevation: 2 },
  documentoTipo: { fontSize: 14, fontWeight: '600', color: '#1E3A5F', marginBottom: 10 },
  documentoImagem: { width: '100%', height: 200, borderRadius: 8, backgroundColor: '#F3F4F6' },
  documentoData: { fontSize: 11, color: '#9CA3AF', marginTop: 8, textAlign: 'right' },
  botaoValidarModal: { backgroundColor: '#2563EB', borderRadius: 10, paddingVertical: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 24 },
});
