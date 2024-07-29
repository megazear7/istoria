function siegeEngines() {
    return flatten([
        times(1, {
            "cardType": "siege_engine",
            "folder": "troops/siege-engine",
            "title": "Caravan",
            "placement": "army",
            "image": "default",
            "print": true,
            "combat": {
                "defense": 2
            },
            "cost": [
                { "costType": "food", "costVal": 1 },
                { "costType": "wood", "costVal": 1 },
                { "costType": "stone", "costVal": 1 }
            ],
            "ability": "In the gather phase, if adjacent to an enemy city, destroy this caravan to gain 3 wealth. Defended by melee foot troops.",
            "abilitySymbol": "start"
        }),
        times(1, {
            "cardType": "siege_engine",
            "folder": "troops/siege-engine",
            "title": "Caravan",
            "placement": "army",
            "image": "default",
            "print": true,
            "combat": {
                "defense": 2
            },
            "cost": [
                { "costType": "food", "costVal": 3 }
            ],
            "ability": "In the gather phase, if adjacent to an enemy city, destroy this caravan to gain 3 wealth. Defended by melee foot troops.",
            "abilitySymbol": "start"
        }),
        times(1, {
            "cardType": "siege_engine",
            "folder": "troops/siege-engine",
            "title": "Caravan",
            "placement": "army",
            "image": "default",
            "print": true,
            "combat": {
                "defense": 2
            },
            "cost": [
                { "costType": "wood", "costVal": 3 }
            ],
            "ability": "In the gather phase, if adjacent to an enemy city, destroy this caravan to gain 3 wealth. Defended by melee foot troops.",
            "abilitySymbol": "start"
        }),
        times(1, {
            "cardType": "siege_engine",
            "folder": "troops/siege-engine",
            "title": "Caravan",
            "placement": "army",
            "image": "default",
            "print": true,
            "combat": {
                "defense": 2
            },
            "cost": [
                { "costType": "stone", "costVal": 2 }
            ],
            "ability": "In the gather phase, if adjacent to an enemy city, destroy this caravan to gain 3 wealth. Defended by melee foot troops.",
            "abilitySymbol": "start"
        }),
        times(4, {
            "cardType": "siege_engine",
            "folder": "troops/siege-engine",
            "title": "Catapult",
            "placement": "army",
            "image": "default",
            "print": true,
            "combat": {
                "init": 5,
                "attack": 8,
                "attackType": "ranged",
                "defense": 5
            },
            "cost": [
                { "costType": "wood", "costVal": 2 }
            ],
            "ability": "May only target buildings. Defended by melee foot troops.",
            "abilitySymbol": "start"
        }),
        times(4, {
            "cardType": "siege_engine",
            "folder": "troops/siege-engine",
            "title": "Trebuchet",
            "placement": "army",
            "image": "default",
            "print": true,
            "combat": {
                "init": 5,
                "attack": 12,
                "attackType": "ranged",
                "defense": 5
            },
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "ability": "May only target buildings. Defended by melee foot troops.",
            "abilitySymbol": "start"
        }),
        times(8, {
            "cardType": "siege_engine",
            "folder": "troops/siege-engine",
            "title": "Supply wagon",
            "placement": "army",
            "image": "default",
            "print": true,
            "combat": {
                "defense": 5
            },
            "cost": [
                { "costType": "food", "costVal": 2 },
                { "costType": "wood", "costVal": 2 }
            ],
            "ability": "This army ignores attrition. Defended by melee foot troops.",
            "abilitySymbol": "start"
        })
    ]);
}
