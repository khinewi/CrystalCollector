var targetNubmer = 65;
$("#guesstargetnumber").text(targetNumber)

var wins = 0;
var losses = 0;
var totalscore = 0;

var wins = $("#wins");
var losses = $("#losses");
var totalscore = $("#totalscore");

wins.text("wins: "+ wins);
losses.text("losses: " + losses);

function wins() {
    $("wins").text("Winner!");
    wins++;
    $("#wins").text(wins);
}

function losses() {
    $("losses").text("loser!");
    losses++;
    $("#losses").text(losses);
}

var numberOptions = [6, 12, 10, 1]

for (var i = 0; i <numberOptions.length; i++) { 

$(".crystal").on("click", function(){

var crystalValue = ($(this).attr("data-craystalvalue"));
totalscore += crystalValue;

if (totalscore === targetNubmer) {

totalscore.text("Total Score: " + totalscore)
   

}

}


