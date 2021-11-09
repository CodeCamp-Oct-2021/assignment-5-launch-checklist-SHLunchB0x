


window.addEventListener("load", function (event) {

    let form = document.querySelector("form");


    form.addEventListener("submit", function (event) {
        console.log('fiufddf')
        let pilot = document.getElementById("pilotName").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass, event)
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        pickPlanet(listedPlanets);
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image)
        
    })
});