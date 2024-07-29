function mountedTroops() {
    return flatten([
        times(6, {
            "cardType": "mounted_ranged",
            "folder": "troops/mounted",
            "title": "Light Horse",
            "placement": "army_placement",
            "image": "horses",
            "print": false,
            "combat": {
                "init": 1,
                "attack": 1,
                "attackType": "ranged",
                "defense": 3
            },
            "cost": [
                { "costType": "food", "costVal": 1 },
                { "costType": "wood", "costVal": 1 }
            ]
        }),
        times(4, {
            "cardType": "mounted_ranged",
            "folder": "troops/mounted",
            "title": "Ranger",
            "placement": "army_placement",
            "image": "horses",
            "print": false,
            "combat": {
                "init": 1,
                "attack": 1,
                "attackType": "ranged",
                "defense": 2
            },
            "cost": [
                { "costType": "food", "costVal": 2 }
            ],
            "mod": [ "scout", "scout" ]
        }),
        times(4, {
            "cardType": "mounted_ranged",
            "folder": "troops/mounted",
            "title": "Mounted Archers",
            "placement": "army_placement",
            "image": "horses",
            "print": false,
            "combat": {
                "init": 1,
                "attack": 2,
                "attackType": "ranged",
                "defense": 3
            },
            "cost": [
                { "costType": "food", "costVal": 1 },
                { "costType": "wood", "costVal": 1 },
                { "costType": "wealth", "costVal": 1 }
            ]
        }),
        times(4, {
            "cardType": "mounted",
            "folder": "troops/mounted",
            "title": "Knight",
            "placement": "army_placement",
            "image": "horses",
            "print": false,
            "combat": {
                "init": 3,
                "attack": 4,
                "attackType": "melee",
                "defense": 6
            },
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ]
        }),
        times(2, {
            "cardType": "mounted",
            "folder": "troops/mounted",
            "title": "Advisor",
            "placement": "army_placement",
            "image": "horses",
            "print": false,
            "combat": {
                "init": 3,
                "attack": 1,
                "attackType": "melee",
                "defense": 2
            },
            "cost": [
                { "costType": "wealth", "costVal": 1 }
            ],
            "mod": [ "knowledge" ]
        }),
        times(2, {
            "cardType": "mounted",
            "folder": "troops/mounted",
            "title": "General",
            "placement": "army_placement",
            "image": "horses",
            "print": false,
            "combat": {
                "init": 3,
                "attack": 1,
                "attackType": "melee",
                "defense": 6
            },
            "cost": [
                { "costType": "wealth", "costVal": 4 }
            ],
            "mod": [ "attrition" ],
            "vps": 1,
            "ability": "After this army merges with an adjacent army you may take another action. Defended by foot troops.",
            "abilitySymbol": "start"
        }),
        times(2, {
            "cardType": "mounted",
            "folder": "troops/mounted",
            "title": "King",
            "placement": "army_placement",
            "image": "horses",
            "print": false,
            "combat": {
                "init": 3,
                "attack": 1,
                "attackType": "melee",
                "defense": 6
            },
            "cost": [
                { "costType": "food", "costVal": 2 },
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "influence" ],
            "vps": 2,
            "ability": "During each initiative, add 1 to your total attack value. Defended by knights.",
            "abilitySymbol": "start"
        }),
        times(2, {
            "cardType": "mounted",
            "folder": "troops/mounted",
            "title": "Emperor",
            "placement": "army_placement",
            "image": "horses",
            "print": false,
            "combat": {
                "init": 3,
                "attack": 1,
                "attackType": "melee",
                "defense": 8
            },
            "cost": [
                { "costType": "wealth", "costVal": 4 }
            ],
            "mod": [ "increase_foot_recruitment" ],
            "vps": 2,
            "ability": "This army and any adjacent army moves one extra space. May not be in an army with a king.",
            "abilitySymbol": "start"
        })
    ]);
}
