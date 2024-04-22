import { EffectScope, InjectionKey, Plugin, effectScope, inject } from 'vue'

export function defineStore<R>(fn: () => R) {
  function useStore() {
    const globalEffect = inject(effectKey)!
    const stores = inject(storesMapKey)!

    if (!stores.has(fn)) {
      const store = globalEffect
        .run(() =>
          // this one is nested in the global, so we don't pass true
          effectScope(),
        )!
        .run(() => fn())!

      stores.set(fn, store)
    }

    return stores.get(fn) as R
  }

  return useStore
}

const effectKey = Symbol('my-pinia-effect') as InjectionKey<EffectScope>
const storesMapKey = Symbol('stores-map') as InjectionKey<WeakMap<() => unknown, unknown>>

// Keep this exported
export const appPlugin: Plugin = app => {
  app.provide(effectKey, effectScope(true))
  app.provide(storesMapKey, new WeakMap())
}
