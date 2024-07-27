function civicBuildings() {
    return flatten([
        times(5, {
            "cardType": "civic_building",
            "subType": "farm",
            "title": "Farm",
            "placement": "building_placement",
            "image": "green",
            "print": false,
            "cost": [
                { "costType": "wood", "costVal": 1 }
            ],
            "mod": [ "food" ]
        }),
        times(5, {
            "cardType": "civic_building",
            "subType": "farm",
            "title": "Large Farm",
            "placement": "building_placement",
            "image": "green",
            "print": false,
            "cost": [
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "food", "food" ]
        }),
        times(5, {
            "cardType": "civic_building",
            "subType": "lumber_mill",
            "title": "Lumber Mill",
            "placement": "building_placement",
            "image": "tree-road",
            "print": false,
            "cost": [
                { "costType": "food", "costVal": 1 }
            ],
            "mod": [ "wood" ]
        }),
        times(4, {
            "cardType": "civic_building",
            "subType": "lumber_mill",
            "title": "Large Lumber Mill",
            "placement": "building_placement",
            "image": "tree-road",
            "print": false,
            "cost": [
                { "costType": "food", "costVal": 3 }
            ],
            "mod": [ "wood", "wood" ]
        }),
        times(4, {
            "cardType": "civic_building",
            "subType": "mine",
            "title": "Mine",
            "placement": "building_placement",
            "image": "mountain-lake",
            "print": false,
            "cost": [
                { "costType": "food", "costVal": 1 },
                { "costType": "wood", "costVal": 1 }
            ],
            "mod": [ "stone" ]
        }),
        times(4, {
            "cardType": "civic_building",
            "subType": "mine",
            "title": "Large Mine",
            "placement": "building_placement",
            "image": "mountain-lake",
            "print": false,
            "cost": [
                { "costType": "food", "costVal": 2 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "stone", "stone" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "title": "Market",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "cost": [
                { "costType": "food", "costVal": 1 },
                { "costType": "wood", "costVal": 1 },
                { "costType": "stone", "costVal": 1 }
            ],
            "mod": [ "wealth", "wood_upkeep" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "title": "Market",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "cost": [
                { "costType": "food", "costVal": 2 },
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 1 }
            ],
            "mod": [ "wealth" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "title": "Market",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "cost": [
                { "costType": "food", "costVal": 3 }
            ],
            "mod": [ "wealth", "wood_upkeep" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "title": "Market",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "cost": [
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "wealth", "wood_upkeep" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "title": "Market",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "cost": [
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "wealth", "wood_upkeep" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "title": "Market",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "cost": [
                { "costType": "food", "costVal": 5 }
            ],
            "mod": [ "wealth" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "title": "Market",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "cost": [
                { "costType": "wood", "costVal": 4 }
            ],
            "mod": [ "wealth" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "title": "Market",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "cost": [
                { "costType": "stone", "costVal": 3 }
            ],
            "mod": [ "wealth" ]
        }),
        times(4, {
            "cardType": "civic_building",
            "title": "Temple",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "cost": [
                { "costType": "food", "costVal": 1 },
                { "costType": "wood", "costVal": 1 }
            ],
            "mod": [ "influence", "attrition", "food_upkeep" ]
        }),
        times(4, {
            "cardType": "civic_building",
            "title": "University",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "cost": [
                { "costType": "wood", "costVal": 1 },
                { "costType": "stone", "costVal": 1 }
            ],
            "smallBottomMod": "Gather phase: Draw 1 from your research discard pile",
            "mod": [ "knowledge" ]
        }),
        times(4, {
            "cardType": "civic_building",
            "title": "Palace",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "cost": [
                { "costType": "wood", "costVal": 1 },
                { "costType": "stone", "costVal": 1 }
            ],
            "smallBottomMod": "Gather phase: Draw 1 from a building discard pile",
            "mod": [ "knowledge" ]
        }),
        times(4, {
            "cardType": "civic_building",
            "title": "Grainery",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "cost": [
                { "costType": "wood", "costVal": 1 },
                { "costType": "stone", "costVal": 1 }
            ],
            "smallBottomMod": "Gain 1 food if this city has a farm",
            "mod": [ "wealth_upkeep" ]
        }),
        times(4, {
            "cardType": "civic_building",
            "title": "Sawmill",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "cost": [
                { "costType": "wood", "costVal": 1 },
                { "costType": "stone", "costVal": 1 }
            ],
            "smallBottomMod": "Gain 1 wood if this city has a lumber mill",
            "mod": [ "wealth_upkeep" ]
        }),
        times(4, {
            "cardType": "civic_building",
            "title": "Refinery",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "cost": [
                { "costType": "wood", "costVal": 1 },
                { "costType": "stone", "costVal": 1 }
            ],
            "smallBottomMod": "Gain 1 stone if this city has a mine",
            "mod": [ "wealth_upkeep" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "title": "Banquet Hall",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "cost": [
                { "costType": "food", "costVal": 5 }
            ],
            "mod": [ "victory_point", "food_upkeep" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "title": "The Grand Bridge",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "cost": [
                { "costType": "wood", "costVal": 5 }
            ],
            "mod": [ "victory_point", "wood_upkeep" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "title": "Marbled Decorum",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "cost": [
                { "costType": "stone", "costVal": 5 }
            ],
            "mod": [ "victory_point", "stone_upkeep" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "title": "Kings Gifts",
            "placement": "building_placement",
            "image": "default",
            "print": false,
            "cost": [
                { "costType": "wealth", "costVal": 3 }
            ],
            "mod": [ "victory_point", "wealth_upkeep" ]
        })
    ]);
}
