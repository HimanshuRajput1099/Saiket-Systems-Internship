async function getJoke(){

    try{

        const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        const data = await response.json();

        document.getElementById("setup").innerText =
            data.setup;

        document.getElementById("punchline").innerText =
            data.punchline;

    }
    catch(error){

        document.getElementById("setup").innerText =
            "Failed to load joke.";

        document.getElementById("punchline").innerText =
            "";
    }
}