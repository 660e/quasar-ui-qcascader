import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-qcascader'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
