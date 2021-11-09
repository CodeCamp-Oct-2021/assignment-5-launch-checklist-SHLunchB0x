

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
        rp = Math.floor(Math.random() * listedPlanets.length)
        missionTarget.innerHTML =
    `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${listedPlanets[rp].name}</li>
                     <li>Diameter: ${listedPlanets[rp].diameter}</li>
                     <li>Star: ${listedPlanets[rp].star}</li>
                     <li>Distance from Earth: ${listedPlanets[rp].distance}</li>
                     <li>Number of Moons: ${listedPlanets[rp].moons}</li>
                 </ol>
                 <img src=${listedPlanets[rp].image}>`
                 ;
});
    })
    