import './scss/style.scss';
import { format } from 'date-fns';
const uuidv4 = require('uuid/v4');

var titleInput = document.querySelector('#title-input');
var descriptionInput = document.querySelector('#description-input');
var timeInput = document.querySelector('#time-input');
var ownerInput = document.querySelector('#owner-input');
var taskTable = document.querySelector('#task-table');
var form = document.querySelector('#form');
var date = format(Date.now(), 'DD:MM:YYYY HH:mm:ss');
var status = { nowe: 'nowe', w_trakcie: 'w_trakcie', wykonane: 'wykonane' };
var selectedRow = null;

var data = localStorage.getItem('object');
var saveItem = JSON.parse(data);

// for (var i = 0; i < localStorage.length; i++) {
//    taskTable.querySelector('tbody')[0];
//    var newRow = taskTable.insertRow();
//    var cell = newRow.insertCell(i);
//    cell[i].innerHTML = data[i];
// }

// (function init(formData) {
//    JSON.parse(localStorage.getItem('object', formData));
//    insertNewRecord(formData);
// })();

function insertNewRecord(data) {
   taskTable.querySelector('tbody')[0];
   var newRow = taskTable.insertRow();
   var cell1 = newRow.insertCell(0);
   cell1.innerHTML = data.id;
   var cell2 = newRow.insertCell(1);
   cell2.innerHTML = data.title;
   var cell3 = newRow.insertCell(2);
   cell3.innerHTML = data.description;
   var cell4 = newRow.insertCell(3);
   cell4.innerHTML = data.status;
   var cell5 = newRow.insertCell(4);
   cell5.innerHTML = data.date;
   var cell6 = newRow.insertCell(5);
   cell6.innerHTML = data.time;
   var cell7 = newRow.insertCell(6);
   cell7.innerHTML = data.owner;
   var cell8 = newRow.insertCell(7);
   cell8.innerHTML = '<button id="status-btn">Status</button>';
}

// var statusBtn = document.querySelector('#status-btn');
// statusBtn.addEventListener('click', function(e) {
//    e.preventDefault();
//    window.confirm('Task was done ?');
//    var doneStatus = data.status[2];
//    cell4.innerHTML = doneStatus;
// });

function readFormData() {
   var formData = {};
   formData['id'] = uuidv4();
   formData['title'] = titleInput.value;
   formData['description'] = descriptionInput.value;
   formData['status'] = status.nowe;
   formData['date'] = date;
   formData['time'] = timeInput.value;
   formData['owner'] = ownerInput.value;

   return formData;
}

form.addEventListener('submit', function(e) {
   e.preventDefault();
   var formData = readFormData();
   localStorage.setItem('object', JSON.stringify(formData));
   if (selectedRow == null) insertNewRecord(formData);
});

// console.log(JSON.parse(localStorage.getItem(formData)));
