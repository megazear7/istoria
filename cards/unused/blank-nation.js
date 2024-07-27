function blankNationCards() {
    return flatten([
        {
            "cardType": "city",
            "title": "TODO",
            "subTitle": "<NATION> - Starting City",
            "placement": "city_placement",
            "image": "mystic",
            "print": false,
            "combat": {
                "defense": 14
            },
            "mod": [ "food" ],
            "ability": "TODO",
            "abilitySymbol": "start",
            "desc": "TODO"
        }, {
            "cardType": "fortification",
            "title": "TODO",
            "subTitle": "<NATION> - Starting Fort",
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
            "title": "TODO",
            "subTitle": "<NATION> - City 2",
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
            "mod": [ ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "city",
            "title": "TODO",
            "subTitle": "<NATION> - City 3",
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
            "mod": [ ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "city",
            "title": "TODO",
            "subTitle": "<NATION> - City 4",
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
            "mod": [ ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "military",
            "title": "TODO",
            "subTitle": "<NATION> - Starting Military",
            "placement": "research_placement",
            "image": "rome-statue",
            "print": false,
            "mod": [ "increase_max_army_size", "increase_max_army_size", "increase_max_army_size", "increase_max_army_size", "army_placement" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "military",
            "title": "TODO",
            "subTitle": "<NATION>",
            "placement": "research_placement",
            "image": "rome-statue",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size", "army_placement" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "military",
            "title": "TODO",
            "subTitle": "<NATION>",
            "placement": "research_placement",
            "image": "rome-statue",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "military",
            "title": "TODO",
            "subTitle": "<NATION>",
            "placement": "research_placement",
            "image": "rome-statue",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size", "army_placement" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "civic",
            "title": "TODO",
            "subTitle": "<NATION> - Starting Civic",
            "placement": "research_placement",
            "image": "carved-entry",
            "print": false,
            "mod": [ "increase_city_limit" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "civic",
            "title": "TODO",
            "subTitle": "<NATION>",
            "placement": "research_placement",
            "image": "carved-entry",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "civic",
            "title": "TODO",
            "subTitle": "<NATION>",
            "placement": "research_placement",
            "image": "carved-entry",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "civic",
            "title": "TODO",
            "subTitle": "<NATION>",
            "placement": "research_placement",
            "image": "carved-entry",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "influence", "attrition" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "commerce",
            "title": "TODO",
            "subTitle": "<NATION> - Starting Commerce",
            "placement": "research_placement",
            "image": "merchant",
            "print": false,
            "mod": [ "increase_max_income", "increase_max_income", "increase_max_income" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "commerce",
            "title": "TODO",
            "subTitle": "<NATION>",
            "placement": "research_placement",
            "image": "merchant",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "commerce",
            "title": "TODO",
            "subTitle": "<NATION>",
            "placement": "research_placement",
            "image": "merchant",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "commerce",
            "title": "TODO",
            "subTitle": "<NATION>",
            "placement": "research_placement",
            "image": "merchant",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "TODO",
            "subTitle": "<NATION> - Starting Science",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "mod": [ "increase_hand_limit", "increase_hand_limit", "knowledge", "knowledge" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "TODO",
            "subTitle": "<NATION>",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "TODO",
            "subTitle": "<NATION>",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "TODO",
            "subTitle": "<NATION>",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }
    ]);
}
