import type { ReactNode } from "react";

/** Bloco de destaque (caixa com borda lateral) — aceita HTML rico via ReactNode */
export type DocumentoDestaque = {
  id?: string;
  conteudo: ReactNode;
};

export type PropostaDocumentData = {
  /** Ex.: "Londrina, 05 de maio de 2026" */
  dataExtenso: string;
  nomeCliente: string;
  assunto: string;
  saudacao: ReactNode;
  paragrafoIntro: ReactNode;
  textoApresentacaoAlternativas: ReactNode;
  /** Cada item vira um <li> — use <strong>Opção A:</strong> texto… no JSX */
  resumoOpcoes: ReactNode[];
  secaoContexto: {
    titulo: string;
    itens: ReactNode[];
  };
  opcaoA: {
    titulo: string;
    escopoTitulo: string;
    escopoItens: ReactNode[];
    beneficiosTitulo: string;
    beneficiosItens: ReactNode[];
    prazoDesenvolvimento: string;
    /** Ex.: "R$ 8.000,00" */
    valorOpcaoA: string;
    condicaoPagamentoOpcaoA: string;
    entregaveisOpcaoA: string;
  };
  opcaoB: {
    titulo: string;
    escopoTitulo: string;
    escopoItens: ReactNode[];
    beneficiosTitulo: string;
    beneficiosItens: ReactNode[];
    suporteMensalTitulo: string;
    suporteMensalConteudo: ReactNode;
    prazoDesenvolvimento: string;
    valorOpcaoB: string;
    condicaoPagamentoOpcaoB: string;
  };
  comparacao: {
    titulo: string;
    colunaAspecto: string;
    colunaOpcao1: string;
    colunaOpcao2: string;
    linhas: Array<{
      aspecto: ReactNode;
      opcao1: ReactNode;
      opcao2: ReactNode;
    }>;
  };
  recomendacao: {
    titulo: string;
    texto: ReactNode;
  };
  proximosPassos: {
    titulo: string;
    itens: ReactNode[];
  };
  observacoes: {
    titulo: string;
    itensDestaque: ReactNode;
  };
  contato: {
    titulo: string;
    mensagem?: ReactNode;
    assinantes: ReactNode;
    nomeEmpresa: string;
    email: string;
    telefone: string;
    cnpj: string;
  };
  rodapeClassificacao: string;
  paginaAtual: number;
};

export type ContratoDocumentData = {
  dataExtenso: string;
  tituloContrato: string;
  nomeProjeto: string;
  termoTituloCentral: string;
  prestadora: {
    rotulo: string;
    linha: ReactNode;
  };
  nomeCliente: string;
  objeto: {
    intro: ReactNode;
    itens: ReactNode[];
  };
  investimento: {
    valorTotal: ReactNode;
    parcelas: ReactNode[];
    suporteTitulo: string;
    planosSuporte: ReactNode[];
  };
  propriedadeIntelectual: {
    retencaoTitulo: ReactNode;
    retencaoItens: ReactNode[];
    clienteTitulo: ReactNode;
    clienteItens: ReactNode[];
  };
  segurancaIntro?: ReactNode;
  segurancaItens: ReactNode[];
  sla: {
    disponibilidade: ReactNode;
    chamadosTitulo: ReactNode;
    chamados: ReactNode[];
    excecoes: ReactNode;
  };
  responsabilidade: {
    naoRespondeTitulo: ReactNode;
    naoRespondeItens: ReactNode[];
    limite: ReactNode;
  };
  confidencialidade: {
    intro: ReactNode;
    itens: ReactNode[];
  };
  duracao: {
    desenvolvimento: ReactNode;
    suporte: ReactNode;
    cancelamento: ReactNode;
  };
  kickoff: {
    titulo: string;
    itens: ReactNode[];
  };
  observacoesFinais: ReactNode;
  assinaturas: {
    tituloBloco: string;
    cliente: {
      titulo: string;
      rodapeNome?: ReactNode;
    };
    excla: {
      titulo: string;
      rodapeNome: ReactNode;
    };
  };
  rodapeClassificacao: string;
  paginaAtual: number;
};
