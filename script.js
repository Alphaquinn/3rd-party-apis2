$(document).ready(function() {
    let nowMoment=moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = nowMoment;
    let currentHour = moment ().format("HH");

    $("#clearfieldsBtn").click(function(event){
        event.preventDefault;
        $("textarea").val("");
        localStorage.clear(;)
    });



    








}