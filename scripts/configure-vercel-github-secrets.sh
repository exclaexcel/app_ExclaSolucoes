#!/usr/bin/env bash
# Configura os secrets necessários para o workflow `.github/workflows/vercel-production.yml`.
# Executar na tua máquina (não no agente), com GitHub CLI autenticado numa conta com
# permissão de admin no repositório.
#
# Pré-requisitos:
#   1. Token Vercel: https://vercel.com/account/tokens
#   2. Org ID: Vercel → Projeto → Settings → General → "Team ID" / "Your ID"
#
# Uso:
#   export VERCEL_TOKEN="..."
#   export VERCEL_ORG_ID="team_..."   # ou id de conta pessoal
#   ./scripts/configure-vercel-github-secrets.sh
set -euo pipefail
REPO="${GITHUB_REPO:-exclaexcel/app_ExclaSolucoes}"

if ! command -v gh >/dev/null 2>&1; then
  echo "Instala o GitHub CLI: https://cli.github.com" >&2
  exit 1
fi

: "${VERCEL_TOKEN:?export VERCEL_TOKEN (token da Vercel)}"
: "${VERCEL_ORG_ID:?export VERCEL_ORG_ID (Team/Account ID na Vercel)}"

gh secret set VERCEL_TOKEN --repo "$REPO" --app actions --body "$VERCEL_TOKEN"
gh secret set VERCEL_ORG_ID --repo "$REPO" --app actions --body "$VERCEL_ORG_ID"

echo "Secrets definidos em $REPO. O VERCEL_PROJECT_ID já está no workflow."
echo "Faz push a main ou Actions → Vercel Production → Run workflow."
