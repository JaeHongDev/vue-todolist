import {createStore} from "vuex";

const store = createStore({
    state(){
        return {
            todos:[]
        }
    },
    mutations:{
        addTodo(state,content){
            console.log(content);
            state.todos.push(content);
        }
    }
})

export default store;
