$.evalFile(activeDocument.path.fullName + "/photofoundry.js");
$.evalFile(activeDocument.path.fullName + "/cards/cards.js");

photofoundry(makeCards(), {
    columns: 1,
    rows: 1,
    clean: makeCards()[0],
    mapping: mapping,
    folder: "dist",
    alert: true
});

function mapping(item) {
    var background = "default";

    var newItem = {
        toggles: [
            background,
            "border",
            "title_background",
            "stone_circle_right",
            "stone_circle_left",
            "cost_background",
            "square_parchment"
        ],
        text: {
            title: item.title ? item.title : "",
            sub_title: item.subTitle ? item.subTitle : "",
            desc: item.ability ? item.ability : ""
        },
        elements: {
        },
        print: !! item.print
    };

    if (item.placement) {
        newItem.elements["placement"] = item.placement;
    }

    if (item.cardType) {
        newItem.elements["type"] = item.cardType;
    }

    if (item.combat) {
        newItem.toggles.push("combat_background");

        if (item.combat.init) {
            newItem.toggles.push("init");
            newItem.text["init"] = item.combat.init;
        }

        if (item.combat.attackType === "ranged") {
            newItem.toggles.push("ranged");
            newItem.text["attack"] = item.combat.attack;
        } else if (item.combat.attackType === "melee") {
            newItem.toggles.push("melee");
            newItem.text["attack"] = item.combat.attack;
        }

        if (item.combat.defense) {
            newItem.toggles.push("armor");
            newItem.text["defense"] = item.combat.defense;
        }
    }

    // TODO
    // if (item.bottomCombat) {
    //     newItem.toggles.push("square_parchment");

    //     if (item.combat.init) {
    //         newItem.toggles.push("init");
    //         newItem.text["init"] = item.combat.init;
    //     }

    //     if (item.combat.attackType === "ranged") {
    //         newItem.toggles.push("ranged");
    //         newItem.text["attack"] = item.combat.attack;
    //     } else if (item.combat.attackType === "melee") {
    //         newItem.toggles.push("melee");
    //         newItem.text["attack"] = item.combat.attack;
    //     }

    //     if (item.combat.defense) {
    //         newItem.toggles.push("armor");
    //         newItem.text["defense"] = item.combat.defense;
    //     }
    // }

    if (item.cost) {
        for (var i = 0; i < item.cost.length; i++) {
            var entry = item.cost[i];
            newItem.elements["cost_"+(i+1)] = entry.costType;
            newItem.text["cost_"+(i+1)] = entry.costVal;
        }
    }

    if (item.mod) {
        newItem.toggles.push("square_parchment");

        for (var i = 0; i < item.mod.length; i++) {
            var mod = item.mod[i];
            var modLength = item.mod.length;
            newItem.elements["bottom_mod_"+modLength+"_"+(i+1)] = mod;
        }
    }

    if (item.ability) {
        newItem.toggles.push("desc_background");
    }

    return newItem;
}
