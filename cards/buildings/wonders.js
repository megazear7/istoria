function wonderCards() {
    return flatten([
        {
            "cardType": "wonder",
            "subType": "start",
            "title": "Colosseum",
            "subTitle": "Wonder",
            "placement": "building_placement",
            "image": "rome-statue",
            "print": false,
            "vps": 4,
            "smallBottomMod": "Adjacent armies recruit foot troops for 1 less food",
            "mod": [ "increase_max_army_size" ],
            "cost": [
                { "costType": "stone", "costVal": 8 }
            ]
        }, {
            "cardType": "wonder",
            "title": "Hagia Sophia",
            "subTitle": "Wonder",
            "placement": "building_placement",
            "image": "mystic",
            "print": false,
            "vps": 4,
            "mod": "In the gather phase exhaust to search your research deck for one card",
            "cost": [
                { "costType": "wealth", "costVal": 6 }
            ]
        }, {
            "cardType": "wonder",
            "title": "Pyramids of Giza",
            "subTitle": "Wonder",
            "placement": "building_placement",
            "image": "pyramids",
            "print": false,
            "vps": 4,
            "mod": [ "influence", "influence" ],
            "cost": [
                { "costType": "food", "costVal": 9 },
                { "costType": "wood", "costVal": 4 }
            ]
        }, {
            "cardType": "wonder",
            "title": "Parthenon",
            "subTitle": "Wonder",
            "placement": "building_placement",
            "image": "rome-statue",
            "print": false,
            "vps": 4,
            "mod": [ "increase_hand_limit", "increase_hand_limit" ],
            "cost": [
                { "costType": "food", "costVal": 5 },
                { "costType": "wood", "costVal": 5 },
                { "costType": "stone", "costVal": 5 }
            ]
        }, {
            "cardType": "wonder",
            "title": "Mosque of Mecca",
            "subTitle": "Wonder",
            "placement": "building_placement",
            "image": "mystic",
            "print": false,
            "vps": 4,
            "mod": [ "attrition", "attrition" ],
            "cost": [
                { "costType": "wealth", "costVal": 8 }
            ]
        }, {
            "cardType": "wonder",
            "title": "Taj Mahal",
            "subTitle": "Wonder",
            "placement": "building_placement",
            "image": "mystic",
            "print": false,
            "vps": 6,
            "mod": [ "increase_mounted_recruitment", "increase_foot_recruitment" ],
            "cost": [
                { "costType": "wealth", "costVal": 6 },
                { "costType": "food", "costVal": 8 }
            ]
        }, {
            "cardType": "wonder",
            "title": "Lighthouse of Alexandria",
            "subTitle": "Wonder",
            "placement": "building_placement",
            "image": "mystic",
            "print": false,
            "vps": 4,
            "mod": "Gain 1 wealth for each adjacent lake",
            "cost": [
                { "costType": "wood", "costVal": 8 },
                { "costType": "stone", "costVal": 4 }
            ]
        }, {
            "cardType": "wonder",
            "title": "Tikal",
            "subTitle": "Wonder",
            "placement": "building_placement",
            "image": "mystic",
            "print": false,
            "vps": 4,
            "mod": "Gain 1 free research",
            "cost": [
                { "costType": "food", "costVal": 6 },
                { "costType": "wood", "costVal": 6 }
            ]
        }
    ]);
}
