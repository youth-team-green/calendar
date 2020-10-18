let data = [{date: "2020-09-12", text: "bla"},{date: "2020-09-18", text: "bla"}];

function addNewTask(date, time, text) {
    data.push({ date: date, time: time, text: text });
    console.log("data is: ", data);
}

document.getElementById("addTaskBtn").onclick = function () {
    
    let date = document.getElementById("newTaskDate").value;
    let time = document.getElementById("newTaskTime").value;
    let text = document.getElementById("newTaskText").value;

    if(!date){
        return false;
    }

    addNewTask(date, time, text);
    createDays();
};

var days = [];
var length = 0; 

let dayOfWeek = moment("01.09.2020").get('day')
for(var i = 0; i < dayOfWeek; i++) {
    days.push("empty");
}

for(var i = 0; i < 31; i++) {
    days.push(i + 1);
}

function createDays(){
    document.getElementById("calendar").innerHTML = "";
    days.forEach(curentDate => {
        var div = document.createElement("div");

        if(curentDate !== "empty"){
            let currentDateFilter = "2020-09-"+curentDate;

            var list = data.filter(function(el){
                return el.date == currentDateFilter;
            });
        
            var title = document.createTextNode("day: " + curentDate + " " +list.map(function(el){return el.text.slice(0, 5) + "..."}));
            div.appendChild(title);
        }
        
        
        document.getElementById("calendar").appendChild(div)
    });
}

createDays();