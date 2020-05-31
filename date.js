var d = new Date(); 
var day = d.getDay(); 

function convertDay(){ 
  if(day == 0){ 
    day = "Sunday"; 
  }
  else if(day == 1){ 
    day = "Monday"; 
  }
  else if(day == 2){ 
    day = "Tuesday"; 
  }
  else if(day == 3){ 
    day = "Wednesday"; 
  }
  else if(day == 4){ 
    day = "Thursday"; 
  }
  else if(day == 5){ 
    day = "Friday"; 
  }
  else if(day == 6){ 
    day = "Saturday"; 
  }
}

function convertMinutes(){ 
  if (minutes == 0 || minutes == 1 || minutes == 2 || minutes == 3 || minutes == 4 || minutes == 5 || minutes == 6 || minutes == 7 || minutes == 8 || minutes == 9){ 
    minutes = String("0" + minutes);
  }
  else { 
    return; 
  }
}

convertDay(); 
var minutes = d.getMinutes(); 
convertMinutes(); 

var amOrPm = (d.getHours() < 12) ? "AM" : "PM";
var hour = (d.getHours() < 12) ? d.getHours() : d.getHours() - 12;
var time = hour + ':' + minutes + ' ' + amOrPm;

document.getElementById("date").innerHTML = day + ", " + String(d.getMonth() + 1) + "/" + d.getDate();  
document.getElementById("time").innerHTML = time; 