let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function (e) {

  let addTitle = document.getElementById("note-title");
  let addTxt = document.getElementById("note-text");

  if (addTitle.value == "" || addTxt.value == "") {
    return alert("Please add Note Title and Details")
  }

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="note">
            <p class="note-counter">Note ${index + 1}</p>
            <h3 class="note-title"> ${element.title} </h3>
            <p class="note-text"> ${element.text}</p>
            <button id="${index}"onclick="editNote(this.id)" class="note-btn edit-btn">
            
            <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="19.93px"
          height="19.93px"
          viewBox="0 0 494.936 494.936"
          style="enable-background: new 0 0 494.936 494.936"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157
			c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21
			s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741
			c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"
              />
              <path
                d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069
                c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963
                c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692
                C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107
                l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005
                c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"
              />
            </g>
          </g>
        </svg>
            
            </button>

            <button id="${index}"onclick="deleteNote(this.id)" class="note-btn">
            
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="19.93px" height="19.93px" viewBox="0 0 24.000000 24.000000"
            preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path d="M78 213 c-54 -9 -27 -23 42 -23 40 0 70 4 70 10 0 6 -6 10 -14 10 -7
              0 -26 2 -42 4 -16 2 -41 2 -56 -1z"/>
              <path d="M52 98 l3 -73 65 0 65 0 3 73 3 72 -71 0 -71 0 3 -72z m81 31 c18 14
              30 2 16 -16 -8 -9 -8 -17 0 -26 14 -18 2 -30 -16 -16 -9 8 -17 8 -26 0 -18
              -14 -30 -2 -16 16 8 9 8 17 0 26 -14 18 -2 30 16 16 9 -8 17 -8 26 0z"/>
              </g>
            </svg>
            
            </button>

        </div>
            `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `No Notes Yet! Add a note using the form above.`;
  }
}


function deleteNote(index) {
 
  let confirmDel = confirm("Delete this note?");
  if (confirmDel == true) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
  }

}


function editNote(index) {
  let notes = localStorage.getItem("notes");
  let addTitle = document.getElementById("note-title");
  let addTxt = document.getElementById("note-text");

  if (addTitle.value !== "" || addTxt.value !== "") {
    return alert("Please clear the form before editing a note")
  }

  let confirmEdit = confirm("Edit this note?");
  if (confirmEdit == true) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
  }

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  console.log(notesObj);

  notesObj.findIndex((element, index) => {
    addTitle.value = element.title;
    addTxt.value = element.text;
  })
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


showNotes();