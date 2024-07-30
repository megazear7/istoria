$.evalFile(activeDocument.path.fullName + "/photofoundry.js");
$.evalFile(activeDocument.path.fullName + "/cards/cards.js");

photofoundry(makeCards(), {
    columns: 1,
    rows: 1,
    clean: makeCards()[0],
    mapping: mapping,
    folder: "dist/",
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
            "stone_circle_left"
        ],
        text: {
            title: item.title ? item.title : "",
            sub_title: item.subTitle ? item.subTitle : ""
        },
        elements: {
        },
        print: !! item.print,
        folder: item.folder
    };

    if (item.ability) {
        newItem.toggles.push("desc_background");
        if (item.ability.length > 136) {
            newItem.text.desc_long = item.ability;
        } else {
            newItem.text.desc = item.ability;
        }
    }

    if (item.placement) {
        if (item.placement === "research" || item.placement === "building") {
            newItem.elements["placement"] = "card_stack_placement";
        } else if (item.placement === "army") {
            newItem.elements["placement"] = "army_placement";
        } else if (item.placement === "city") {
            newItem.elements["placement"] = "city_placement";
        }
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
            newItem.toggles.push("defense");
            newItem.text["defense"] = item.combat.defense;
        }
    }

    if (item.subType) {
        newItem.elements["sub_type"] = item.subType;
    }

    if (item.bottomCombat) {
        newItem.toggles.push("square_parchment");
        newItem.toggles.push("bottom_mod_background");

        if (item.bottomCombat.init) {
            newItem.toggles.push("bottom_init");
            newItem.text["bottom_init"] = item.bottomCombat.init;
        }

        if (item.bottomCombat.attackType === "ranged") {
            newItem.toggles.push("bottom_ranged");
            newItem.text["bottom_attack"] = item.bottomCombat.attack;
        } else if (item.bottomCombat.attackType === "melee") {
            newItem.toggles.push("bottom_melee");
            newItem.text["bottom_attack"] = item.bottomCombat.attack;
        }

        if (item.bottomCombat.defense) {
            newItem.toggles.push("bottom_defense");
            newItem.text["bottom_defense"] = item.bottomCombat.defense;
        }

        if (item.mod && item.mod.length === 1) {
            newItem.elements["bottom_mod_combat"] = item.mod[0];
        }
        
        if (item.mod && item.mod.length >= 2) {
            throw new Error("If bottom combat is defined, mod must only have at most one item.");
        }
    }

    if (item.cost) {
        newItem.toggles.push("cost_background");

        for (var i = 0; i < item.cost.length; i++) {
            var entry = item.cost[i];
            newItem.elements["cost_"+(i+1)] = entry.costType;
            newItem.text["cost_"+(i+1)] = entry.costVal;
        }
    }

    if (item.mod && typeof item.mod === "string") {
        newItem.text["desc_bottom"] = item.mod;
    } else if (item.mod && !item.bottomCombat) {
        newItem.toggles.push("square_parchment");
        newItem.toggles.push("bottom_mod_background");

        for (var i = 0; i < item.mod.length; i++) {
            var mod = item.mod[i];
            var modLength = item.mod.length;
            newItem.elements["bottom_mod_"+modLength+"_"+(i+1)] = mod;
        }
    }

    if (item.vps) {
        newItem.toggles.push("middle_mod_background");
        newItem.elements["vps"] = "victory_point";
        newItem.text["vps"] = item.vps;
    }

    return newItem;
}
