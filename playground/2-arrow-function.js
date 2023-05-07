const tasks = {

    tasks: [
        {
            text: 'Some text',
            completed: false
        },
        {
            text: 'Some text2',
            completed: true
        },
        {
            text: 'Some text1',
            completed: true
        }
    ],
    getTasksToDo() {
        const toDoTasks = this.tasks.filter((task) => {
            return !task.completed
        })
        return toDoTasks;
    }
}

console.log(tasks.getTasksToDo())