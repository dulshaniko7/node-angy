
    var today = new  Date();
    var hourNow = today.getHours();
    var greeting;
    if(today.getHours()>18){
        greeting = "Good Evening";

    }
    else  if(today.getHours()<12){
        greeting= "Good Morning ";
    }

    else if(today.getHours()<=18){
        greeting = "Good Afternoon ";
    }
var g = document.getElementById('greeting');
    g.textContent = greeting+ " Visitor...";


