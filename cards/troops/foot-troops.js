function footTroops() {
    return flatten([
        times(8, {
            "cardType": "foot",
            "folder": "troops/foot",
            "title": "Spearmen",
            "placement": "army_placement",
            "image": "default",
            "print": false,
            "combat": {
                "init": 4,
                "attack": 2,
                "attackType": "melee",
                "defense": 3 
            },
            "cost": [
                { "costType": "food", "costVal": 1 }
            ]
        }),
        times(4, {
            "cardType": "foot",
            "folder": "troops/foot",
            "title": "Scout",
            "placement": "army_placement",
            "image": "default",
            "print": false,
            "combat": {
                "init": 2,
                "attack": 1,
                "attackType": "ranged",
                "defense": 2 
            },
            "cost": [
                { "costType": "food", "costVal": 1 }
            ],
            "mod": [ "scout" ]
        }),
        times(4, {
            "cardType": "foot",
            "folder": "troops/foot",
            "title": "Warband",
            "placement": "army_placement",
            "image": "default",
            "print": false,
            "combat": {
                "init": 4,
                "attack": 3,
                "attackType": "melee",
                "defense": 3 
            },
            "cost": [
                { "costType": "food", "costVal": 2 }
            ],
            "ability": "Warband only have a 1 attack value when attacking mounted troops.",
            "abilitySymbol": "start"
        }),
        times(4, {
            "cardType": "foot",
            "folder": "troops/foot",
            "title": "Raiders",
            "placement": "army_placement",
            "image": "default",
            "print": false,
            "combat": {
                "init": 4,
                "attack": 2,
                "attackType": "melee",
                "defense": 4 
            },
            "cost": [
                { "costType": "wealth", "costVal": 1 }
            ],
            "ability": "Raiders can always target siege engines",
            "abilitySymbol": "start"
        }),
        times(4, {
            "cardType": "foot",
            "folder": "troops/foot",
            "title": "Warriors",
            "placement": "army_placement",
            "image": "default",
            "print": false,
            "combat": {
                "init": 4,
                "attack": 3,
                "attackType": "melee",
                "defense": 5 
            },
            "cost": [
                { "costType": "food", "costVal": 1 },
                { "costType": "stone", "costVal": 1 }
            ],
            "ability": "Warriors only have a 1 attack value when attacking mounted troops.",
            "abilitySymbol": "start"
        }),
        times(2, {
            "cardType": "foot",
            "folder": "troops/foot",
            "title": "Aristocrat",
            "placement": "army_placement",
            "image": "default",
            "print": false,
            "combat": {
                "init": 3,
                "attack": 1,
                "attackType": "melee",
                "defense": 5
            },
            "vps": 1,
            "cost": [
                { "costType": "food", "costVal": 2 },
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "ability": "This army and any adjacent army may move one extra space. Defended by all other troops.",
            "abilitySymbol": "start"
        }),
        times(4, {
            "cardType": "foot",
            "folder": "troops/foot",
            "title": "Captain",
            "placement": "army_placement",
            "image": "default",
            "print": false,
            "combat": {
                "init": 3,
                "attack": 1,
                "attackType": "melee",
                "defense": 4
            },
            "cost": [
                { "costType": "wealth", "costVal": 2 }
            ],
            "ability": "Decrease the initiative of two other troop cards by 1",
            "abilitySymbol": "start"
        }),
        times(8, {
            "cardType": "foot_ranged",
            "folder": "troops/foot",
            "title": "Bowmen",
            "placement": "army_placement",
            "image": "default",
            "print": false,
            "combat": {
                "init": 2,
                "attack": 1,
                "attackType": "ranged",
                "defense": 3
            },
            "cost": [
                { "costType": "food", "costVal": 1 }
            ]
        }),
        times(8, {
            "cardType": "foot_ranged",
            "folder": "troops/foot",
            "title": "Archer",
            "placement": "army_placement",
            "image": "default",
            "print": false,
            "combat": {
                "init": 2,
                "attack": 2,
                "attackType": "ranged",
                "defense": 3
            },
            "cost": [
                { "costType": "food", "costVal": 1 },
                { "costType": "wealth", "costVal": 1 }
            ]
        })
    ]);
}
