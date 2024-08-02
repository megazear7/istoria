function romanRepublicCards() {
    return flatten([
        {
            "cardType": "city",
            "folder": "nations/roman-republic",
            "title": "Rome",
            "subTitle": "Rome - Starting City",
            "placement": "city",
            "image": "rome",
            "print": true,
            "combat": {
                "defense": 20
            },
            "mod": [ "wealth", "food" ],
            "ability": "While recruiting, draw an additional foot troop.",
            "abilitySymbol": "start",
            "desc": "Rome, the Eternal City. Might of the Great Empire. The seat of emperors and popes."
        }, {
            "cardType": "fortification",
            "folder": "nations/roman-republic",
            "title": "Roman Fort",
            "subTitle": "Rome - Starting Fort",
            "placement": "building",
            "image": "rome",
            "print": true,
            "bottomCombat": {
                "init": 6,
                "attack": 2,
                "attackType": "ranged",
                "defense": 8
            },
            "mod": [ "attrition" ]
        }, {
            "cardType": "city",
            "folder": "nations/roman-republic",
            "title": "Carthage",
            "subTitle": "Rome - City 2",
            "placement": "city",
            "image": "rome",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 2 }
            ],
            "combat": {
                "defense": 16
            },
            "vps": 5,
            "ability": "Spend 1 wood to recruit into an army that is not in a space you control.",
            "abilitySymbol": "start"
        }, {
            "cardType": "city",
            "folder": "nations/roman-republic",
            "title": "Trier",
            "subTitle": "Rome - City 3",
            "placement": "city",
            "image": "rome",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 4 }
            ],
            "combat": {
                "defense": 16
            },
            "vps": 5,
            "mod": [ "wood" ]
        }, {
            "cardType": "city",
            "folder": "nations/roman-republic",
            "title": "Nimes",
            "subTitle": "Rome - City 4",
            "placement": "city",
            "image": "rome",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 6 }
            ],
            "combat": {
                "defense": 16
            },
            "vps": 5,
            "ability": "Gain 1 vp for each army that has 6 or more units",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/roman-republic",
            "subType": "military",
            "title": "Recruitment",
            "subTitle": "Rome - Starting Military",
            "placement": "research",
            "image": "rome-statue",
            "print": true,
            "mod": [ "increase_max_army_size", "increase_max_army_size", "increase_max_army_size", "increase_max_army_size", "army" ],
            "ability": "When recruiting, draw 1 additional foot troop card.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/roman-republic",
            "subType": "military",
            "title": "Forges",
            "subTitle": "Rome",
            "placement": "research",
            "image": "rome-statue",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size", "army" ],
            "ability": "When recruiting, pay 1 less stone.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/roman-republic",
            "subType": "military",
            "title": "Annexation",
            "subTitle": "Rome",
            "placement": "research",
            "image": "rome-statue",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size", "army" ],
            "ability": "When you conquer a city, do not put a razed token on the city.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/roman-republic",
            "subType": "military",
            "title": "Centurian",
            "subTitle": "Rome",
            "placement": "research",
            "image": "rome-statue",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 3 },
                { "costType": "stone", "costVal": 3 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size", "army" ],
            "ability": "Melee foot troops attack at initiative 3",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/roman-republic",
            "subType": "civic",
            "title": "Army Labor",
            "subTitle": "Rome - Starting Civic",
            "placement": "research",
            "image": "carved-entry",
            "print": true,
            "mod": [ "increase_city_limit" ],
            "ability": "Discard a unit from an ajacent army to avoid paying upkeep costs in that city.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/roman-republic",
            "subType": "civic",
            "title": "Blockade",
            "subTitle": "Rome",
            "placement": "research",
            "image": "carved-entry",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "Apposing armies cannot cross water spaces that you have an army adjacent to",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/roman-republic",
            "subType": "civic",
            "title": "Roads of Rome",
            "subTitle": "Rome",
            "placement": "research",
            "image": "carved-entry",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "Armies can move an additional space when moving entirely within friendly territoy",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/roman-republic",
            "subType": "civic",
            "title": "Paving",
            "subTitle": "Rome",
            "placement": "research",
            "image": "carved-entry",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "influence", "attrition"],
            "ability": "Pay 1 stone to move an army 4 spaces. You may then attack an adjacent army.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/roman-republic",
            "subType": "commerce",
            "title": "Toll roads",
            "subTitle": "Rome - Starting Commerce",
            "placement": "research",
            "image": "merchant",
            "print": true,
            "mod": [ "increase_max_income", "increase_max_income", "increase_max_income" ],
            "ability": "In the gather forgo drawing building cards and pay 1 resource to gain 1 wealth",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/roman-republic",
            "subType": "commerce",
            "title": "Trading Vessels",
            "subTitle": "Rome",
            "placement": "research",
            "image": "merchant",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_max_income" ],
            "ability": "Ignore the wealth upkeep in your 'B' city",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/roman-republic",
            "subType": "commerce",
            "title": "Wealth of Aristocrats",
            "subTitle": "Rome",
            "placement": "research",
            "image": "merchant",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "Gain 1 coin for each city that has a farm, lumber mill, and mine",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/roman-republic",
            "subType": "commerce",
            "title": "Taxation",
            "subTitle": "Rome",
            "placement": "research",
            "image": "merchant",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "At the end of the gather phase exchange any 2 resources for 1 wealth. This can be done once per city.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/roman-republic",
            "subType": "science",
            "title": "Codex",
            "subTitle": "Rome - Starting Science",
            "placement": "research",
            "image": "monk",
            "print": true,
            "mod": [ "increase_hand_limit", "increase_hand_limit", "knowledge" ],
            "ability": "At the end of the gather phase, you may discard some or all of your research cards and draw new research cards in replacement.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/roman-republic",
            "subType": "science",
            "title": "Legions",
            "subTitle": "Rome",
            "placement": "research",
            "image": "monk",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "In the gather phase, if 2 armies are adjacent, exchange any number of cards between them.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/roman-republic",
            "subType": "science",
            "title": "Neoplatonism",
            "subTitle": "Rome",
            "placement": "research",
            "image": "monk",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "Increase influence by 1.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research",
            "folder": "nations/roman-republic",
            "subType": "science",
            "title": "Concrete",
            "subTitle": "Rome",
            "placement": "research",
            "image": "monk",
            "print": true,
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_hand_limit", "knowledge" ],
            "ability": "Increase defense of cities by 4.",
            "abilitySymbol": "start"
        }
    ]);
}
