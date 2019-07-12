$(document).ready(function () {
    $("#searchButton").on("click", function () {
        var homeroom = $("#homeroom").val();
        console.log(homeroom);
        // $.get("/showData/dataInfo", function (res) {
            //code above is from eddy with the /dataInfo
        $.get("/showData", function (res) {
            console.log("this is the console", res);
            // var dataInfo = res.here;
            // // for (var i = 0; i < dataInfo.length; i++) {
            // //     // console.log("finally", dataInfo[i]);

            // //     if (dataInfo[i].word_count > 100000) {
            // //         // console.log("students who read ",  dataInfo[i]);
            // //         var tBody1 = $("tbody, #met");
            // //         var tRow1 = $("<tr>, #studentmet");
            // //         var test = $("<td>").text(dataInfo[i].first_name);
            // //         var lastName = $("<td>").text(dataInfo[i].last_name);
            // //         // var goalAlmostMet = $("<td>").text(dataInfo[i].homeroom_id);
            // //         var wordCount = $("<td>").text(dataInfo[i].word_count);
            // //         // console.log(dataInfo[0].word_count);
            // //         tRow1.append(test, lastName, wordCount);
            // //         tBody1.append(tRow1);//appending the table row to table body

            // //     }


        });

    });

});

// else if (dataInfo[i].word_count < 100000 && dataInfo[i].word_count > 50000){
//     console.log("students who  almnost read ",  dataInfo[i]);



// }


