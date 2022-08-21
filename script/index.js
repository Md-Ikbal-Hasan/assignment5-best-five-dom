// add event listerner in parent node for bubbling...................
document.getElementById("all-card-container").addEventListener('click', function (e) {

    if (e.target.innerText === "SELECT") {

        let playerList = document.getElementById("player-list");

        const selectedPlayerList = playerList.querySelectorAll('li');
        const numberOfSelectedPlayer = selectedPlayerList.length;

        if (numberOfSelectedPlayer >= 5) {
            alert("You have already selected 5 player");
            return
        }

        else {

            const playerNameElement = e.target.previousElementSibling.previousElementSibling;

            const playerName = playerNameElement.innerText;
            let li = document.createElement("li");
            li.innerText = playerName;
            playerList.appendChild(li);

            e.target.setAttribute("disabled", '');
            e.target.classList.add("disabled-button-bg");


        }
    }
})