import type { ContratoDocumentData, PropostaDocumentData } from "@/types/documentos";
import type { DocumentosFormularioEstado } from "@/data/estado-inicial-formulario";
import { exemploContrato, exemploProposta } from "@/data/exemplo-documentos";

export function montarPropostaDesdeFormulario(
  f: DocumentosFormularioEstado,
): PropostaDocumentData {
  const base = exemploProposta;
  const comp = [...base.comparacao.linhas];
  comp[0] = {
    aspecto: <strong>Investimento</strong>,
    opcao1: f.resumoInvestimentoExcel,
    opcao2: f.resumoInvestimentoWeb,
  };
  comp[1] = {
    aspecto: <strong>Prazo</strong>,
    opcao1: f.resumoPrazoExcel,
    opcao2: f.resumoPrazoWeb,
  };
  comp[6] = {
    aspecto: <strong>Receita 1 ano</strong>,
    opcao1: <strong>{f.resumoReceitaAnoExcel}</strong>,
    opcao2: <strong>{f.resumoReceitaAnoWeb}</strong>,
  };

  return {
    ...base,
    dataExtenso: f.dataExtenso,
    nomeCliente: f.nomeClienteDestinatario,
    assunto: f.assunto,
    saudacao: (
      <>
        <strong>
          {f.tratamento} {f.nomeSaudacao},
        </strong>
      </>
    ),
    opcaoA: {
      ...base.opcaoA,
      prazoDesenvolvimento: f.prazoOpcaoA,
      valorOpcaoA: f.valorOpcaoA,
      condicaoPagamentoOpcaoA: f.condicaoPagamentoOpcaoA,
      entregaveisOpcaoA: f.entregaveisOpcaoA,
    },
    opcaoB: {
      ...base.opcaoB,
      prazoDesenvolvimento: f.prazoOpcaoB,
      valorOpcaoB: f.valorOpcaoB,
      condicaoPagamentoOpcaoB: f.condicaoPagamentoOpcaoB,
    },
    comparacao: {
      ...base.comparacao,
      linhas: comp,
    },
    observacoes: {
      ...base.observacoes,
      itensDestaque: (
        <>
          ✓ Proposta válida por <strong>{f.validadeDias} dias</strong> (até{" "}
          {f.dataValidade})<br />✓{" "}
          <strong>Contrato de Serviço será enviado após aprovação</strong> (com LGPD,
          DPA, SLA)
          <br />
          ✓ Informações do kickoff são requisitos obrigatórios
          <br />✓ Mudanças no escopo serão cobradas separadamente
        </>
      ),
    },
    contato: {
      ...base.contato,
      email: f.emailContato,
      telefone: f.telefoneContato,
      cnpj: f.cnpjContato,
    },
  };
}

export function montarContratoDesdeFormulario(
  f: DocumentosFormularioEstado,
): ContratoDocumentData {
  const base = exemploContrato;
  return {
    ...base,
    dataExtenso: f.dataExtenso,
    nomeCliente: f.nomeClienteDestinatario,
    investimento: {
      ...base.investimento,
      valorTotal: (
        <>
          <strong>Valor Total: {f.contratoValorTotal}</strong>
        </>
      ),
      parcelas: [f.contratoParcela1, f.contratoParcela2],
    },
    assinaturas: {
      ...base.assinaturas,
      cliente: {
        ...base.assinaturas.cliente,
        rodapeNome: f.nomeClienteDestinatario,
      },
    },
  };
}
