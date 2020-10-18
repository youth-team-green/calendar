document.getElementById("btn").onclick = function(){add("date", "time", n)};
let n = document.getElementById("text").value;
let data = [];
function add(date, time, text) {
    data.push({date: "date", time: "time", text: "text"})
}
console.log("data is: ", data);