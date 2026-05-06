import type { ContratoDocumentData } from "@/types/documentos";
import { DocumentShell } from "./DocumentShell";

function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className={`mb-2.5 mt-5 border-b-2 border-excla-dark pb-[5px] font-serif text-[13px] font-bold uppercase tracking-wide text-excla-dark first:mt-0`}
    >
      {children}
    </h1>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 mt-[15px] font-sans text-[11px] font-semibold text-excla-green">
      {children}
    </h2>
  );
}

function Destaque({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-[10px] border-l-4 border-excla-dark bg-excla-muted px-3 py-2.5 text-[10px] leading-snug text-gray-700 [&_strong]:font-semibold [&_strong]:text-excla-dark">
      {children}
    </div>
  );
}

export type ContratoTemplateProps = {
  data: ContratoDocumentData;
  timbradoImageSrc?: string;
  logoSrc?: string | null;
  watermarkSrc?: string | null;
  watermarkOpacity?: number;
};

export function ContratoTemplate({
  data,
  timbradoImageSrc,
  logoSrc,
  watermarkSrc,
  watermarkOpacity,
}: ContratoTemplateProps) {
  return (
    <DocumentShell
      headerInfo={
        <>
          <strong>{data.dataExtenso}</strong>
          <br />
          <br />
          <strong>{data.tituloContrato}</strong>
          <br />
          <strong>{data.nomeProjeto}</strong>
        </>
      }
      footerLeft={data.rodapeClassificacao}
      footerPage={data.paginaAtual}
      timbradoImageSrc={timbradoImageSrc}
      logoSrc={logoSrc}
      watermarkSrc={watermarkSrc}
      watermarkOpacity={watermarkOpacity}
      footerPaddingClass="py-[10px]"
    >
      <div className="flex-1 px-[45px] pb-10 pt-10 font-sans text-[10px] leading-[1.6] text-gray-700">
        <p className="my-[15px] text-center font-semibold">{data.termoTituloCentral}</p>

        <H1>1. PARTES CONTRATANTES</H1>
        <p className="mb-2 text-justify">
          <strong className="text-excla-dark">{data.prestadora.rotulo}</strong>{" "}
          {data.prestadora.linha}
        </p>
        <p className="mb-2 text-justify">
          <strong className="text-excla-dark">CLIENTE:</strong> {data.nomeCliente}
        </p>

        <H1>2. OBJETO DO CONTRATO</H1>
        <p className="mb-2 text-justify">{data.objeto.intro}</p>
        <ul className="mb-2 ml-[18px] list-disc">
          {data.objeto.itens.map((item, i) => (
            <li key={i} className="mb-1 text-[#555]">
              {item}
            </li>
          ))}
        </ul>

        <H1>3. INVESTIMENTO E PAGAMENTO</H1>
        <H2>Desenvolvimento:</H2>
        <p className="mb-2 text-justify">{data.investimento.valorTotal}</p>
        <ul className="mb-2 ml-[18px] list-disc">
          {data.investimento.parcelas.map((p, i) => (
            <li key={i} className="mb-1 text-[#555]">
              {p}
            </li>
          ))}
        </ul>
        <H2>{data.investimento.suporteTitulo}</H2>
        <ul className="mb-2 ml-[18px] list-disc">
          {data.investimento.planosSuporte.map((p, i) => (
            <li key={i} className="mb-1 text-[#555]">
              {p}
            </li>
          ))}
        </ul>

        <H1>4. PROPRIEDADE INTELECTUAL</H1>
        <p className="mb-2 text-justify">{data.propriedadeIntelectual.retencaoTitulo}</p>
        <ul className="mb-2 ml-[18px] list-disc">
          {data.propriedadeIntelectual.retencaoItens.map((item, i) => (
            <li key={i} className="mb-1 text-[#555]">
              {item}
            </li>
          ))}
        </ul>
        <p className="mb-2 text-justify">{data.propriedadeIntelectual.clienteTitulo}</p>
        <ul className="mb-2 ml-[18px] list-disc">
          {data.propriedadeIntelectual.clienteItens.map((item, i) => (
            <li key={i} className="mb-1 text-[#555]">
              {item}
            </li>
          ))}
        </ul>

        <H1>5. SEGURANÇA E CONFORMIDADE LGPD</H1>
        {data.segurancaIntro ? (
          <p className="mb-2 text-justify">{data.segurancaIntro}</p>
        ) : null}
        <ul className="mb-2 ml-[18px] list-disc">
          {data.segurancaItens.map((item, i) => (
            <li key={i} className="mb-1 text-[#555]">
              {item}
            </li>
          ))}
        </ul>

        <H1>6. SLA - ACORDO DE NÍVEL DE SERVIÇO</H1>
        <p className="mb-2 text-justify">{data.sla.disponibilidade}</p>
        <p className="mb-2 text-justify">{data.sla.chamadosTitulo}</p>
        <ul className="mb-2 ml-[18px] list-disc">
          {data.sla.chamados.map((item, i) => (
            <li key={i} className="mb-1 text-[#555]">
              {item}
            </li>
          ))}
        </ul>
        <p className="mb-2 text-justify">{data.sla.excecoes}</p>

        <H1>7. RESPONSABILIDADE</H1>
        <p className="mb-2 text-justify">{data.responsabilidade.naoRespondeTitulo}</p>
        <ul className="mb-2 ml-[18px] list-disc">
          {data.responsabilidade.naoRespondeItens.map((item, i) => (
            <li key={i} className="mb-1 text-[#555]">
              {item}
            </li>
          ))}
        </ul>
        <p className="mb-2 text-justify">{data.responsabilidade.limite}</p>

        <H1>8. CONFIDENCIALIDADE</H1>
        <p className="mb-2 text-justify">{data.confidencialidade.intro}</p>
        <ul className="mb-2 ml-[18px] list-disc">
          {data.confidencialidade.itens.map((item, i) => (
            <li key={i} className="mb-1 text-[#555]">
              {item}
            </li>
          ))}
        </ul>

        <H1>9. DURAÇÃO E CANCELAMENTO</H1>
        <p className="mb-2 text-justify">{data.duracao.desenvolvimento}</p>
        <p className="mb-2 text-justify">{data.duracao.suporte}</p>
        <p className="mb-2 text-justify">{data.duracao.cancelamento}</p>

        <H1>{data.kickoff.titulo}</H1>
        <ul className="mb-2 ml-[18px] list-disc">
          {data.kickoff.itens.map((item, i) => (
            <li key={i} className="mb-1 text-[#555]">
              {item}
            </li>
          ))}
        </ul>

        <H1>11. OBSERVAÇÕES FINAIS</H1>
        <Destaque>{data.observacoesFinais}</Destaque>

        <h2 className="mt-10 text-center font-serif text-[12px] font-bold uppercase tracking-wide text-excla-dark">
          {data.assinaturas.tituloBloco}
        </h2>

        <div className="mt-[30px] flex justify-between">
          <div className="w-[45%] text-center">
            <p className="mb-1.5 font-bold">{data.assinaturas.cliente.titulo}</p>
            <div className="mb-1.5 h-10 border-t border-[#333]" />
            <p className="mb-4 text-[9px]">Assinatura e data</p>
            <p className="text-[9px]">
              _______________________
              <br />
              {data.assinaturas.cliente.rodapeNome ?? (
                <>
                  Nome completo
                </>
              )}
            </p>
          </div>
          <div className="w-[45%] text-center">
            <p className="mb-1.5 font-bold">{data.assinaturas.excla.titulo}</p>
            <div className="mb-1.5 h-10 border-t border-[#333]" />
            <p className="mb-4 text-[9px]">Assinatura e data</p>
            <p className="text-[9px]">
              _______________________
              <br />
              {data.assinaturas.excla.rodapeNome}
            </p>
          </div>
        </div>
      </div>
    </DocumentShell>
  );
}
