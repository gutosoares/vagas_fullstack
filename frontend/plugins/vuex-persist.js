import VuexPersistence from 'vuex-persist'
import { state } from '~/store/index'

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      ...state
    }).plugin(store)
  })
}
