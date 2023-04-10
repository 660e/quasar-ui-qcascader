import { boot } from 'quasar/wrappers';
import VuePlugin from '@660e/quasar-ui-qcascader';

export default boot(({ app }) => {
  app.use(VuePlugin);
});
