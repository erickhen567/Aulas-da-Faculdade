export type UserRole = 'aluno' | 'atendente';
export type CadastroStatus = 'pendente' | 'entregue';
export interface AuthUser {
  uid: string;
  email: string;
  role: UserRole;
}
export interface DocumentoUpload {
  tipo: 'rg_cpf' | 'certificado';
  url: string;
  uploadedAt: string;
}
export interface CadastroAluno {
  id?: string;
  uid: string;
  nomeCompleto: string;
  cpf: string;
  dataNascimento: string;
  email: string;
  telefone: string;
  cursoEscolhido: string;
  status: CadastroStatus;
  documentos: DocumentoUpload[];
  criadoEm: string;
}
export interface CriarContaDTO {
  email: string;
  senha: string;
  role: UserRole;
}
