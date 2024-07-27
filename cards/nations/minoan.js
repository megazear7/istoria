function minoanCards() {
    return flatten([
        {
            "cardType": "city",
            "title": "Knossos",
            "subTitle": "Minoan - Starting City",
            "placement": "city_placement",
            "image": "mystic",
            "print": false,
            "combat": {
                "defense": 14
            },
            "mod": [ "food", "wood", "attrition" ],
            "ability": "Building phase: Forgo building this turn to gain 1 food",
            "abilitySymbol": "start"
        }, {
            "cardType": "fortification",
            "title": "Minotaur Labyrinth",
            "subTitle": "Minoan - Starting Fort",
            "placement": "building_placement",
            "image": "mystic",
            "print": false,
            "bottomCombat": {
                "init": 4,
                "attack": 2,
                "attackType": "ranged",
                "defense": 3
            },
            "mod": [ "attrition" ]
        }, {
            "cardType": "city",
            "title": "Zakros",
            "subTitle": "Minoan - City 2",
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
            "ability": "Building phase: If you build 2 buildings this turn draw and recruit 1 foot troop for free.",
            "abilitySymbol": "start"
        }, {
            "cardType": "city",
            "title": "Malia",
            "subTitle": "Minoan - City 3",
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
            "ability": "Recruit phase: If you recruit 2 troops this turn into the same army you may move that army 2 extra spaces in the deploy phase",
            "abilitySymbol": "start"
        }, {
            "cardType": "city",
            "title": "Phaistos",
            "subTitle": "Minoan - City 4",
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
            "ability": "Deploy phase: Spend 1 wood to move an army 2 spaces.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "military",
            "title": "Raiding",
            "subTitle": "Minoan - Starting Military",
            "placement": "research_placement",
            "image": "rome-statue",
            "print": false,
            "mod": [ "increase_max_army_size", "increase_max_army_size", "increase_max_army_size", "increase_max_army_size", "army_placement" ],
            "ability": "Steal 1 food if you have an army adjacent to an enemy city.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "military",
            "title": "Pillaging",
            "subTitle": "Minoan",
            "placement": "research_placement",
            "image": "rome-statue",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 3 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size", "army_placement" ],
            "ability": "Steal 1 food, wood, or stone if you have an army adjacent to an enemy city.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "military",
            "title": "Palace Armies",
            "subTitle": "Minoan",
            "placement": "research_placement",
            "image": "rome-statue",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size", "army_placement" ],
            "ability": "Recruit phase: If all of your armies are adjacent to the same friendly city, draw 1 card from the military discard pile",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "military",
            "title": "Raiding by Sea",
            "subTitle": "Minoan",
            "placement": "research_placement",
            "image": "rome-statue",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size", "army_placement" ],
            "ability": "Recruit phase: Spend 3 wood to move your army adjacent to any enemy city",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "civic",
            "title": "Far Off Colonies",
            "subTitle": "Minoan - Starting Civic",
            "placement": "research_placement",
            "image": "carved-entry",
            "print": false,
            "mod": [ "increase_city_limit" ],
            "ability": "You may build cities up to 3 spaces away from a city you control",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "civic",
            "title": "Over Sea Colonies",
            "subTitle": "Minoan",
            "placement": "research_placement",
            "image": "carved-entry",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "Build a city on any space that is adjacent to water or the board edge",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "civic",
            "title": "Palaces",
            "subTitle": "Minoan",
            "placement": "research_placement",
            "image": "carved-entry",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "After researching this card, build 1 military building at no cost.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "civic",
            "title": "Trading Post",
            "subTitle": "Minoan",
            "placement": "research_placement",
            "image": "carved-entry",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "After researching this card, build one civic building at not cost.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "commerce",
            "title": "Setting Sail",
            "subTitle": "Minoan - Starting Commerce",
            "placement": "research_placement",
            "image": "merchant",
            "print": false,
            "mod": [ "increase_max_income", "increase_max_income", "increase_max_income" ],
            "ability": "Gather phase: Forgo drawing cards this turn to collect 1 wealth.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "commerce",
            "title": "Mediterranean Trade",
            "subTitle": "Minoan",
            "placement": "research_placement",
            "image": "merchant",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "Place up to 3 resources on this card each turn. These cannot be spent. Skip your gathering phase to convert these resources to wealth.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "commerce",
            "title": "Returning Wealthy",
            "subTitle": "Minoan",
            "placement": "research_placement",
            "image": "merchant",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "stone", "costVal": 3 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "Gather phase: Forgo discarding cards this turn to collect 1 wealth.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "commerce",
            "title": "Palaces of Treasure",
            "subTitle": "Minoan",
            "placement": "research_placement",
            "image": "merchant",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "stone", "costVal": 4 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "Spend 5 wealth to gain a victory point",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "Mediterranean Sails",
            "subTitle": "Minoan - Starting Science",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "mod": [ "increase_hand_limit", "increase_hand_limit", "knowledge", "knowledge" ],
            "ability": "Your armies may move 4 spaces when adjacent to water or the board edge",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "Large Hauls",
            "subTitle": "Minoan",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "wood", "costVal": 1 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "Each time you gain a commerce research, gain 2 wealth",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "Mercantile Lands",
            "subTitle": "Minoan",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "Gather phase: If you have no armies, gain 1 of each resource",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "Linear B Script",
            "subTitle": "Minoan",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "wood", "costVal": 1 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "Gather phase: Forgo resource gathering in your 'A' city to draw and recruit 1 military card for free",
            "abilitySymbol": "start"
        }
    ]);
}
