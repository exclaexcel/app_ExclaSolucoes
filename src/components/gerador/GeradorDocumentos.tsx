"use client";

import { ContratoTemplate } from "@/components/documentos/ContratoTemplate";
import { PropostaTemplate } from "@/components/documentos/PropostaTemplate";
import {
  estadoInicialFormulario,
  type DocumentosFormularioEstado,
  type TratamentoSaudacao,
} from "@/data/estado-inicial-formulario";
import {
  montarContratoDesdeFormulario,
  montarPropostaDesdeFormulario,
} from "@/lib/build-documentos-desde-formulario";
import type { InputHTMLAttributes } from "react";
import { useMemo, useState } from "react";

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

export function GeradorDocumentos() {
  const [f, setF] = useState<DocumentosFormularioEstado>(estadoInicialFormulario);

  const patch = <K extends keyof DocumentosFormularioEstado>(
    key: K,
    value: DocumentosFormularioEstado[K],
  ) => setF((prev) => ({ ...prev, [key]: value }));

  const dadosProposta = useMemo(() => montarPropostaDesdeFormulario(f), [f]);
  const dadosContrato = useMemo(() => montarContratoDesdeFormulario(f), [f]);

  return (
    <main className="min-h-screen bg-excla-offwhite py-10">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-10 border-b border-gray-200 pb-8">
          <h1 className="font-serif text-3xl font-semibold text-excla-dark">
            Gerador de documentos
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-gray-600">
            Preencha os campos abaixo; a proposta e o contrato são atualizados na hora.
            Conteúdo jurídico amplo permanece o do modelo base — você ajusta dados do
            cliente e valores.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setF({ ...estadoInicialFormulario })}
              className="rounded-md border border-excla-dark bg-white px-4 py-2 text-sm font-medium text-excla-dark shadow-sm hover:bg-excla-muted"
            >
              Restaurar padrões
            </button>
          </div>
        </header>

        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-serif text-lg font-semibold text-excla-dark">
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

          <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-serif text-lg font-semibold text-excla-dark">
              Opções A e B (valores)
            </h2>
            <div className="grid gap-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-excla-green">
                Opção A — Excel
              </p>
              <Campo label="Investimento" id="vA" value={f.valorOpcaoA} onChange={(v) => patch("valorOpcaoA", v)} />
              <Campo
                label="Pagamento"
                id="pA"
                value={f.condicaoPagamentoOpcaoA}
                onChange={(v) => patch("condicaoPagamentoOpcaoA", v)}
              />
              <Campo label="Prazo" id="prA" value={f.prazoOpcaoA} onChange={(v) => patch("prazoOpcaoA", v)} />
              <Campo
                label="Entregáveis"
                id="entA"
                value={f.entregaveisOpcaoA}
                onChange={(v) => patch("entregaveisOpcaoA", v)}
              />
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-excla-green">
                Opção B — Web
              </p>
              <Campo label="Investimento" id="vB" value={f.valorOpcaoB} onChange={(v) => patch("valorOpcaoB", v)} />
              <Campo
                label="Pagamento"
                id="pB"
                value={f.condicaoPagamentoOpcaoB}
                onChange={(v) => patch("condicaoPagamentoOpcaoB", v)}
              />
              <Campo label="Prazo" id="prB" value={f.prazoOpcaoB} onChange={(v) => patch("prazoOpcaoB", v)} />
            </div>
          </section>

          <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-serif text-lg font-semibold text-excla-dark">
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

          <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-serif text-lg font-semibold text-excla-dark">
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

        <div className="border-t border-gray-200 pt-10">
          <h2 className="mb-8 text-center font-serif text-xl font-semibold text-excla-dark">
            Pré-visualização
          </h2>
          <div className="flex flex-col gap-16 pb-24">
            <PropostaTemplate data={dadosProposta} />
            <ContratoTemplate data={dadosContrato} />
          </div>
        </div>
      </div>
    </main>
  );
}
