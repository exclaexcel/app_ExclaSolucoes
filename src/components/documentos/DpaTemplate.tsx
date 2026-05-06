import type { DpaDocumentData } from "@/types/documentos";
import { DocumentShell } from "./DocumentShell";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 border-l-4 border-excla-green pl-3 font-sans text-xl font-bold text-excla-dark">
      {children}
    </h2>
  );
}

export type DpaTemplateProps = {
  data: DpaDocumentData;
  timbradoImageSrc?: string;
  logoSrc?: string | null;
  watermarkSrc?: string | null;
  watermarkOpacity?: number;
};

export function DpaTemplate({
  data,
  timbradoImageSrc,
  logoSrc,
  watermarkSrc,
  watermarkOpacity,
}: DpaTemplateProps) {
  return (
    <DocumentShell
      headerInfo={
        <div className="text-center">
          <h1 className="font-serif text-2xl font-bold uppercase tracking-wider text-excla-dark sm:text-3xl">
            Anexo A - Acordo de Tratamento de Dados (DPA - LGPD)
          </h1>
          <p className="mt-2 font-sans text-sm font-bold uppercase tracking-widest text-excla-green">
            Ref: {data.referenciaSistema}
          </p>
        </div>
      }
      footerLeft={data.rodapeClassificacao}
      footerPage={data.paginaAtual}
      timbradoImageSrc={timbradoImageSrc}
      logoSrc={logoSrc}
      watermarkSrc={watermarkSrc}
      watermarkOpacity={watermarkOpacity}
      footerPaddingClass="py-3"
    >
      <div className="flex-1 border-t-4 border-excla-green px-[45px] pb-12 pt-6 font-sans leading-relaxed text-gray-700">
        <section className="mb-8 text-justify">
          <p>
            Este documento faz parte do Contrato de Desenvolvimento de Software assinado
            entre{" "}
            <strong className="text-excla-dark">{data.nomeControlador}</strong>{" "}
            (doravante &quot;Controlador&quot;) e{" "}
            <strong className="text-excla-dark">Exclã Soluções</strong> (doravante
            &quot;Operador&quot;).
          </p>
        </section>

        <section className="mb-8">
          <H2>1. Quem é quem na LGPD?</H2>
          <p className="mb-3 text-justify">
            Para ficarmos dentro da lei (LGPD - Lei nº 13.709/2018), nossos papéis são
            claros:
          </p>
          <ul className="space-y-3 pl-1">
            <li className="flex items-start">
              <span className="mr-2 font-bold text-excla-green">✓</span>
              <span>
                <strong className="font-semibold text-excla-dark">
                  O Cliente (Controlador):
                </strong>{" "}
                É o dono do negócio. Você decide quais dados (nomes de clientes,
                telefones, e-mails, dados financeiros) serão inseridos no sistema e para
                qual finalidade.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-excla-green">✓</span>
              <span>
                <strong className="font-semibold text-excla-dark">
                  Exclã Soluções (Operador):
                </strong>{" "}
                Somos a tecnologia. Nós apenas armazenamos e processamos esses dados
                seguindo estritamente as suas orientações para fazer o sistema funcionar.
                Não usamos esses dados para mais nada.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <H2>2. O que vamos fazer com os dados?</H2>
          <p className="mb-3 text-justify">
            A Exclã Soluções se compromete a tratar os dados pessoais inseridos no sistema{" "}
            <strong>exclusivamente</strong> para a execução do Contrato principal
            (hospedagem, manutenção e funcionamento do {data.referenciaSistema}).
          </p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-center">
              <span className="mr-2 font-bold text-red-500">✕</span>
              Não venderemos, não alugaremos e não compartilharemos esses dados com
              terceiros.
            </li>
            <li className="flex items-center">
              <span className="mr-2 font-bold text-red-500">✕</span>
              Não usaremos os dados dos seus clientes para campanhas de marketing da
              Exclã.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <H2>3. Como protegemos os dados?</H2>
          <p className="mb-3 text-justify">
            Adotamos medidas de segurança de alto nível para proteger as informações que
            estão no nosso sistema contra acessos não autorizados, perdas ou vazamentos:
          </p>
          <ul className="space-y-3 pl-1">
            <li className="flex items-start">
              <span className="mr-2 font-bold text-excla-green">✓</span>
              Criptografia de dados em trânsito (TLS 1.3) e em repouso (AES-256).
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-excla-green">✓</span>
              Rotinas de backup automático diário.
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-excla-green">✓</span>
              Controle restrito de acesso à infraestrutura (apenas desenvolvedores
              autorizados da Exclã Soluções têm acesso aos servidores para manutenção).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <H2>4. E se algo der errado? (Incidentes)</H2>
          <p className="mb-3 text-justify">
            Se identificarmos qualquer incidente de segurança (como um vazamento de dados,
            ataque hacker ou acesso indevido ao banco de dados), a Exclã Soluções
            notificará o Cliente por e-mail no prazo máximo de{" "}
            <strong className="text-excla-dark">48 horas úteis</strong> após a
            confirmação do problema, informando:
          </p>
          <ul className="space-y-3 pl-1">
            <li className="flex items-start">
              <span className="mr-2 font-bold text-excla-green">✓</span>
              O que aconteceu e quais dados foram afetados.
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-excla-green">✓</span>
              O que já estamos fazendo para resolver e mitigar os riscos.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <H2>5. Direitos das pessoas (Titulares)</H2>
          <p className="mb-3 text-justify">
            Se um cliente seu pedir para ver quais dados vocês têm dele ou pedir para
            apagar tudo (direito de exclusão da LGPD):
          </p>
          <ul className="space-y-3 pl-1">
            <li className="flex items-start">
              <span className="mr-2 font-bold text-excla-green">✓</span>
              Você (Controlador) é responsável por atender ao pedido.
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold text-excla-green">✓</span>
              Nós (Operador) forneceremos as ferramentas no sistema para que você consiga
              exportar ou excluir esses dados facilmente.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <H2>6. Fim do contrato: O que acontece?</H2>
          <ol className="list-decimal space-y-3 pl-8 text-justify leading-relaxed">
            <li>
              A Exclã Soluções entregará a você um arquivo completo com todos os seus
              dados (exportação do banco de dados).
            </li>
            <li>
              Após a entrega e confirmação de recebimento,{" "}
              <strong className="text-excla-dark">apagaremos definitivamente</strong>{" "}
              todos os dados pessoais dos nossos servidores num prazo máximo de 30 dias.
            </li>
          </ol>
        </section>

        <div className="mt-12 border-t-2 border-gray-100 pt-10">
          <h3 className="mb-8 text-center font-serif text-2xl font-bold uppercase text-excla-dark">
            Assinaturas
          </h3>

          <div className="grid grid-cols-1 gap-12 text-sm md:grid-cols-2">
            <div className="space-y-6">
              <p className="inline-block border-b-2 border-excla-green pb-2 font-bold uppercase tracking-wider text-excla-dark">
                Cliente (Controlador)
              </p>
              <p>
                <span className="font-semibold text-gray-500">Nome/Empresa:</span>
                <br />
                <span className="mt-1 block min-h-[1.25rem] w-full border-b border-gray-300" />
              </p>
              <p>
                <span className="font-semibold text-gray-500">Data:</span>
                <br />
                <span className="mt-1 block min-h-[1.25rem] w-full border-b border-gray-300" />
              </p>
              <p>
                <span className="font-semibold text-gray-500">Assinatura:</span>
                <br />
                <span className="mt-1 block min-h-[1.25rem] w-full border-b border-gray-300" />
              </p>
            </div>

            <div className="space-y-6">
              <p className="inline-block border-b-2 border-excla-green pb-2 font-bold uppercase tracking-wider text-excla-dark">
                Exclã Soluções (Operador)
              </p>
              <p>
                <span className="font-semibold text-gray-500">Representantes:</span>
                <br />
                <span className="mt-1 block font-bold text-excla-dark">
                  {data.representantesOperador}
                </span>
              </p>
              <p>
                <span className="font-semibold text-gray-500">Data:</span>
                <br />
                <span className="mt-1 block font-bold text-excla-dark">
                  {data.dataAssinaturaOperador}
                </span>
              </p>
              <p>
                <span className="font-semibold text-gray-500">Assinatura:</span>
                <br />
                <span className="mt-1 block min-h-[1.25rem] w-full border-b border-gray-300" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </DocumentShell>
  );
}
