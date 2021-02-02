// Important Variable Declaration
var victorycon = 0;
var defeatcon = 0;
var playerincome = 100;
var compincome = 100;
var playergold = 100;
var compgold = 100;
var comphandicap = 0;
var compinterval = 0;
var levelcheck = localStorage.getItem("levelselect")

// End Variable Declaration

// Start Unit Stats Declaration

let unitstats = [
    {
        name: "Squire",
        price: 20,
        income: 20,
        attack: 1,
        health: 1,
    },
    {
        name: "Knight",
        price: 40,
        income: 30,
        attack: 4,
        health: 2,
    },
    {
        name: "ArmorKnight",
        price: 80,
        income: 40,
        attack: 4,
        health: 10,
    },
    {
        name: "Myrmidon",
        price: 150,
        income: 60,
        attack: 10,
        health: 8,
    },
    {
        name: "Warden",
        price: 200,
        income: 80,
        attack: 8,
        health: 25,
    },
    {
        name: "Wizard",
        price: 250,
        income: 100,
        attack: 18,
        health: 25,
    },
    {
        name: "Slayer",
        price: 400,
        income: 150,
        attack: 20,
        health: 30,
    },
    {
        name: "King",
        price: 800,
        income: 200,
        attack: 30,
        health: 40,
    },
    {
        name: "Holy Warrior",
        price: 1200,
        income: 400,
        attack: 40,
        health: 60,
    },
    {
        name: "Demon",
        price: 1800,
        income: 800,
        attack: 60,
        health: 80
    }
]

let unit0hp = 0;
let unit0at = 0;
let eunit0hp = 0;
let eunit0at = 0;

let unit1hp = 0;
let unit1at = 0;
let eunit1hp = 0;
let eunit1at = 0;

let unit2hp = 0;
let unit2at = 0;
let eunit2hp = 0;
let eunit2at = 0;

let unit3hp = 0;
let unit3at = 0;
let eunit3hp = 0;
let eunit3at = 0;

let unit4hp = 0;
let unit4at = 0;
let eunit4hp = 0;
let eunit4at = 0;

let unit5hp = 0;
let unit5at = 0;
let eunit5hp = 0;
let eunit5at = 0;

let unit6hp = 0;
let unit6at = 0;
let eunit6hp = 0;
let eunit6at = 0;



// End Unit Stats Declaration

// Start Computer Handicap and Change Background Color

// Checks Local Storage variable "levelselect" and decides how much handicap gold the computer player recieves with their income aswell as the computer player's income interval

// The background color of the game area is also changed based on the value of "levelselect" 

function handicapdraw(){
    if(localStorage.getItem("levelselect") == 0){
        comphandicap = 10
        compinterval = 15000
    }
    if(localStorage.getItem("levelselect") == 1){
        comphandicap = 20
        compinterval = 14000
        let bgcolor = document.getElementById("gamearea")
        bgcolor.style.backgroundColor = "DarkGrey"
    }
    if(localStorage.getItem("levelselect") == 2){
        comphandicap = 30
        compinterval = 13500
        let bgcolor = document.getElementById("gamearea")
        bgcolor.style.backgroundColor = "RoyalBlue"
    }
    if(localStorage.getItem("levelselect") == 3){
        comphandicap = 40
        compinterval = 13000
        let bgcolor = document.getElementById("gamearea")
        bgcolor.style.backgroundColor = "Purple"
    }
    if(localStorage.getItem("levelselect") == 4){
        comphandicap = 50
        compinterval = 12500
        let bgcolor = document.getElementById("gamearea")
        bgcolor.style.backgroundColor = "Grey"
    }
    if(localStorage.getItem("levelselect") == 5){
        comphandicap = 55
        compinterval = 12000
        let bgcolor = document.getElementById("gamearea")
        bgcolor.style.backgroundColor = "DarkGreen"
    }
    if(localStorage.getItem("levelselect") == 6){
        comphandicap = 60
        compinterval = 11500
        let bgcolor = document.getElementById("gamearea")
        bgcolor.style.backgroundColor = "rgb(116, 67, 67)"
    }
    if(localStorage.getItem("levelselect") == 7){
        comphandicap = 65
        compinterval = 11000
        let bgcolor = document.getElementById("gamearea")
        bgcolor.style.backgroundColor = "rgb(206, 123, 15)"
    }
    if(localStorage.getItem("levelselect") == 8){
        comphandicap = 70
        compinterval = 10500
        let bgcolor = document.getElementById("gamearea")
        bgcolor.style.backgroundColor = "rgb(29, 248, 248)"
    }
    if(localStorage.getItem("levelselect") == 9){
        comphandicap = 75
        compinterval = 10000
        let bgcolor = document.getElementById("gamearea")
        bgcolor.style.backgroundColor = "Gold"
    }
}

handicapdraw()
// Gives the computer player their handicap gold every 20 seconds
const handicapinterval = setInterval(function(){
    compgold = compgold + comphandicap;
}, 20000)

// Start End Computer Handicap and Background Color

// Start Economy Draw Functionality

// Changes the value of html elements to display the player's current gold and income at the top of the game area
function econdraw(){
    let golddisplay = document.getElementById("golddisplay")
    let incomedisplay = document.getElementById("incomedisplay")

    golddisplay.innerHTML = `
        <p> Gold : ${playergold} </p>
    `

    incomedisplay.innerHTML = `
        <p> Income : ${playerincome} </p>
    `
}
econdraw()

// End Economy Draw Functionality



// Start Income Functionality

// Add Income to Player Gold Every 15 Seconds
const incomeinterval = setInterval(function(){
    playergold = playergold + playerincome;
    econdraw()
}, 15000)

// End Income Functionality


// Select Lane Functionality

function selectlane(){

    // Collects all HTML elements with the class name "lane" and stores them in an array called "lanes" and sets the element in "lanes" 0 index border color to red.

    let lanes = document.getElementsByClassName("lane");
    let lanenum = lanes.length - 7;
    lanes[lanenum].style.borderColor = "red";

    // When the up arrow key is pressed the lanenum variable is decreased unless it is equal to 0. The lanenum variable is used to access "lanes" from above. The new lane's border color is set to red while the previous one is returned to black
    document.addEventListener('keydown', function(lanehighlight) {
        if (lanehighlight.keyCode == 38) {
            if (lanenum != 0){
                lanenum--
                lanes[lanenum].style.borderColor = "red";
                lanes[lanenum + 1].style.borderColor = "black";
            }
        }

        // When the down arrow key is pressed the lanenum variable is increased unless it is equal to 6. The lanenum variable is used to access "lanes" from above. The new lane's border color is set to red while the previous one is returned to black
        else if (lanehighlight.keyCode == 40) {
            if (lanenum != 6){
                lanenum++
                lanes[lanenum].style.borderColor = "red";
                lanes[lanenum - 1].style.borderColor = "black";
            }
        }
    });

}
selectlane();

// End Select Lane Functionality

// Start Select Unit Functionality

function selectunit(){

    // Collects all HTML elements with the class name "unitportrait" and adds them to an array stored in the variable "unitportraits" and sets the element in "unitportraits" 0 index border color to gold

    let unitportraits = document.getElementsByClassName("unitportrait");
    let portnum = unitportraits.length - 10;
    unitportraits[portnum].style.borderColor = "gold";
    
    document.addEventListener('keydown', function(portraithighlight) {
        // When the left arrow key is pressed the portnum variable is decreased unless it is equal to 0. The portnum variable is used to access "unitportraits" from above. The new portrait's border color is set to gold while the previous one is returned to black
        if (portraithighlight.keyCode == 37) {
            if (portnum != 0){
                portnum--
                unitportraits[portnum].style.borderColor = "gold";
                unitportraits[portnum + 1].style.borderColor = "red";
            }
        }
        // When the right arrow key is pressed the portnum variable is increased unless it is equal to 7. The portnum variable is used to access "unitportraits" from above. The new portrait's border color is set to gold while the previous one is returned to black
        else if (portraithighlight.keyCode == 39) {
            if (portnum != 9){
                portnum++
                unitportraits[portnum].style.borderColor = "gold";
                unitportraits[portnum - 1].style.borderColor = "red";
            }
        }
    });
}
selectunit()
// End Select Unit Functionality

// Add Units to Selected Lane Functionality

function addunit(){


    let lanes = document.getElementsByClassName("lane");
    let unitport = document.getElementsByClassName("unitportrait")
    let units = ["squire.gif", "knight.gif", "armorknight.gif", "myrmidon.gif","warden.gif", "wizard.gif", "slayer.gif", "king.gif", "holywarrior.gif", "demon.gif"]
    let laneoccupants = ["unit0", "unit1", "unit2", "unit3", "unit4", "unit5", "unit6",]


    // Gets Selected lane by checking the array "lanes" until it finds the HTML element with a red border color then sets the variable "laneselect" to the number of the index
    for (i = 0; i < lanes.length; i++) {
        if (lanes[i].style.borderColor == "red"){
            laneselect = i;
        }
    }
    // 

    // Gets selected Unit by checking the array "unitport" until it finds the HTML element with a gold border color then sets the variable "unitselect" to the number of the index
        for(i = 0; i < unitport.length; i++){
            if(unitport[i].style.borderColor == "gold"){
                let unitselect = i;
            }
        }
    //

    // Dynamically creates div element using selected lane to determine the proper ID to attach to the unit, and uses the selected unit to set the src of the img tag to the correct unit image
    var unitdiv = document.createElement("div")
    unitdiv.innerHTML += `
        <div id="${laneoccupants[laneselect]}" class="funit">
        <img src="${units[unitselect]}">
        </div>
        `
    // 

     

    // Gets Selected Lane then adds the HTML element created above to the selected lane

    // Then depending on the selected lane sets the health and attack variables for the respective lane
    for (i = 0; i < lanes.length; i++) {
        if (lanes[i].style.borderColor == "red"){
            if(document.getElementById("unit" + i) == undefined){
                var activelane = document.getElementById("lane" + [i]);
                activelane.appendChild(unitdiv)
                econdraw()
                if(laneselect == 0){
                    unit0hp = unitstats[unitselect].health
                    unit0at = unitstats[unitselect].attack
                } 
                else if(laneselect == 1){
                    unit1hp = unitstats[unitselect].health
                    unit1at = unitstats[unitselect].attack
                }
                else if(laneselect == 2){
                    unit2hp = unitstats[unitselect].health
                    unit2at = unitstats[unitselect].attack
                }
                else if(laneselect == 3){
                    unit3hp = unitstats[unitselect].health
                    unit3at = unitstats[unitselect].attack
                }
                else if(laneselect == 4){
                    unit4hp = unitstats[unitselect].health
                    unit4at = unitstats[unitselect].attack
                }
                else if(laneselect == 5){
                    unit5hp = unitstats[unitselect].health
                    unit5at = unitstats[unitselect].attack
                }
                else if(laneselect == 6){
                    unit6hp = unitstats[unitselect].health
                    unit6at = unitstats[unitselect].attack
                }
            }
    // 
            // Prevents gold from being subtracted and income from being added when unit already exists on selected lane
            else{
                playergold = playergold + unitstats[unitselect].price;
                playerincome = playerincome - unitstats[unitselect].income;
            }
            //   
        }
    }
}

// Adds unit to selected lane when spacebar is pressed
let lanes = document.getElementsByClassName("lane");
document.addEventListener('keydown', function(sendunit) {
    if (sendunit.keyCode == 32) {
        let unitport = document.getElementsByClassName("unitportrait")
        // Gets selected unit
        for(i = 0; i < unitport.length; i++){
            if(unitport[i].style.borderColor == "gold"){
                unitselect = i;
                
            }
        }
        // 

        // Subtracts unit cost from player gold, adds unit income to player income, calls addunit, animstart, and econdraw functions
        if(unitport[unitselect].style.borderColor == "gold"){
            if(playergold >= unitstats[unitselect].price){
                playergold = playergold - unitstats[unitselect].price;
                playerincome = playerincome + unitstats[unitselect].income;
                addunit()
                animstart()
                econdraw()

            }
        }
        // 

        // Gets selected lane and adds the corresponding listener to the unit
        for (i = 0; i < lanes.length; i++){
            if (lanes[i].style.borderColor == "red"){
                if(i == 0){
                    lane0listener()
                }
                else if (i == 1){
                    lane1listener()
                }
                else if (i == 2){
                    lane2listener()
                }
                else if (i == 3){
                    lane3listener()
                }
                else if (i == 4){
                    lane4listener()
                }
                else if (i == 5){
                    lane5listener()
                }
                else if (i == 6){
                    lane6listener()
                }
            }
        }
    }
});
// 

// End Add Units to Selected Lane Functionality

// Start Check for Unit Animations Functionality
let unit = document.getElementsByClassName("funit");

// Grabs unit and starts keyframe animation
function animstart(){
    for(i = 0; i < unit.length; i++){
        unit[i].style.animation = "march 20s 1";
    }
}
// 

// Adds listener to corresponding unit that activates whenever the animation affecting that HTML element ends and calls a corresponding function
function lane0listener(){
    document.getElementById("unit0").addEventListener("animationend", animend0)
}

function lane1listener(){
    document.getElementById("unit1").addEventListener("animationend", animend1)
}

function lane2listener(){
    document.getElementById("unit2").addEventListener("animationend", animend2)
}

function lane3listener(){
    document.getElementById("unit3").addEventListener("animationend", animend3)
}

function lane4listener(){
    document.getElementById("unit4").addEventListener("animationend", animend4)
}

function lane5listener(){
    document.getElementById("unit5").addEventListener("animationend", animend5)
}

function lane6listener(){
    document.getElementById("unit6").addEventListener("animationend", animend6)
}
// 

// Ending functions called by the event listeners attached to the units above, also increases score
function animend0(){
    document.getElementById("unit0").remove()
    victorycon = victorycon + 1;
    winCondition()
}

function animend1(){
    document.getElementById("unit1").remove()
    victorycon = victorycon + 1;
    winCondition()
}

function animend2(){
    document.getElementById("unit2").remove()
    victorycon = victorycon + 1;
    winCondition()
}

function animend3(){
    document.getElementById("unit3").remove()
    victorycon = victorycon + 1;
    winCondition()
}

function animend4(){
    document.getElementById("unit4").remove()
    victorycon = victorycon + 1;
    winCondition()
}

function animend5(){
    document.getElementById("unit5").remove()
    victorycon = victorycon + 1;
    winCondition()
}

function animend6(){
    document.getElementById("unit6").remove()
    victorycon = victorycon + 1;
    console.log(victorycon)
    winCondition()
}
// 

// End Check for Unit Animations Functionality

// Start Enemy AI Functionality

function enemyspawn(){


    // Gets a random number between 0 and 6 and stores it in variable "randomnum"
    let randomnum = Math.floor(Math.random() * Math.floor(7));

    // Stores HTML element for each unit in a corresponding variable called "enemy(unitname)" and gives it an id with the randomnum from earlier attached
    var enemysquire = document.createElement("div")
    enemysquire.innerHTML +=    `
                                <div id="eunit${randomnum}" class="eunit">
                                <img src="esquire.gif">
                                </div>
                                `

    var enemyknight = document.createElement("div")
    enemyknight.innerHTML +=    `
                                <div id="eunit${randomnum}" class="eunit">
                                <img src="eknight.gif">
                                </div>
                                `

    var enemyarmorknight = document.createElement("div")
    enemyarmorknight.innerHTML +=           `
                                            <div id="eunit${randomnum}" class="eunit">
                                            <img src="earmorknight.gif">
                                            </div>
                                            `

    var enemymyrmidon = document.createElement("div")
    enemymyrmidon.innerHTML +=    `
                                  <div id="eunit${randomnum}" class="eunit">
                                  <img src="emyrmidon.gif">
                                  </div>
                                  ` 

    var enemywarden = document.createElement("div")
    enemywarden.innerHTML +=    `
                                <div id="eunit${randomnum}" class="eunit">
                                <img src="ewarden.gif">
                                </div>
                                `                              
    var enemywizard = document.createElement("div")
    enemywizard.innerHTML +=    `
                                <div id="eunit${randomnum}" class="eunit">
                                <img src="ewizard.gif">
                                </div>
                                `   
                                
    var enemyslayer = document.createElement("div")
    enemyslayer.innerHTML +=    `
                                <div id="eunit${randomnum}" class="eunit">
                                <img src="eslayer.gif">
                                </div>
                                `     
                                
    var enemyking = document.createElement("div")
    enemyking.innerHTML +=      `
                                <div id="eunit${randomnum}" class="eunit">
                                <img src="eking.gif">
                                </div>
                                ` 
    var enemyholywarrior = document.createElement("div")
    enemyholywarrior.innerHTML +=      `
                                <div id="eunit${randomnum}" class="eunit">
                                <img src="eholywarrior.gif">
                                </div>
                                `   
    
    var enemydemon = document.createElement("div")
    enemydemon.innerHTML +=      `
                                <div id="eunit${randomnum}" class="eunit">
                                <img src="edemon.gif">
                                </div>
                                `                               
    // Spawns most expensive unit computer player can currently afford and sets the stats of the corresponding lane depending on the randomnum from earlier.
    if(compgold >= 3600){
        if(document.getElementById("eunit" + [randomnum]) == null){
            let eLaneSelect = document.getElementById("lane" + randomnum)
            eLaneSelect.appendChild(enemydemon)
            
            compgold = compgold - unitstats[9].price
            compincome = compincome + unitstats[9].income

            if(randomnum == 0){
                eunit0hp = unitstats[9].health
                eunit0at = unitstats[9].attack
            }
            else if(randomnum == 1){
                eunit1hp = unitstats[9].health
                eunit1at = unitstats[9].attack
            }
            else if(randomnum == 2){
                eunit2hp = unitstats[9].health
                eunit2at = unitstats[9].attack
            }
            else if(randomnum == 3){
                eunit3hp = unitstats[9].health
                eunit3at = unitstats[9].attack
            }
            else if(randomnum == 4){
                eunit4hp = unitstats[9].health
                eunit4at = unitstats[9].attack
            }
            else if(randomnum == 5){
                eunit5hp = unitstats[9].health
                eunit5at = unitstats[9].attack
            }
            else if(randomnum == 6){
                eunit6hp = unitstats[9].health
                eunit6at = unitstats[9].attack
            }
        }
    }
    else if(compgold >= 2400){
        if(document.getElementById("eunit" + [randomnum]) == null){
            let eLaneSelect = document.getElementById("lane" + randomnum)
            eLaneSelect.appendChild(enemyholywarrior)
            
            compgold = compgold - unitstats[8].price
            compincome = compincome + unitstats[8].income

            if(randomnum == 0){
                eunit0hp = unitstats[8].health
                eunit0at = unitstats[8].attack
            }
            else if(randomnum == 1){
                eunit1hp = unitstats[8].health
                eunit1at = unitstats[8].attack
            }
            else if(randomnum == 2){
                eunit2hp = unitstats[8].health
                eunit2at = unitstats[8].attack
            }
            else if(randomnum == 3){
                eunit3hp = unitstats[8].health
                eunit3at = unitstats[8].attack
            }
            else if(randomnum == 4){
                eunit4hp = unitstats[8].health
                eunit4at = unitstats[8].attack
            }
            else if(randomnum == 5){
                eunit5hp = unitstats[8].health
                eunit5at = unitstats[8].attack
            }
            else if(randomnum == 6){
                eunit6hp = unitstats[8].health
                eunit6at = unitstats[8].attack
            }
        }
    }
    else if(compgold >= 1600){
        if(document.getElementById("eunit" + [randomnum]) == null){
            let eLaneSelect = document.getElementById("lane" + randomnum)
            eLaneSelect.appendChild(enemyking)
            
            compgold = compgold - unitstats[7].price
            compincome = compincome + unitstats[7].income

            if(randomnum == 0){
                eunit0hp = unitstats[7].health
                eunit0at = unitstats[7].attack
            }
            else if(randomnum == 1){
                eunit1hp = unitstats[7].health
                eunit1at = unitstats[7].attack
            }
            else if(randomnum == 2){
                eunit2hp = unitstats[7].health
                eunit2at = unitstats[7].attack
            }
            else if(randomnum == 3){
                eunit3hp = unitstats[7].health
                eunit3at = unitstats[7].attack
            }
            else if(randomnum == 4){
                eunit4hp = unitstats[7].health
                eunit4at = unitstats[7].attack
            }
            else if(randomnum == 5){
                eunit5hp = unitstats[7].health
                eunit5at = unitstats[7].attack
            }
            else if(randomnum == 6){
                eunit6hp = unitstats[7].health
                eunit6at = unitstats[7].attack
            }
        }
    }
    else if(compgold >= 800){
        if(document.getElementById("eunit" + [randomnum]) == null){
            let eLaneSelect = document.getElementById("lane" + randomnum)

            eLaneSelect.appendChild(enemyslayer)
            
            compgold = compgold - unitstats[6].price
            compincome = compincome + unitstats[6].income

            if(randomnum == 0){
                eunit0hp = unitstats[6].health
                eunit0at = unitstats[6].attack
            }
            else if(randomnum == 1){
                eunit1hp = unitstats[5].health
                eunit1at = unitstats[5].attack
            }
            else if(randomnum == 2){
                eunit2hp = unitstats[6].health
                eunit2at = unitstats[6].attack
            }
            else if(randomnum == 3){
                eunit3hp = unitstats[6].health
                eunit3at = unitstats[6].attack
            }
            else if(randomnum == 4){
                eunit4hp = unitstats[6].health
                eunit4at = unitstats[6].attack
            }
            else if(randomnum == 5){
                eunit5hp = unitstats[6].health
                eunit5at = unitstats[6].attack
            }
            else if(randomnum == 6){
                eunit6hp = unitstats[6].health
                eunit6at = unitstats[6].attack
            }
        }
    }
    else if(compgold >= 500){
        if(document.getElementById("eunit" + [randomnum]) == null){
            let eLaneSelect = document.getElementById("lane" + randomnum)

            eLaneSelect.appendChild(enemywizard)
            
            compgold = compgold - unitstats[5].price
            compincome = compincome + unitstats[5].income

            if(randomnum == 0){
                eunit0hp = unitstats[5].health
                eunit0at = unitstats[5].attack
            }
            else if(randomnum == 1){
                eunit1hp = unitstats[5].health
                eunit1at = unitstats[5].attack
            }
            else if(randomnum == 2){
                eunit2hp = unitstats[5].health
                eunit2at = unitstats[5].attack
            }
            else if(randomnum == 3){
                eunit3hp = unitstats[5].health
                eunit3at = unitstats[5].attack
            }
            else if(randomnum == 4){
                eunit4hp = unitstats[5].health
                eunit4at = unitstats[5].attack
            }
            else if(randomnum == 5){
                eunit5hp = unitstats[5].health
                eunit5at = unitstats[5].attack
            }
            else if(randomnum == 6){
                eunit6hp = unitstats[5].health
                eunit6at = unitstats[5].attack
            }
        }
    }
    else if(compgold >= 400){
        if(document.getElementById("eunit" + [randomnum]) == null){
            let eLaneSelect = document.getElementById("lane" + randomnum)

            eLaneSelect.appendChild(enemywarden)
            
            compgold = compgold - unitstats[4].price
            compincome = compincome + unitstats[4].income

            if(randomnum == 0){
                eunit0hp = unitstats[4].health
                eunit0at = unitstats[4].attack
            }
            else if(randomnum == 1){
                eunit1hp = unitstats[4].health
                eunit1at = unitstats[4].attack
            }
            else if(randomnum == 2){
                eunit2hp = unitstats[4].health
                eunit2at = unitstats[4].attack
            }
            else if(randomnum == 3){
                eunit3hp = unitstats[4].health
                eunit3at = unitstats[4].attack
            }
            else if(randomnum == 4){
                eunit4hp = unitstats[4].health
                eunit4at = unitstats[4].attack
            }
            else if(randomnum == 5){
                eunit5hp = unitstats[4].health
                eunit5at = unitstats[4].attack
            }
            else if(randomnum == 6){
                eunit6hp = unitstats[4].health
                eunit6at = unitstats[4].attack
            }
        }
    }
    else if(compgold >= 300){
        if(document.getElementById("eunit" + [randomnum]) == null){
            let eLaneSelect = document.getElementById("lane" + randomnum)

            eLaneSelect.appendChild(enemymyrmidon)
            
            compgold = compgold - unitstats[3].price
            compincome = compincome + unitstats[3].income

            if(randomnum == 0){
                eunit0hp = unitstats[3].health
                eunit0at = unitstats[3].attack
            }
            else if(randomnum == 1){
                eunit1hp = unitstats[3].health
                eunit1at = unitstats[3].attack
            }
            else if(randomnum == 2){
                eunit2hp = unitstats[3].health
                eunit2at = unitstats[3].attack
            }
            else if(randomnum == 3){
                eunit3hp = unitstats[3].health
                eunit3at = unitstats[3].attack
            }
            else if(randomnum == 4){
                eunit4hp = unitstats[3].health
                eunit4at = unitstats[3].attack
            }
            else if(randomnum == 5){
                eunit5hp = unitstats[3].health
                eunit5at = unitstats[3].attack
            }
            else if(randomnum == 6){
                eunit6hp = unitstats[3].health
                eunit6at = unitstats[3].attack
            }
        }
    }
    else if(compgold >= 160){
        if(document.getElementById("eunit" + [randomnum]) == null){
            let eLaneSelect = document.getElementById("lane" + randomnum)

            eLaneSelect.appendChild(enemyarmorknight)
            
            compgold = compgold - unitstats[2].price
            compincome = compincome + unitstats[2].income
            
            if(randomnum == 0){
                eunit0hp = unitstats[2].health
                eunit0at = unitstats[2].attack
            }
            else if(randomnum == 1){
                eunit1hp = unitstats[2].health
                eunit1at = unitstats[2].attack
            }
            else if(randomnum == 2){
                eunit2hp = unitstats[2].health
                eunit2at = unitstats[2].attack
            }
            else if(randomnum == 3){
                eunit3hp = unitstats[2].health
                eunit3at = unitstats[2].attack
            }
            else if(randomnum == 4){
                eunit4hp = unitstats[2].health
                eunit4at = unitstats[2].attack
            }
            else if(randomnum == 5){
                eunit5hp = unitstats[2].health
                eunit5at = unitstats[2].attack
            }
            else if(randomnum == 6){
                eunit6hp = unitstats[2].health
                eunit6at = unitstats[2].attack
            }
        }
    }
    else if(compgold >= 80){
        if(document.getElementById("eunit" + [randomnum]) == null){
            let eLaneSelect = document.getElementById("lane" + randomnum)

            eLaneSelect.appendChild(enemyknight)
            
            compgold = compgold - unitstats[1].price
            compincome = compincome + unitstats[1].income

            if(randomnum == 0){
                eunit0hp = unitstats[1].health
                eunit0at = unitstats[1].attack
            }
            else if(randomnum == 1){
                eunit1hp = unitstats[1].health
                eunit1at = unitstats[1].attack
            }
            else if(randomnum == 2){
                eunit2hp = unitstats[1].health
                eunit2at = unitstats[1].attack
            }
            else if(randomnum == 3){
                eunit3hp = unitstats[1].health
                eunit3at = unitstats[1].attack
            }
            else if(randomnum == 4){
                eunit4hp = unitstats[1].health
                eunit4at = unitstats[1].attack
            }
            else if(randomnum == 5){
                eunit5hp = unitstats[1].health
                eunit5at = unitstats[1].attack
            }
            else if(randomnum == 6){
                eunit6hp = unitstats[1].health
                eunit6at = unitstats[1].attack
            }
        }
    }
    else if(compgold >= 20){
        if(document.getElementById("eunit" + [randomnum]) == null){
            let eLaneSelect = document.getElementById("lane" + randomnum)

            eLaneSelect.appendChild(enemysquire)
            compgold = compgold - unitstats[0].price
            compincome = compincome + unitstats[0].income

            if(randomnum == 0){
                eunit0hp = unitstats[0].health
                eunit0at = unitstats[0].attack
            }
            else if(randomnum == 1){
                eunit1hp = unitstats[0].health
                eunit1at = unitstats[0].attack
            }
            else if(randomnum == 2){
                eunit2hp = unitstats[0].health
                eunit2at = unitstats[0].attack
            }
            else if(randomnum == 3){
                eunit3hp = unitstats[0].health
                eunit3at = unitstats[0].attack
            }
            else if(randomnum == 4){
                eunit4hp = unitstats[0].health
                eunit4at = unitstats[0].attack
            }
            else if(randomnum == 5){
                eunit5hp = unitstats[0].health
                eunit5at = unitstats[0].attack
            }
            else if(randomnum == 6){
                eunit6hp = unitstats[0].health
                eunit6at = unitstats[0].attack
            }
        }
    }
    
    //  Adds event listener to unit spawned depending on randomnum's value
    if(randomnum == 0){
        elane0listener()
    }
    else if (randomnum == 1){
        elane1listener()
    }
    else if (randomnum == 2){
        elane2listener()
    }
    else if (randomnum == 3){
        elane3listener()
    }
    else if (randomnum == 4){
        elane4listener()
    }
    else if (randomnum == 5){
        elane5listener()
    }
    else if (randomnum == 6){
        elane6listener()
    }
        
    
    
    
}
// Gets all HTML elements with the class name "eunit" and stores them in array "eunit"
let eunit = document.getElementsByClassName("eunit");

// Indexes through array "eunit" and begins animation on all elements
function eanimstart(){
    for(i = 0; i < eunit.length; i++){
        eunit[i].style.animation = "enemymarch 20s 1";
    }
}

// Calls enemyspawn and eanimstart functions every 2 seconds
const computerspawninterval = setInterval(function(){
    enemyspawn()
    eanimstart()
}, 2000)

// Gives the computer it's income on an interval determined by which level you are currently playing
const computerincomeinterval = setInterval(function(){
    compgold = compgold + compincome;
}, compinterval)

// Creates event listener that acitvates upon the ending of the animation affecting it's corresponding HTML element which then calls a corresponding function
function elane0listener(){
    document.getElementById("eunit0").addEventListener("animationend", eanimend0)
}

function elane1listener(){
    document.getElementById("eunit1").addEventListener("animationend", eanimend1)
}

function elane2listener(){
    document.getElementById("eunit2").addEventListener("animationend", eanimend2)
}

function elane3listener(){
    document.getElementById("eunit3").addEventListener("animationend", eanimend3)
}

function elane4listener(){
    document.getElementById("eunit4").addEventListener("animationend", eanimend4)
}

function elane5listener(){
    document.getElementById("eunit5").addEventListener("animationend", eanimend5)
}

function elane6listener(){
    document.getElementById("eunit6").addEventListener("animationend", eanimend6)
}

// Functions called by the event listeners above

// Removes corresponding unit from the page and removes a point
function eanimend0(){
    document.getElementById("eunit0").remove()
    victorycon = victorycon - 1;
    winCondition()
}

function eanimend1(){
    document.getElementById("eunit1").remove()
    victorycon = victorycon - 1;
    winCondition()
}

function eanimend2(){
    document.getElementById("eunit2").remove()
    victorycon = victorycon - 1;
    winCondition()
}

function eanimend3(){
    document.getElementById("eunit3").remove()
    victorycon = victorycon - 1;
    winCondition()
}

function eanimend4(){
    document.getElementById("eunit4").remove()
    victorycon = victorycon - 1;
    winCondition()
}

function eanimend5(){
    document.getElementById("eunit5").remove()
    victorycon = victorycon - 1;
    winCondition()
}

function eanimend6(){
    document.getElementById("eunit6").remove()
    victorycon = victorycon - 1;
    console.log(victorycon)
    winCondition()
}
// End Enemy AI Functionality

// Start Victory Conditions Functionality

function winCondition(){
    // Stores the HTML element with the id "victorydisplay" in variable "victorydisplay" then uses the variable to dynamically show player's current points
    let victorydisplay = document.getElementById("victorydisplay")

    victorydisplay.innerHTML = `
        <p> Points : ${victorycon} </p>
    `
    // If player reaches 15 points or less than 0 points replaces the Inner HTML of the body to the levelselect screen and alerts the player as to whether they won or lost the level
    if(victorycon >= 15){

        alert("You Win!")
        let page = document.body
        page.innerHTML = `
        
    <div class="container-fluid titlecontainer">
        <div class="row justify-content-center">
            <div class="col-3 justify-content-center">
                <h2 class="lstitle">Level Select</h2>
            </div>
        </div>
    </div>

    <div class="container-fluid levelselectcontainer">
        <div class="row levelselect0 justify-content-around">
            <div class="col-1 levelcell justify-content-center" onclick="level1click()">
                <h2><a href="gamearea.html">1</a></h2>
            </div>
            <div class="col-1 levelcell justify-content-center" onclick="level2click()">
                <h2><a href="gamearea.html">2</a></h2>
            </div>
            <div class="col-1 levelcell justify-content-center" onclick="level3click()">
                <h2><a href="gamearea.html">3</a></h2>
            </div>
            <div class="col-1 levelcell justify-content-center" onclick="level4click()">
                <h2><a href="gamearea.html">4</a></h2>
            </div>
            <div class="col-1 levelcell justify-content-center" onclick="level5click()">
                <h2><a href="gamearea.html">5</a></h2>
            </div>
        </div>
        <div class="row levelselect1 justify-content-around">
            <div class="col-1 levelcell justify-content-center" onclick="level6click()">
                <h2><a href="gamearea.html">6</a></h2>
            </div>
            <div class="col-1 levelcell justify-content-center" onclick="level7click()">
                <h2><a href="gamearea.html">7</a></h2>
            </div>
            <div class="col-1 levelcell justify-content-center" onclick="level8click()">
                <h2><a href="gamearea.html">8</a></h2>
            </div>
            <div class="col-1 levelcell justify-content-center" onclick="level9click()">
                <h2><a href="gamearea.html">9</a></h2>
            </div>
            <div class="col-1 levelcell justify-content-center" onclick="level10click()">
                <h2><a href="gamearea.html">10</a></h2>
            </div>
        </div>
    </div>
    <div class="container-fluid controlscontainer">
        <div class="row">
            <h2>Controls</h2>
            <div class="col-3">
                <li>Select Lane: Up and Down Arrow Keys</li>
                <li>Select Unit: Left and Right Arrow Keys</li>
            </div>
            <div class="col-2">
                <li>Send Unit: Space Bar</li>
            </div>
            <h2>Win Condition</h2>
            <div class="col-2">
                <li>Gain points by having units reach the enemy side</li>    
            </div>
            <div class="col-2">
                <li>Win by reaching 15 points</li>    
            </div>
        </div>
    </div>

    <div class="container-fluid unitstatscontainer">
        <div class="row justify-content-center">
            <div class="col-2">
                <img src="squire.gif" alt="">
                <ul class="statlist">
                    <li>Squire</li>
                    <li>Cost: 20</li>
                    <li>Income: 20</li>
                    <li>Attack: 1</li>
                    <li>Health: 1</li>
                </ul>
            </div>
            <div class="col-2">
                <img src="knight.gif" alt="">
                <ul class="statlist">
                    <li>Knight</li>
                    <li>Cost: 40</li>
                    <li>Income: 30</li>
                    <li>Attack: 4</li>
                    <li>Health: 2</li>
                </ul>
            </div>
            <div class="col-2">
                <img src="armorknight.gif" alt="">
                <ul class="statlist">
                    <li>Armor Knight</li>
                    <li>Cost: 80</li>
                    <li>Income: 40</li>
                    <li>Attack: 4</li>
                    <li>Health: 10</li>
                </ul>
            </div>
            <div class="col-2">
                <img src="myrmidon.gif" alt="">
                <ul class="statlist">
                    <li>Myrmidon</li>
                    <li>Cost: 150</li>
                    <li>Income: 60</li>
                    <li>Attack: 10</li>
                    <li>Health: 8</li>
                </ul>
            </div>
            <div class="col-2">
                <img src="warden.gif" alt="">
                <ul class="statlist">
                    <li>Warden</li>
                    <li>Cost: 200</li>
                    <li>Income: 80</li>
                    <li>Attack: 8</li>
                    <li>Health: 25</li>
                </ul>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-2">
                <img src="wizard.gif" alt="">
                <ul class="statlist">
                    <li>Wizard</li>
                    <li>Cost: 250</li>
                    <li>Income: 100</li>
                    <li>Attack: 18</li>
                    <li>Health: 20</li>
                </ul>
            </div>
            <div class="col-2">
                <img src="slayer.gif" alt="">
                <ul class="statlist">
                    <li>Slayer</li>
                    <li>Cost: 400</li>
                    <li>Income: 150</li>
                    <li>Attack: 20</li>
                    <li>Health: 30</li>
                </ul>
            </div>
            <div class="col-2">
                <img src="king.gif" alt="">
                <ul class="statlist">
                    <li>King</li>
                    <li>Cost: 800</li>
                    <li>Income: 200</li>
                    <li>Attack: 30</li>
                    <li>Health: 40</li>
                </ul>
            </div>
            <div class="col-2">
                <img src="holywarrior.gif" alt="">
                <ul class="statlist">
                    <li>Holy Warrior</li>
                    <li>Cost: 1200</li>
                    <li>Income: 600</li>
                    <li>Attack: 40</li>
                    <li>Health: 60</li>
                </ul>
            </div>
            <div class="col-2">
                <img src="demon.gif" alt="">
                <ul class="statlist">
                    <li>Demon</li>
                    <li>Cost: 1800</li>
                    <li>Income: 800</li>
                    <li>Attack: 60</li>
                    <li>Health: 80</li>
                </ul>
            </div>
        </div>
    </div>
        `
    }
    else if( victorycon < 0){

        alert("You lose")
        let page = document.body
        page.innerHTML = `
        
    <div class="container-fluid titlecontainer">
        <div class="row justify-content-center">
            <div class="col-3 justify-content-center">
                <h2 class="lstitle">Level Select</h2>
            </div>
        </div>
    </div>

    <div class="container-fluid levelselectcontainer">
        <div class="row levelselect0 justify-content-around">
            <div class="col-1 levelcell justify-content-center" onclick="level1click()">
                <h2><a href="gamearea.html">1</a></h2>
            </div>
            <div class="col-1 levelcell justify-content-center" onclick="level2click()">
                <h2><a href="gamearea.html">2</a></h2>
            </div>
            <div class="col-1 levelcell justify-content-center" onclick="level3click()">
                <h2><a href="gamearea.html">3</a></h2>
            </div>
            <div class="col-1 levelcell justify-content-center" onclick="level4click()">
                <h2><a href="gamearea.html">4</a></h2>
            </div>
            <div class="col-1 levelcell justify-content-center" onclick="level5click()">
                <h2><a href="gamearea.html">5</a></h2>
            </div>
        </div>
        <div class="row levelselect1 justify-content-around">
            <div class="col-1 levelcell justify-content-center" onclick="level6click()">
                <h2><a href="gamearea.html">6</a></h2>
            </div>
            <div class="col-1 levelcell justify-content-center" onclick="level7click()">
                <h2><a href="gamearea.html">7</a></h2>
            </div>
            <div class="col-1 levelcell justify-content-center" onclick="level8click()">
                <h2><a href="gamearea.html">8</a></h2>
            </div>
            <div class="col-1 levelcell justify-content-center" onclick="level9click()">
                <h2><a href="gamearea.html">9</a></h2>
            </div>
            <div class="col-1 levelcell justify-content-center" onclick="level10click()">
                <h2><a href="gamearea.html">10</a></h2>
            </div>
        </div>
    </div>
    <div class="container-fluid controlscontainer">
        <div class="row">
            <h2>Controls</h2>
            <div class="col-3">
                <li>Select Lane: Up and Down Arrow Keys</li>
                <li>Select Unit: Left and Right Arrow Keys</li>
            </div>
            <div class="col-2">
                <li>Send Unit: Space Bar</li>
            </div>
            <h2>Win Condition</h2>
            <div class="col-2">
                <li>Gain points by having units reach the enemy side</li>    
            </div>
            <div class="col-2">
                <li>Win by reaching 15 points</li>    
            </div>
        </div>
    </div>

    <div class="container-fluid unitstatscontainer">
        <div class="row justify-content-center">
            <div class="col-2">
                <img src="squire.gif" alt="">
                <ul class="statlist">
                    <li>Squire</li>
                    <li>Cost: 20</li>
                    <li>Income: 20</li>
                    <li>Attack: 1</li>
                    <li>Health: 1</li>
                </ul>
            </div>
            <div class="col-2">
                <img src="knight.gif" alt="">
                <ul class="statlist">
                    <li>Knight</li>
                    <li>Cost: 40</li>
                    <li>Income: 30</li>
                    <li>Attack: 4</li>
                    <li>Health: 2</li>
                </ul>
            </div>
            <div class="col-2">
                <img src="armorknight.gif" alt="">
                <ul class="statlist">
                    <li>Armor Knight</li>
                    <li>Cost: 80</li>
                    <li>Income: 40</li>
                    <li>Attack: 4</li>
                    <li>Health: 10</li>
                </ul>
            </div>
            <div class="col-2">
                <img src="myrmidon.gif" alt="">
                <ul class="statlist">
                    <li>Myrmidon</li>
                    <li>Cost: 150</li>
                    <li>Income: 60</li>
                    <li>Attack: 10</li>
                    <li>Health: 8</li>
                </ul>
            </div>
            <div class="col-2">
                <img src="warden.gif" alt="">
                <ul class="statlist">
                    <li>Warden</li>
                    <li>Cost: 200</li>
                    <li>Income: 80</li>
                    <li>Attack: 8</li>
                    <li>Health: 25</li>
                </ul>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-2">
                <img src="wizard.gif" alt="">
                <ul class="statlist">
                    <li>Wizard</li>
                    <li>Cost: 250</li>
                    <li>Income: 100</li>
                    <li>Attack: 18</li>
                    <li>Health: 20</li>
                </ul>
            </div>
            <div class="col-2">
                <img src="slayer.gif" alt="">
                <ul class="statlist">
                    <li>Slayer</li>
                    <li>Cost: 400</li>
                    <li>Income: 150</li>
                    <li>Attack: 20</li>
                    <li>Health: 30</li>
                </ul>
            </div>
            <div class="col-2">
                <img src="king.gif" alt="">
                <ul class="statlist">
                    <li>King</li>
                    <li>Cost: 800</li>
                    <li>Income: 200</li>
                    <li>Attack: 30</li>
                    <li>Health: 40</li>
                </ul>
            </div>
            <div class="col-2">
                <img src="holywarrior.gif" alt="">
                <ul class="statlist">
                    <li>Holy Warrior</li>
                    <li>Cost: 1200</li>
                    <li>Income: 600</li>
                    <li>Attack: 40</li>
                    <li>Health: 60</li>
                </ul>
            </div>
            <div class="col-2">
                <img src="demon.gif" alt="">
                <ul class="statlist">
                    <li>Demon</li>
                    <li>Cost: 1800</li>
                    <li>Income: 800</li>
                    <li>Attack: 60</li>
                    <li>Health: 80</li>
                </ul>
            </div>
        </div>
    </div>
        `
    }
}

// End Victory Conditions Functionality



// Start Collision Detection Functionality

function collisiondet(){

    // Grabbing friendly units 
    let funit0 = document.getElementById("unit0")
    let funit1 = document.getElementById("unit1")
    let funit2 = document.getElementById("unit2")
    let funit3 = document.getElementById("unit3")
    let funit4 = document.getElementById("unit4")
    let funit5 = document.getElementById("unit5")
    let funit6 = document.getElementById("unit6")
    
    

    // Grabbing enemy units
    let eunit0 = document.getElementById("eunit0")
    let eunit1 = document.getElementById("eunit1")
    let eunit2 = document.getElementById("eunit2")
    let eunit3 = document.getElementById("eunit3")
    let eunit4 = document.getElementById("eunit4")
    let eunit5 = document.getElementById("eunit5")
    let eunit6 = document.getElementById("eunit6")


    // If a friendly unit and enemy unit exist on the same lane their coordinates are stored in variables "frect(lane number)" and "comrect(lane number)". Once the coordinates are stored they are compared against eachother using an algorithm from MDN's website that checks if two elements sides all have space between them and if one side is touching it activates the if statement.

    if(funit0 && eunit0){
        let frect0 = funit0.getBoundingClientRect();
        let comrect0 = eunit0.getBoundingClientRect();
        if (frect0.x < comrect0.x + comrect0.width &&
            frect0.x + frect0.width > comrect0.x &&
            frect0.y < comrect0.y + comrect0.height &&
            frect0.y + frect0.height > comrect0.y) {
                
            // When the if statement is activated subtract each unit's attack stat from each other's hp stat until one unit reaches 0 hp at which point the unit with 0 hp is removed from the game area
            while(unit0hp >= -50){
                eunit0hp = eunit0hp - unit0at;
                unit0hp = unit0hp - eunit0at;
                
                if(eunit0hp <= 0){
                    document.getElementById("eunit0").remove()
                    break
                }
                if(unit0hp <= 0){
                    document.getElementById("unit0").remove()
                    break
                } 
            }
        }
    }

    if(funit1 && eunit1){
        let frect1 = funit1.getBoundingClientRect();
        let comrect1 = eunit1.getBoundingClientRect();
        if (frect1.x < comrect1.x + comrect1.width &&
            frect1.x + frect1.width > comrect1.x &&
            frect1.y < comrect1.y + comrect1.height &&
            frect1.y + frect1.height > comrect1.y) { 
            while(unit1hp >= -50){
                eunit1hp = eunit1hp - unit1at;
                unit1hp = unit1hp - eunit1at;
                
                if(eunit1hp <= 0){
                    document.getElementById("eunit1").remove()
                    break
                }
                if(unit1hp <= 0){
                    document.getElementById("unit1").remove()
                    break
                } 
            }
        }
    }

    if(funit2 && eunit2){
        let frect2 = funit2.getBoundingClientRect();
        let comrect2 = eunit2.getBoundingClientRect();
        if (frect2.x < comrect2.x + comrect2.width &&
            frect2.x + frect2.width > comrect2.x &&
            frect2.y < comrect2.y + comrect2.height &&
            frect2.y + frect2.height > comrect2.y) { 
            while(unit2hp >= -50){
                eunit2hp = eunit2hp - unit2at;
                unit2hp = unit2hp - eunit2at;
                
                if(eunit2hp <= 0){
                    document.getElementById("eunit2").remove()
                    break
                }
                if(unit2hp <= 0){
                    document.getElementById("unit2").remove()
                    break
                } 
            }
        }
    }

    if(funit3 && eunit3){
        let frect3 = funit3.getBoundingClientRect();
        let comrect3 = eunit3.getBoundingClientRect();
        if (frect3.x < comrect3.x + comrect3.width &&
            frect3.x + frect3.width > comrect3.x &&
            frect3.y < comrect3.y + comrect3.height &&
            frect3.y + frect3.height > comrect3.y) { 
            while(unit3hp >= -50){
                eunit3hp = eunit3hp - unit3at;
                unit3hp = unit3hp - eunit3at;
                
                if(eunit3hp <= 0){
                    document.getElementById("eunit3").remove()
                    break
                }
                if(unit3hp <= 0){
                    document.getElementById("unit3").remove()
                    break
                } 
            }
        }
    }

    if(funit4 && eunit4){
        let frect4 = funit4.getBoundingClientRect();
        let comrect4 = eunit4.getBoundingClientRect();
        if (frect4.x < comrect4.x + comrect4.width &&
            frect4.x + frect4.width > comrect4.x &&
            frect4.y < comrect4.y + comrect4.height &&
            frect4.y + frect4.height > comrect4.y) { 
            while(unit4hp >= -50){
                eunit4hp = eunit4hp - unit4at;
                unit4hp = unit4hp - eunit4at;
                
                if(eunit4hp <= 0){
                    document.getElementById("eunit4").remove()
                    break
                }
                if(unit4hp <= 0){
                    document.getElementById("unit4").remove()
                    break
                } 
            }
        }
    }

    if(funit5 && eunit5){
        let frect5 = funit5.getBoundingClientRect();
        let comrect5 = eunit5.getBoundingClientRect();
        if (frect5.x < comrect5.x + comrect5.width &&
            frect5.x + frect5.width > comrect5.x &&
            frect5.y < comrect5.y + comrect5.height &&
            frect5.y + frect5.height > comrect5.y) { 
            while(unit5hp >= -50){
                eunit5hp = eunit5hp - unit5at;
                unit5hp = unit5hp - eunit5at;
                
                if(eunit5hp <= 0){
                    document.getElementById("eunit5").remove()
                    break
                }
                if(unit5hp <= 0){
                    document.getElementById("unit5").remove()
                    break
                } 
            }
        }
    }

    if(funit6 && eunit6){
        let frect6 = funit6.getBoundingClientRect();
        let comrect6 = eunit6.getBoundingClientRect();
        if (frect6.x < comrect6.x + comrect6.width &&
            frect6.x + frect6.width > comrect6.x &&
            frect6.y < comrect6.y + comrect6.height &&
            frect6.y + frect6.height > comrect6.y) { 
            while(unit6hp >= -50){
                eunit6hp = eunit6hp - unit6at;
                unit6hp = unit6hp - eunit6at;
                
                if(eunit6hp <= 0){
                    document.getElementById("eunit6").remove()
                    break
                }
                if(unit6hp <= 0){
                    document.getElementById("unit6").remove()
                    break
                } 
            }
        }
    }

    
}

// Calls the collision detection function every 250 ms
const collisioninterval = setInterval(function(){
    collisiondet()
}, 250)
// End Collision Detection Functionality

// Start Level Select Functionality

// Sets the value of the Local Storage item "levelselect" to the value of the level selected on the level select screen which is then used to determine computer handicap among other things
function level1click(){
    localStorage.setItem("levelselect", 0)
}

function level2click(){
    localStorage.setItem("levelselect", 1)
}

function level3click(){
    localStorage.setItem("levelselect", 2)
}

function level4click(){
    localStorage.setItem("levelselect", 3)
}

function level5click(){
    localStorage.setItem("levelselect", 4)
}

function level6click(){
    localStorage.setItem("levelselect", 5)
}

function level7click(){
    localStorage.setItem("levelselect", 6)
}

function level8click(){
    localStorage.setItem("levelselect", 7)
}

function level9click(){
    localStorage.setItem("levelselect", 8)
}

function level10click(){
    localStorage.setItem("levelselect", 9)
}

// End Level Select Functionality