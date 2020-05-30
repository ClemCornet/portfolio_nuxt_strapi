export default () => ({
  currentIndex: 0,
  isPageChanging: false,
  duration: 500,
  pages: [
    {
      id: 1,
      name: 'MySelf',
      component: 'Home'
    },
    {
      id: 2,
      name: 'Skills',
      component: 'Skills'
    },
    {
      id: 3,
      name: 'Projects',
      component: 'Projects'
    },
    {
      id: 4,
      name: 'Contact',
      component: 'Contact'
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
      id: 2,
      name: 'Twitter',
      icon: 'assets/twitter',
      link: 'http://twitter.com'
    }
  ]
})
