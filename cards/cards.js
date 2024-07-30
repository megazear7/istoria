// The Dawn of Civilization
$.evalFile(activeDocument.path.fullName + "/cards/nations/" + "akkadians.js");
$.evalFile(activeDocument.path.fullName + "/cards/nations/" + "sumerians.js");

// The Forgotten Empires
$.evalFile(activeDocument.path.fullName + "/cards/nations/" + "egypt.js");
$.evalFile(activeDocument.path.fullName + "/cards/nations/" + "minoan.js");
$.evalFile(activeDocument.path.fullName + "/cards/nations/" + "hittite.js");
$.evalFile(activeDocument.path.fullName + "/cards/nations/" + "babylon.js");

// The Classical Age
$.evalFile(activeDocument.path.fullName + "/cards/nations/" + "roman-republic.js");
$.evalFile(activeDocument.path.fullName + "/cards/nations/" + "greek.js");
$.evalFile(activeDocument.path.fullName + "/cards/nations/" + "carthage.js");
$.evalFile(activeDocument.path.fullName + "/cards/nations/" + "persia.js");

// Standard troop cards
$.evalFile(activeDocument.path.fullName + "/cards/troops/" + "foot-troops.js");
$.evalFile(activeDocument.path.fullName + "/cards/troops/" + "mounted-troops.js");
$.evalFile(activeDocument.path.fullName + "/cards/troops/" + "siege-enginge-troops.js");

// Standard building cards
$.evalFile(activeDocument.path.fullName + "/cards/buildings/" + "civic-buildings.js");
$.evalFile(activeDocument.path.fullName + "/cards/buildings/" + "military-buildings.js");
$.evalFile(activeDocument.path.fullName + "/cards/buildings/" + "wonders.js");

$.evalFile(activeDocument.path.fullName + "/cards/" + "objectives.js");

function makeCards() {
    var cards = [];

    cards = cards.concat(sumerianCards());
    cards = cards.concat(akkadianCards());

    cards = cards.concat(egyptianCards());
    cards = cards.concat(minoanCards());
    cards = cards.concat(hittiteCards());
    cards = cards.concat(babylonianCards());

    cards = cards.concat(romanRepublicCards());
    cards = cards.concat(greekCards());
    cards = cards.concat(carthaginianCards());
    cards = cards.concat(persianCards());
    
    cards = cards.concat(footTroops());
    cards = cards.concat(mountedTroops());
    cards = cards.concat(siegeEngines());

    cards = cards.concat(civicBuildings());
    cards = cards.concat(militaryBuildings());
    cards = cards.concat(wonderCards());

    cards = cards.concat(objectiveCards());

    // Override the card list here;
    cards = objectiveCards();

    var finalCards = [];
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        if (card.print) {
            finalCards.push(card);
        }
    }
    return finalCards;
}
