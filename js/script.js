let m = new Date();
let month = m.getMonth();
let days;
switch (month) {
    case 0:
        month = "January"
        break;
    case 1:
        month = "February"
        break;
    case 2:
        month = "March"
        break;
    case 3:
        month = "April"
        break;
    case 4:
        month = "May"
        break;
    case 5:
        month = "June"
        break;
    case 6:
        month = "July"
        break;
    case 7:
        month = "August"
        break;
    case 8:
        month = "September"
        break;
    case 9:
        month = "October"
        break;
    case 10:
        month = "November"
        break;
    case 11:
        month = "December"
        break;
}
function whatMonth() {
    if (month == "January") {
        days = 31;
    }
    if(month == "February") {
        days = 28;
    }
    if(month == "March") {
        days = 31;
    }
    if(month == "April") {
        days = 30;
    }
    if(month == "May") {
        days = 31;
    }
    if(month == "June") {
        days = 30;
    }
    if(month == "July") {
        days = 31;
    }
    if(month == "August") {
        days = 31;
    }
    if(month == "September") {
        days = 30;
    }
    if(month == "October") {
        days = 31;
    }
    if(month == "November") {
        days = 30;
    }
    if(month == "December") {
        days = 31;
    }
}
function setNewCalibration(calibrationName, calibrationDate, calibrationMonth, calibrationTime) {
    document.getElementById("calibrations").innerHTML += "<div class='calibration'><h4>" + calibrationTime + "," + calibrationDate + "" + calibrationMonth + "</h4><br/><p class = 'calib'>" + calibrationName + "</p></div>";
}
// let db;
// let dbReq = indexedDB.open('myDB', 1);
// dbReq.onupgradeneeded = (event) => {
//   // Зададим переменной db ссылку на базу данных
//   db = event.target.result;
//   // Создадим хранилище объектов с именем notes.
//   let notes = db.createObjectStore('notes', {autoIncrement: true});
// }
// dbReq.onsuccess = (event) => {
//   db = event.target.result;
// }
// dbReq.onerror = (event) => {
//   alert('error opening database ' + event.target.errorCode);
// }
// let tx = db.transaction(['notes'], 'readwrite');
// let store = tx.objectStore('notes');
// let note = {text: message, timestamp: Date.now()};
// store.add(note);
// tx.oncomplete = () => { console.log('stored note!') }
// tx.onerror = (event) => {
//   alert('error storing note ' + event.target.errorCode);
// }