import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { CadastroAluno } from '../types';
export async function salvarCadastro(dados: Omit<CadastroAluno, 'id' | 'status' | 'documentos' | 'criadoEm'>): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, 'cadastros'), { ...dados, status: 'pendente', documentos: [], criadoEm: new Date().toISOString() });
    return docRef.id;
  } catch (error: any) { throw new Error('Erro ao salvar cadastro. Verifique sua conexão.'); }
}
export async function listarCadastros(): Promise<CadastroAluno[]> {
  try {
    const snapshot = await getDocs(collection(db, 'cadastros'));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as Omit<CadastroAluno, 'id'>) }));
  } catch (error: any) { throw new Error('Erro ao buscar cadastros.'); }
}
export async function atualizarStatus(cadastroId: string, novoStatus: 'pendente' | 'entregue'): Promise<void> {
  try { await updateDoc(doc(db, 'cadastros', cadastroId), { status: novoStatus }); }
  catch (error: any) { throw new Error('Erro ao atualizar status do cadastro.'); }
}
