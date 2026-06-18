import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { processarEEnviarDocumento } from '../services/ImageService';
import { RootStackParamList } from '../navigation/AppNavigator';
type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'UploadDocumentos'>; route: RouteProp<RootStackParamList, 'UploadDocumentos'> };
export default function UploadDocumentosScreen({ navigation, route }: Props) {
  const { user, cadastroId } = route.params;
  const [urlRG, setUrlRG] = useState<string | null>(null);
  const [urlCert, setUrlCert] = useState<string | null>(null);
  const [carregandoRG, setCarregandoRG] = useState(false);
  const [carregandoCert, setCarregandoCert] = useState(false);
  async function handleEnviarRG() {
    setCarregandoRG(true);
    try { const url = await processarEEnviarDocumento(user.uid, cadastroId, 'rg_cpf'); setUrlRG(url); Alert.alert('Sucesso', 'Documento de identidade enviado!'); }
    catch (error: any) { Alert.alert('Erro', error.message); }
    finally { setCarregandoRG(false); }
  }
  async function handleEnviarCertificado() {
    setCarregandoCert(true);
    try { const url = await processarEEnviarDocumento(user.uid, cadastroId, 'certificado'); setUrlCert(url); Alert.alert('Sucesso', 'Certificado enviado!'); }
    catch (error: any) { Alert.alert('Erro', error.message); }
    finally { setCarregandoCert(false); }
  }
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltar}>
        <Ionicons name="arrow-back" size={22} color="#2563EB" />
        <Text style={styles.voltarTexto}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.titulo}>Envio de Documentos</Text>
      <Text style={styles.subtitulo}>Envie os documentos abaixo para concluir seu cadastro.</Text>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="card-outline" size={24} color="#2563EB" />
          <View style={styles.cardTitulos}><Text style={styles.cardTitulo}>Documento de Identidade</Text><Text style={styles.cardSubtitulo}>RG ou CPF</Text></View>
          {urlRG && <Ionicons name="checkmark-circle" size={24} color="#16A34A" />}
        </View>
        {urlRG && <Image source={{ uri: urlRG }} style={styles.preview} resizeMode="cover" />}
        <TouchableOpacity style={[styles.botaoUpload, urlRG && styles.botaoReenviar, carregandoRG && styles.botaoDesabilitado]} onPress={handleEnviarRG} disabled={carregandoRG}>
          {carregandoRG ? <ActivityIndicator color="#FFF" /> : (<><Ionicons name={urlRG ? 'refresh-outline' : 'cloud-upload-outline'} size={18} color="#FFF" /><Text style={styles.botaoTexto}>{urlRG ? 'Reenviar documento' : 'Selecionar da galeria'}</Text></>)}
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="document-text-outline" size={24} color="#2563EB" />
          <View style={styles.cardTitulos}><Text style={styles.cardTitulo}>Certificado de Conclusão</Text><Text style={styles.cardSubtitulo}>Exigido pelo curso</Text></View>
          {urlCert && <Ionicons name="checkmark-circle" size={24} color="#16A34A" />}
        </View>
        {urlCert && <Image source={{ uri: urlCert }} style={styles.preview} resizeMode="cover" />}
        <TouchableOpacity style={[styles.botaoUpload, urlCert && styles.botaoReenviar, carregandoCert && styles.botaoDesabilitado]} onPress={handleEnviarCertificado} disabled={carregandoCert}>
          {carregandoCert ? <ActivityIndicator color="#FFF" /> : (<><Ionicons name={urlCert ? 'refresh-outline' : 'cloud-upload-outline'} size={18} color="#FFF" /><Text style={styles.botaoTexto}>{urlCert ? 'Reenviar certificado' : 'Selecionar da galeria'}</Text></>)}
        </TouchableOpacity>
      </View>
      <View style={styles.infoBox}>
        <Ionicons name="information-circle-outline" size={18} color="#2563EB" />
        <Text style={styles.infoTexto}>As imagens são redimensionadas para 800px e comprimidas em 70% antes do envio.</Text>
      </View>
      {urlRG && urlCert && (
        <TouchableOpacity style={styles.botaoConcluir} onPress={() => Alert.alert('Concluído!', 'Documentos enviados. Aguarde a validação.', [{ text: 'OK', onPress: () => navigation.goBack() }])}>
          <Ionicons name="checkmark-done-outline" size={20} color="#FFF" />
          <Text style={styles.botaoTexto}>Concluir envio</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EFF6FF' },
  content: { padding: 24, paddingBottom: 48 },
  voltar: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, gap: 6 },
  voltarTexto: { color: '#2563EB', fontSize: 15, fontWeight: '600' },
  titulo: { fontSize: 22, fontWeight: '700', color: '#1E3A5F', marginBottom: 6 },
  subtitulo: { fontSize: 13, color: '#6B7280', marginBottom: 24, lineHeight: 20 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 14, padding: 18, marginBottom: 16, elevation: 3 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 14 },
  cardTitulos: { flex: 1 },
  cardTitulo: { fontSize: 15, fontWeight: '600', color: '#1E3A5F' },
  cardSubtitulo: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  preview: { width: '100%', height: 180, borderRadius: 10, marginBottom: 14, backgroundColor: '#F3F4F6' },
  botaoUpload: { backgroundColor: '#2563EB', borderRadius: 10, paddingVertical: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  botaoReenviar: { backgroundColor: '#6B7280' },
  botaoDesabilitado: { opacity: 0.6 },
  botaoTexto: { color: '#FFFFFF', fontWeight: '600', fontSize: 14 },
  infoBox: { flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#DBEAFE', borderRadius: 10, padding: 12, gap: 8, marginBottom: 20 },
  infoTexto: { flex: 1, fontSize: 12, color: '#1E3A5F', lineHeight: 18 },
  botaoConcluir: { backgroundColor: '#16A34A', borderRadius: 10, paddingVertical: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
});
