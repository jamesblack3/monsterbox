// range for CR is -3(0), -2(1/8), -1(1/4), 0(1/2), all the way up to 30
function calcAll(){
    var CR = parseInt(document.getElementById("CR").value, 10);
    calcAC(CR);
    calcAvgDam(CR);
    calcAvgHP(CR);
    calcSizeTypeAlign(CR);
    calcProfBonus(CR);
    calcAvgAtkBonus(CR);
    calcAbilities(CR);
}

function calcAC(CR){
    AC = Math.floor(13 + (1.0 / 3.0) * CR + (Math.random() * 6.0) - 3.0);
    document.getElementById("AC").innerHTML = AC;
}

// Average damage the monster should be dealing each turn, used by other functions
function calcAvgAtkBonus(CR){
    avgAtkBonus = Math.floor(4.0 + ((1.0 / 2.0) * CR + ((Math.random() * 2.0) - 1.0)));
}

// Average damage the monster should be dealing each turn, used by other functions
function calcAvgDam(CR){
    avgDam = Math.floor((Math.random() + 0.5) * (1.0/2.0) * Math.pow(CR + 5.0, 2.0));
}

// Average HP for the monster
function calcAvgHP(CR){
    avgHP = Math.floor((Math.random() + 0.5) * (1.0/2.0) * Math.pow(CR + 5.0, 2.0));
    document.getElementById("avgHP").innerHTML = avgHP;
}

function calcSizeTypeAlign(CR){
    if(CR < 2){    
        // monster below CR 2 have a size range between tiny and large
        switch(Math.floor(Math.random() * 4.0)){
            case 0:
                size = "Tiny";
                break;
            case 1:
                size = "Small";
                break;
            case 2:
                size = "Medium";
                break;
            case 3:
                size = "Large";
                break;
        }
    //anything between CR 2 and 10 should have a size of medium to huge
    } else if(CR >= 2 && CR < 11){
        switch (Math.floor(Math.random() * 3.0)){
            case 0:
                size = "Medium";
                break;
            case 1:
                size = "Large";
                break;
            case 2:
                size = "Huge";
                break;
        }
    //anything between CR 11 and 21 should be between size medium and gargantuan
    } else if(CR >= 11 && CR < 22){    
        switch (Math.floor(Math.random() * 3.0)){
            case 0:
                size = "Medium";
                break;
            case 1:
                size = "Large";
                break;
            case 2:
                size = "Huge";
                break;
            case 3:
                size = "Gargantuan";
                break;
        }
    //anything more than CR 21 should be gargantuan in size
    } else{
        size = "Gargantuan";
    }
    
    //sets the type at random
    switch(Math.floor(Math.random() * 14.0)){
        case 0:
            type = "aberration";
            break;
        case 1:
            type = "beast";
            break;
        case 2:
            type = "celestial";
            break;
        case 3:
            type = "construct";
            break;
        case 4:
            type = "dragon";
            break;
        case 5:
            type = "elemental";
            break;
        case 6:
            type = "fey";
            break;
        case 7:
            type = "fiend";
            break;
        case 8:
            type = "giant";
            break;
        case 9:
            type = "humanoid";
            break;
        case 10:
            type = "monstrosity";
            break;
        case 11:
            type = "ooze";
            break;
        case 12:
            type = "plant";
            break;
        case 13:
            type = "undead";
            break;
    }

    // Alignment will have to be researched, it is likely tied to type
    var align = "unaligned";
    var sizeTypeAlign = size + " " + type + ", " + align;
    document.getElementById("sizeTypeAlign").innerHTML = sizeTypeAlign;
}

function calcProfBonus(CR){
    // Anything below CR 2 just has profBonus of 2
    profBonus = 2;
    if(CR > 1){
        profBonus = Math.floor(((1.0/4.0) * (CR)) + (7.0/4.0));
    } else{
        profBonus = Math.floor(((1.0/4.0) * (CR)) + (7.0/4.0));
    }
}

function calcAbilities(CR){
    // Initialize the ability scores
    var abilities = [10, 10, 10, 10, 10, 10];

    // Randomly figure out what the primary damage stat is
    switch(Math.floor(Math.random() * 2.0)){
        case 0:
            // Set DEX as the primary damage stat
            abilities[1] = ((avgAtkBonus - profBonus) * 2) + 10;
            // Set STR
            abilities[0] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
            // Set INT
            abilities[3] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
            // Set WIS
            abilities[4] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
            break;
        case 1:
            // Set STR as the primary damage stat
            abilities[0] = ((avgAtkBonus - profBonus) * 2) + 10;
            // Set DEX
            abilities[1] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
            // Set INT
            abilities[3] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
            // Set WIS
            abilities[4] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
            break;
        case 2:
            // Set INT as the primary damage stat
            abilities[3] = ((avgAtkBonus - profBonus) * 2) + 10;
            // Set DEX
            abilities[1] = abilities[3] - Math.floor(Math.random() * (abilities[3] / 2));
            // Set STR
            abilities[0] = abilities[3] - Math.floor(Math.random() * (abilities[3] / 2));
            // Set WIS
            abilities[4] = abilities[3] - Math.floor(Math.random() * (abilities[3] / 2));
            break;
        case 3:
            // Set WIS as the primary damage stat
            abilities[4] = ((avgAtkBonus - profBonus) * 2) + 10;
            // Set DEX
            abilities[1] = abilities[4] - Math.floor(Math.random() * (abilities[4] / 2));
            // Set INT
            abilities[3] = abilities[4] - Math.floor(Math.random() * (abilities[4] / 2));
            // Set STR
            abilities[0] = abilities[4] - Math.floor(Math.random() * (abilities[4] / 2));
            break;
    }

    // TODO: Set CON

    // Set CHA
    abilities[5] = Math.floor(abilities[5] + (1.0 / 3.0) * (CR));

    updateAbilities(abilities);
}

// Some types do not use certain stats to fight
function calcPrimaryStat(CR){
    //sets the type at random
    switch(type){
        // Aberrations seem to use STR, DEX, and INT as primary stats
        case "aberration":
            switch(Math.floor(Math.random() * 3.0)){
                case 0:
                    // Set DEX as the primary damage stat
                    abilities[1] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set STR
                    abilities[0] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
                    // Set INT
                    abilities[3] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
                    // Set WIS
                    abilities[4] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
                    break;
                case 1:
                    // Set STR as the primary damage stat
                    abilities[0] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set DEX
                    abilities[1] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
                    // Set INT
                    abilities[3] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
                    // Set WIS
                    abilities[4] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
                    break;
                case 2:
                    // Set INT as the primary damage stat
                    abilities[3] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set DEX
                    abilities[1] = abilities[3] - Math.floor(Math.random() * (abilities[3] / 2));
                    // Set STR
                    abilities[0] = abilities[3] - Math.floor(Math.random() * (abilities[3] / 2));
                    // Set WIS
                    abilities[4] = abilities[3] - Math.floor(Math.random() * (abilities[3] / 2));
                    break;
            }
            break;
        case "beast":
            break;
        case "celestial":
            break;
        case "construct":
            break;
        case "dragon":
            break;
        case "elemental":
            break;
        case "fey":
            break;
        case "fiend":
            break;
        case "giant":
            break;
        case "humanoid":
            break;
        case "monstrosity":
            break;
        case "ooze":
            break;
        case "plant":
            break;
        case "undead":
            break;
    }
}

function updateAbilities(abilities){
    var abilityNames = ["str", "dex", "con", "int", "wis", "cha"];

    // Update the abilities block
    for (var i = 0; i < abilities.length; i++){
        document.getElementsByTagName("abilities-block")[0].shadowRoot.getElementById(abilityNames[i]).innerText =
            abilities[i] + " (" + formattedModifier(abilityModifier(abilities[i])) + ")";
    }
}

// From abilities-block.js. Having import issues so I just moved the functions I need here
function abilityModifier(abilityScore){
    let score = parseInt(abilityScore, 10);
    return Math.floor((score - 10) / 2);
}

// Also from abilities-block.js
function formattedModifier(abilityModifier){
    if (abilityModifier >= 0){
      return '+' + abilityModifier;
    }

    // This is an en dash, NOT a "normal" dash. The minus sign needs to be more
    // visible.
    return '–' + Math.abs(abilityModifier);
}