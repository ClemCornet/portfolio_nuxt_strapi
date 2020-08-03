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
          image: 'vuejs',
          description:
            'Vue.js est le framework javascript que j\'utilise le plus. Je possède une solide experience sur la technologie et je continue d\'explorer toutes les possibilités qu\'offre la librairie.'
        },
        {
          name: 'Nuxt.js',
          image: 'nuxtjs',
          description:
            'Vue.js est le framework javascript que j\'utilise le plus. Je possède une solide experience sur la technologie et je continue d\'explorer toutes les possibilités qu\'offre la librairie.'
        },
        {
          name: 'React.js',
          image: 'reactjs',
          description: 'lorem ipusm lorem ipsum sdfsdf'
        },
        {
          name: 'SASS',
          image: 'sass',
          description: 'lorem ipusm lorem ipsum sdfsdf'
        },
        {
          name: 'Tailwind',
          image: 'tailwind',
          description: 'lorem ipusm lorem ipsum sdfsdf'
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
          image: 'nodejs',
          description: 'lorem ipusm lorem ipsum sdfsdf'
        },
        {
          name: 'Express.js',
          image: 'express',
          description: 'lorem ipusm lorem ipsum sdfsdf'
        },
        {
          name: 'MongoDB',
          image: 'mongodb',
          description: 'lorem ipusm lorem ipsum sdfsdf'
        },
        {
          name: 'MySQL',
          image: 'mysql',
          description: 'lorem ipusm lorem ipsum sdfsdf'
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
          name: 'Figma',
          image: 'figma',
          description: 'lorem ipusm lorem ipsum sdfsdf'
        },
        {
          name: 'Adobe XD',
          image: 'adobexd',
          description: 'lorem ipusm lorem ipsum sdfsdf'
        },
        {
          name: 'Photoshop',
          image: 'photoshop',
          description: 'lorem ipusm lorem ipsum sdfsdf'
        },
        {
          name: 'Illustrator',
          image: 'illustrator',
          description: 'lorem ipusm lorem ipsum sdfsdf'
        }
      ]
    }
  ]
})
