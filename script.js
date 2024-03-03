let user = document.querySelector("#user");
let system = document.querySelector("#system");
let option = document.querySelectorAll(".option");
let msg = document.querySelector("#msg");

option.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       let userChoice = choice.getAttribute("id");
       game(userChoice);
    });
});

let game = (userChoice) =>{
    let sysChoice = compChoice();
    console.log(`${userChoice} is users choice`);
    console.log(`${sysChoice} is System choice`);

    if(userChoice === sysChoice){
        draw();
    }else{
        let userWin = true;
        if(userChoice=== "rock"){
            sysChoice === "paper"? userWin = false : userWin = true;
        }else if(userChoice === "paper"){
            sysChoice === "scissor"? userWin = false : userWin = true;
        }else{
            sysChoice === "rock"? userWin = false : userWin = true;
        }
        if(userWin===true){
            won();
        }else{
            loss();
        }
    }
    console.log("\n");
}

let compChoice = () =>{
    let val = ["rock","paper","scissor"];
    let ranInd = Math.floor(Math.random()*3);
    return val[ranInd];
}

let draw = () =>{
    console.log("Game was draw");
    msg.innerText = "Game Is Draw";
    msg.style.backgroundColor = "#8A84E2";

}

let won = () =>{
    console.log("YOU Won");
    msg.innerText = "Well Done! You Win.";
    user.innerText ++;
    msg.style.backgroundColor = "green";
}
 let loss = () =>{
    console.log("YOU Lost");
    msg.innerText = "Oh NO ! You Lost";
    system.innerText ++ ;
    msg.style.backgroundColor = "red";
 }