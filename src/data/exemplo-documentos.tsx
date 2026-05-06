import type { ContratoDocumentData, PropostaDocumentData } from "@/types/documentos";

export const exemploProposta: PropostaDocumentData = {
  dataExtenso: "Londrina, 05 de maio de 2026",
  nomeCliente: "JEANIE",
  assunto: "Proposta - Gestão Financeira de Eventos (Excel e Sistema Web)",
  saudacao: (
    <>
      <strong>Prezada Jeanie,</strong>
    </>
  ),
  paragrafoIntro:
    "Conforme solicitado, apresento proposta para desenvolvimento de solução de gestão financeira de eventos, com foco em análise de lucratividade (DRE) por evento e controle do funil de negociações.",
  textoApresentacaoAlternativas: (
    <>
      Apresento <strong>duas alternativas:</strong>
    </>
  ),
  resumoOpcoes: [
    <>
      <strong>Opção A:</strong> Excel Avançado (Formulário + Dashboard)
    </>,
    <>
      <strong>Opção B:</strong> Plataforma Cloud (Sistema Web) ⭐{" "}
      <strong>RECOMENDADA</strong>
    </>,
  ],
  secaoContexto: {
    titulo: "1. CONTEXTO IDENTIFICADO",
    itens: [
      "Gestão atual com planilhas extensas e múltiplas versões circulando",
      "Campos principais: eventos, categorias (receitas/despesas), funil, contratos, DRE",
      "Necessidade de análises estruturadas para apresentação à diretoria",
      <>
        <strong>Urgência</strong> destacada
      </>,
      <>
        Demanda por <strong>acesso mobile</strong>
      </>,
      <>
        Necessidade de <strong>governança em tempo real</strong>
      </>,
    ],
  },
  opcaoA: {
    titulo: "2. OPÇÃO A — EXCEL AVANÇADO",
    escopoTitulo: "Escopo:",
    escopoItens: [
      <>
        <strong>Base de Dados:</strong> Reorganização estruturada com tabelas de apoio
      </>,
      <>
        <strong>Formulário Diário:</strong> UserForm com validações e log automático
      </>,
      <>
        <strong>Dashboard:</strong> Análises por evento, contrato, período com tabelas
        dinâmicas
      </>,
      <>
        <strong>Ribbon:</strong> Botões customizados para fácil navegação
      </>,
    ],
    beneficiosTitulo: "Benefícios:",
    beneficiosItens: [
      "✓ Aproveitamento do Excel (familiar)",
      "✓ Baixo custo",
      "✓ Redução de erros",
      "✓ Painel gerencial consolidado",
    ],
    prazoDesenvolvimento: "40 dias úteis (8 semanas)",
    valorOpcaoA: "R$ 8.000,00",
    condicaoPagamentoOpcaoA: "50% à vista | 50% na entrega",
    entregaveisOpcaoA: "Arquivo Excel, treinamento (2h), documentação",
  },
  opcaoB: {
    titulo: "3. OPÇÃO B — SISTEMA WEB ⭐ RECOMENDADA",
    escopoTitulo: "Escopo:",
    escopoItens: [
      <>
        <strong>Aplicativo Web:</strong> Integrado com BD relacional (PostgreSQL/SQL)
      </>,
      <>
        <strong>Formulário Web:</strong> Acessível mobile, validações em tempo real,
        login/senha
      </>,
      <>
        <strong>Dashboard:</strong> Interativo, atualização em tempo real, exportação
        Excel/PDF
      </>,
      <>
        <strong>Segurança:</strong> Criptografia TLS 1.3, AES-256, MFA, backup 24/7,
        LGPD compliant
      </>,
    ],
    beneficiosTitulo: "Benefícios:",
    beneficiosItens: [
      "✓ Acesso via navegador (sem instalações)",
      "✓ Mobilidade total (celular, tablet, PC)",
      "✓ Multiusuário com permissões",
      "✓ Dados atualizados em tempo real",
      "✓ Única fonte de verdade (sem versões duplicadas)",
      "✓ Segurança profissional + LGPD",
      "✓ Escalável",
    ],
    suporteMensalTitulo: "Suporte Mensal (escolha um):",
    suporteMensalConteudo: (
      <>
        <strong>Essencial:</strong> R$ 350/mês (3 chamados, resposta 1 dia)
        <br />
        <strong>Plus:</strong> R$ 690/mês (9 chamados, resposta 6h) ⭐
        <br />
        <strong>Pro:</strong> R$ 990/mês (15 chamados, resposta 2h + reunião)
        <br />
        <em>Inclui: hospedagem + backup + monitoramento 24/7</em>
      </>
    ),
    prazoDesenvolvimento: "Até 8 semanas após kickoff",
    valorOpcaoB: "R$ 12.000,00",
    condicaoPagamentoOpcaoB: "50% à vista | 50% na entrega",
  },
  comparacao: {
    titulo: "4. COMPARAÇÃO RÁPIDA",
    colunaAspecto: "Aspecto",
    colunaOpcao1: "Excel",
    colunaOpcao2: "Sistema Web",
    linhas: [
      {
        aspecto: <strong>Investimento</strong>,
        opcao1: "R$ 8.000",
        opcao2: "R$ 12.000",
      },
      {
        aspecto: <strong>Prazo</strong>,
        opcao1: "8 semanas",
        opcao2: "8 semanas ⭐",
      },
      {
        aspecto: <strong>Celular</strong>,
        opcao1: "❌ Difícil",
        opcao2: "✅ Fácil",
      },
      {
        aspecto: <strong>Múltiplos usuários</strong>,
        opcao1: "⚠️ Limitado",
        opcao2: "✅ Ilimitado",
      },
      {
        aspecto: <strong>Versões duplicadas</strong>,
        opcao1: "⚠️ Frequente",
        opcao2: "✅ Nenhuma",
      },
      {
        aspecto: <strong>Custo mensal</strong>,
        opcao1: "R$ 0",
        opcao2: "R$ 350-990",
      },
      {
        aspecto: <strong>Receita 1 ano</strong>,
        opcao1: <strong>R$ 8.000</strong>,
        opcao2: <strong>R$ 16.200-23.880</strong>,
      },
    ],
  },
  recomendacao: {
    titulo: "5. RECOMENDAÇÃO: OPÇÃO B (SISTEMA WEB) ⭐",
    texto: (
      <>
        Considerando sua <strong>urgência</strong> e a{" "}
        <strong>necessidade de profissionalismo</strong>, recomendo{" "}
        <strong>fortemente a Opção B.</strong> Atende prazo, oferece mobilidade,
        segurança e governança que sua diretoria merece.
      </>
    ),
  },
  proximosPassos: {
    titulo: "6. PRÓXIMOS PASSOS",
    itens: [
      <>
        <strong>1.</strong> Você escolhe A ou B (e-mail/WhatsApp)
      </>,
      <>
        <strong>2.</strong> Enviamos contrato de serviço (com LGPD/DPA/SLA)
      </>,
      <>
        <strong>3.</strong> Você assina contrato
      </>,
      <>
        <strong>4.</strong> Você envia 50% (dados bancários fornecidos)
      </>,
      <>
        <strong>5.</strong> Kickoff agendado em 48h após pagamento
      </>,
      <>
        <strong>6.</strong> Desenvolvimento começa (primeira demo semana 2)
      </>,
    ],
  },
  observacoes: {
    titulo: "7. OBSERVAÇÕES IMPORTANTES",
    itensDestaque: (
      <>
        ✓ Proposta válida por <strong>7 dias</strong> (até 12/05/2026)
        <br />✓{" "}
        <strong>Contrato de Serviço será enviado após aprovação</strong> (com LGPD, DPA,
        SLA)
        <br />
        ✓ Informações do kickoff são requisitos obrigatórios
        <br />✓ Mudanças no escopo serão cobradas separadamente
      </>
    ),
  },
  contato: {
    titulo: "8. CONTATO",
    mensagem: "Qualquer dúvida, estarei disponível!",
    assinantes: "Daniely Pinheiro | Roseane Crispim",
    nomeEmpresa: "Exclã Soluções",
    email: "danielypinheiro@exclasolucoes.com.br",
    telefone: "[ADICIONE]",
    cnpj: "[ADICIONE]",
  },
  rodapeClassificacao:
    "Classificação da informação: Uso Interno | 41 98842-7128 / 44 99982-6967",
  paginaAtual: 1,
};

export const exemploContrato: ContratoDocumentData = {
  dataExtenso: "Londrina, 05 de maio de 2026",
  tituloContrato: "CONTRATO DE SERVIÇO",
  nomeProjeto: "Sistema de Gestão Financeira de Eventos",
  termoTituloCentral: "TERMO DE SERVIÇO E ACORDO DE PRESTAÇÃO",
  prestadora: {
    rotulo: "PRESTADORA:",
    linha: (
      <>
        Exclã Soluções (Daniely Pinheiro | Roseane Crispim)
      </>
    ),
  },
  nomeCliente: "[NOME DO CLIENTE]",
  objeto: {
    intro:
      "Prestação de serviço de desenvolvimento e manutenção de aplicativo web para gestão financeira de eventos, incluindo:",
    itens: [
      "Desenvolvimento de plataforma cloud com acesso via navegador",
      "Cadastro de eventos, categorias, negociações e contratos",
      "Dashboard analítico com DRE por evento",
      "Suporte técnico mensal conforme plano contratado",
      "Hospedagem, backup e monitoramento",
    ],
  },
  investimento: {
    valorTotal: (
      <>
        <strong>Valor Total: R$ 12.000,00</strong>
      </>
    ),
    parcelas: [
      "50% (R$ 6.000) no aceite desta proposta",
      "50% (R$ 6.000) na entrega do MVP",
    ],
    suporteTitulo: "Suporte Mensal (escolha um plano):",
    planosSuporte: [
      <>
        <strong>Essencial:</strong> R$ 350/mês (3 chamados, resposta 1 dia)
      </>,
      <>
        <strong>Plus:</strong> R$ 690/mês (9 chamados, resposta 6h)
      </>,
      <>
        <strong>Pro:</strong> R$ 990/mês (15 chamados, resposta 2h + reunião mensal)
      </>,
    ],
  },
  propriedadeIntelectual: {
    retencaoTitulo: (
      <>
        <strong>A Exclã Soluções retém:</strong>
      </>
    ),
    retencaoItens: [
      "Propriedade do código-fonte e sistema completo",
      "Direito de usar bibliotecas, frameworks e componentes reutilizáveis",
      "Direito de usar como case de sucesso (respeitando confidencialidade)",
    ],
    clienteTitulo: (
      <>
        <strong>O Cliente tem direito a:</strong>
      </>
    ),
    clienteItens: [
      "Usar o sistema pelo prazo do contrato",
      "Acesso exclusivo aos seus dados",
      "Dados armazenados permanecem do cliente",
    ],
  },
  segurancaIntro: <>O sistema inclui:</>,
  segurancaItens: [
    "✓ Criptografia TLS 1.3 em trânsito",
    "✓ Criptografia AES-256 em repouso",
    "✓ Autenticação com MFA (dois fatores)",
    "✓ Backup automatizado diário",
    "✓ Monitoramento 24/7",
    "✓ Conformidade LGPD completa",
    "✓ Data Processing Agreement (DPA) anexado",
  ],
  sla: {
    disponibilidade: (
      <>
        <strong>Disponibilidade:</strong> 99,5% ao mês (máximo 3,6h offline)
      </>
    ),
    chamadosTitulo: (
      <>
        <strong>Classificação de Chamados:</strong>
      </>
    ),
    chamados: [
      <>
        <strong>P1 (crítico):</strong> Resposta 2h, resolução 8h
      </>,
      <>
        <strong>P2 (alta):</strong> Resposta 6h, resolução 24h
      </>,
      <>
        <strong>P3 (média):</strong> Resposta 1 dia, resolução 3 dias
      </>,
      <>
        <strong>P4 (baixa):</strong> Resposta 3 dias, resolução 7 dias
      </>,
    ],
    excecoes: (
      <>
        <strong>Exceções:</strong> Manutenção programada, ataques DDoS,
        indisponibilidade do cloud provider, ações do próprio cliente
      </>
    ),
  },
  responsabilidade: {
    naoRespondeTitulo: (
      <>
        <strong>A Exclã Soluções NÃO responde por:</strong>
      </>
    ),
    naoRespondeItens: [
      "Perda de dados se cliente não faz backup pessoal",
      "Ataques hackers ou DDoS volumétricos",
      "Problemas do cloud provider terceiro",
      "Uso incorreto do sistema",
      "Danos indiretos ou lucros cessantes",
    ],
    limite: (
      <>
        <strong>Responsabilidade máxima:</strong> Limitada ao valor pago nos últimos 12
        meses
      </>
    ),
  },
  confidencialidade: {
    intro: "Ambas as partes comprometem-se a manter em sigilo:",
    itens: [
      "Detalhes técnicos do sistema",
      "Dados sensíveis dos eventos",
      "Estrutura financeira e negócios",
      "Duração: 5 anos após término do contrato",
    ],
  },
  duracao: {
    desenvolvimento: (
      <>
        <strong>Período de Desenvolvimento:</strong> Até 8 semanas após kickoff
      </>
    ),
    suporte: (
      <>
        <strong>Suporte Mensal:</strong> Mês a mês, cancelável com 10 dias de aviso
        prévio
      </>
    ),
    cancelamento: (
      <>
        <strong>Em caso de cancelamento:</strong> Cliente fica com acesso aos dados e
        pode solicitar exportação
      </>
    ),
  },
  kickoff: {
    titulo: "10. KICKOFF E INÍCIO",
    itens: [
      "Kickoff agendado em até 48h após confirmação de pagamento",
      "Desenvolvimento começa imediatamente após kickoff",
      "Primeira demonstração na semana 2",
    ],
  },
  observacoesFinais: (
    <>
      ✓ Este contrato representa acordo de confidencialidade, segurança e prestação de
      serviço conforme Lei 9.609/98 e LGPD
      <br />✓ Ambas as partes concordam com os termos acima
      <br />✓ Mudanças após assinatura requerem aditivo formal
    </>
  ),
  assinaturas: {
    tituloBloco: "ASSINATURA DAS PARTES",
    cliente: {
      titulo: "CLIENTE",
      rodapeNome: "Nome completo",
    },
    excla: {
      titulo: "EXCLÃ SOLUÇÕES",
      rodapeNome: "Daniely Pinheiro",
    },
  },
  rodapeClassificacao:
    "Classificação da informação: Uso Interno | 41 98842-7128 / 44 99982-6967",
  paginaAtual: 1,
};
