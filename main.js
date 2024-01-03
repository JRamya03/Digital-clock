function updateTime(){
    
    //get current date
    let today = new Date();
    //console.log(today);
    
    

    //get dd, mm, yy, hh, mm, ss, day

    //date
    let currentDate= today.getDate();
    let currentDateElement= document.getElementById('dd')
    currentDateElement.innerText = currentDate
   //console.log(currentDateElement.innerText = currentDate);

    // mm
    //let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','November','Dec']
    let currentMonth1 = today.getMonth();
    let currentMonth2 = (currentMonth1 + 1);
    let currentMonthElement = document.getElementById('mm');
    currentMonthElement.innerText = currentMonth2;
   // console.log(currentMonthElement.innerText = currentMonth2);


    //yy
    let years1 = today.getFullYear()
    let years2 = (years1%2000) ;
    let currentyearElement = document.getElementById('yy');
    currentyearElement.innerText = years2;
   // console.log(currentyearElement.innerText = years2);

    // hh 
    let hours1 = today.getHours()
    let hours2=hours1%12
    let currentHourElement = document.getElementById('hh')
    currentHourElement.innerText = hours2 ;
   //console.log(currentHourElement.innerText);

    //mm
    let minutes= today.getMinutes()
    let currentMinuteElement = document.getElementById('min')
    currentMinuteElement.innerText = minutes ;
    //console.log(currentMinuteElement.innerText = minutes)

    //sec 
    let sec=today.getSeconds();
    let currentSecondsElement = document.getElementById('ss')
    currentSecondsElement.innerText = sec
    //console.log(currentSecondsElement.innerText = sec);

    //day
    //let days = ['sun','mon','tue','Wed','Thu','Fri','Sat']
    let currentDay1 = today.getDay();
    //let currentDay2=days[currentDay1]
    //console.log(days[currentDay1])
   currentDateElement = document.getElementsByClassName('selected')[0];
   currentDateElement.classList.remove('selected')
   
   currentDateElement = document.getElementsByTagName('span')[currentDay1];
   currentDateElement.classList.add('selected');
   //console.log(currentDateElement)

   //am or pm 

    let currentShowAM = document.getElementById('am')
    let currentShowPM = document.getElementById('pm')
    //console.log(currentShow)
    currentShowAM.classList.remove('selected')
     if(hours1>=12){
     currentShowPM.classList.add('selected')
     }
     else{
      currentShowAM.classList.add('selected')
     }
    
    

   //console.log(currentShow);

    //get required elements

    //convert railway time to normal time (hh)

    //update dd, mm, yy, hh, mm, ss

    //update day

    //update am / pm 
    

  //console.log(new Date());
 }

setInterval(updateTime, 1000);
