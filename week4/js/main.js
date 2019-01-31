//var date = new Date()
//alert(date)
//console.log("today is" + date)
//var cat = date
//document.body.innerHTML = "<h1> the date is" + cat + " </h1>"
//document.body.innerHTML = "<h1> the date is " + cat.getMonth() + "/" + cat.getDate() + "/" + cat.getFullYear() + " </h1> "


//how to put this code in function called myFunction
    function myFunction(){
        var cat= new Date();
        document.body.innerHTML = "<h1> the date is " + (cat.getMonth() + 1) + "/" + cat.getDate() + "/" + cat.getFullYear() + " </h1> "
    }