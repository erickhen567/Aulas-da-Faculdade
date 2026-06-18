import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { AuthUser, CriarContaDTO, UserRole } from '../types';
export async function criarConta(dados: CriarContaDTO): Promise<AuthUser> {
  try {
    const credencial: UserCredential = await createUserWithEmailAndPassword(auth, dados.email, dados.senha);
    const uid = credencial.user.uid;
    await setDoc(doc(db, 'usuarios', uid), { email: dados.email, role: dados.role, criadoEm: new Date().toISOString() });
    return { uid, email: dados.email, role: dados.role };
  } catch (error: any) {
    throw new Error(traduzirErroFirebase(error.code));
  }
}
export async function login(email: string, senha: string): Promise<AuthUser> {
  try {
    const credencial: UserCredential = await signInWithEmailAndPassword(auth, email, senha);
    const uid = credencial.user.uid;
    const snap = await getDoc(doc(db, 'usuarios', uid));
    if (!snap.exists()) throw new Error('Perfil do usuário não encontrado.');
    const dados = snap.data();
    return { uid, email, role: dados.role as UserRole };
  } catch (error: any) {
    if (error.message && !error.code) throw error;
    throw new Error(traduzirErroFirebase(error.code));
  }
}
export async function logout(): Promise<void> {
  try { await signOut(auth); }
  catch (error: any) { throw new Error('Erro ao sair. Tente novamente.'); }
}
function traduzirErroFirebase(code: string): string {
  const erros: Record<string, string> = {
    'auth/email-already-in-use': 'Este e-mail já está cadastrado.',
    'auth/invalid-email': 'E-mail inválido.',
    'auth/weak-password': 'A senha deve ter pelo menos 6 caracteres.',
    'auth/user-not-found': 'Usuário não encontrado.',
    'auth/wrong-password': 'Senha incorreta.',
    'auth/invalid-credential': 'E-mail ou senha incorretos.',
    'auth/too-many-requests': 'Muitas tentativas. Tente novamente mais tarde.',
    'auth/network-request-failed': 'Sem conexão com a internet.',
  };
  return erros[code] ?? 'Ocorreu um erro inesperado. Tente novamente.';
}
