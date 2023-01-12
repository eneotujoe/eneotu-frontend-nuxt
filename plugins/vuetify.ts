import { createVuetify, ThemeDefinition } from 'vuetify'
import 'vuetify/styles'

import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import {
  mdiGithub,
  mdiFacebook,
  mdiTwitter,
  mdiLinkedin,
  mdiInstagram,
  mdiMoonWaxingCrescent,
  mdiWhiteBalanceSunny,
  mdiAmpersand,
  mdiChevronDoubleRight,
  mdiOpenInNew,
} from '@mdi/js'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases: {
        ...aliases,
        github: mdiGithub,
        facebook: mdiFacebook,
        twitter: mdiTwitter,
        linkedin: mdiLinkedin,
        instagram: mdiInstagram,
        moon: mdiMoonWaxingCrescent,
        sun: mdiWhiteBalanceSunny,
        ampersand: mdiAmpersand,
        chevronDoubleRight: mdiChevronDoubleRight,
        openInNew: mdiOpenInNew,
      },
      sets: {
        mdi,
      },
    },
    ssr: true,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            background: '#000000',
            surface: '#FFFFFF',
            primary: '#76FF03',
            'primary-darken-1': '#4A1509',
            secondary: '#000000',
            'secondary-darken-1': '#8A0A39',
            error: '#EF7690',
            info: '#1f2937',
            success: '#3FE47E',
            warning: '#F3A916',
          },
          variables: {
            'border-color': '#000000',
            'border-opacity': 0.12,
            'high-emphasis-opacity': 0.87,
            'medium-emphasis-opacity': 0.60,
            'disabled-opacity': 0.38,
            'idle-opacity': 0.04,
            'hover-opacity': 0.04,
            'focus-opacity': 0.12,
            'selected-opacity': 0.08,
            'activated-opacity': 0.12,
            'pressed-opacity': 0.12,
            'dragged-opacity': 0.08,
            'theme-kbd': '#212529',
            'theme-on-kbd': '#FFFFFF',
            'theme-code': '#F5F5F5',
            'theme-on-code': '#000000',
          },
        },
        dark: {
          dark: true,
          colors: {
            background: '#000000',
            surface: '#FFFFFF',
            primary: '#76FF03',
            'primary-darken-1': '#4A1509',
            secondary: '#000000',
            'secondary-darken-1': '#8A0A39',
            error: '#EF7690',
            info: '#1f2937',
            success: '#3FE47E',
            warning: '#F3A916',
          },
        },
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
