// range for CR is -3(0), -2(1/8), -1(1/4), 0(1/2), all the way up to 30
function calcAll(){
    var CR = parseInt(document.getElementById("CR").value, 10);
    
    calcAvgDam(CR);
    calcSizeTypeAlign(CR);
    calcAvgHP(CR);
    calcProfBonus(CR);
    calcAvgAtkBonus(CR);
    calcAbilities(CR);
    calcAC(CR);
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
    avgDam = Math.floor((Math.random() + 0.5) * (1.0 / 2.0) * Math.pow(CR + 5.0, 2.0));
}

// Average HP for the monster
function calcAvgHP(CR){
    // Ideally the maximum health for CR 0 monsters is around 10, while the maximum for CR 30 creatures is around 700
    avgHP = Math.floor(Math.random() * 10) + Math.floor((Math.random() + 0.5) * (1.0 / 2.0) * Math.pow(CR + 5.0, 2.0));
    switch(size){
        case "Tiny":
            if(CR < 1)
                var numDice = Math.min(Math.max(Math.floor(avgHP / 2.5), 1), 99);
            else
                var numDice = Math.ceil(avgHP / 2.5) - CR
            extraHP = Math.floor(avgHP - Math.floor(numDice * 2.5));

            if(extraHP > 0)
                document.getElementById("avgHP").innerHTML = avgHP + " (" + numDice + "d4+" + extraHP + ")";
            else if(extraHP < 0)
                document.getElementById("avgHP").innerHTML = avgHP + " (" + numDice + "d4-" + Math.abs(extraHP) + ")";
            else
                document.getElementById("avgHP").innerHTML = avgHP + " (" + numDice + "d4)";
            break;
        case "Small":
            if(CR < 1)
                var numDice = Math.min(Math.max(Math.floor(avgHP / 3.5), 1), 99);
            else
                var numDice = Math.ceil(avgHP / 3.5) - CR
            extraHP = Math.floor(avgHP - Math.floor(numDice * 3.5));

            if(extraHP > 0)
                document.getElementById("avgHP").innerHTML = avgHP + " (" + numDice + "d6+" + extraHP + ")";
            else if(extraHP < 0)
                document.getElementById("avgHP").innerHTML = avgHP + " (" + numDice + "d6-" + Math.abs(extraHP) + ")";
            else
                document.getElementById("avgHP").innerHTML = avgHP + " (" + numDice + "d6)";
            break;
        case "Medium":
            if(CR < 1)
                var numDice = Math.min(Math.max(Math.floor(avgHP / 4.5), 1), 99);
            else
                var numDice = Math.ceil(avgHP / 4.5) - CR
            extraHP = Math.floor(avgHP - Math.floor(numDice * 4.5));

            if(extraHP > 0)
                document.getElementById("avgHP").innerHTML = avgHP + " (" + numDice + "d8+" + extraHP + ")";
            else if(extraHP < 0)
                document.getElementById("avgHP").innerHTML = avgHP + " (" + numDice + "d8-" + Math.abs(extraHP) + ")";
            else
                document.getElementById("avgHP").innerHTML = avgHP + " (" + numDice + "d8)";
            break;
        case "Large":
            if(CR < 1)
                var numDice = Math.min(Math.max(Math.floor(avgHP / 5.5), 1), 99);
            else
                var numDice = Math.ceil(avgHP / 5.5) - CR
            extraHP = Math.floor(avgHP - Math.floor(numDice * 5.5));

            if(extraHP > 0)
                document.getElementById("avgHP").innerHTML = avgHP + " (" + numDice + "d10+" + extraHP + ")";
            else if(extraHP < 0)
                document.getElementById("avgHP").innerHTML = avgHP + " (" + numDice + "d10-" + Math.abs(extraHP) + ")";
            else
                document.getElementById("avgHP").innerHTML = avgHP + " (" + numDice + "d10)";
            break;
        case "Huge":
            if(CR < 1)
                var numDice = Math.min(Math.max(Math.floor(avgHP / 6.5), 1), 99);
            else
                var numDice = Math.ceil(avgHP / 6.5) - CR
            extraHP = Math.floor(avgHP - Math.floor(numDice * 6.5));

            if(extraHP > 0)
                document.getElementById("avgHP").innerHTML = avgHP + " (" + numDice + "d12+" + extraHP + ")";
            else if(extraHP < 0)
                document.getElementById("avgHP").innerHTML = avgHP + " (" + numDice + "d12-" + Math.abs(extraHP) + ")";
            else
                document.getElementById("avgHP").innerHTML = avgHP + " (" + numDice + "d12)";
            break;
        case "Gargantuan":
            if(CR < 1)
                var numDice = Math.min(Math.max(Math.floor(avgHP / 10.5), 1), 99);
            else
                var numDice = Math.ceil(avgHP / 10.5) - CR
            extraHP = Math.floor(avgHP - Math.floor(numDice * 10.5));

            if(extraHP > 0)
                document.getElementById("avgHP").innerHTML = avgHP + " (" + numDice + "d20+" + extraHP + ")";
            else if(extraHP < 0)
                document.getElementById("avgHP").innerHTML = avgHP + " (" + numDice + "d20-" + Math.abs(extraHP) + ")";
            else
                document.getElementById("avgHP").innerHTML = avgHP + " (" + numDice + "d20)";
            break;
    }
}

function calcSizeTypeAlign(CR){
    if(CR == -3){
        // monster at CR 0 should have a size range between tiny and Medium
        switch(Math.floor(Math.random() * 3.0)){
            case 0:
                size = "Tiny";
                break;
            case 1:
                size = "Small";
                break;
            case 2:
                size = "Medium";
                break;
        }
    } else if(CR > -3 && CR < 2){    
        // monster above 0 and below CR 2 have a size range between tiny and large
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
    switch(size){
        case "Tiny":
            switch (Math.floor(Math.random() * 9.0)){
                case 0:
                    type = "aberration";
                    break;
                case 1:
                    type = "beast";
                    break;
                case 2:
                    type = "construct";
                    break;
                case 3:
                    type = "dragon";
                    break;
                case 4:
                    type = "elemental";
                    break;
                case 5:
                    type = "fey";
                    break;
                case 6:
                    type = "fiend";
                    break;
                case 7:
                    type = "ooze";
                    break;
                case 8:
                    type = "undead";
                    break;
            }
            break;
        case "Small":
            switch (Math.floor(Math.random() * 12.0)){
                case 0:
                    type = "aberration";
                    break;
                case 1:
                    type = "beast";
                    break;
                case 2:
                    type = "construct";
                    break;
                case 3:
                    type = "dragon";
                    break;
                case 4:
                    type = "elemental";
                    break;
                case 5:
                    type = "fey";
                    break;
                case 6:
                    type = "fiend";
                    break;
                case 7:
                    type = "ooze";
                    break;
                case 8:
                    type = "undead";
                    break;
                case 9:
                    type = "humanoid";
                    break;
                case 10:
                    type = "monstrosity";
                    break;
                case 11:
                    type = "plant";
                    break;
            }
            break;
        case "Medium":
            switch (Math.floor(Math.random() * 13.0)){
                case 0:
                    type = "aberration";
                    break;
                case 1:
                    type = "beast";
                    break;
                case 2:
                    type = "construct";
                    break;
                case 3:
                    type = "dragon";
                    break;
                case 4:
                    type = "elemental";
                    break;
                case 5:
                    type = "fey";
                    break;
                case 6:
                    type = "fiend";
                    break;
                case 7:
                    type = "ooze";
                    break;
                case 8:
                    type = "undead";
                    break;
                case 9:
                    type = "humanoid";
                    break;
                case 10:
                    type = "monstrosity";
                    break;
                case 11:
                    type = "plant";
                    break;
                case 12:
                    type = "celestial";
                    break;
            }
            break;
        case "Large":
            switch (Math.floor(Math.random() * 12.0)){
                case 0:
                    type = "aberration";
                    break;
                case 1:
                    type = "beast";
                    break;
                case 2:
                    type = "construct";
                    break;
                case 3:
                    type = "dragon";
                    break;
                case 4:
                    type = "elemental";
                    break;
                case 5:
                    type = "fiend";
                    break;
                case 6:
                    type = "ooze";
                    break;
                case 7:
                    type = "undead";
                    break;
                case 8:
                    type = "monstrosity";
                    break;
                case 9:
                    type = "plant";
                    break;
                case 10:
                    type = "celestial";
                    break;
                case 11:
                    type = "giant";
                    break;
            }
            break;
        case "Huge":
            switch (Math.floor(Math.random() * 11.0)){
                case 0:
                    type = "aberration";
                    break;
                case 1:
                    type = "beast";
                    break;
                case 3:
                    type = "dragon";
                    break;
                case 4:
                    type = "elemental";
                    break;
                case 5:
                    type = "fiend";
                    break;
                case 6:
                    type = "undead";
                    break;
                case 7:
                    type = "monstrosity";
                    break;
                case 8:
                    type = "plant";
                    break;
                case 9:
                    type = "celestial";
                    break;
                case 10:
                    type = "giant";
                    break;
            }
            break;
        case "Gargantuan":
            switch (Math.floor(Math.random() * 7.0)){
                case 0:
                    type = "aberration";
                    break;
                case 1:
                    type = "beast";
                    break;
                case 3:
                    type = "dragon";
                    break;
                case 4:
                    type = "elemental";
                    break;
                case 5:
                    type = "fiend";
                    break;
                case 6:
                    type = "monstrosity";
                    break;
            }
            break;
    }

    // Alignment is tied to type
    switch(type){
        case "beast":
            var align = "unaligned"
            break;
        case "celestial":
            switch(Math.floor(Math.random() * 3.0)){
                case 0:
                    var align = "lawful good"
                    break;
                case 1:
                    var align = "neutral good"
                    break;
                case 2:
                    var align = "chaotic good"
                    break;
            }
            break;
        case "elemental":
            var align = "neutral"
            break;
        case "fiend":
            switch(Math.floor(Math.random() * 3.0)){
                case 0:
                    var align = "lawful evil"
                    break;
                case 1:
                    var align = "neutral evil"
                    break;
                case 2:
                    var align = "chaotic evil"
                    break;
            }
            break;
        case "giant":
            switch(Math.floor(Math.random() * 3.0)){
                case 0:
                    var align = "chaotic evil"
                    break;
                case 1:
                    var align = "chaotic neutral"
                    break;
                case 2:
                    var align = "chaotic good"
                    break;
            }
            break;
        case "monstrosity":
            switch(Math.floor(Math.random() * 3.0)){
                case 0:
                    var align = "unaligned"
                    break;
                case 1:
                    var align = "chaotic evil"
                    break;
                case 2:
                    var align = "neutral evil"
                    break;
            }
            break;
        case "ooze":
            var align = "unaligned";
            break;
        case "plant":
            var align = "unaligned";
            break;
        case "undead":
            switch(Math.floor(Math.random() * 3.0)){
                case 0:
                    var align = "lawful evil"
                    break;
                case 1:
                    var align = "neutral evil"
                    break;
                case 2:
                    var align = "chaotic evil"
                    break;
            }
            break;
        default:
            // Any alignment
            switch(Math.floor(Math.random() * 9.0)){
                case 0:
                    var align = "lawful good"
                    break;
                case 1:
                    var align = "neutral good"
                    break;
                case 2:
                    var align = "chaotic good"
                    break;
                case 3:
                    var align = "lawful neutral"
                    break;
                case 4:
                    var align = "neutral"
                    break;
                case 5:
                    var align = "chaotic neutral"
                    break;
                case 6:
                    var align = "lawful evil"
                    break;
                case 7:
                    var align = "neutral evil"
                    break;
                case 8:
                    var align = "chaotic evil"
                    break;
            }
            break;
    }

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

// Some types do not use certain stats to fight
function calcPrimaryStat(abilities){
    //Determines stats based off of type
    switch(type){
        // Aberrations seem to use STR, DEX, CHA, and INT as primary stats
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
                    // Set CHA
                    abilities[5] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
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
                    // Set CHA
                    abilities[5] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
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
                    // Set CHA
                    abilities[5] = abilities[3] - Math.floor(Math.random() * (abilities[3] / 2));
                    break;
                case 3:
                    // Set CHA as the primary damage stat
                    abilities[5] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set DEX
                    abilities[1] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set STR
                    abilities[0] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set WIS
                    abilities[4] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set INT
                    abilities[3] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    break;
            }
            break;
        // Beasts use STR and DEX
        case "beast":
            switch(Math.floor(Math.random() * 2.0)){
                case 0:
                    // Set DEX as the primary damage stat
                    abilities[1] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set STR
                    abilities[0] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
                    break;
                case 1:
                    // Set STR as the primary damage stat
                    abilities[0] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set DEX
                    abilities[1] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
                    break;
            }

            // Poor INT
            abilities[3] = 10 - Math.floor(Math.random() * 9);
            // Decent WIS
            abilities[4] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
            // Poor CHA
            abilities[5] = 10 - Math.floor(Math.random() * 9);
            break;
        // Celestials uses STR, DEX, and CHA
        case "celestial":
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
                    // Set CHA
                    abilities[5] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
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
                    // Set CHA
                    abilities[5] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
                    break;
                case 2:
                    // Set CHA as the primary damage stat
                    abilities[5] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set DEX
                    abilities[1] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set INT
                    abilities[3] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set STR
                    abilities[0] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set WIS
                    abilities[4] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    break;
            }
            break;
        // Constructs use STR, and DEX
        case "construct":
            switch(Math.floor(Math.random() * 2.0)){
                case 0:
                    // Set DEX as the primary damage stat
                    abilities[1] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set STR
                    abilities[0] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
                    break;
                case 1:
                    // Set STR as the primary damage stat
                    abilities[0] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set DEX
                    abilities[1] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
                    break;
            }

            // Set INT
            abilities[3] = 10 - Math.floor(Math.random() * 5);
            // Set WIS
            abilities[4] = 10 - Math.floor(Math.random() * 5);
            // Set CHA
            abilities[5] = 10 - Math.floor(Math.random() * 5);
            break;
        // Dragons use STR
        case "dragon":
            // Set STR as the primary damage stat
            abilities[0] = ((avgAtkBonus - profBonus) * 2) + 10;
            // Set DEX
            abilities[1] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
            // Set INT
            abilities[3] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
            // Set WIS
            abilities[4] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
            // Set CHA
            abilities[5] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
            break;
        // Elementals use STR and DEX
        case "elemental":
            switch(Math.floor(Math.random() * 2.0)){
                case 0:
                    // Set DEX as the primary damage stat
                    abilities[1] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set STR
                    abilities[0] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
                    // Set INT
                    abilities[3] = abilities[1] - Math.floor(Math.random() * abilities[1]);
                    // Set WIS
                    abilities[4] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
                    // Set CHA
                    abilities[5] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
                    break;
                case 1:
                    // Set STR as the primary damage stat
                    abilities[0] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set DEX
                    abilities[1] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
                    // Set INT
                    abilities[3] = abilities[0] - Math.floor(Math.random() * abilities[0]);
                    // Set WIS
                    abilities[4] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
                    // Set CHA
                    abilities[5] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
                    break;
            }
            break;
        // Fey use STR, DEX, and CHA
        case "fey":
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
                    // Set CHA
                    abilities[5] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
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
                    // Set CHA
                    abilities[5] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
                    break;
                case 2:
                    // Set CHA as the primary damage stat
                    abilities[5] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set DEX
                    abilities[1] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set INT
                    abilities[3] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set STR
                    abilities[0] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set WIS
                    abilities[4] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    break;
            }
            break;
        // Fiends scale with STR, DEX, and CHA. INT seems to be tied to CHA
        case "fiend":
            switch(Math.floor(Math.random() * 3.0)){
                case 0:
                    // Set DEX as the primary damage stat
                    abilities[1] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set STR
                    abilities[0] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
                    // Set CHA
                    abilities[5] = abilities[1] - Math.floor(Math.random() * abilities[1]);
                    // Set INT
                    abilities[3] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set WIS
                    abilities[4] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
                    break;
                case 1:
                    // Set STR as the primary damage stat
                    abilities[0] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set DEX
                    abilities[1] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
                    // Set CHA
                    abilities[5] = abilities[0] - Math.floor(Math.random() * abilities[0]);
                    // Set INT
                    abilities[3] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set WIS
                    abilities[4] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
                    break;
                case 2:
                    // Set CHA as the primary damage stat
                    abilities[5] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set DEX
                    abilities[1] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set INT
                    abilities[3] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set WIS
                    abilities[4] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set STR
                    abilities[0] = abilities[5] - Math.floor(Math.random() * abilities[5]);
                    break;
            }
            break;
        // Giants STR
        case "giant":
            // Set STR as the primary damage stat
            abilities[0] = ((avgAtkBonus - profBonus) * 2) + 10;
            // Set DEX
            abilities[1] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
            // Set INT
            abilities[3] = abilities[0] - Math.floor(Math.random() * abilities[0]);
            // Set WIS
            abilities[4] = abilities[0] - Math.floor(Math.random() * abilities[0]);
            // Set CHA
            abilities[5] = abilities[0] - Math.floor(Math.random() * abilities[0]);
            break;
        // Humanoids use em all
        case "humanoid":
            switch(Math.floor(Math.random() * 5.0)){
                case 0:
                    // Set DEX as the primary damage stat
                    abilities[1] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set STR
                    abilities[0] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
                    // Set INT
                    abilities[3] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
                    // Set WIS
                    abilities[4] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
                    // Set CHA
                    abilities[5] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
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
                    // Set CHA
                    abilities[5] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
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
                    // Set CHA
                    abilities[5] = abilities[3] - Math.floor(Math.random() * (abilities[3] / 2));
                    break;
                case 3:
                    // Set CHA as the primary damage stat
                    abilities[5] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set DEX
                    abilities[1] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set STR
                    abilities[0] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set WIS
                    abilities[4] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set INT
                    abilities[3] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    break;
                case 4:
                    // Set WIS as the primary damage stat
                    abilities[4] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set DEX
                    abilities[1] = abilities[4] - Math.floor(Math.random() * (abilities[4] / 2));
                    // Set STR
                    abilities[0] = abilities[4] - Math.floor(Math.random() * (abilities[4] / 2));
                    // Set CHA
                    abilities[5] = abilities[4] - Math.floor(Math.random() * (abilities[4] / 2));
                    // Set INT
                    abilities[3] = abilities[4] - Math.floor(Math.random() * (abilities[4] / 2));
                    break;
            }
            break;
        // Monstrosities use STR
        case "monstrosity":
            // Set STR as the primary damage stat
            abilities[0] = ((avgAtkBonus - profBonus) * 2) + 10;
            // Set DEX
            abilities[1] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
            // Set INT
            abilities[3] = abilities[0] - Math.floor(Math.random() * abilities[0]);
            // Set WIS
            abilities[4] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
            // Set CHA
            abilities[5] = abilities[0] - Math.floor(Math.random() * abilities[0]);
            break;
        // Oozes use STR and DEX
        case "ooze":
            switch(Math.floor(Math.random() * 2.0)){
                case 0:
                    // Set DEX as the primary damage stat
                    abilities[1] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set STR
                    abilities[0] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
                    // Set INT
                    abilities[3] = abilities[1] - Math.floor(Math.random() * abilities[1]);
                    // Set WIS
                    abilities[4] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
                    break;
                case 1:
                    // Set STR as the primary damage stat
                    abilities[0] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set DEX
                    abilities[1] = abilities[0] - Math.floor(Math.random() * abilities[0]);
                    // Set INT
                    abilities[3] = abilities[0] - Math.floor(Math.random() * abilities[0]);
                    // Set WIS
                    abilities[4] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
                    break;
            }
            
            // Set CHA
            abilities[5] = 10 - Math.floor(Math.random() * 5);
            break;
        // Plants use STR and WIS
        case "plant":
            switch(Math.floor(Math.random() * 2.0)){
                case 0:
                    // Set STR as the primary damage stat
                    abilities[0] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set DEX
                    abilities[1] = abilities[0] - Math.floor(Math.random() * abilities[0]);
                    // Set INT
                    abilities[3] = abilities[0] - Math.floor(Math.random() * abilities[0]);
                    // Set WIS
                    abilities[4] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
                    break;
                case 1:
                    // Set WIS as the primary damage stat
                    abilities[4] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set DEX
                    abilities[1] = abilities[4] - Math.floor(Math.random() * (abilities[4] / 2));
                    // Set STR
                    abilities[0] = abilities[4] - Math.floor(Math.random() * abilities[4]);
                    // Set INT
                    abilities[3] = abilities[4] - Math.floor(Math.random() * (abilities[4] / 2));
                    break;
            }

            // Set CHA
            abilities[5] = 10 - Math.floor(Math.random() * 5);
            break;
        // Undead use STR, DEX, INT, and CHA
        case "undead":
            switch(Math.floor(Math.random() * 4.0)){
                case 0:
                    // Set DEX as the primary damage stat
                    abilities[1] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set STR
                    abilities[0] = abilities[1] - Math.floor(Math.random() * abilities[1]);
                    // Set CHA
                    abilities[5] = abilities[1] - Math.floor(Math.random() * abilities[1]);
                    // Set INT
                    abilities[3] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set WIS
                    abilities[4] = abilities[1] - Math.floor(Math.random() * (abilities[1] / 2));
                    break;
                case 1:
                    // Set STR as the primary damage stat
                    abilities[0] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set DEX
                    abilities[1] = abilities[0] - Math.floor(Math.random() * (abilities[0] / 2));
                    // Set CHA
                    abilities[5] = abilities[0] - Math.floor(Math.random() * abilities[0]);
                    // Set INT
                    abilities[3] = abilities[5] - Math.floor(Math.random() * abilities[5]);
                    // Set WIS
                    abilities[4] = abilities[0] - Math.floor(Math.random() * abilities[0]);
                    break;
                case 2:
                    // Set INT as the primary damage stat
                    abilities[3] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set DEX
                    abilities[1] = abilities[3] - Math.floor(Math.random() * (abilities[3] / 2));
                    // Set STR
                    abilities[0] = abilities[3] - Math.floor(Math.random() * abilities[3]);
                    // Set WIS
                    abilities[4] = abilities[3] - Math.floor(Math.random() * (abilities[3] / 2));
                    // Set CHA
                    abilities[5] = abilities[3] - Math.floor(Math.random() * (abilities[3] / 2));
                    break;
                case 3:
                    // Set CHA as the primary damage stat
                    abilities[5] = ((avgAtkBonus - profBonus) * 2) + 10;
                    // Set DEX
                    abilities[1] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set STR
                    abilities[0] = abilities[5] - Math.floor(Math.random() * abilities[5]);
                    // Set WIS
                    abilities[4] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    // Set INT
                    abilities[3] = abilities[5] - Math.floor(Math.random() * (abilities[5] / 2));
                    break;
            }
            break;
    }
}

function calcAbilities(CR){
    // Initialize the ability scores
    abilities = [10, 10, 10, 10, 10, 10];

    // Randomly figure out what the primary damage stat is
    calcPrimaryStat(abilities);

    // Set CON
    if(CR < 1){
        abilities[2] = Math.ceil(extraHP * 2.0 + 10);
    } else{
        abilities[2] = Math.floor(Math.ceil(extraHP * 2.0 + 10) / CR);
    }
    updateAbilities(abilities);
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