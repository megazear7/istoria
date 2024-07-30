function sumerianCards() {
    return flatten([
        {
            "cardType": "city",
            "folder": "nations/sumerian",
            "title": "Uruk",
            "subTitle": "Sumeria - Starting City",
            "placement": "city",
            "image": "sumer",
            "print": true,
            "combat": {
                "defense": 14
            },
            "mod": [ "food", "food", "food" ],
            "ability": "Gather phase: Draw one from the civic building discard pile.",
            "abilitySymbol": "start",
            "desc": "The first city; the birth of civilization; wrapped in myth, draped in the first glories of man."
        }, {
            "cardType": "fortification",
            "folder": "nations/sumerian",
            "title": "The First Walls",
            "subTitle": "Sumeria - Starting Fort",
            "placement": "building",
            "image": "sumer",
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
            "folder": "nations/sumerian",
            "title": "Lagash",
            "subTitle": "Sumeria - City 2",
            "placement": "city",
            "image": "sumer",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 2 }
            ],
            "combat": {
                "defense": 17
            },
            "vps": 5,
            "ability": "Spend food in replacement of upkeep in this city.",
            "abilitySymbol": "start"
        }, {
            "cardType": "city",
            "folder": "nations/sumerian",
            "title": "Larsa",
            "subTitle": "Sumeria - City 3",
            "placement": "city",
            "image": "sumer",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 4 }
            ],
            "combat": {
                "defense": 18
            },
            "vps": 5,
            "mod": [ "influence" ],
            "ability": "Spend 3 food to search the military troop discard pile",
            "abilitySymbol": "start"
        }, {
            "cardType": "city",
            "folder": "nations/sumerian",
            "title": "Eridu",
            "subTitle": "Sumeria - City 4",
            "placement": "city",
            "image": "sumer",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 6 }
            ],
            "combat": {
                "defense": 16
            },
            "vps": 5,
            "ability": "Spend 1 wealth and 5 food to gain a victory point",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/sumerian",
            "subType": "military",
            "title": "Warrior King",
            "subTitle": "Sumeria - Starting Military",
            "placement": "research",
            "image": "rome-statue",
            "print": true,
            "mod": [ "increase_max_army_size", "increase_max_army_size", "increase_max_army_size", "increase_max_army_size", "army" ],
            "ability": "When defending a city, melee foot troops attack at initiative 3.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/sumerian",
            "subType": "military",
            "title": "Slave Labor",
            "subTitle": "Sumeria",
            "placement": "research",
            "image": "rome-statue",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size" ],
            "ability": "Increase hand limit to 8 cards.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/sumerian",
            "subType": "military",
            "title": "Gutian Slaves",
            "subTitle": "Sumeria",
            "placement": "research",
            "image": "rome-statue",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size", "army" ],
            "ability": "When recruiting, draw an additional foot troop for each army that is in a mountain space.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/sumerian",
            "subType": "military",
            "title": "Priest Kings",
            "subTitle": "Sumeria",
            "placement": "research",
            "image": "rome-statue",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size", "army" ],
            "ability": "When recruiting melee troops, pay food in place of stone and wood.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/sumerian",
            "subType": "civic",
            "title": "Surrounding Deserts",
            "subTitle": "Sumeria - Starting Civic",
            "placement": "research",
            "image": "carved-entry",
            "print": true,
            "mod": [ "increase_city_limit" ],
            "ability": "Your attrition applies in neutral territories.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/sumerian",
            "subType": "civic",
            "title": "Dawn Walls",
            "subTitle": "Sumeria",
            "placement": "research",
            "image": "carved-entry",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "food", "costVal": 2 }
            ],
            "mod": [ "increase_city_limit", "food" ],
            "ability": "Your cities gain 3 defense.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/sumerian",
            "subType": "civic",
            "title": "Advanced Cultivation",
            "subTitle": "Sumeria",
            "placement": "research",
            "image": "carved-entry",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "food", "costVal": 2 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "Build farms for 1 less cost",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/sumerian",
            "subType": "civic",
            "title": "Canals",
            "subTitle": "Sumeria",
            "placement": "research",
            "image": "carved-entry",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "food", "costVal": 2 }
            ],
            "mod": [ "influence", "attrition" ],
            "ability": "Cities that are adjacent to water spaces may build 1 extra farm.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/sumerian",
            "subType": "commerce",
            "title": "Toll roads",
            "subTitle": "Sumeria - Starting Commerce",
            "placement": "research",
            "image": "merchant",
            "print": true,
            "mod": [ "increase_max_income", "increase_max_income", "increase_max_income" ],
            "ability": "Spend 3 food in place of 1 wealth",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/sumerian",
            "subType": "commerce",
            "title": "The Forests of Lebanon",
            "subTitle": "Sumeria",
            "placement": "research",
            "image": "merchant",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "food", "costVal": 3 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "When spending resources, pay 2 food in place of wood.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/sumerian",
            "subType": "commerce",
            "title": "Trading on the Tigris",
            "subTitle": "Sumeria",
            "placement": "research",
            "image": "merchant",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "food", "costVal": 3 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "At the end of the gather phace spend 2 food to gain a wealth. You can do this three times per turn.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/sumerian",
            "subType": "commerce",
            "title": "Toll roads",
            "subTitle": "Sumeria",
            "placement": "research",
            "image": "merchant",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "food", "costVal": 4 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "Gain one wealth for each adjacent city.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/sumerian",
            "subType": "science",
            "title": "Codex",
            "subTitle": "Sumeria - Starting Science",
            "placement": "research",
            "image": "monk",
            "print": true,
            "mod": [ "increase_hand_limit", "increase_hand_limit", "knowledge", "knowledge" ],
            "ability": "At the end of the gather phase, you may discard some or all of your research cards and draw new research cards in replacement.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/sumerian",
            "subType": "science",
            "title": "Reed Bundles",
            "subTitle": "Sumeria",
            "placement": "research",
            "image": "monk",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "increase_hand_limit", "increase_hand_limit" ],
            "ability": "Produce civic building for 1 less wood.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/sumerian",
            "subType": "science",
            "title": "Edubba",
            "subTitle": "Sumeria",
            "placement": "research",
            "image": "monk",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "knowledge", "knowledge" ],
            "ability": "Research for 2 less cost.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/sumerian",
            "subType": "science",
            "title": "The Plow",
            "subTitle": "Sumeria",
            "placement": "research",
            "image": "monk",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "Each city that has a farm produces 1 additional food.",
            "abilitySymbol": "start"
        }
    ]);
}
