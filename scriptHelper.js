// Write your helper functions here!
require('isomorphic-fetch');
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    missionTarget.innerHTML =
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src=${imageUrl}>
    `;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass, event) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    console.log("stupid")
    if (validateInput(pilot) === "Empty" ||
        validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" ||
        validateInput(cargoMass) === "Empty") {
        alert("All fields required!");
        event.preventDefault();
    } else if (validateInput(pilot) === "Is a Number" ||
        validateInput(copilot) === "Is a Number" ||
        validateInput(fuelLevel) === "Not a Number" ||
        validateInput(cargoMass) === "Not a Number") {
        alert("Pilot and Copilot cannot be numbers; Fuel and Cargo levels must be numbers!!");
        event.preventDefault();
    } else {

        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch.`

        if (fuelLevel < 10000 && cargoMass > 10000) {
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready For Launch";
            launchStatus.style.color = "red";
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            cargoStatus.innerHTML = `Too much mass for takeoff`;
        } else if (fuelLevel >= 10000 && cargoMass > 10000) {
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready For Launch";
            launchStatus.style.color = "red";
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Too much mass for takeoff`;
        } else if (fuelLevel < 10000 && cargoMass <= 10000){
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready For Launch";
            launchStatus.style.color = "red";
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        } else if (fuelLevel >= 10000 && cargoMass <= 10000) {
            launchStatus.innerHTML = `Shuttle is ready for Launch!`;
            launchStatus.style.color = "green";
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        }
        event.preventDefault();
    }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        if (response.status >= 400) {
            throw new Error("ERROR");
        } else {
            return response.json()
        }
    });
    return planetsReturned;
}

function pickPlanet(planets) {
    let rp = Math.floor(Math.random() * planets.length);
    let randomPlanet = planets[rp];
        // missionTarget.innerHTML =
        // `<h2>Mission Destination</h2>
        // <ol>
        //     <li>Name: ${planets[rp].name}</li>
        //     <li>Diameter: ${planets[rp].diameter}</li>
        //     <li>Star: ${planets[rp].star}</li>
        //     <li>Distance from Earth: ${planets[rp].distance}</li>
        //     <li>Number of Moons: ${planets[rp].moons}</li>
        // </ol>
        // <img src=${planets[rp].image}>`
    return randomPlanet;
                 ;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
