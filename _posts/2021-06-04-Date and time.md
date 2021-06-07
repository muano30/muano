---
Layout: 
Title: "Date and time."
date: "2021-06-04"
---

# Introduction.

On the todo list i wanted to add the current Date and time, I want the date to show in words but not numbers like "June 07" not 2021-06-07" this is somethig i've seen and wondering how it can be done.

# Body.

## Explanation.

This is what i have done up to this point, but nothing is working yet.

function renderTime(){

    let mydate = new Date();

    let year = mydate.getYear();

    if(year < 1000){

        year += 1900;
    }

    let day = mydate.getDay();

    let month = mydate.getMonth();

    let daym = mydate.getDate();

    let dayarray = new Array("Sunday","Monday","Tuesday","Wednesdsy","Thursdsy","Friday","Saturday");

    let montharray = new Array("January","February","March","April","May","June","July","August","September",

    "October","November","December");


    let currentTime = new Date();

    let h = currentTime.getHours();

    let m = currentTime.getMinutes();

    let m = currentTime.getSeconds();

    if(h == 24){

        h = 0;

    }else if(h > 12){
        
        h = h - 0;
    }
    
    if(h < 10){

        h = "0" + h;
    }

    if(m < 10){

        m = "0" + m;
    }

    if(s < 10){

        s ="0" + s;
    }

    let date = document.getElementById("date");

    date.textContent = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;
    
    date.innerHTML = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;

    setTimeout("renderTime()", 1000);
}

renderTime();