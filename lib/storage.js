import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "tasks.v1";

// overall pattern is:
// Always fetch the current array → make a new array (next) with the changes → save it back.

// Get Tasks
export async function getTasks(){
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
}

// Save Tasks
export async function saveTasks(tasks){
    await AsyncStorage.setItem(KEY, JSON.stringify(tasks));
}

// Add Task
export async function addtask(task){
    const tasks = await getTasks();       // read current list
    const next = [...tasks, task];        // add new task at the end
    await saveTasks(next);                // save updated list
    return task;
}

// Update Task
export async function updateTask(updated){
    const tasks = await getTasks(); // get current list
    const next = tasks.map(t => (t.id === updated.id ? { ...t, ...updated } : t));
    await saveTasks(next); // save new list
    return updated;
}

// Delete Task
export async function deleteTask(id){
    const tasks = await getTasks();
    const next = tasks.filter(t => t.id !== id); // remove by id
    await saveTasks(next);
}

// Toggle Complete
export async function toggleComplete(id) {
    const tasks = await getTasks();
    const next = tasks.map(t => (t.id === id ? { ...t, completed: !t.completed,
    updatedAt: Date.now() } : t));
    await saveTasks(next);
}