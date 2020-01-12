/* Todo.store.js */

// State object
const state = {
    items: [
        {
            description: "Go to park"
        },
        {
            description: "Buy fruits"
        }
    ]
}

// Getter functions
const getters = {
    items: state => state.items,
}

// Actions 
const actions = {
    updateItems({ commit }, payload) {
        return new Promise((resolve) => {
            commit('UPDATE', payload);
            resolve();
        })
    },
    removeItems({ commit }, payload) {
        return new Promise((resolve) => {
            commit('REMOVE', payload);
            resolve();
        })
    },
}

// Mutations
const mutations = {
    UPDATE(state, data) {
        state.items = [ ...state.items , data ];
    },
    REMOVE(state, index) {
        const items = state.items.filter((item, i) => i !== index)
        state.items = items;
    },
}
export default {
    state,
    getters,
    actions,
    mutations
}