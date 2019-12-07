import Vue from 'vue'
var obj = {
  count: 0,
  name: '李四'
}
export let store = Vue.observable({obj})
export let mutations = {
  setCount (obj) {
    store.obj = obj;
  },
  // changeName (obj) {
  //   store.obj = obj
  // }

}

