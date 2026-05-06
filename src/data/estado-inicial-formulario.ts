export type TratamentoSaudacao = "Prezada" | "Prezado";

/** Campos serializáveis do formulário (sem JSX) — valores alinhados ao exemplo base */
export type DocumentosFormularioEstado = {
  dataExtenso: string;
  /** Bloco "À" (nome ou empresa, pode ser MAIÚSCULO) */
  nomeClienteDestinatario: string;
  /** Nome usado na saudação após Prezada/o */
  nomeSaudacao: string;
  tratamento: TratamentoSaudacao;
  assunto: string;
  valorOpcaoA: string;
  condicaoPagamentoOpcaoA: string;
  prazoOpcaoA: string;
  entregaveisOpcaoA: string;
  valorOpcaoB: string;
  condicaoPagamentoOpcaoB: string;
  prazoOpcaoB: string;
  resumoInvestimentoExcel: string;
  resumoInvestimentoWeb: string;
  resumoPrazoExcel: string;
  resumoPrazoWeb: string;
  resumoReceitaAnoExcel: string;
  resumoReceitaAnoWeb: string;
  validadeDias: string;
  dataValidade: string;
  emailContato: string;
  telefoneContato: string;
  cnpjContato: string;
  /** Contrato: valor exibido após "Valor Total: " */
  contratoValorTotal: string;
  contratoParcela1: string;
  contratoParcela2: string;
  /** DPA — nome do Controlador (pode ser empresa); usado no texto jurídico */
  nomeControladorDpa: string;
  /** DPA — referência do sistema/processo no cabeçalho */
  referenciaSistemaDpa: string;
  /** DPA — data no quadro Exclã Soluções (Operador) */
  dataAssinaturaOperadorDpa: string;
  /** DPA — representantes pré-preenchidos no quadro operadora */
  representantesExclaDpa: string;
};

export const estadoInicialFormulario: DocumentosFormularioEstado = {
  dataExtenso: "Londrina, 05 de maio de 2026",
  nomeClienteDestinatario: "JEANIE",
  nomeSaudacao: "Jeanie",
  tratamento: "Prezada",
  assunto: "Proposta - Gestão Financeira de Eventos (Excel e Sistema Web)",
  valorOpcaoA: "R$ 8.000,00",
  condicaoPagamentoOpcaoA: "50% à vista | 50% na entrega",
  prazoOpcaoA: "40 dias úteis (8 semanas)",
  entregaveisOpcaoA: "Arquivo Excel, treinamento (2h), documentação",
  valorOpcaoB: "R$ 12.000,00",
  condicaoPagamentoOpcaoB: "50% à vista | 50% na entrega",
  prazoOpcaoB: "Até 8 semanas após kickoff",
  resumoInvestimentoExcel: "R$ 8.000",
  resumoInvestimentoWeb: "R$ 12.000",
  resumoPrazoExcel: "8 semanas",
  resumoPrazoWeb: "8 semanas ⭐",
  resumoReceitaAnoExcel: "R$ 8.000",
  resumoReceitaAnoWeb: "R$ 16.200-23.880",
  validadeDias: "7",
  dataValidade: "12/05/2026",
  emailContato: "danielypinheiro@exclasolucoes.com.br",
  telefoneContato: "[ADICIONE]",
  cnpjContato: "[ADICIONE]",
  contratoValorTotal: "R$ 12.000,00",
  contratoParcela1: "50% (R$ 6.000) no aceite desta proposta",
  contratoParcela2: "50% (R$ 6.000) na entrega do MVP",
  nomeControladorDpa: "JEANIE",
  referenciaSistemaDpa: "Sistema de Gestão Financeira de Eventos",
  dataAssinaturaOperadorDpa: "05/05/2026",
  representantesExclaDpa: "Daniely Pinheiro / Roseane Crispim",
};
