function babylonianCards() {
    return flatten([
        {
            "cardType": "city",
            "folder": "nations/babylon",
            "title": "Babylon",
            "subTitle": "Babylon - Starting City",
            "placement": "city_placement",
            "image": "mystic",
            "print": false,
            "combat": {
                "defense": 14
            },
            "mod": [ "food", "wood" ],
            "ability": "Pay 1 wood to search the civic deck for a temple or university",
            "abilitySymbol": "start"
        }, {
            "cardType": "fortification",
            "folder": "nations/babylon",
            "title": "Towers of Babylon",
            "subTitle": "Babylon - Starting Fort",
            "placement": "building_placement",
            "image": "mystic",
            "print": false,
            "bottomCombat": {
                "init": 6,
                "attack": 1,
                "attackType": "ranged",
                "defense": 10
            },
            "mod": [ "attrition" ]
        }, {
            "cardType": "city",
            "folder": "nations/babylon",
            "title": "Sippar",
            "subTitle": "Babylon - City 2",
            "placement": "city_placement",
            "image": "mystic",
            "print": false,
            "cost": [
                { "costType": "food", "costVal": 2 }
            ],
            "combat": {
                "defense": 17
            },
            "vps": 5,
            "ability": "Start of gather phase: Pay 1 stone to search the military deck for a barracks",
            "abilitySymbol": "start"
        }, {
            "cardType": "city",
            "folder": "nations/babylon",
            "title": "Isin",
            "subTitle": "Babylon - City 3",
            "placement": "city_placement",
            "image": "mystic",
            "print": false,
            "cost": [
                { "costType": "food", "costVal": 4 }
            ],
            "combat": {
                "defense": 18
            },
            "vps": 5,
            "mod": [ "influence" ],
            "ability": "Start of gather phase: Pay 1 stone to search the military deck for a stable",
            "abilitySymbol": "start"
        }, {
            "cardType": "city",
            "folder": "nations/babylon",
            "title": "Nippur",
            "subTitle": "Babylon - City 4",
            "placement": "city_placement",
            "image": "mystic",
            "print": false,
            "cost": [
                { "costType": "food", "costVal": 6 }
            ],
            "combat": {
                "defense": 16
            },
            "vps": 5,
            "ability": "Start of gather phase: Pay 1 stone to search the military deck for any card",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "folder": "nations/babylon",
            "subType": "military",
            "title": "Hammurabi's Rule",
            "subTitle": "Babylon - Starting Military",
            "placement": "research_placement",
            "image": "rome-statue",
            "print": false,
            "mod": [ "increase_max_army_size", "increase_max_army_size", "increase_max_army_size", "increase_max_army_size", "army_placement" ],
            "ability": "Start of game: Place a city on the board. You may only build military buildings in this city until you gain your second civic research.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "folder": "nations/babylon",
            "subType": "military",
            "title": "Kassite Domination",
            "subTitle": "Babylon",
            "placement": "research_placement",
            "image": "rome-statue",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size", "army_placement" ],
            "ability": "Upon researching: Place a city on the board. You may only build military buildings in this city until you gain your third civic research.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "folder": "nations/babylon",
            "subType": "military",
            "title": "Inheritors of Sargon",
            "subTitle": "Babylon",
            "placement": "research_placement",
            "image": "rome-statue",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size", "army_placement" ],
            "ability": "When fighting a battle, decrease the initiative of 1 card by 1.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "folder": "nations/babylon",
            "subType": "military",
            "title": "Bladed Mace",
            "subTitle": "Babylon",
            "placement": "research_placement",
            "image": "rome-statue",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size", "army_placement" ],
            "ability": "When fighting a battle, do 1 damage at initiative 1 as long as your army has a melee foot troop.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "folder": "nations/babylon",
            "subType": "civic",
            "title": "Gate of the Gods",
            "subTitle": "Babylon - Starting Civic",
            "placement": "research_placement",
            "image": "carved-entry",
            "print": false,
            "mod": [ "increase_city_limit" ],
            "ability": "Start of game: Search the research deck for 1 card.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "folder": "nations/babylon",
            "subType": "civic",
            "title": "Love of Ishtar",
            "subTitle": "Babylon",
            "placement": "research_placement",
            "image": "carved-entry",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "stone", "costVal": 2 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "Any city with a lumbermill and mine instantly gains a temple drawn from the civic deck",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "folder": "nations/babylon",
            "subType": "civic",
            "title": "Hammurabi's Law Code",
            "subTitle": "Babylon",
            "placement": "research_placement",
            "image": "carved-entry",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "stone", "costVal": 2 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "Any city with either lumbermill and mine instantly gains a university drawn from the civic deck",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "folder": "nations/babylon",
            "subType": "civic",
            "title": "Hanging Gardens",
            "subTitle": "Babylon",
            "placement": "research_placement",
            "image": "carved-entry",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "stone", "costVal": 2 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "Gain 2 VPs if you have all four civic researches",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "folder": "nations/babylon",
            "subType": "commerce",
            "title": "Gifts to the Ziggurat",
            "subTitle": "Babylon - Starting Commerce",
            "placement": "research_placement",
            "image": "merchant",
            "print": false,
            "mod": [ "increase_max_income", "increase_max_income", "increase_max_income" ],
            "ability": "Start of the game: Gain 1 wealth.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "folder": "nations/babylon",
            "subType": "commerce",
            "title": "Boats of Euphrate",
            "subTitle": "Babylon",
            "placement": "research_placement",
            "image": "merchant",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "food", "costVal": 2 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "Start of gather phase: If you have 3 food and 3 wood in your supply gain 1 wealth",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "folder": "nations/babylon",
            "subType": "commerce",
            "title": "Pharaoh's Gift",
            "subTitle": "Babylon",
            "placement": "research_placement",
            "image": "merchant",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 3 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "Upon researching gain 2 food, 2 wood, and 2 stone",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "folder": "nations/babylon",
            "subType": "commerce",
            "title": "Land Tax",
            "subTitle": "Babylon",
            "placement": "research_placement",
            "image": "merchant",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "End of gather phase: Discard down to 0 cards to gain 3 wealth.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "folder": "nations/babylon",
            "subType": "science",
            "title": "City Judges",
            "subTitle": "Babylon - Starting Science",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "mod": [ "increase_hand_limit", "increase_hand_limit", "knowledge", "knowledge" ],
            "ability": "Increase hand limit by 2",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "folder": "nations/babylon",
            "subType": "science",
            "title": "Zapping Pots",
            "subTitle": "Babylon",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "Gather phase: Put 1 resource on an opponents research card to gain access to that ability this turn. That opponent gains this resource at the end of the turn.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "folder": "nations/babylon",
            "subType": "science",
            "title": "Plow of Ninurta",
            "subTitle": "Babylon",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_hand_limit", "knowledge", "food" ],
            "ability": "Upon researching: Search the civic deck for a farm and build it for free.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "folder": "nations/babylon",
            "subType": "science",
            "title": "Dividing the Circle",
            "subTitle": "Babylon",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "Gain 1 VP if you have all four science researches",
            "abilitySymbol": "start"
        }
    ]);
}
