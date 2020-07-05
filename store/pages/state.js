export default () => ({
  currentIndex: 0,
  duration: 500,
  pages: [
    {
      id: 1,
      active: false,
      name: 'MySelf',
      component: 'Home',
      title: 'Developer',
      subtitle: 'based in Paris',
      description:
        'Hello, moi c\'est Clément. Passionné d\'informatique depuis tout jeune, j\'ai commencé à m\'intéresser au développement web en parallèle de mes études dans la communication et le marketing.'
    },
    {
      id: 2,
      active: false,
      name: 'Skills',
      component: 'Skills',
      skills: [
        {
          id: '01',
          title: 'Frontend',
          description:
            'Pour le CSS, j\'utilise principalement l\'outil SASS et des frameworks tels que Bootstrap et TailwindCSS. Côté JS, j\'utilise l\'ES2015 et je me suis formé aux frameworks Vue.js & React.js'
        },
        {
          id: '02',
          title: 'Backend',
          description:
            'En parrallèle de mon cursus orienté front, j\'ai pu me former et travailler sur des technologies backend. Côté serveur, j\'utlise Node.js avec le framework Express.js. Pour les SGBD j\'ai pu expérimenter : MySQL, MongoDB & Firebase.'
        },
        {
          id: '03',
          title: 'Visual Design',
          description:
            'Pour mes projets, j\'aime réaliser un travail de conception et de design en amont. Je conçois mes maquettes principalement avec les logiciels Adobe XD et Figma.'
        }
      ]
    },
    {
      id: 3,
      active: false,
      name: 'Projects',
      component: 'Projects',
      title: 'Projects'
    },
    {
      id: 4,
      active: false,
      name: 'Contact',
      component: 'Contact',
      title: 'Contact'
    }
  ],
  social: [
    {
      id: 1,
      name: 'Linkedin',
      icon: 'assets/linkedin',
      link: 'http://linkedin.com'
    },
    {
      id: 2,
      name: 'Github',
      icon: 'assets/github',
      link: 'http://github.com'
    },
    {
      id: 3,
      name: 'Twitter',
      icon: 'assets/twitter',
      link: 'http://twitter.com'
    }
  ]
})
