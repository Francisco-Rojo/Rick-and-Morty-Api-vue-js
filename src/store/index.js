import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [], //almacenar todos los personajes
    charactersFilter: [] //consultas & filtros para nuestro proyecto
  },
  getters: {
  },
  mutations: {
    setCharacters(state, payload){
      state.characters = payload
    },
    setCharactersFilter(state, payload){
      state.charactersFilter = payload
    }
  },
  actions: {
    async getCharacters({commit}){
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json();
        console.log(data);
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)

      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
