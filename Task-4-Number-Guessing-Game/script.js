let randomNumber = Math.floor(Math.random() * 100) + 1;

let count = 0;

function checkGuess(){

    let guess =
        Number(document.getElementById("guess").value);

    count++;

    if(guess === randomNumber){

        document.getElementById("message").innerText =
            "Congratulations! You guessed correctly.";

    }
    else if(guess > randomNumber){

        document.getElementById("message").innerText =
            "Too High!";
    }
    else{

        document.getElementById("message").innerText =
            "Too Low!";
    }

    document.getElementById("attempts").innerText =
        "Attempts: " + count;
}