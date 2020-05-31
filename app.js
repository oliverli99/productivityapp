function addTask(){ 
  //grab input text  
  var input = document.getElementById("input").value; 

  //grab list element 
  var ul = document.getElementById("list");
  //creating list element
  var li = document.createElement("LI");
  //append the input text to list element 
  li.appendChild(document.createTextNode(input));
  //append list item to unordered list
  ul.appendChild(li);  

  //set input field to null 
  document.getElementById("input").value = "";
  
  // set the li objects with attribute onclick. give ability to be removed. 
  li.onclick = function(e){
    e.target.parentElement.removeChild(e.target);
  };
}

document.body.onkeyup = function(e) { 
  if(e.keyCode == 13){ 
    addTask(); 
  }


}; 
