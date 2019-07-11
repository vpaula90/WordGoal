$(document).ready(function(){
    $("#searchButton").on("click", function () {
        var homeroom = $("#homeroom").val();
        console.log(homeroom);

        $.get("/showData/dataInfo", function(res){
            var dataInfo = res.here;
            for (var i = 0; i < dataInfo.length; i++){
                console.log("finally", dataInfo[i]);
                if (dataInfo[i].word_count > 100000) {
                     // console.log("students who read ",  dataInfo[i]);
                    var tBody = $("tbody");
                    var tRow = $("<tr>");
                    var test = $("<td>").text(dataInfo[i].first_name);
                    var lastName =  $("<td>").text(dataInfo[i].last_name);
                    // var goalAlmostMet = $("<td>").text(dataInfo[i].homeroom_id);
                    var wordCount =  $("<td>").text(dataInfo[i].word_count);
                    // console.log(dataInfo[0].word_count);
                    tRow.append(test, lastName, wordCount);
                    tBody.append(tRow);//appending the table row to table body

                }
                    
            }  

        });

    });

});

// else if (dataInfo[i].word_count < 100000 && dataInfo[i].word_count > 50000){
//     console.log("students who  almnost read ",  dataInfo[i]);

//     var tBody2 = $("tbody");
//     var tRow2 = $("<tr>");
//     var firstName = $("<td>").text(dataInfo[i].first_name);
//     var lastName=  $("<td>").text(dataInfo[i].last_name);
//     var homeroom = $("<td>").text(dataInfo[i].homeroom_id);
//     var wordCount =  $("<td>").text(dataInfo[i].word_count);
//         // console.log(dataInfo[0].word_count);
//     tRow2.append(firstName, lastName, homeroom, wordCount);
//     tBody2.append(tRow1);//appending the table row to table body

// }


// tRow.append(goalMet, goalAlmostMet, goalNotMet);
// tBody.append(tRow);//appending the table row to table body
// var goalMet =  $("<td>").text();
// var goalAlmostMet =  $("<td>").text();
// var goalNotMet =  $("<td>").text();



// var tBody = $("tbody");
// var tRow = $("<tr>");
// var test = $("<td>").text(dataInfo[0].first_name);
// var goalMet =  $("<td>").text(dataInfo[0].last_name);
// var goalAlmostMet = $("<td>").text(dataInfo[0].homeroom_id);
// var goalNotMet =  $("<td>").text(dataInfo[0].word_count);


// // console.log(dataInfo[0].word_count);
// tRow.append(test, goalMet, goalAlmostMet, goalNotMet);
// tBody.append(tRow);//appending the table row to table body