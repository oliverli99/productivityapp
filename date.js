
function convertDay(day){ 
  if(day == 0){ 
    return "Sunday"; 
  }
  else if(day == 1){ 
    return "Monday"; 
  }
  else if(day == 2){ 
    return "Tuesday"; 
  }
  else if(day == 3){ 
    return "Wednesday"; 
  }
  else if(day == 4){ 
    return "Thursday"; 
  }
  else if(day == 5){ 
    return "Friday"; 
  }
  else if(day == 6){ 
    return "Saturday"; 
  }
}


function update(){ 
  var d = new Date(); 
  var day = d.getDay(); 
  day = convertDay(day);   
  

  var time = new Date();
  time = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}); 
  
  document.getElementById("date").innerHTML = day + ", " + String(d.getMonth() + 1) + "/" + d.getDate();  
  document.getElementById("time").innerHTML = time; 
  
  
  }
  
  setInterval(update, 50); 


