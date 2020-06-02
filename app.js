const UNCHECK = "far fa-circle";
const CHECK = "fas fa-check-circle";
const LINE_THROUGH = "lineThrough";
const list = document.getElementById("list"); 
const input = document.getElementById("input"); 


var data = []
var id = 0; 


function addToDo(toDo, id, done, trash) { 

  // true: false 
  const DONE = done ? CHECK : UNCHECK; 
  const LINE = done ? LINE_THROUGH : ""; 
  if(trash == true){ 
    return; 
  }

  const item = `
            <li class = "item"> 
                <i class= "${DONE}" job = "complete" id = "${id}"></i>
                <p class = "${LINE}"> ${toDo} </p>
                <i class="fas fa-trash job = "delete" id = "${id}"></i>
            </li>
  `;
  const position = "beforeend"; 

  list.insertAdjacentHTML(position, item); 
  document.getElementById("input").value = ""
}

document.addEventListener("keyup", function(event) { 
  toDo = document.getElementById("input").value; 
  if(event.keyCode == 13){ 
    addToDo(toDo)

    data.push({
      name: toDo, 
      id: id, 

      // user just entered the to do, make them both false. 
      done: false,
      trash: false
    });
    

    // increment id 
    id++; 

  }

})


function completeToDo(element){ 
  element.classList.toggle(UNCHECK); 
  element.classList.toggle(CHECK); 
  element.parentNode.qu


}

 


// addToDo("stuff", 1, false, false); 



// function addTask(){ 
//   //grab input text  
//   var input = document.getElementById("input").value; 


  



//   //grab list element 
//   var ul = document.getElementById("list");
//   //creating list element
//   var li = document.createElement("LI");
//   //append the input text to list element 
//   li.appendChild(document.createTextNode(input));
//   //append list item to unordered list
//   ul.appendChild(li);  

//   //set input field to null 
//   document.getElementById("input").value = "";
  
//   // set the li objects with attribute onclick. give ability to be removed. 
//   li.onclick = function(e){
//     e.target.parentElement.removeChild(e.target);
//   };
// }

// document.body.onkeyup = function(e) { 
//   if(e.keyCode == 13){ 
//     addTask(); 
//   }


// }; 
