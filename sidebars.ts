import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Sidebar unica da documentacao da disciplina, organizada pelas fases do
 * trabalho: o que e o produto, como a equipe se organiza, o que foi feito em
 * cada sprint e como o resultado e medido.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Produto',
      collapsed: false,
      items: [
        'produto/visao-do-produto',
        'produto/arquitetura',
        'produto/repositorios',
      ],
    },
    {
      type: 'category',
      label: 'Diagnostico',
      collapsed: false,
      items: ['diagnostico/diagnostico', 'diagnostico/backlog-tecnico'],
    },
    {
      type: 'category',
      label: 'Planejamento',
      items: [
        'planejamento/planejamento',
        'planejamento/roadmap',
        'planejamento/riscos',
      ],
    },
    {
      type: 'category',
      label: 'Sprints',
      items: ['sprints/sprints'],
    },
    {
      type: 'category',
      label: 'Reunioes',
      items: ['reunioes/reunioes'],
    },
    {
      type: 'category',
      label: 'Metricas',
      items: ['metricas/metricas'],
    },
    {
      type: 'category',
      label: 'Equipe',
      items: ['equipe/equipe', 'equipe/politicas', 'equipe/links'],
    },
  ],
};

export default sidebars;
