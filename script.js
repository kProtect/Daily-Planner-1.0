// Display currentday for the planner
var currentDay = moment().format("dddd MMMM Do")
$("#currentDay").text(currentDay)

$(document).ready(function () {
    $(".savebutton").on("click", function() {
        var text = $(this).siblings(".todos").val()
        var time = $(this).parent().attr("id")

        localStorage.setItem(time,text)
    })

    function timeblockColor() {
        var currentime = moment().hour()
        
        $(".time-slot").each(function () {
            var timeSlot = parseInt($(this).attr("id").split("time")[1])

            if (timeSlot < currentime) {
                $('.row').css({"background-color" : "gray" })
            } else if (timeSlot === timeNow) {
                $('.row').css({"background-color" : "red" })
            }
            else {
                $('.row').css({"background-color" : "green" })

            }
        })
    }
    $("#time9 .todos").val(localStorage.getItem("time9"));
    $("#time10 .todos").val(localStorage.getItem("time10"));
    $("#time11 .todos").val(localStorage.getItem("time11"));
    $("#time12 .todos").val(localStorage.getItem("time12"));
    $("#time1 .todos").val(localStorage.getItem("time1"));
    $("#time2 .todos").val(localStorage.getItem("time2"));
    $("#time3 .todos").val(localStorage.getItem("time3"));
    $("#time4 .todos").val(localStorage.getItem("time4"));
    $("#time5 .todos").val(localStorage.getItem("time5"));


    timeblockColor()
})
