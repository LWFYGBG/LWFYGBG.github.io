import DefaultTheme from 'vitepress/theme'
import CategoryCard from './components/CategoryCard.vue'
import BackButton from './components/BackButton.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CategoryCard', CategoryCard)
    app.component('BackButton', BackButton)
  },
}
