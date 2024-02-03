
function Title(t1) 
{ 
  this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
  return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

var fullName = "Maitree Gawande";
var nuid = "002727522";

// Function to display full name and NUID on page load
function displayInfo() {
    
  var paragraph = document.createElement("p");
  paragraph.textContent = "Full Name: " + fullName + "\nNUID: " + nuid;
  document.body.appendChild(paragraph);
}
window.onload = displayInfo;

  const table = document.getElementById("myTable");
  let countBoxPresent = 0;
  const checkRows = table.getElementsByTagName("input");
  hideAndShow();

function hideAndShow(){
  var count=0;
  let submitBtn = document.getElementById("button");
  for(var i = 0; i < checkRows.length; i++){
    var row = checkRows[i].parentNode.parentNode;
    
    if(!checkRows[i].checked){
      count++;
      row.querySelectorAll("td")[8].classList.add("columnHide");
      row.querySelectorAll("td")[9].classList.add("columnHide");
    }

    if(checkRows.length === count){

    submitBtn.style.backgroundColor = "gray";
    submitBtn.style.border = "";
    submitBtn.style.cursor = "initial";
    submitBtn.disabled = true;
      document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("columnHide");
      document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("columnHide");
    }
  }
}


selectRow();

let boolean = true; 
let mainRetoric = true;  //boolean values

function rowTwo(r) {  
  const row = r.parentNode.parentNode;
  const descRow = row.nextSibling.nextSibling; 
  if (boolean) {
    descRow.style.display = "table-cell";
    boolean = false;
  } else {          
    descRow.style.display = "none";
    boolean = true;
  }
}

function row(r) {
  const i = r.parentNode.parentNode.rowIndex;
  const row = r.parentNode.parentNode;
  const descRow = row.nextSibling; 
  if (mainRetoric) {
    descRow.style.display = "table-cell";
    mainRetoric = false;
  } else {          
    descRow.style.display = "none";
    mainRetoric = true;
  }
}

function deleteRow(r, n) {
  const i = r.parentNode.parentNode.rowIndex;
  const secondData = table.rows[i].cells[1].textContent;
  document.getElementById("myTable").deleteRow(i);
  document.getElementById("myTable").deleteRow(i);
  alert(`${secondData} Record Deleted!`);
  hideAndShow();
  selectRow();
}

function updateDetails(val,index){
  
    alert(`${val} Data Updated Successfully`);
    selectRow(); // Refresh the selected rows if needed
  
}
var deleteModal = document.createElement('div');
deleteModal.id = 'deleteModal';
deleteModal.classList.add('modal');
document.body.appendChild(deleteModal);
function editRow(r) {

  const i = r.parentNode.parentNode.rowIndex;
  const studentData = table.rows[i].cells[1].textContent;
  const advData = table.rows[i].cells[2].textContent;
  const statData = table.rows[i].cells[3].textContent;
  const semData = table.rows[i].cells[4].textContent;
  const typeData = table.rows[i].cells[5].textContent;
  const budData = table.rows[i].cells[6].textContent;
  const perData = table.rows[i].cells[7].textContent;


  // Set the inner HTML of the modal
  deleteModal.innerHTML = `
    <span onclick="document.getElementById('deleteModal').style.display='none'" class="close" title="Close Modal">×</span>
    <form class="modal-content" action="/action_page.php">
      <div class="container">
        <h1>Edit details of ${studentData}</h1>
        <p>Details:- Name:${studentData}<br>Advisor: ${advData}<br>Status: ${statData}<br>Semester: ${semData}<br>
        Type: ${typeData}<br>Budget: ${budData}<br>Percentage: ${perData}</p>
        
        <div class="clearfix">
          <button type="button" onclick="updateDetails('${studentData}','${i}'); document.getElementById('deleteModal').style.display='none'" class="cancelbtn">Update</button>
          <button type="button" onclick="document.getElementById('deleteModal').style.display='none'" class="deletebtn">Cancel</button>
        </div>
      </div>
    </form>
  `;

  deleteModal.style.display = 'block';

  selectRow();
}

function addRow() {
  const row = table.insertRow(table.rows.length);

  const rowCount = table.rows.length;
  const checkboxNew = row.insertCell(0);
  const student = row.insertCell(1);
  const advisor = row.insertCell(2);
  const awardStatus = row.insertCell(3);
  const semester = row.insertCell(4);
  const type = row.insertCell(5);
  const budget = row.insertCell(6);
  const percentage = row.insertCell(7);
  const deleteBtn = row.insertCell(8);
  const editBtn = row.insertCell(9);

  checkboxNew.innerHTML = `<td><input type="checkbox" /><br /><br /><img onClick="row(this)" src="down.png" width="25px" /></td>`;
  //const secondColumnData = table.rows[i].cells[1].textContent;
  student.innerHTML = `Student ${Math.ceil(rowCount/ 2)}`;
  advisor.innerHTML = `Teacher ${Math.ceil(rowCount/ 2)}`;
  awardStatus.innerHTML = "Approved";
  semester.innerHTML = "Fall";
  type.innerHTML = " TA ";
  budget.innerHTML = Math.ceil(Math.random() * 100000);
  percentage.innerHTML = "100%";

  try {
    setTimeout(() => {alert(`Student ${Math.ceil(rowCount/ 2)} Record added successfully`)}, 100);
  } catch (error) {
    alert("Something went wrong! Student not added.");
  }
  
  selectRow();

  nextRowAddition();
  hideAndShow();
}

window.addEventListener("click", () => {

  let submitBtn = document.getElementById("button");

  if (countBoxPresent > 0) {    
    submitBtn.style.backgroundColor = "orange";
    submitBtn.style.border = "2px solid orange";
    submitBtn.style.cursor = "pointer";
    submitBtn.disabled = false;
  } else {
    submitBtn.style.backgroundColor = "gray";
    submitBtn.style.border = "";
    submitBtn.style.cursor = "initial";
    submitBtn.disabled = true;
  }
}
)

function nextRowAddition() {
  const row = table.insertRow(table.rows.length);

  row.classList.add("dropDownTextArea")
  
  row.innerHTML = 
      '<td colspan="10"> \
        Advisor:<br /><br /> \
        Award Details<br /> \
        Summer 1-2014(TA)<br /> \
        Budget Number: <br /> \
        Tuition Number: <br /> \
        Comments:<br /><br /><br /> \
        Award Status:<br /><br /><br /> \
      </td>';

  selectRow();
}

var rowname;
// selectRow();

function selectRow() {
  for (let i=0; i<checkRows.length; i++) {
      const row = checkRows[i].parentNode.parentNode;
      rowname=checkRows;
      
      checkRows[i].addEventListener("click", () => {
        if (checkRows[i].checked) {
          countBoxPresent++;
          row.style.backgroundColor = "yellow";
          row.lastElementChild.innerHTML = "<td><button onClick='editRow(this)'>Edit Row</button></td>";
          row.lastElementChild.previousElementSibling.innerHTML = "<td><button onClick='deleteRow(this)'>Delete Row</button></td>";
          document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.remove("columnHide");
          document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.remove("columnHide");
          row.querySelectorAll("td")[8].classList.remove("columnHide");
          row.querySelectorAll("td")[9].classList.remove("columnHide");
        } else {
          countBoxPresent--;
          row.style.backgroundColor = "white";
          row.lastElementChild.innerHTML = "";
          row.lastElementChild.previousElementSibling.innerHTML = "";
          document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("columnHide");
          document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("columnHide");
          row.querySelectorAll("td")[8].classList.add("columnHide");
          row.querySelectorAll("td")[9].classList.add("columnHide");
        }
      })
  }
}
