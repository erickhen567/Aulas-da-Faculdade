import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../config/firebase';
import { DocumentoUpload } from '../types';
export async function selecionarImagem(): Promise<string | null> {
  const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!permissao.granted) throw new Error('Permissão negada para acessar a galeria.');
  const resultado = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, allowsEditing: true, quality: 1 });
  if (resultado.canceled) return null;
  return resultado.assets[0].uri;
}
export async function tratarImagem(uri: string): Promise<string> {
  const resultado = await ImageManipulator.manipulateAsync(uri, [{ resize: { width: 800 } }], { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG });
  return resultado.uri;
}
export async function salvarImagemLocal(uri: string, uid: string, tipo: 'rg_cpf' | 'certificado'): Promise<string> {
  try {
    const pastaDestino = `${FileSystem.documentDirectory}documentos/${uid}/`;
    await FileSystem.makeDirectoryAsync(pastaDestino, { intermediates: true });
    const caminhoFinal = `${pastaDestino}${tipo}.jpg`;
    await FileSystem.copyAsync({ from: uri, to: caminhoFinal });
    return caminhoFinal;
  } catch (error: any) { throw new Error('Erro ao salvar imagem localmente.'); }
}
export async function salvarUrlDocumento(cadastroId: string, documento: DocumentoUpload): Promise<void> {
  try { await updateDoc(doc(db, 'cadastros', cadastroId), { documentos: arrayUnion(documento) }); }
  catch (error: any) { throw new Error('Erro ao salvar documento no banco de dados.'); }
}
export async function processarEEnviarDocumento(uid: string, cadastroId: string, tipo: 'rg_cpf' | 'certificado'): Promise<string> {
  const uriOriginal = await selecionarImagem();
  if (!uriOriginal) throw new Error('Nenhuma imagem selecionada.');
  const uriTratada = await tratarImagem(uriOriginal);
  const caminhoLocal = await salvarImagemLocal(uriTratada, uid, tipo);
  await salvarUrlDocumento(cadastroId, { tipo, url: caminhoLocal, uploadedAt: new Date().toISOString() });
  return caminhoLocal;
}
