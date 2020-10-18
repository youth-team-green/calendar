let data = [];
function addNewTask(date, time, text) {
    data.push({ date: date, time: time, text: text });
    console.log("data is: ", data);
}
document.getElementById("addTaskBtn").onclick = function () {
    let date = document.getElementById("newTaskDate").value;
    let time = document.getElementById("newTaskTime").value;
    let text = document.getElementById("newTaskText").value;

    addNewTask(date, time, text);
};