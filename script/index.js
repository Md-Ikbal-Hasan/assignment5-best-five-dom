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


// commmon function
function getInputFieldValue(id) {
    const inputValueField = document.getElementById(id);
    const inputValue = Number(inputValueField.value);
    if (inputValue === 0 || inputValue === NaN) {
        return NaN;
    }
    inputValueField.value = '';
    return inputValue;
}


document.getElementById("player-expense-button").addEventListener('click', function () {
    const perPlayerCost = getInputFieldValue("per-player-cost")

    if (isNaN(perPlayerCost)) {
        alert("Enter a valid Input");
        return;
    }

    let playerList = document.getElementById("player-list");
    const selectedPlayerList = playerList.querySelectorAll('li');
    const numberOfSelectedPlayer = selectedPlayerList.length;

    if (numberOfSelectedPlayer < 1) {
        alert("Select some player first ! ");
        return;
    }

    const playerCost = perPlayerCost * numberOfSelectedPlayer;
    document.getElementById("player-cost").innerText = playerCost;

})


document.getElementById("calculate-total-button").addEventListener('click', function () {
    const managerCost = getInputFieldValue("manager-cost");
    const coachCost = getInputFieldValue("coach-cost");
    if (isNaN(managerCost) || isNaN(coachCost)) {
        alert("Enter a valid Input");
        return;
    }


    const playerCost = parseInt(document.getElementById("player-cost").innerText);
    const totalCost = playerCost + managerCost + coachCost;
    document.getElementById("total-cost").innerText = totalCost;


})
