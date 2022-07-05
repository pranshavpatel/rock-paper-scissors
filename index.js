const computerChoiceDisplay = document.getElementById("computer-choice");
let computerChoice;
var idk = Math.floor(Math.random()*3+1);
if(idk===1){
    computerChoice = "rock";
}
else if(idk===2){
    computerChoice = "paper";
}
else if(idk===3){
    computerChoice = "scissors";
}

let userChoice;
// When the user clicks on a button
$(".start-button").click(function(){
    $("#computer-choice-"+computerChoice).css("visibility","visible")
    $(".comp-heading").css("visibility","visible")
    $(".temp").text("You Chose:")
    userChoice=this.id;
    $("#"+userChoice).addClass("shadow-effect")
    if(userChoice==="rock"){
        $("#paper").addClass("disabled")
        $("#scissors").addClass("disabled")
        $(".start-button").removeClass("hover-effect")
    }
    else if(userChoice==="paper"){
        $("#rock").addClass("disabled")
        $("#scissors").addClass("disabled")
        $(".start-button").removeClass("hover-effect")
    }
    else if(userChoice==="scissors"){
        $("#paper").addClass("disabled")
        $("#rock").addClass("disabled")
        $(".start-button").removeClass("hover-effect")
    }
    if(userChoice===computerChoice){
        $("#main-title").text("It's a Draw! (¬_¬)");
        playSound("draw")
    }
    else if(userChoice==="rock" && computerChoice==="paper"){
        $("#main-title").text("You Lost! (╯°□°）╯");
        playSound("lose")
    }
    else if(userChoice==="rock" && computerChoice==="scissors"){
        $("#main-title").text("You Won!└(^o^ )X( ^o^)┘");
        playSound("win")
    }
    else if(userChoice==="scissors" && computerChoice==="paper"){
        $("#main-title").text("You Won!└(^o^ )X( ^o^)┘");
        playSound("win")
    }
    else if(userChoice==="scissors" && computerChoice==="rock"){
        $("#main-title").text("You Lost! (╯°□°）╯");
        playSound("lose")
    }
    else if(userChoice==="paper" && computerChoice==="rock"){
        $("#main-title").text("You Won!└(^o^ )X( ^o^)┘");
        playSound("win")
    }
    else if(userChoice==="paper" && computerChoice==="scissors"){
        $("#main-title").text("You Lost! (╯°□°）╯");
        playSound("lose")
    }
    $(".restart").text("Please refresh to play again :)")
})

function playSound(name){
    var audio = new Audio("sounds/" + name + ".wav");
    audio.play();
}