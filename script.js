function calculatePopulation() {
    let initialPopulation = parseFloat(prompt("Enter the starting number of monsters:"));
    let growthRate = parseFloat(prompt("Enter the growth rate (0 to 1):"));
    let time = parseFloat(prompt("Enter the number of hours:"));
    
        return;
    }

    let finalPop = Math.round(startPop * Math.exp(growthRate * time));
    
    let place = prompt("Enter the monster’s location:");
    let monster = prompt("Enter the monster’s name:");

    let fullName = (place + " " + monster).toUpperCase();

    document.getElementById("result").innerText = 
        `After ${time} hours, the population of ${fullName} has increased to ${finalPop}!`;
}
