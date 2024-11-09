import { createStore } from 'vuex';
export default createStore({
    state() {
        return {
            personalDetails: {
                name: '',
                age: ''
            },
            children: []
        };
    },
    mutations: {
        setPersonalDetails(state, details) {
            state.personalDetails = details;
        },
        setChildren(state, children) {
            state.children = children;
        }
    }
});