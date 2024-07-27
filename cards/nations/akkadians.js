function akkadianCards() {
    return flatten([
        {
            "cardType": "city",
            "title": "Akkad",
            "subTitle": "Akkadians - Starting City",
            "placement": "city_placement",
            "image": "mystic",
            "print": false,
            "combat": {
                "defense": 14
            },
            "mod": [ "food" ],
            "ability": "TODO",
            "abilitySymbol": "start",
            "desc": "Sargon: King of Sumer and Akkad"
        }, {
            "cardType": "fortification",
            "title": "City Walls",
            "subTitle": "Akkadians - Starting Fort",
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
            "title": "Akshak",
            "subTitle": "Akkadians - City 2",
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
            "title": "Kish",
            "subTitle": "Akkadians - City 3",
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
            "title": "Larak",
            "subTitle": "Akkadians - City 4",
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
            "title": "The First Empire",
            "subTitle": "Akkadians - Starting Military",
            "placement": "research_placement",
            "image": "rome-statue",
            "print": false,
            "mod": [ "increase_max_army_size", "increase_max_army_size", "increase_max_army_size", "increase_max_army_size", "army_placement" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "military",
            "title": "King of Sumer and Akkad",
            "subTitle": "Akkadians",
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
            "title": "Raids into Canaan",
            "subTitle": "Akkadians",
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
            "title": "King of Four Quarters",
            "subTitle": "Akkadians",
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
            "title": "Victory Stele",
            "subTitle": "Akkadians - Starting Civic",
            "placement": "research_placement",
            "image": "carved-entry",
            "print": false,
            "mod": [ "increase_city_limit" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "civic",
            "title": "Emperial Roads",
            "subTitle": "Akkadians",
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
            "title": "Lugal Palace",
            "subTitle": "Akkadians",
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
            "title": "Records of the Ensi",
            "subTitle": "Akkadians",
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
            "subType": "commerce",
            "title": "Tax Collectors",
            "subTitle": "Akkadians - Starting Commerce",
            "placement": "research_placement",
            "image": "merchant",
            "print": false,
            "mod": [ "increase_max_income", "increase_max_income", "increase_max_income" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "commerce",
            "title": "Trade with Meluhha",
            "subTitle": "Akkadians",
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
            "title": "Boats of the Upper Sea",
            "subTitle": "Akkadians",
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
            "title": "The Silver Mountains",
            "subTitle": "Akkadians",
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
            "title": "Semitic Language",
            "subTitle": "Akkadians - Starting Science",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "mod": [ "increase_hand_limit", "increase_hand_limit", "knowledge", "knowledge" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "Barley and Beer",
            "subTitle": "Akkadians",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "stone", "costVal": 3 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "Household Production",
            "subTitle": "Akkadians",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "stone", "costVal": 3 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "Mail Carriers",
            "subTitle": "Akkadians",
            "placement": "research_placement",
            "image": "monk",
            "print": false,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "stone", "costVal": 3 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "TODO",
            "abilitySymbol": "start"
        }
    ]);
}