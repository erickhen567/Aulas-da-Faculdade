import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { criarConta } from '../services/AuthService';
import { salvarCadastro } from '../services/AlunoService';
import { RootStackParamList } from '../navigation/AppNavigator';
type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'CadastroAluno'> };
const CURSOS = ['Administração', 'Enfermagem', 'Engenharia Civil', 'Direito', 'Sistemas de Informação', 'Pedagogia'];
export default function CadastroAlunoScreen({ navigation }: Props) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [curso, setCurso] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erros, setErros] = useState<Record<string, string>>({});
  function mascaraCPF(v: string) { return v.replace(/\D/g, '').slice(0, 11).replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2'); }
  function mascaraData(v: string) { return v.replace(/\D/g, '').slice(0, 8).replace(/(\d{2})(\d)/, '$1/$2').replace(/(\d{2})(\d)/, '$1/$2'); }
  function mascaraTelefone(v: string) { return v.replace(/\D/g, '').slice(0, 11).replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2'); }
  function converterData(data: string) { const [dia, mes, ano] = data.split('/'); return `${ano}-${mes}-${dia}`; }
  function validar(): boolean {
    const e: Record<string, string> = {};
    if (!nome.trim()) e.nome = 'Informe o nome completo.';
    if (cpf.replace(/\D/g, '').length !== 11) e.cpf = 'CPF deve ter 11 dígitos.';
    if (dataNasc.replace(/\D/g, '').length !== 8) e.dataNasc = 'Data inválida.';
    if (!email.trim() || !email.includes('@')) e.email = 'E-mail inválido.';
    if (senha.length < 6) e.senha = 'Senha deve ter pelo menos 6 caracteres.';
    if (telefone.replace(/\D/g, '').length < 10) e.telefone = 'Telefone inválido.';
    if (!curso) e.curso = 'Selecione um curso.';
    setErros(e);
    return Object.keys(e).length === 0;
  }
  async function handleCadastrar() {
    if (!validar()) return;
    setCarregando(true);
    try {
      const user = await criarConta({ email, senha, role: 'aluno' });
      await salvarCadastro({ uid: user.uid, nomeCompleto: nome.trim(), cpf: cpf.replace(/\D/g, ''), dataNascimento: converterData(dataNasc), email: email.trim(), telefone: telefone.replace(/\D/g, ''), cursoEscolhido: curso });
      Alert.alert('Cadastro realizado!', 'Seu cadastro foi enviado e está aguardando validação.', [{ text: 'OK', onPress: () => navigation.replace('Login') }]);
    } catch (error: any) { Alert.alert('Erro', error.message); }
    finally { setCarregando(false); }
  }
  function Erro({ campo }: { campo: string }) {
    if (!erros[campo]) return null;
    return <Text style={styles.erroTexto}>{erros[campo]}</Text>;
  }
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltar}>
        <Ionicons name="arrow-back" size={22} color="#2563EB" />
        <Text style={styles.voltarTexto}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.titulo}>Cadastro de Aluno</Text>
      <Text style={styles.subtitulo}>Preencha todos os campos para se cadastrar</Text>
      <Text style={styles.label}>Nome completo *</Text>
      <TextInput style={[styles.input, erros.nome && styles.inputErro]} placeholder="Seu nome completo" placeholderTextColor="#9CA3AF" value={nome} onChangeText={(t) => { setNome(t); setErros({ ...erros, nome: '' }); }} />
      <Erro campo="nome" />
      <Text style={styles.label}>CPF *</Text>
      <TextInput style={[styles.input, erros.cpf && styles.inputErro]} placeholder="000.000.000-00" placeholderTextColor="#9CA3AF" keyboardType="numeric" value={cpf} onChangeText={(t) => { setCpf(mascaraCPF(t)); setErros({ ...erros, cpf: '' }); }} />
      <Erro campo="cpf" />
      <Text style={styles.label}>Data de nascimento *</Text>
      <TextInput style={[styles.input, erros.dataNasc && styles.inputErro]} placeholder="DD/MM/AAAA" placeholderTextColor="#9CA3AF" keyboardType="numeric" value={dataNasc} onChangeText={(t) => { setDataNasc(mascaraData(t)); setErros({ ...erros, dataNasc: '' }); }} />
      <Erro campo="dataNasc" />
      <Text style={styles.label}>E-mail *</Text>
      <TextInput style={[styles.input, erros.email && styles.inputErro]} placeholder="seu@email.com" placeholderTextColor="#9CA3AF" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={(t) => { setEmail(t); setErros({ ...erros, email: '' }); }} />
      <Erro campo="email" />
      <Text style={styles.label}>Senha *</Text>
      <TextInput style={[styles.input, erros.senha && styles.inputErro]} placeholder="Mínimo 6 caracteres" placeholderTextColor="#9CA3AF" secureTextEntry value={senha} onChangeText={(t) => { setSenha(t); setErros({ ...erros, senha: '' }); }} />
      <Erro campo="senha" />
      <Text style={styles.label}>Telefone *</Text>
      <TextInput style={[styles.input, erros.telefone && styles.inputErro]} placeholder="(00) 00000-0000" placeholderTextColor="#9CA3AF" keyboardType="numeric" value={telefone} onChangeText={(t) => { setTelefone(mascaraTelefone(t)); setErros({ ...erros, telefone: '' }); }} />
      <Erro campo="telefone" />
      <Text style={styles.label}>Curso escolhido *</Text>
      <View style={styles.cursosContainer}>
        {CURSOS.map((c) => (
          <TouchableOpacity key={c} style={[styles.cursoBotao, curso === c && styles.cursoBotaoSelecionado]} onPress={() => { setCurso(c); setErros({ ...erros, curso: '' }); }}>
            <Text style={[styles.cursoTexto, curso === c && styles.cursoTextoSelecionado]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Erro campo="curso" />
      <TouchableOpacity style={[styles.botao, carregando && styles.botaoDesabilitado]} onPress={handleCadastrar} disabled={carregando}>
        {carregando ? <ActivityIndicator color="#FFF" /> : <Text style={styles.botaoTexto}>Cadastrar</Text>}
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EFF6FF' },
  content: { padding: 24, paddingBottom: 48 },
  voltar: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, gap: 6 },
  voltarTexto: { color: '#2563EB', fontSize: 15, fontWeight: '600' },
  titulo: { fontSize: 22, fontWeight: '700', color: '#1E3A5F', marginBottom: 4 },
  subtitulo: { fontSize: 13, color: '#6B7280', marginBottom: 24 },
  label: { fontSize: 13, fontWeight: '600', color: '#374151', marginBottom: 6 },
  input: { borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 11, fontSize: 15, color: '#111827', backgroundColor: '#F9FAFB', marginBottom: 4 },
  inputErro: { borderColor: '#DC2626' },
  erroTexto: { color: '#DC2626', fontSize: 12, marginBottom: 12 },
  cursosContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 4 },
  cursoBotao: { borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 8, backgroundColor: '#F9FAFB' },
  cursoBotaoSelecionado: { backgroundColor: '#2563EB', borderColor: '#2563EB' },
  cursoTexto: { fontSize: 13, color: '#374151' },
  cursoTextoSelecionado: { color: '#FFFFFF', fontWeight: '600' },
  botao: { backgroundColor: '#2563EB', borderRadius: 10, paddingVertical: 14, alignItems: 'center', marginTop: 24 },
  botaoDesabilitado: { opacity: 0.6 },
  botaoTexto: { color: '#FFFFFF', fontWeight: '700', fontSize: 16 },
});
