function militaryBuildings() {
    return flatten([
        times(4, {
            "cardType": "military_building",
            "folder": "buildings/military",
            "title": "Barracks",
            "placement": "building_placement",
            "image": "rome-statue",
            "print": false,
            "cost": [
                { "costType": "wood", "costVal": 1 },
                { "costType": "stone", "costVal": 1 }
            ],
            "mod": [ "increase_foot_recruitment", "wood_upkeep" ]
        }),
        times(6, {
            "cardType": "military_building",
            "folder": "buildings/military",
            "title": "Barracks",
            "placement": "building_placement",
            "image": "rome-statue",
            "print": false,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_foot_recruitment" ]
        }),
        times(3, {
            "cardType": "military_building",
            "folder": "buildings/military",
            "title": "Stable",
            "placement": "building_placement",
            "image": "horses",
            "print": false,
            "cost": [
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "increase_mounted_recruitment", "stone_upkeep" ]
        }),
        times(5, {
            "cardType": "military_building",
            "folder": "buildings/military",
            "title": "Stable",
            "placement": "building_placement",
            "image": "horses",
            "print": false,
            "cost": [
                { "costType": "wood", "costVal": 3 },
                { "costType": "stone", "costVal": 3 }
            ],
            "mod": [ "increase_mounted_recruitment" ]
        }),
        times(4, {
            "cardType": "military_building",
            "folder": "buildings/military",
            "title": "Siege  Factory",
            "placement": "building_placement",
            "image": "horses",
            "print": false,
            "cost": [
                { "costType": "wood", "costVal": 3 },
                { "costType": "stone", "costVal": 3 }
            ],
            "mod": [ "increase_siege_recruitment", "stone_upkeep" ]
        }),
        times(4, {
            "cardType": "military_building",
            "folder": "buildings/military",
            "title": "Siege Factory",
            "placement": "building_placement",
            "image": "horses",
            "print": false,
            "cost": [
                { "costType": "wood", "costVal": 4 },
                { "costType": "stone", "costVal": 4 }
            ],
            "mod": [ "increase_siege_recruitment" ]
        }),
        times(4, {
            "cardType": "fortification",
            "folder": "buildings/military",
            "title": "Tower",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "bottomCombat": {
                "init": 6,
                "attack": 3,
                "attackType": "ranged",
                "defense": 4
            },
            "cost": [
                { "costType": "stone", "costVal": 2 },
                { "costType": "wealth", "costVal": 2 }
            ]
        }),
        times(4, {
            "cardType": "fortification",
            "folder": "buildings/military",
            "title": "Fort",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "bottomCombat": {
                "init": 6,
                "attack": 3,
                "attackType": "ranged",
                "defense": 8
            },
            "cost": [
                { "costType": "stone", "costVal": 3 },
                { "costType": "wealth", "costVal": 3 }
            ],
            "mod": [ "influence" ]
        }),
        times(4, {
            "cardType": "fortification",
            "folder": "buildings/military",
            "title": "Castle",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "bottomCombat": {
                "init": 6,
                "attack": 2,
                "attackType": "ranged",
                "defense": 12
            },
            "cost": [
                { "costType": "stone", "costVal": 4 },
                { "costType": "wealth", "costVal": 4 }
            ],
            "mod": [ "influence" ]
        })
    ]);
}
