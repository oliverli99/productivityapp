const UNCHECK = "fa-circle";
const CHECK = "fa-check-circle";
const LINE_THROUGH = "lineThrough";
const list = document.getElementById("list"); 
const input = document.getElementById("input"); 


var data, id; 


// clear local storage
// localStorage.clear(); 


var storage = localStorage.getItem("TODO"); 


//check if storage is not empty 
if (storage){ 
  //JSON string to javascript object
  data = JSON.parse(storage); 
  //set id to the last one in the list 
  id = data.length;
  loadList(data);  

}

//if empty / first time user
else{ 
  data = []
  id = 0; 

}

//takes in an array
function loadList(array){ 
  array.forEach(function(item){ 
    addToDo(item.name, item.id, item.done, item.trash); 
  }); 

}



function addToDo(toDo, id, done, trash) { 

  // true: false 
  const DONE = done ? CHECK : UNCHECK; 
  const LINE = done ? LINE_THROUGH : ""; 
  if(trash == true){ 
    return; 
  }

  const item = `
            <li class = "item"> 
                <i class = "far ${DONE}" job = "complete" id = "${id}"></i>
                <p class = "text" class = "${LINE}"> ${toDo} </p>
                <i class="fas fa-trash" job = "delete" id = "${id}"></i>
            </li>
  `;
  const position = "beforeend"; 

  list.insertAdjacentHTML(position, item); 
  document.getElementById("input").value = ""
}

document.addEventListener("keyup", function(event) { 
  toDo = document.getElementById("input").value; 
  if(event.keyCode == 13){ 

    addToDo(toDo,id,false,false); 

    data.push({
      name: toDo, 
      id: id, 

      // user just entered the to do, make them both false. 
      done: false,
      trash: false
    });
    
    //add item to local storage. overwrites previous 
    localStorage.setItem("TODO", JSON.stringify(data)); 

    // increment id 
    id++; 

  }

});





function completeToDo(element){ 
  element.classList.toggle(CHECK); 
  element.classList.toggle(UNCHECK); 
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
  data[element.id].done =  !data[element.id].done;  
  
}

function removeToDo(element){ 
  element.parentNode.parentNode.removeChild(element.parentNode); 
  data[element.id].trash = true; 
}

list.addEventListener("click", function (event){
  const element = event.target; // return clicked element inside list
  const elementJob = element.getAttribute("job"); //complete or delete
  console.log(elementJob); 
  if(elementJob == "complete"){ 
    completeToDo(element); 
  }
  else if
    (elementJob == "delete"){
      removeToDo(element); 
    }
  
  //overwrites previous
  localStorage.setItem("TODO", JSON.stringify(data)); 


}); 
