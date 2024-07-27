function unusedCards() {
    return flatten([
        {
            "cardType": "research_type",
            "subType": "military",
            "title": "Exploration",
            "subTitle": "Sumeria",
            "placement": "research_placement",
            "image": "rome-statue",
            "vps": 1,
            "cost": [
                { "costType": "food", "costVal": 3 },
                { "costType": "wealth", "costVal": 3 },
                { "costType": "stone", "costVal": 3 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size", "army_placement" ],
            "ability": "When starting a move from one of your cities, move 4 spaces.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "military",
            "title": "Bronze",
            "subTitle": "Sumeria",
            "placement": "research_placement",
            "image": "rome-statue",
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 3 },
                { "costType": "stone", "costVal": 3 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size" ],
            "ability": "When recruiting mounted troops, pay one less stone.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "military",
            "title": "The Roman Sea",
            "subTitle": "Rome",
            "placement": "research_placement",
            "image": "rome-statue",
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 3 },
                { "costType": "stone", "costVal": 2 }
            ],
            "mod": [ "army_placement" ],
            "ability": "When adjacent to water, any spaces adjacent to the lake are adjacent to you for the purpose of moving and attacking.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "military",
            "title": "The Alps",
            "subTitle": "Rome",
            "placement": "research_placement",
            "image": "rome-statue",
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 3 },
                { "costType": "stone", "costVal": 3 }
            ],
            "mod": [ "increase_max_army_size", "increase_max_army_size" ],
            "ability": "Ignore mountains while moving.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "civic",
            "title": "Paving",
            "subTitle": "Sumeria",
            "placement": "research_placement",
            "image": "carved-entry",
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "food", "costVal": 4 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "Armies can move through multiple adjacent friendly cities with a single move.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "civic",
            "title": "Paving",
            "subTitle": "Rome - Starting Civic",
            "placement": "research_placement",
            "image": "carved-entry",
            "mod": [ "increase_city_limit" ],
            "ability": "Armies can move through multiple adjacent friendly cities with a single move.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "civic",
            "title": "Construction",
            "subTitle": "Rome",
            "placement": "research_placement",
            "image": "carved-entry",
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "food", "costVal": 4 }
            ],
            "mod": [ "increase_city_limit" ],
            "ability": "Twice per turn spend 1 wealth to remove 2 damage tokens from a city.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "civic",
            "title": "Tablet Records",
            "subTitle": "Sumeria",
            "placement": "research_placement",
            "image": "carved-entry",
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "food", "costVal": 4 }
            ],
            "mod": [ "increase_city_limit", "food" ],
            "ability": "Once per turn transfer a unit card between two armies regardless of their proximity.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "commerce",
            "title": "Akkadian Ventures",
            "subTitle": "Sumeria",
            "placement": "research_placement",
            "image": "merchant",
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 4 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "During the gather phase choose to increase the max income of one resource type by 2.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "commerce",
            "title": "Meluhhan Boats",
            "subTitle": "Sumeria",
            "placement": "research_placement",
            "image": "merchant",
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 4 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "During the gather phase gain 1 food, wood, or stone.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "commerce",
            "title": "Egyptian Industry",
            "subTitle": "Rome",
            "placement": "research_placement",
            "image": "merchant",
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 4 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "Gain two food after researching this card.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "commerce",
            "title": "Forced Military Service",
            "subTitle": "Rome",
            "placement": "research_placement",
            "image": "merchant",
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 1 },
                { "costType": "wood", "costVal": 4 }
            ],
            "mod": [ "increase_max_income", "increase_max_income" ],
            "ability": "Forgo on gathering resources in the gather phase in order to double your recruitment this turn.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "Reed Boats",
            "subTitle": "Sumeria",
            "placement": "research_placement",
            "image": "monk",
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_hand_limit", "increase_hand_limit" ],
            "ability": "Armies can move 1 additional space if it is between two adjacent river spaces.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "Cuniform",
            "subTitle": "Sumeria",
            "placement": "research_placement",
            "image": "monk",
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_hand_limit" ],
            "ability": "You may trade resources with another player.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "Dome Construction",
            "subTitle": "Rome",
            "placement": "research_placement",
            "image": "monk",
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_hand_limit", "increase_hand_limit" ],
            "ability": "Decrease cost of buildings by 1 stone.",
            "abilitySymbol": "start"
        }, {
            "cardType": "research_type",
            "subType": "science",
            "title": "Villas",
            "subTitle": "Rome",
            "placement": "research_placement",
            "image": "monk",
            "vps": 1,
            "cost": [
                { "costType": "wealth", "costVal": 2 },
                { "costType": "wood", "costVal": 2 }
            ],
            "mod": [ "increase_hand_limit" ],
            "ability": "Once per turn in the gather phase exchange 1 wood for 1 wealth.",
            "abilitySymbol": "start"
        }
    ]);
}
