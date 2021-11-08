

window.addEventListener("load", function() {
    
    let form = document.querySelector("form");
    let pilotName = document.getElementById("pilotName");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel");
    let cargoMass = document.querySelector("input[name=CargoMass]");
    let faultyItems = document.getElementById("faultyItems");
    
    form.addEventListener("submit", function(){
        console.log('fiufddf')
        formSubmission(document, faultyItems, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)    
});

});
//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
// })