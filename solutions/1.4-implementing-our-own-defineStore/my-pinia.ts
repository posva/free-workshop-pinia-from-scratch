import { UnwrapNestedRefs, effectScope, reactive } from 'vue'

const globalEffect = effectScope(true)
const stores = new WeakMap<() => unknown, unknown>()

export function defineStore<R>(fn: () => R) {
  return function useStore() {
    if (!stores.has(fn)) {
      const effect = globalEffect.run(() => effectScope())!
      const store = effect.run(() => fn())
      stores.set(fn, store)
    }

    return stores.get(fn) as R
  }
}

export function defineStoreReactive<R extends Record<any, unknown>>(fn: () => R) {
  return function useStore() {
    if (!stores.has(fn)) {
      const effect = globalEffect.run(() => effectScope())!
      const store = effect.run(() => reactive(fn()))
      stores.set(fn, store)
    }

    return stores.get(fn) as UnwrapNestedRefs<R>
  }
}
