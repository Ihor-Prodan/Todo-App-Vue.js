import { createPinia } from 'pinia';
import { localStoragePlugin } from './components/pligins/localStoregePlugins';

const pinia = createPinia();

pinia.use(localStoragePlugin);

export default pinia;
