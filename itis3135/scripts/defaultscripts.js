function greetFunction() {
    const company = "Jittery Horse";
    let name = document.getElementById("name").value;
    let text = ("The " + company + " welcomes you, " + name + "! We're glad you are doing " + document.getElementById("feeling").value + "!");
    document.getElementById("greeting").innerHTML = text;
  }

  function gonFunction() {
    let x = document.getElementById("numb").value;
    let result = Math.abs(Math.ceil(x));
    let text;
    if (isNaN(result)) {
        text = "Input not valid";
    } else if (result == 1) {
        text = "Henagon!";
    } else if (result == 2) {
        text = "Digon!";
    } else if (result == 3) {
        text = "Trigon!";
    } else if (result == 4) {
        text = "Tetragon!";
    } else if (result == 5) {
        text = "Pentagon!";
    } else if (result == 6) {
        text = "Hexagon!";
    } else if (result == 7) {
        text = "Heptagon!";
    } else if (result == 8) {
        text = "Octagon!";
    } else if (result == 9) {
        text = "Enneagon!";
    } else if (result == 10) {
        text = "Decagon!";
    }
    alert(text);
    }

    function generateHorseName() {
        const firstNames = ["Thunderbolt", "Shadowdancer", "Midnight", "Blaze"];
        const lastNames = ["Hoof", "Mane", "Gallop", "Steed", "Pony", "Stride", "Tail", "Meadow", "Mist"];
      
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      
        let nameGenerator = (firstName + " " + lastName);
        document.getElementById("nameGenText").innerHTML = nameGenerator;
      }
      
    function calculateDosage() {
        var horseWeight = parseFloat(document.getElementById("horseWeight").value);
    
        if (!isNaN(horseWeight)) { 
            var dosage = horseWeight * 0.25; 
            document.getElementById("dosageText").textContent = "Recommended dosage: " + dosage + " mg";
        } else {
            document.getElementById("dosageText").textContent = "Please enter a valid weight for the horse.";
        }
    }

    function calculatePrice() {
        var horseWeight = parseFloat(document.getElementById("horseWeightPrice").value);
        if (!isNaN(horseWeight)) {
            var dosage = horseWeight * 0.25;
            var monthlyPrice = (dosage * 10) / 30;
            document.getElementById("priceText").textContent = "Monthly price: $" + monthlyPrice.toFixed(2);
        } else {
            document.getElementById("priceText").textContent = "Please enter a valid weight for the horse.";
        }
    }
    
    function calculateShipping(destination) {
        var monthlyPrice = parseFloat(document.getElementById("priceText").textContent.replace("Monthly price: $", ""));
        if (!isNaN(monthlyPrice)) {
            var shippingCostPercentage = (destination === 'US') ? 0.15 : 0.30;
            var shippingCost = monthlyPrice * shippingCostPercentage;
            document.getElementById("shippingCostText").textContent = "Shipping cost to " + destination + ": $" + shippingCost.toFixed(2);
        } else {
            document.getElementById("shippingCostText").textContent = "Please calculate the price first by entering a weight in the price calculator box above this one.";
        }
    }
    
    
