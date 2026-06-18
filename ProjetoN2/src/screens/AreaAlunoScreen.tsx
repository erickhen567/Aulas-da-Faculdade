import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { logout } from '../services/AuthService';
import { CadastroAluno, AuthUser } from '../types';
import { RootStackParamList } from '../navigation/AppNavigator';
type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'AreaAluno'>; route: RouteProp<RootStackParamList, 'AreaAluno'> };
export default function AreaAlunoScreen({ navigation, route }: Props) {
  const { user } = route.params;
  const [cadastro, setCadastro] = useState<CadastroAluno | null>(null);
  const [carregando, setCarregando] = useState(true);
  useEffect(() => {
    async function buscarCadastro() {
      try {
        const q = query(collection(db, 'cadastros'), where('uid', '==', user.uid));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) { const doc = snapshot.docs[0]; setCadastro({ id: doc.id, ...(doc.data() as Omit<CadastroAluno, 'id'>) }); }
      } catch { Alert.alert('Erro', 'Não foi possível carregar seu cadastro.'); }
      finally { setCarregando(false); }
    }
    buscarCadastro();
  }, []);
  async function handleLogout() {
    try { await logout(); navigation.replace('Login'); }
    catch { Alert.alert('Erro', 'Não foi possível sair.'); }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitulo}>Olá, {cadastro?.nomeCompleto?.split(' ')[0] ?? 'Aluno'}!</Text>
          <Text style={styles.headerSubtitulo}>Área do Aluno</Text>
        </View>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutBotao}>
          <Ionicons name="log-out-outline" size={22} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      {carregando ? <ActivityIndicator size="large" color="#2563EB" style={styles.loading} /> : (
        <ScrollView contentContainerStyle={styles.content}>
          {cadastro && (
            <View style={[styles.statusCard, cadastro.status === 'pendente' ? styles.statusPendente : styles.statusEntregue]}>
              <Ionicons name={cadastro.status === 'pendente' ? 'time-outline' : 'checkmark-circle-outline'} size={32} color={cadastro.status === 'pendente' ? '#92400E' : '#166534'} />
              <View style={styles.statusTextos}>
                <Text style={[styles.statusTitulo, { color: cadastro.status === 'pendente' ? '#92400E' : '#166534' }]}>{cadastro.status === 'pendente' ? 'Aguardando validação' : 'Cadastro validado!'}</Text>
                <Text style={[styles.statusSubtitulo, { color: cadastro.status === 'pendente' ? '#B45309' : '#16A34A' }]}>{cadastro.status === 'pendente' ? 'O atendente ainda não revisou seus documentos.' : 'Seus documentos foram aceitos.'}</Text>
              </View>
            </View>
          )}
          {cadastro && (
            <View style={styles.infoCard}>
              <Text style={styles.infoCardTitulo}>Seus dados</Text>
              <View style={styles.infoLinha}><Ionicons name="person-outline" size={15} color="#2563EB" /><Text style={styles.infoLabel}>Nome:</Text><Text style={styles.infoValor} numberOfLines={1}>{cadastro.nomeCompleto}</Text></View>
              <View style={styles.infoLinha}><Ionicons name="book-outline" size={15} color="#2563EB" /><Text style={styles.infoLabel}>Curso:</Text><Text style={styles.infoValor}>{cadastro.cursoEscolhido}</Text></View>
              <View style={styles.infoLinha}><Ionicons name="mail-outline" size={15} color="#2563EB" /><Text style={styles.infoLabel}>E-mail:</Text><Text style={styles.infoValor}>{cadastro.email}</Text></View>
              <View style={styles.infoLinha}><Ionicons name="document-attach-outline" size={15} color="#2563EB" /><Text style={styles.infoLabel}>Docs:</Text><Text style={styles.infoValor}>{cadastro.documentos.length} enviado(s)</Text></View>
            </View>
          )}
          {cadastro && (
            <TouchableOpacity style={styles.botaoDocumentos} onPress={() => navigation.navigate('UploadDocumentos', { user, cadastroId: cadastro.id! })}>
              <Ionicons name="cloud-upload-outline" size={20} color="#FFF" />
              <Text style={styles.botaoTexto}>{cadastro.documentos.length > 0 ? 'Gerenciar documentos' : 'Enviar documentos'}</Text>
            </TouchableOpacity>
          )}
          {!cadastro && (<View style={styles.semCadastro}><Ionicons name="alert-circle-outline" size={40} color="#D97706" /><Text style={styles.semCadastroTexto}>Nenhum cadastro encontrado.</Text></View>)}
        </ScrollView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EFF6FF' },
  header: { backgroundColor: '#2563EB', paddingTop: 52, paddingBottom: 20, paddingHorizontal: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  headerTitulo: { fontSize: 20, fontWeight: '700', color: '#FFFFFF' },
  headerSubtitulo: { fontSize: 13, color: '#BFDBFE', marginTop: 2 },
  logoutBotao: { padding: 8, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 8 },
  loading: { marginTop: 60 },
  content: { padding: 20, paddingBottom: 48 },
  statusCard: { borderRadius: 14, padding: 16, flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 16 },
  statusPendente: { backgroundColor: '#FEF3C7' },
  statusEntregue: { backgroundColor: '#DCFCE7' },
  statusTextos: { flex: 1 },
  statusTitulo: { fontSize: 15, fontWeight: '700' },
  statusSubtitulo: { fontSize: 12, marginTop: 2 },
  infoCard: { backgroundColor: '#FFFFFF', borderRadius: 14, padding: 16, gap: 10, marginBottom: 16, elevation: 2 },
  infoCardTitulo: { fontSize: 14, fontWeight: '700', color: '#1E3A5F', marginBottom: 4 },
  infoLinha: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  infoLabel: { fontSize: 13, color: '#6B7280', fontWeight: '600', width: 80 },
  infoValor: { fontSize: 13, color: '#111827', flex: 1 },
  botaoDocumentos: { backgroundColor: '#2563EB', borderRadius: 10, paddingVertical: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  botaoTexto: { color: '#FFFFFF', fontWeight: '700', fontSize: 15 },
  semCadastro: { alignItems: 'center', marginTop: 60, gap: 12 },
  semCadastroTexto: { color: '#9CA3AF', fontSize: 14, textAlign: 'center' },
});
