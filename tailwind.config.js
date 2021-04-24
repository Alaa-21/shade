module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    screens:{
      xs: '280px'
    },
    colors: {
      heading: '#1f1f1f',
      texts: '#22f3f',
      buttons: '#1290a4',
      learn: '#1290A7',
      paragraphs: '#666666',
      popular: '#f46f7c',
      unavilable: '#8e8e8e',
      para: '#878b90',
      buttonhover: '#0e7282',
      circles: '#FEF0F2',
      third: '#F8F8F8',
      fourth: '#FEFDFD',
      fifth: '#30393B',
    },
    fontFamily: {
      karla: ['Karla']
    },
    backgroundColor: {
      offwhite: '#F8F8F8',
      searchbox: '#ebf2f3'
    },
    spacing:{
      veryhigh: '40em'
    }
  },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
