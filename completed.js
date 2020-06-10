//@ts-check
var trashlist = document.getElementById("trashList"); 

var storage = localStorage.getItem("TODO"); 

if (storage){ 
  //JSON string to javascript object
  var data = JSON.parse(storage); 
  //set id to the last one in the list 
  var id = data.length;
  loadTrashCount(data);
  loadTrashList(data); 
  loadCompletionTimes(data);  

}

//if empty / first time user
else{ 
  
}


function loadTrashCount(array){ 
  var counter = 0; 
  array.forEach(function(item){
    if (item.trash == true){  
      counter++;
    }
  });
  document.getElementById("trashCount").innerHTML = "Total # Items Completed: " + counter + " items";

}



function loadTrashList(array){ 
  array.forEach(function(item){ 
    if(item.trash == true){ 
      addTrashItem(item.name);
    } 
  }); 
  
}


function addTrashItem(toDo) { 

  const item = `
            <li class = "item"> 
                <p> ${toDo} </p>
            </li>
  `;

  const position = "beforeend"; 

  trashlist.insertAdjacentHTML(position, item); 
}




function loadCompletionTimes(array){ 
  var totalCompletionTime = 0; 
  var avgCompletionTime = 0; 


  array.forEach(function(item){ 
    if(item.finish !== 0){ 
      var time = item.finish-item.init;
      totalCompletionTime += time;   
      
    } 
  }); 
  
  avgCompletionTime = Math.round(totalCompletionTime/array.length/1000); 

  document.getElementById("completionTime").innerHTML = "Average Time of Completion: " + String(avgCompletionTime); 

} 