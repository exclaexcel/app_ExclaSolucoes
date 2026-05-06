"use client";

import { ContratoTemplate } from "@/components/documentos/ContratoTemplate";
import { PropostaTemplate } from "@/components/documentos/PropostaTemplate";
import {
  estadoInicialFormulario,
  type DocumentosFormularioEstado,
  type TratamentoSaudacao,
} from "@/data/estado-inicial-formulario";
import { cormorant, montserrat } from "@/lib/fonts";
import {
  montarContratoDesdeFormulario,
  montarPropostaDesdeFormulario,
} from "@/lib/build-documentos-desde-formulario";
import type { InputHTMLAttributes } from "react";
import { useMemo, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

function Campo({
  label,
  id,
  value,
  onChange,
  ...rest
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "id">) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="text-xs font-medium tracking-wide text-excla-dark"
      >
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm focus:border-excla-green focus:outline-none focus:ring-1 focus:ring-excla-green"
        {...rest}
      />
    </div>
  );
}

function Area({
  label,
  id,
  value,
  onChange,
  rows = 2,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="text-xs font-medium tracking-wide text-excla-dark"
      >
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm focus:border-excla-green focus:outline-none focus:ring-1 focus:ring-excla-green"
      />
    </div>
  );
}

type DocumentoPreview = "proposta" | "contrato";

export function GeradorDocumentos() {
  const [f, setF] = useState<DocumentosFormularioEstado>(estadoInicialFormulario);
  const [documentoPreview, setDocumentoPreview] = useState<DocumentoPreview>("proposta");
  const printRef = useRef<HTMLDivElement>(null);
  const documentoPreviewRef = useRef<DocumentoPreview>("proposta");
  documentoPreviewRef.current = documentoPreview;

  const patch = <K extends keyof DocumentosFormularioEstado>(
    key: K,
    value: DocumentosFormularioEstado[K],
  ) => setF((prev) => ({ ...prev, [key]: value }));

  const dadosProposta = useMemo(() => montarPropostaDesdeFormulario(f), [f]);
  const dadosContrato = useMemo(() => montarContratoDesdeFormulario(f), [f]);

  const exportarPdf = useReactToPrint({
    contentRef: printRef,
    documentTitle: () =>
      documentoPreviewRef.current === "proposta"
        ? "Proposta_Comercial_Excla"
        : "Contrato_Excla",
    pageStyle: `
      @page { size: A4; margin: 12mm; }
      @media print {
        html, body {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
      }
    `,
  });

  return (
    <main className="flex min-h-dvh flex-col bg-excla-offwhite lg:h-screen lg:flex-row lg:overflow-hidden">
      {/* Coluna esquerda: formulário + abas */}
      <div className="flex min-h-0 w-full flex-col border-gray-200 lg:max-h-screen lg:w-[min(46vw,560px)] lg:shrink-0 lg:border-r lg:bg-excla-offwhite">
        <div className="shrink-0 border-b border-gray-200 bg-white px-4 py-4 shadow-sm lg:px-5">
          <h1 className="font-serif text-xl font-semibold text-excla-dark lg:text-2xl">
            Gerador de documentos
          </h1>
          <p className="mt-1 text-xs text-gray-600 lg:text-sm">
            Edite à esquerda; a folha A4 à direita atualiza em tempo real.
          </p>
          <div
            className="mt-4 flex gap-1 rounded-lg bg-excla-muted/80 p-1"
            role="tablist"
            aria-label="Documento em pré-visualização"
          >
            <button
              type="button"
              role="tab"
              aria-selected={documentoPreview === "proposta"}
              onClick={() => setDocumentoPreview("proposta")}
              className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                documentoPreview === "proposta"
                  ? "bg-white text-excla-dark shadow-sm ring-1 ring-gray-200"
                  : "text-gray-600 hover:text-excla-dark"
              }`}
            >
              Proposta
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={documentoPreview === "contrato"}
              onClick={() => setDocumentoPreview("contrato")}
              className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                documentoPreview === "contrato"
                  ? "bg-white text-excla-dark shadow-sm ring-1 ring-gray-200"
                  : "text-gray-600 hover:text-excla-dark"
              }`}
            >
              Contrato
            </button>
          </div>
          <button
            type="button"
            onClick={() => setF({ ...estadoInicialFormulario })}
            className="mt-3 w-full rounded-md border border-excla-dark bg-white px-3 py-2 text-xs font-medium text-excla-dark shadow-sm hover:bg-excla-muted lg:text-sm"
          >
            Restaurar padrões
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 lg:px-5">
          <div className="flex flex-col gap-8 pb-8">
            <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <h2 className="mb-3 font-serif text-base font-semibold text-excla-dark">
                Cliente e cabeçalho
              </h2>
              <div className="grid gap-4">
                <Campo
                  label="Data por extenso"
                  id="dataExtenso"
                  value={f.dataExtenso}
                  onChange={(v) => patch("dataExtenso", v)}
                />
                <Campo
                  label="Destinatário (bloco «À»)"
                  id="nomeClienteDestinatario"
                  value={f.nomeClienteDestinatario}
                  onChange={(v) => patch("nomeClienteDestinatario", v)}
                />
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium text-excla-dark">
                      Saudação (tratamento)
                    </span>
                    <select
                      value={f.tratamento}
                      onChange={(e) =>
                        patch("tratamento", e.target.value as TratamentoSaudacao)
                      }
                      className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-excla-green focus:outline-none focus:ring-1 focus:ring-excla-green"
                    >
                      <option value="Prezada">Prezada</option>
                      <option value="Prezado">Prezado</option>
                    </select>
                  </div>
                  <Campo
                    label="Nome na saudação"
                    id="nomeSaudacao"
                    value={f.nomeSaudacao}
                    onChange={(v) => patch("nomeSaudacao", v)}
                  />
                </div>
                <Area
                  label="Assunto"
                  id="assunto"
                  value={f.assunto}
                  onChange={(v) => patch("assunto", v)}
                  rows={2}
                />
              </div>
            </section>

            <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <h2 className="mb-3 font-serif text-base font-semibold text-excla-dark">
                Opções A e B (valores)
              </h2>
              <div className="grid gap-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-excla-green">
                  Opção A — Excel
                </p>
                <Campo
                  label="Investimento"
                  id="vA"
                  value={f.valorOpcaoA}
                  onChange={(v) => patch("valorOpcaoA", v)}
                />
                <Campo
                  label="Pagamento"
                  id="pA"
                  value={f.condicaoPagamentoOpcaoA}
                  onChange={(v) => patch("condicaoPagamentoOpcaoA", v)}
                />
                <Campo
                  label="Prazo"
                  id="prA"
                  value={f.prazoOpcaoA}
                  onChange={(v) => patch("prazoOpcaoA", v)}
                />
                <Campo
                  label="Entregáveis"
                  id="entA"
                  value={f.entregaveisOpcaoA}
                  onChange={(v) => patch("entregaveisOpcaoA", v)}
                />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-excla-green">
                  Opção B — Web
                </p>
                <Campo
                  label="Investimento"
                  id="vB"
                  value={f.valorOpcaoB}
                  onChange={(v) => patch("valorOpcaoB", v)}
                />
                <Campo
                  label="Pagamento"
                  id="pB"
                  value={f.condicaoPagamentoOpcaoB}
                  onChange={(v) => patch("condicaoPagamentoOpcaoB", v)}
                />
                <Campo
                  label="Prazo"
                  id="prB"
                  value={f.prazoOpcaoB}
                  onChange={(v) => patch("prazoOpcaoB", v)}
                />
              </div>
            </section>

            <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <h2 className="mb-3 font-serif text-base font-semibold text-excla-dark">
                Tabela comparativa (trechos)
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Campo
                  label="Investimento — Excel"
                  id="riE"
                  value={f.resumoInvestimentoExcel}
                  onChange={(v) => patch("resumoInvestimentoExcel", v)}
                />
                <Campo
                  label="Investimento — Web"
                  id="riW"
                  value={f.resumoInvestimentoWeb}
                  onChange={(v) => patch("resumoInvestimentoWeb", v)}
                />
                <Campo
                  label="Prazo — Excel"
                  id="rpE"
                  value={f.resumoPrazoExcel}
                  onChange={(v) => patch("resumoPrazoExcel", v)}
                />
                <Campo
                  label="Prazo — Web"
                  id="rpW"
                  value={f.resumoPrazoWeb}
                  onChange={(v) => patch("resumoPrazoWeb", v)}
                />
                <Campo
                  label="Receita 1 ano — Excel"
                  id="rrE"
                  value={f.resumoReceitaAnoExcel}
                  onChange={(v) => patch("resumoReceitaAnoExcel", v)}
                />
                <Campo
                  label="Receita 1 ano — Web"
                  id="rrW"
                  value={f.resumoReceitaAnoWeb}
                  onChange={(v) => patch("resumoReceitaAnoWeb", v)}
                />
              </div>
            </section>

            <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <h2 className="mb-3 font-serif text-base font-semibold text-excla-dark">
                Validade, contato e contrato
              </h2>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <Campo
                    label="Validade (dias)"
                    id="vd"
                    value={f.validadeDias}
                    onChange={(v) => patch("validadeDias", v)}
                  />
                  <Campo
                    label="Até (data)"
                    id="dv"
                    value={f.dataValidade}
                    onChange={(v) => patch("dataValidade", v)}
                  />
                </div>
                <Campo
                  label="E-mail"
                  id="em"
                  value={f.emailContato}
                  onChange={(v) => patch("emailContato", v)}
                />
                <Campo
                  label="Telefone"
                  id="tel"
                  value={f.telefoneContato}
                  onChange={(v) => patch("telefoneContato", v)}
                />
                <Campo
                  label="CNPJ"
                  id="cnpj"
                  value={f.cnpjContato}
                  onChange={(v) => patch("cnpjContato", v)}
                />
                <Campo
                  label="Contrato — valor total"
                  id="cvt"
                  value={f.contratoValorTotal}
                  onChange={(v) => patch("contratoValorTotal", v)}
                />
                <Campo
                  label="Contrato — parcela 1"
                  id="cp1"
                  value={f.contratoParcela1}
                  onChange={(v) => patch("contratoParcela1", v)}
                />
                <Campo
                  label="Contrato — parcela 2"
                  id="cp2"
                  value={f.contratoParcela2}
                  onChange={(v) => patch("contratoParcela2", v)}
                />
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Coluna direita: pré-visualização A4 + PDF */}
      <div className="flex min-h-0 flex-1 flex-col border-t border-gray-200 bg-[#e5e9e0] lg:min-h-0 lg:border-t-0">
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-gray-200 bg-white/95 px-4 py-3 backdrop-blur-sm">
          <div>
            <p className="text-sm font-medium text-excla-dark">Pré-visualização A4</p>
            <p className="text-xs text-gray-500">
              A mostrar:{" "}
              <span className="font-semibold text-excla-green">
                {documentoPreview === "proposta" ? "Proposta comercial" : "Contrato"}
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => void exportarPdf()}
            className="rounded-md bg-excla-dark px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-excla-green focus:outline-none focus:ring-2 focus:ring-excla-green focus:ring-offset-2"
          >
            Exportar para PDF
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-auto">
          <div className="flex min-h-full justify-center px-3 py-6 lg:px-6 lg:py-8">
            <div
              className="origin-top scale-[0.68] sm:scale-[0.72] lg:scale-[0.78] xl:scale-[0.85]"
              style={{ width: "21cm" }}
            >
              <div
                ref={printRef}
                className={`${cormorant.variable} ${montserrat.variable} inline-block font-sans text-gray-800`}
              >
                {documentoPreview === "proposta" ? (
                  <PropostaTemplate data={dadosProposta} />
                ) : (
                  <ContratoTemplate data={dadosContrato} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
