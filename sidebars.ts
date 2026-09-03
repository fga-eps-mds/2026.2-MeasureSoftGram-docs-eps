import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Sidebar única da documentação da disciplina, organizada pelas fases do
 * trabalho: o que é o produto, como a equipe se organiza, o que foi feito em
 * cada sprint e como o resultado é medido.
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
      label: 'Diagnóstico',
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
      label: 'Reuniões',
      items: ['reunioes/reunioes'],
    },
    {
      type: 'category',
      label: 'Métricas',
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
