function currentTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
   if (h > 12) { 
        h= h-12;
       var z = "PM"; 
    } 
   else
    {
      var z= "AM";
    }
  hour = cTime(h);
  min = cTime(m);
  sec = cTime(s);
 document.getElementById("clock").innerText = hour + " : " + min + " : " + sec
   +" "+ z;
   setTimeout(function(){ currentTime() }, 1000); 
}

function cTime(i) {
  if (i < 10) {
    i= "0" + i;
    return i;
  }
  else {
    return i;
  }
}
currentTime();