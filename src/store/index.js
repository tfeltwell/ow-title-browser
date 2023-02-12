import { createStore } from 'vuex';

export default createStore({
  state: {
    titleList: [],
  },
  getters: {
    getAllTitles (state) {
      return state.titleList;
    },
    getTitleById: (state) => (id) => {
      if (id >= state.titleList.length) return -1
      return state.titleList[id]
    },
    getTitleByTitleNumber: (state) => (title_number) => {
      // Assuming title numbers are unique, couldn't see a mention on the gov.uk site that they aren't. 
      // Though might be overlap in other countries e.g. Scotland.
      // return state.titleList[0];
      if (!state.titleList) {
        console.log("no titleList")
        return {}
      } 
      console.log('fetching titleNumber', title_number);
      const res = state.titleList.find(title => title['Title Number'] === title_number)
      console.log('res', res);
      return res;
      // return state.titleList.find(title => title['Title Number'] === title_number)
    },
  },
  mutations: {
    initTitles (state, payload) {
      state.titleList = payload;
    }
  },
  actions: {

  }
})