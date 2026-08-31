# 2026.2-MeasureSoftGram-docs-eps

Documentacao da equipe de **Engenharia de Produto de Software (EPS)** do semestre
2026.2 no projeto **MeasureSoftGram**.

O site e publicado via GitHub Pages em:
https://fga-eps-mds.github.io/2026.2-MeasureSoftGram-docs-eps/

> A documentacao **do produto** (como usar, referencia da CLI, componentes) fica
> em repositorio proprio:
> [MeasureSoftGram-Docs](https://github.com/fga-eps-mds/MeasureSoftGram-Docs).

## Estrutura

```
docs/
  intro.mdx              Pagina inicial da documentacao
  produto/               Visao do produto, arquitetura, repositorios
  planejamento/          Metodologia, roadmap, riscos
  sprints/               Registro de cada sprint
  metricas/              Metricas de processo e de produto
  equipe/                Integrantes, politicas de trabalho, links e acessos
```

## Rodando localmente

Requer Node 20 ou superior.

```bash
npm install
npm start
```

O site fica disponivel em http://localhost:3000.

## Build

```bash
npm run build    # gera o site estatico em build/
npm run serve    # serve o build localmente
```

## Publicacao

Todo push na branch `main` dispara o workflow
[`deploy.yml`](.github/workflows/deploy.yml), que faz o build e publica no
GitHub Pages. Nao e necessario rodar deploy manualmente.

## Como contribuir

1. Crie uma branch a partir de `main` (`docs/<assunto>`).
2. Edite os arquivos `.mdx` em `docs/`.
3. Rode `npm run build` para garantir que nao ha links quebrados.
4. Abra um Pull Request.

Cada pagina publicada tem um link **Edit this page** no rodape que leva direto ao
arquivo correspondente no GitHub.

## Licenca

AGPL-3.0 - veja [LICENSE](LICENSE).
