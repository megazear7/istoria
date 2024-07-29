function civicBuildings() {
    return flatten([
        times(5, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "subType": "farm",
            "title": "Farm",
            "placement": "building",
            "image": "green",
            "print": true,
            "cost": [
                { "costType": "wood", "costVal": 1 }
            ],
            "mod": [ "food" ]
        }),
        times(5, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "subType": "farm",
            "title": "Large Farm",
            "placement": "building",
            "image": "green",
            "print": true,
            "cost": [
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "food", "food" ]
        }),
        times(5, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "subType": "lumber_mill",
            "title": "Lumber Mill",
            "placement": "building",
            "image": "tree-road",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 1 }
            ],
            "mod": [ "wood" ]
        }),
        times(4, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "subType": "lumber_mill",
            "title": "Large Lumber Mill",
            "placement": "building",
            "image": "tree-road",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 3 }
            ],
            "mod": [ "wood", "wood" ]
        }),
        times(4, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "subType": "mine",
            "title": "Mine",
            "placement": "building",
            "image": "mountain-lake",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 1 },
                { "costType": "wood", "costVal": 1 }
            ],
            "mod": [ "stone" ]
        }),
        times(4, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "subType": "mine",
            "title": "Large Mine",
            "placement": "building",
            "image": "mountain-lake",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 2 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "stone", "stone" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "title": "Market",
            "placement": "building",
            "image": "default",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 1 },
                { "costType": "wood", "costVal": 1 },
                { "costType": "stone", "costVal": 1 }
            ],
            "mod": [ "wealth", "wood_upkeep" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "title": "Market",
            "placement": "building",
            "image": "default",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 2 },
                { "costType": "wood", "costVal": 2 },
                { "costType": "stone", "costVal": 1 }
            ],
            "mod": [ "wealth" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "title": "Market",
            "placement": "building",
            "image": "default",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 3 }
            ],
            "mod": [ "wealth", "wood_upkeep" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "title": "Market",
            "placement": "building",
            "image": "default",
            "print": true,
            "cost": [
                { "costType": "wood", "costVal": 3 }
            ],
            "mod": [ "wealth", "wood_upkeep" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "title": "Market",
            "placement": "building",
            "image": "default",
            "print": true,
            "cost": [
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "wealth", "wood_upkeep" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "title": "Market",
            "placement": "building",
            "image": "default",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 5 }
            ],
            "mod": [ "wealth" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "title": "Market",
            "placement": "building",
            "image": "default",
            "print": true,
            "cost": [
                { "costType": "wood", "costVal": 4 }
            ],
            "mod": [ "wealth" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "title": "Market",
            "placement": "building",
            "image": "default",
            "print": true,
            "cost": [
                { "costType": "stone", "costVal": 3 }
            ],
            "mod": [ "wealth" ]
        }),
        times(4, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "title": "Temple",
            "placement": "building",
            "image": "default",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 1 },
                { "costType": "wood", "costVal": 1 }
            ],
            "mod": [ "influence", "attrition", "food_upkeep" ]
        }),
        times(4, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "title": "University",
            "placement": "building",
            "image": "default",
            "print": true,
            "cost": [
                { "costType": "wood", "costVal": 1 },
                { "costType": "stone", "costVal": 1 }
            ],
            "smallBottomMod": "Gather phase: Draw 1 from your research discard pile",
            "mod": [ "knowledge" ]
        }),
        times(4, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "title": "Palace",
            "placement": "building",
            "image": "default",
            "print": true,
            "cost": [
                { "costType": "wood", "costVal": 1 },
                { "costType": "stone", "costVal": 1 }
            ],
            "smallBottomMod": "Gather phase: Draw 1 from a building discard pile",
            "mod": [ "knowledge" ]
        }),
        times(4, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "title": "Grainery",
            "placement": "building",
            "image": "default",
            "print": true,
            "cost": [
                { "costType": "wood", "costVal": 1 },
                { "costType": "stone", "costVal": 1 }
            ],
            "smallBottomMod": "Gain 1 food if this city has a farm",
            "mod": [ "wealth_upkeep" ]
        }),
        times(4, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "title": "Sawmill",
            "placement": "building",
            "image": "default",
            "print": true,
            "cost": [
                { "costType": "wood", "costVal": 1 },
                { "costType": "stone", "costVal": 1 }
            ],
            "smallBottomMod": "Gain 1 wood if this city has a lumber mill",
            "mod": [ "wealth_upkeep" ]
        }),
        times(4, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "title": "Refinery",
            "placement": "building",
            "image": "default",
            "print": true,
            "cost": [
                { "costType": "wood", "costVal": 1 },
                { "costType": "stone", "costVal": 1 }
            ],
            "smallBottomMod": "Gain 1 stone if this city has a mine",
            "mod": [ "wealth_upkeep" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "title": "Banquet Hall",
            "placement": "building",
            "image": "default",
            "print": true,
            "cost": [
                { "costType": "food", "costVal": 5 }
            ],
            "mod": [ "victory_point", "food_upkeep" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "title": "The Grand Bridge",
            "placement": "building",
            "image": "default",
            "print": true,
            "cost": [
                { "costType": "wood", "costVal": 5 }
            ],
            "mod": [ "victory_point", "wood_upkeep" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "title": "Marbled Decorum",
            "placement": "building",
            "image": "default",
            "print": true,
            "cost": [
                { "costType": "stone", "costVal": 5 }
            ],
            "mod": [ "victory_point", "stone_upkeep" ]
        }),
        times(1, {
            "cardType": "civic_building",
            "folder": "buildings/civic",
            "title": "Kings Gifts",
            "placement": "building",
            "image": "default",
            "print": true,
            "cost": [
                { "costType": "wealth", "costVal": 3 }
            ],
            "mod": [ "victory_point", "wealth_upkeep" ]
        })
    ]);
}
