import type { PropostaDocumentData } from "@/types/documentos";
import { DocumentShell } from "./DocumentShell";

function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mb-3 mt-[25px] border-b-2 border-excla-dark pb-[6px] font-serif text-[13px] font-bold uppercase tracking-wide text-excla-dark">
      {children}
    </h1>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 mt-[18px] font-sans text-[11px] font-semibold text-excla-green">
      {children}
    </h2>
  );
}

function Destaque({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 border-l-4 border-excla-dark bg-excla-muted px-[15px] py-3 text-[11px] leading-snug text-gray-700 [&_strong]:font-semibold [&_strong]:text-excla-dark">
      {children}
    </div>
  );
}

export type PropostaTemplateProps = {
  data: PropostaDocumentData;
  timbradoImageSrc?: string;
  logoSrc?: string | null;
  watermarkSrc?: string | null;
  watermarkOpacity?: number;
};

export function PropostaTemplate({
  data,
  timbradoImageSrc,
  logoSrc,
  watermarkSrc,
  watermarkOpacity,
}: PropostaTemplateProps) {
  return (
    <DocumentShell
      headerInfo={
        <>
          <strong>{data.dataExtenso}</strong>
          <br />
          <br />
          <strong>À</strong>
          <br />
          {data.nomeCliente}
          <br />
          <strong>Assunto:</strong> {data.assunto}
        </>
      }
      footerLeft={data.rodapeClassificacao}
      footerPage={data.paginaAtual}
      timbradoImageSrc={timbradoImageSrc}
      logoSrc={logoSrc}
      watermarkSrc={watermarkSrc}
      watermarkOpacity={watermarkOpacity}
      footerPaddingClass="py-3"
    >
      <div className="flex-1 px-[45px] pb-10 pt-10 font-sans text-[11px] leading-[1.65] text-gray-700">
        <p className="mb-2 text-justify">{data.saudacao}</p>
        <p className="mb-2 text-justify">{data.paragrafoIntro}</p>
        <p className="mb-2 text-justify">{data.textoApresentacaoAlternativas}</p>
        <ul className="mb-2 ml-[18px] list-disc">
          {data.resumoOpcoes.map((o, i) => (
            <li key={i} className="mb-[5px] text-[#555]">
              {o}
            </li>
          ))}
        </ul>

        <H1>{data.secaoContexto.titulo}</H1>
        <ul className="mb-2 ml-[18px] list-disc">
          {data.secaoContexto.itens.map((item, i) => (
            <li key={i} className="mb-[5px] text-[#555]">
              {item}
            </li>
          ))}
        </ul>

        <H1>{data.opcaoA.titulo}</H1>
        <H2>{data.opcaoA.escopoTitulo}</H2>
        <ul className="mb-2 ml-[18px] list-disc">
          {data.opcaoA.escopoItens.map((item, i) => (
            <li key={i} className="mb-[5px] text-[#555]">
              {item}
            </li>
          ))}
        </ul>
        <H2>{data.opcaoA.beneficiosTitulo}</H2>
        <ul className="mb-2 ml-[18px] list-disc">
          {data.opcaoA.beneficiosItens.map((item, i) => (
            <li key={i} className="mb-[5px] text-[#555]">
              {item}
            </li>
          ))}
        </ul>
        <Destaque>
          <strong>Prazo:</strong> {data.opcaoA.prazoDesenvolvimento}
          <br />
          <strong>Investimento:</strong> {data.opcaoA.valorOpcaoA} (
          {data.opcaoA.condicaoPagamentoOpcaoA})<br />
          <strong>Entregáveis:</strong> {data.opcaoA.entregaveisOpcaoA}
        </Destaque>

        <H1>{data.opcaoB.titulo}</H1>
        <H2>{data.opcaoB.escopoTitulo}</H2>
        <ul className="mb-2 ml-[18px] list-disc">
          {data.opcaoB.escopoItens.map((item, i) => (
            <li key={i} className="mb-[5px] text-[#555]">
              {item}
            </li>
          ))}
        </ul>
        <H2>{data.opcaoB.beneficiosTitulo}</H2>
        <ul className="mb-2 ml-[18px] list-disc">
          {data.opcaoB.beneficiosItens.map((item, i) => (
            <li key={i} className="mb-[5px] text-[#555]">
              {item}
            </li>
          ))}
        </ul>
        <H2>{data.opcaoB.suporteMensalTitulo}</H2>
        <Destaque>{data.opcaoB.suporteMensalConteudo}</Destaque>
        <Destaque>
          <strong>Prazo:</strong> {data.opcaoB.prazoDesenvolvimento}
          <br />
          <strong>Investimento (desenvolvimento):</strong> {data.opcaoB.valorOpcaoB}{" "}
          ({data.opcaoB.condicaoPagamentoOpcaoB})
        </Destaque>

        <H1>{data.comparacao.titulo}</H1>
        <table className="my-3 w-full border-collapse text-[10px]">
          <thead>
            <tr>
              <th className="bg-excla-dark p-2 text-left font-semibold text-white">
                {data.comparacao.colunaAspecto}
              </th>
              <th className="bg-excla-dark p-2 text-left font-semibold text-white">
                {data.comparacao.colunaOpcao1}
              </th>
              <th className="bg-excla-dark p-2 text-left font-semibold text-white">
                {data.comparacao.colunaOpcao2}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.comparacao.linhas.map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 1 ? "bg-excla-offwhite" : "bg-white"}
              >
                <td className="border-b border-gray-300 px-2 py-[7px]">{row.aspecto}</td>
                <td className="border-b border-gray-300 px-2 py-[7px]">{row.opcao1}</td>
                <td className="border-b border-gray-300 px-2 py-[7px]">{row.opcao2}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <H1>{data.recomendacao.titulo}</H1>
        <p className="mb-2 text-justify">{data.recomendacao.texto}</p>

        <H1>{data.proximosPassos.titulo}</H1>
        <ul className="mb-2 ml-[18px] list-disc">
          {data.proximosPassos.itens.map((item, i) => (
            <li key={i} className="mb-[5px] text-[#555]">
              {item}
            </li>
          ))}
        </ul>

        <H1>{data.observacoes.titulo}</H1>
        <Destaque>{data.observacoes.itensDestaque}</Destaque>

        <H1>{data.contato.titulo}</H1>
        {data.contato.mensagem ? (
          <p className="mb-2 text-justify">{data.contato.mensagem}</p>
        ) : null}
        <p className="mt-5 text-justify">
          <strong>Atenciosamente,</strong>
          <br />
          <br />
          <strong>{data.contato.assinantes}</strong>
          <br />
          {data.contato.nomeEmpresa}
          <br />
          <br />
          📧 E-mail: {data.contato.email}
          <br />
          📱 Telefone: {data.contato.telefone}
          <br />
          🏢 CNPJ: {data.contato.cnpj}
        </p>
      </div>
    </DocumentShell>
  );
}
