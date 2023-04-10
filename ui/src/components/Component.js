import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'QCascader',

  setup () {
    return () => h(QBadge, {
      class: 'QCascader',
      label: 'QCascader'
    })
  }
}
