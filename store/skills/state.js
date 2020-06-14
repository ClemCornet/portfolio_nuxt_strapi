export default () => ({
  skills: [
    {
      id: 0,
      image: 'skills/number_01',
      illustration: 'FrontendIllu',
      title: 'Frontend',
      description:
        'Pour le CSS, j\'utilise principalement l\'outil SASS et des frameworks tels que Bootstrap et TailwindCSS.',
      bordered: true,
      technos: [
        {
          name: 'Vue.js',
          description: 'The progressive framework',
          image: 'vuejs'
        },
        {
          name: 'React.js',
          description: 'The javascript framework by Facebook',
          image: 'reactjs'
        },
        {
          name: 'Nuxt.js',
          description: 'The progressive vue.js framework',
          image: 'nuxtjs'
        },
        {
          name: 'Tailwind',
          description: 'A utility-first CSS framework',
          image: 'tailwind'
        },
        {
          name: 'SASS',
          description: 'Syntactically Awesome Style Sheet',
          image: 'sass'
        }
      ]
    },
    {
      id: 1,
      image: 'skills/number_02',
      illustration: 'BackendIllu',
      title: 'Backend',
      description:
        'En parrallèle de mon cursus orienté front, j\'ai pu me former et travailler sur des technologies backend.',
      bordered: true,
      technos: [
        {
          name: 'Node.js',
          description: 'Javascript on server-side',
          image: 'nodejs'
        },
        {
          name: 'Express.js',
          description: 'Framework Node.js',
          image: 'express'
        },
        {
          name: 'MySQL',
          description: 'Relationnal database',
          image: 'mysql'
        },
        {
          name: 'MongoDB',
          description: 'A document oriented database',
          image: 'mongodb'
        }
      ]
    },
    {
      id: 2,
      image: 'skills/number_03',
      illustration: 'DesignIllu',
      title: 'Visual Design',
      description:
        'Pour mes projets, j\'aime réaliser un travail de conception et de design en amont.',
      bordered: false,
      technos: [
        {
          name: 'Adobe XD',
          description: 'Design at the speed of thought',
          image: 'adobexd'
        },
        {
          name: 'Figma',
          description: 'The collaborative interface design tool',
          image: 'figma'
        },
        {
          name: 'Photoshop',
          description: 'The creative world runs on Photoshop',
          image: 'photoshop'
        }
      ]
    }
  ]
})
