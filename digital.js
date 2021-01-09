

    function timeInterval()
    {
        let d ;
        d = new Date() ; 
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds() ;
        var millsecond = d.getMilliseconds();
        var date = d.getDate();
        var month = d.getMonth();
        var year = d.getFullYear()
        var period = "AM";

        if(hours >= 12)
        {

            period = "PM" ;
        }
        if(hours > 12)
        {
            hours = hours  - 12;

        }

       
        document.getElementById("date").innerHTML = "Time : "+hours + " : " + minutes + " : " + seconds + " : " + 
        millsecond + " " + period + " " +"<br> Date :"+ date + "-" + month+1 + "-"+year;


    }
    setInterval(timeInterval,1000);


