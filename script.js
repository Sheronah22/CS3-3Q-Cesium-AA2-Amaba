function calculatePopulation() {
    let startPop = parseFloat(prompt("Enter the starting number of monsters:"));
    let rate = parseFloat(prompt("Enter the growth rate (0 to 1):"));
    let time = parseFloat(prompt("Enter the number of hours:"));

    if (isNaN(startPop) || isNaN(rate) || isNaN(time)) {
        alert("Please enter numbers only!");
        return;
    }

    let finalPop = Math.round(startPop * Math.exp(rate * time));
    
    let place = prompt("Enter the monster’s location:");
    let monster = prompt("Enter the monster’s name:");

    let fullName = (place + " " + monster).toUpperCase();

    document.getElementById("result").innerText = 
        `After ${time} hours, the population of ${fullName} has increased to ${finalPop}!`;
}
