// Credit: https://www.youtube.com/watch?v=-X2hP9pOVss

const app = new Vue({
    el: '#app',
    data: {
        title: 'Sample Vue.JS ToDo List',
        newToDo: '',
        todos: []
    },
    methods: {
        addToDo() {
            this.todos.push({
                title: this.newToDo,
                done: false
            });
            this.newToDo = '';
        },
        removeToDo(todo) {
            const toDoIndex = this.todos.indexOf(todo);
            this.todos.splice(toDoIndex, 1);
        },
        allDone() {
            this.todos.forEach(todo => {
                todo.done = true;
            });
        }
    }
});