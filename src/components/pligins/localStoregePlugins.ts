import type { PiniaPluginContext } from "pinia";


export function localStoragePlugin({ store }: PiniaPluginContext) {
  const storedState = localStorage.getItem(store.$id);
  if (storedState) {
    store.$patch(JSON.parse(storedState));
  }

  store.$subscribe((_mutation, state) => {
    localStorage.setItem(store.$id, JSON.stringify(state));
  });
}
