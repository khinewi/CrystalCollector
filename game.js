$(document).ready(function(){



var wins = 0;
var losses = 0;
var totalscore = 0;

// var winsdiv = $("#wins");
// var lossesdiv = $("#losses");
// var totalscore = $("#totalscore");


var randomnumber = Math.floor((Math.random() * 100) + 19);
$("#guesstargetnumber").text(randomnumber);

    $('#Crystal1').click(function(){
        var Crystal1 = Math.floor((Math.random() * 12) + 1);
        totalscore = totalscore + Crystal1;
        $("#totalscore").text("totalscores: " + totalscore);
        if (totalscore === randomnumber) { winscalc();
        }
        else if (totalscore > randomnumber) { lossescalc();
        }
        console.log (crystal1)
    });
    $('#Crystal2').click(function(){
        var Crystal2 = Math.floor((Math.random() * 12) + 1);
        totalscore = totalscore + Crystal2;
        $("#totalscore").text("totalscores: " + totalscore);
        if (totalscore === randomnumber) { winscalc();
        }
        else if (totalscore > randomnumber) { lossescalc();
        }
        console.log (crystal2)

    });
    $('#Crystal3').click(function(){
        var Crystal3 = Math.floor((Math.random() * 12) + 1);
        totalscore = totalscore + Crystal3;
        $("#totalscore").text("totalscores: " + totalscore);
        if (totalscore === randomnumber) { winscalc();
        }
        else if (totalscore > randomnumber) { lossescalc();
        }
        console.log (crystal3)


    });
    $('#Crystal4').click(function(){
        var Crystal4 = Math.floor((Math.random() * 12) + 1);
        totalscore = totalscore + Crystal4;
        $("#totalscore").text("totalscores: " + totalscore);
        if (totalscore === randomnumber) { winscalc();
        }
        else if (totalscore > randomnumber) { lossescalc();
        }
        console.log (crystal4)

    });


function winscalc(){

    wins++;
    $("#wins").text("wins: " + wins);
    reset ()

}

function lossescalc(){

    losses++;
    $("#losses").text("losses: " + losses);
    reset ()
}

function reset(){

    totalscore = 0
    randomnumber = Math.floor((Math.random() * 100) + 19);
    $("#guesstargetnumber").text(randomnumber);
    $("#totalscore").text("totalscores: " + totalscore);


}

})