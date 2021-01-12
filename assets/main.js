 const toDoList = {
    tasks: {},
    addTask: function (text) {
        const id = Date.now();
        this.tasks[id] = {
            text: text,
            status: false
        } 
        return id;
    },
    deleteTask: function(id) {
        delete this.tasks[id];
    },
    renameTask: function(id, text) {
        this.tasks[id].text = text;
    },
    changeTaskStatus: function(id, status) {
        this.tasks[id].status = status;
    }
    
}

console.log('добавление таски');

let taskId = toDoList.addTask('go home');

console.log(toDoList.tasks);

console.log('изменение таски');
toDoList.renameTask(taskId, 'not go home')
console.log(toDoList.tasks);


console.log('изменние статуса таски');
toDoList.changeTaskStatus(taskId, true);
console.log(toDoList.tasks);


//console.log('удаление таски');
//toDoList.deleteTask(taskId);
//console.log(toDoList.tasks);
Object.seal(toDoList);