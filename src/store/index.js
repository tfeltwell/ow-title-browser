import { createStore } from 'vuex';

export default createStore({
  state: {
    titleList: [],
  },
  getters: {
    isDataLoaded (state) {
      return state.titleList.length ? true : false;
    },
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
      if (!state.titleList.length) {
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
    updateData(state, data) {
      state.titleList = data;
    }
  },
  actions: {
    loadData (context) {
      const options = {method: 'GET'};
      console.log('loading data in vuex');
      return fetch('https://owfetechtask.blob.core.windows.net/titledata/testdata.json', options)
        .then(response => response.json())
        .then(data => {
          context.commit("updateData", data);
        });
    }
  }
})