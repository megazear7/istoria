function egyptianCards() {
    return flatten([
        {
            "cardType": "city",
            "title": "Menes",
            "subTitle": "Egypt - Starting City",
            "placement": "city",
            "image": "mystic",
            "print": true,
            "combat": {
                "defense": 14
            },
            "mod": [ "food", "food" ],
            "ability": "When building a small/large lumber mill, place 5/10 wood on it instead. This lumber mill gathers wood from this suppply. When the supply runs out, discard the lumber mill.",
            "abilitySymbol": "start"
        }, {
            "cardType": "fortification",
            "title": "Walls of the Ruler",
            "subTitle": "Egypt - Starting Fort",
            "placement": "building",
            "image": "mystic",
            "print": true,
            "bottomCombat": {
                "init": 6,
                "attack": 1,
                "attackType": "ranged",
                "defense": 10
            },
            "mod": [ "attrition" ]
        }, {
            "cardType": "city",
            "title": "Thebes",
            "subTitle": "Egypt - City 2",
            "placement": "city",
            "image": "mystic",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 2 }
            ],
            "combat": {
                "defense": 17
            },
            "vps": 5,
            "ability": "Upon building: Search the civic deck for a market and build it into this city for free.",
            "abilitySymbol": "start"
        }, {
            "cardType": "city",
            "title": "Memphis",
            "subTitle": "Egypt - City 3",
            "placement": "city",
            "image": "mystic",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 4 }
            ],
            "combat": {
                "defense": 18
            },
            "vps": 5,
            "mod": [ "influence" ],
            "ability": "Upon building: Search the civic deck for a market and build it into this city for free.",
            "abilitySymbol": "start"
        }, {
            "cardType": "city",
            "title": "Abydos",
            "subTitle": "Egypt - City 4",
            "placement": "city",
            "image": "mystic",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 6 }
            ],
            "combat": {
                "defense": 16
            },
            "vps": 5,
            "ability": "Upon building: Research 1 research card at half cost, rounded down.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "subType": "military",
            "title": "Pharaoh's Guard",
            "subTitle": "Egypt - Starting Military",
            "placement": "research",
            "image": "rome-statue",
            "print": true,
            "mod": [ "increase_max_army_size", "increase_max_army_size", "increase_max_army_size", "increase_max_army_size", "army" ],
            "ability": "You may not build mounted troops. All foot troops cost 1 extra wealth but have their initiative reduced by 1.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "subType": "military",
            "title": "Pharoh's March",
            "subTitle": "Egypt",
            "placement": "research",
            "image": "rome-statue",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 3 },
                { "costType": "stone", "costVal": 3 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size", "army" ],
            "ability": "Start of gather phase: You may not build mounted troops. Pay 1 wealth to place your army adjacent to your opponents capital.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "subType": "military",
            "title": "War Chariot",
            "subTitle": "Egypt",
            "placement": "research",
            "image": "rome-statue",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size", "army" ],
            "ability": "You may build mounted troops. All mounted troops cost 1 extra wealth but do 1 extra damage and have 1 extra defense.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "subType": "military",
            "title": "Sea Peoples Attack",
            "subTitle": "Egypt",
            "placement": "research",
            "image": "rome-statue",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size", "army" ],
            "ability": "Upon researching: Remove your largest army. Gain 1 wealth for each card and search the military building deck for a fortification and build it for free.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "subType": "civic",
            "title": "Flooding of the Nile",
            "subTitle": "Egypt - Starting Civic",
            "placement": "research",
            "image": "carved-entry",
            "print": true,
            "mod": [ "increase_city_limit" ],
            "ability": "Start of gather phase: Place 1 food from the supply onto this card. If this is the 3rd food on the card, gather this food to your supply.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "subType": "civic",
            "title": "Pyarmid Building",
            "subTitle": "Egypt",
            "placement": "research",
            "image": "carved-entry",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "Build wonders for 4 less resources",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "subType": "civic",
            "title": "Corvee Labor",
            "subTitle": "Egypt",
            "placement": "research",
            "image": "carved-entry",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "Requires 3 military research. Skip your recruit and deploy phase to build one civic building for free.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "subType": "civic",
            "title": "Hieroglyphs",
            "subTitle": "Egypt",
            "placement": "research",
            "image": "carved-entry",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "Once per turn: Spend 5 stone to gain 1 VP.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "subType": "commerce",
            "title": "Grain Storage",
            "subTitle": "Egypt - Starting Commerce",
            "placement": "research",
            "image": "merchant",
            "print": true,
            "mod": [ "increase_max_income", "increase_max_income", "increase_max_income" ],
            "ability": "Start of gather phase: If you have no food, gain 1 food.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "subType": "commerce",
            "title": "Minoan Traders",
            "subTitle": "Egypt",
            "placement": "research",
            "image": "merchant",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "increase_max_income", "wealth" ],
            "ability": "Upon researching: Draw one research card from an opponents deck and add it to your hand. Draw cards from your deck until you find a card of the same type. Add it to the opponents deck.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "subType": "commerce",
            "title": "Kingly Gifts",
            "subTitle": "Egypt",
            "placement": "research",
            "image": "merchant",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "Start of gather phase: Give an opponent 3 wealth. Gather 6 resources of food, wood, or stone.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "subType": "commerce",
            "title": "Coinage",
            "subTitle": "Egypt",
            "placement": "research",
            "image": "merchant",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "Gather phase: Exchange 1 wealth for 2 wood or stone.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "subType": "science",
            "title": "Divine Pharaoh",
            "subTitle": "Egypt - Starting Science",
            "placement": "research",
            "image": "monk",
            "print": true,
            "mod": [ "increase_hand_limit", "increase_hand_limit", "knowledge", "knowledge" ],
            "ability": "After building a city draw and recruit two foot troop cards for free",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "subType": "science",
            "title": "Khopesh",
            "subTitle": "Egypt",
            "placement": "research",
            "image": "monk",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "stone", "costVal": 3 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "Increase damage of foot troop cards by 1.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "subType": "science",
            "title": "Egyptian Faience",
            "subTitle": "Egypt",
            "placement": "research",
            "image": "monk",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "Place 1 stone on this card per turn. After placing the 3rd stone on this card, gather this stone.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "subType": "science",
            "title": "Wooden Scaffolding",
            "subTitle": "Egypt",
            "placement": "research",
            "image": "monk",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "Spend wood in place of stone",
            "abilitySymbol": "start"
        }
    ]);
}
