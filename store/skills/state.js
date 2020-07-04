export default () => ({
  duration: 500,
  isCollapsed: false,
  loadedTechnos: false,
  idxCollapsed: null,
  skills: [
    {
      id: 0,
      image: 'skills/number_01',
      illustration: 'illu_frontend',
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
      illustration: 'illu_backend',
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
      illustration: 'illu_design',
      title: 'Visual Design',
      description:
        'En parrallèle de mon cursus orienté front, j\'ai pu me former et travailler sur des technologies backend.',
      bordered: false,
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
          name: 'MySQL',
          description: 'Relationnal database',
          image: 'mysql'
        },
        {
          name: 'MySQL',
          description: 'Relationnal database',
          image: 'mysql'
        }
      ]
    }
  ]
})
