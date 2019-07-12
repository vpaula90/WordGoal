$(document).ready(function () {
    $("#searchButton").on("click", function () {
        var homeroom = $("#homeroom").val();
        console.log(homeroom);
        // $.get("/showData/dataInfo", function (res) {
            //code above is from eddy with the /dataInfo
        $.get("/showData", function (res) {
            // else if (dataInfo[i].word_count < 100000 && dataInfo[i].word_count > 50000){
//     console.log("students who  almnost read ",  dataInfo[i]);
            // var dataInfo = res.here;
            // // for (var i = 0; i < dataInfo.length; i++) {
            // //     // console.log("finally", dataInfo[i]);




        });

    });

});

// else if (dataInfo[i].word_count < 100000 && dataInfo[i].word_count > 50000){
//     console.log("students who  almnost read ",  dataInfo[i]);



// }


