import * as dataService from '../services/dataServices'
export default ({
  namespaced: true,
  state: {
    bike: {},
    search: null,
  },
  mutations: {
    bikeCommit(state, resp) {
      state.bike = resp;
    },
    searchCommit(state, payload) {
      state.search = payload;
    }
  },
  getters: {
    getAllData(state) {
      if (state.search == null) {
        return state.bike;
      } else {
        return state.bike.filter(item => item.name.toLowerCase().indexOf(state.search.toLowerCase()) > -1)
      }
    },
    getSpesificData(state) {
      return state.bike.filter(item => item.name.toLowerCase().indexOf(state.search.toLowerCase()) > -1)
    }
  },
  actions: {
    async getAllDataAction(context) {
      var resp = await dataService.getData();
      context.commit("bikeCommit", resp);

    },
    async search(context, payload) {
      console.log(payload);
      context.commit("searchCommit", payload);
    }
  }
})