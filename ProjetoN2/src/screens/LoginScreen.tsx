import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { login } from '../services/AuthService';
import { RootStackParamList } from '../navigation/AppNavigator';
type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'Login'> };
export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  function validarCampos(): boolean {
    if (!email.trim()) { setErro('Informe o e-mail.'); return false; }
    if (!senha.trim()) { setErro('Informe a senha.'); return false; }
    return true;
  }
  async function handleLogin() {
    setErro('');
    if (!validarCampos()) return;
    setCarregando(true);
    try {
      const user = await login(email.trim(), senha);
      if (user.role === 'atendente') { navigation.replace('PainelAtendente'); }
      else { navigation.replace('AreaAluno', { user }); }
    } catch (error: any) { setErro(error.message); }
    finally { setCarregando(false); }
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.card}>
        <Ionicons name="school-outline" size={56} color="#2563EB" style={styles.icone} />
        <Text style={styles.titulo}>Cadastro de Alunos</Text>
        <Text style={styles.subtitulo}>Acesse sua conta para continuar</Text>
        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} placeholder="seu@email.com" placeholderTextColor="#9CA3AF" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={(t) => { setEmail(t); setErro(''); }} />
        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputSenhaContainer}>
          <TextInput style={styles.inputSenha} placeholder="Sua senha" placeholderTextColor="#9CA3AF" secureTextEntry={!senhaVisivel} value={senha} onChangeText={(t) => { setSenha(t); setErro(''); }} />
          <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
            <Ionicons name={senhaVisivel ? 'eye-off-outline' : 'eye-outline'} size={22} color="#6B7280" />
          </TouchableOpacity>
        </View>
        {erro !== '' && (
          <View style={styles.erroContainer}>
            <Ionicons name="alert-circle-outline" size={16} color="#DC2626" />
            <Text style={styles.erroTexto}>{erro}</Text>
          </View>
        )}
        <TouchableOpacity style={[styles.botao, carregando && styles.botaoDesabilitado]} onPress={handleLogin} disabled={carregando}>
          {carregando ? <ActivityIndicator color="#FFFFFF" /> : <Text style={styles.botaoTexto}>Entrar</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkContainer} onPress={() => navigation.navigate('CadastroAluno')}>
          <Text style={styles.linkTexto}>Não tem conta? <Text style={styles.linkDestaque}>Cadastre-se</Text></Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EFF6FF', justifyContent: 'center', padding: 24 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 28, elevation: 4 },
  icone: { alignSelf: 'center', marginBottom: 12 },
  titulo: { fontSize: 22, fontWeight: '700', color: '#1E3A5F', textAlign: 'center', marginBottom: 4 },
  subtitulo: { fontSize: 13, color: '#6B7280', textAlign: 'center', marginBottom: 24 },
  label: { fontSize: 13, fontWeight: '600', color: '#374151', marginBottom: 6 },
  input: { borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 11, fontSize: 15, color: '#111827', marginBottom: 16, backgroundColor: '#F9FAFB' },
  inputSenhaContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 11, backgroundColor: '#F9FAFB', marginBottom: 16 },
  inputSenha: { flex: 1, fontSize: 15, color: '#111827' },
  erroContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FEF2F2', borderRadius: 8, padding: 10, marginBottom: 16, gap: 6 },
  erroTexto: { color: '#DC2626', fontSize: 13, flex: 1 },
  botao: { backgroundColor: '#2563EB', borderRadius: 10, paddingVertical: 14, alignItems: 'center', marginTop: 4 },
  botaoDesabilitado: { opacity: 0.6 },
  botaoTexto: { color: '#FFFFFF', fontWeight: '700', fontSize: 16 },
  linkContainer: { marginTop: 20, alignItems: 'center' },
  linkTexto: { color: '#6B7280', fontSize: 14 },
  linkDestaque: { color: '#2563EB', fontWeight: '600' },
});
