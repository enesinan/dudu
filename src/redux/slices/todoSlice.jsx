 import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todos",
    initialState: [
        { id: 1, title: "todo1", completed: false },
        { id: 2, title: "todo2", completed: false },
        { id: 3, title: "todo3", completed: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            if(action.payload.title === ''){
                return
            }
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };
            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
          const index = state.findIndex((todo) => todo.id === action.payload.id);
          state[index].completed = action.payload.completed
        },
        deleteTodo: (state, action) => { 
            return state.filter((todo) => todo.id !== action.payload.id);
        },
        clearTodo: (state, action) => {
           return state.filter((todo) => {return todo.completed === false});      
        }
    },
});

export const { addTodo, toggleComplete, deleteTodo, clearTodo } = todoSlice.actions;

export default todoSlice.reducer;