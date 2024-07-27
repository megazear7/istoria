function hittiteCards() {
    return flatten([
        {
            "cardType": "city",
            "title": "Hattusa",
            "subTitle": "Hittite - Starting City",
            "placement": "city_placement",
            "image": "mystic",
            "print": false,
            "combat": {
                "defense": 14
            },
            "mod": [ "stone", "stone" ],
            "ability": "Build buildings for 1 less wood",
            "abilitySymbol": "start"
        }, {
            "cardType": "fortification",
            "title": "Hill Fort",
            "subTitle": "Hittite - Starting Fort",
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
            "title": "Kussara",
            "subTitle": "Hittite - City 2",
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
            "ability": "Pay 1 food, wood, an stone to gain a wealth.",
            "abilitySymbol": "start"
        }, {
            "cardType": "city",
            "title": "Carchemish",
            "subTitle": "Hittite - City 3",
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
            "mod": [ "influence", "influence" ]
        }, {
            "cardType": "city",
            "title": "Ankuwa",
            "subTitle": "Hittite - City 4",
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
            "ability": "Build military buildings for 1 less stone",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "military",
            "title": "Mercenaries",
            "subTitle": "Hittite - Starting Military",
            "placement": "research_placement",
            "image": "rome-statue",
            "print": false,
            "mod": [ "increase_max_army_size", "increase_max_army_size", "increase_max_army_size", "increase_max_army_size", "army_placement" ],
            "ability": "Recruit phase: Spend 2 wealth to draw from any military deck",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "military",
            "title": "Countryside Recruits",
            "subTitle": "Hittite",
            "placement": "research_placement",
            "image": "rome-statue",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size" ],
            "ability": "Recruit phase: Spend 1 wealth to draw from any military deck",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "military",
            "title": "Paying the Enemy",
            "subTitle": "Hittite",
            "placement": "research_placement",
            "image": "rome-statue",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_max_army_size", "army_placement", "army_placement" ],
            "ability": "Spend 1 wealth to recruit into an army that is not in a space you control",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "military",
            "title": "Pursuing the King",
            "subTitle": "Hittite",
            "placement": "research_placement",
            "image": "rome-statue",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size", "army_placement" ],
            "ability": "After a battle, spend 1 wood to fight the battle again",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "civic",
            "title": "Ruins of the Past",
            "subTitle": "Hittite - Starting Civic",
            "placement": "research_placement",
            "image": "carved-entry",
            "print": false,
            "mod": [ "increase_city_limit" ],
            "ability": "Spend 2 stone in place of wood",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "civic",
            "title": "Mountain Expansion",
            "subTitle": "Hittite",
            "placement": "research_placement",
            "image": "carved-entry",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "In the gather phase gain 1 stone",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "civic",
            "title": "Stone Foundations",
            "subTitle": "Hittite",
            "placement": "research_placement",
            "image": "carved-entry",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "Spend stone in place of wood",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "civic",
            "title": "Stone Walls",
            "subTitle": "Hittite",
            "placement": "research_placement",
            "image": "carved-entry",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "Cities gain 4 defense",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "commerce",
            "title": "The Silver Mountains",
            "subTitle": "Hittite - Starting Commerce",
            "placement": "research_placement",
            "image": "merchant",
            "print": false,
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "Spend 2 stone in place of food",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "commerce",
            "title": "The Silver Mines",
            "subTitle": "Hittite",
            "placement": "research_placement",
            "image": "merchant",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "stone", "increase_max_income" ],
            "ability": "Spend 2 stone in place of wealth",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "commerce",
            "title": "Hill Forests",
            "subTitle": "Hittite",
            "placement": "research_placement",
            "image": "merchant",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "Spend 1 wood and 1 stone in place of wealth",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "commerce",
            "title": "Deadly Expansion",
            "subTitle": "Hittite",
            "placement": "research_placement",
            "image": "merchant",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "Gain 1 food for each enemy unit you destroy",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "Carpentry",
            "subTitle": "Hittite - Starting Science",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "Gather phase: Pay wood and stone to draw an equal number of research cards",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "Defensive Catapults",
            "subTitle": "Hittite",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_hand_limit", "increase_hand_limit" ],
            "ability": "In the gather phase place up to 5 stone on each city. This stone cannot be spent. When attack with this city, spend stone as damage at initiative 6.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "Regional Dominance",
            "subTitle": "Hittite",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_hand_limit" ],
            "ability": "Gain 1 victory point for each mountain you control",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "Migration",
            "subTitle": "Hittite",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "Pay 1 wealth to move 1 building to another city",
            "abilitySymbol": "start"
        }
    ]);
}
