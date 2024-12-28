
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
const dark = {
  dark:true,
  colors: {
   background:'#161616'
  },
  variables: {
    
  }
}

const light = {
  light:true,
}

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark,light
    },
    
  },
})