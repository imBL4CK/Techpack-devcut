ServerEvents.recipes((e) => {
    let recipeId = "malum:spirit_infusion/";

    //Empty Blaze Burner
    e.custom({
        "type": "malum:spirit_infusion",
        "extra_items": [
            {
                "count": 4,
                "tag": "forge:plates/iron"
            }
        ],
        "input": {
            "count": 1,
            "tag": "forge:netherrack"
        },
        "output": {
            "item": "create:empty_blaze_burner"
        },
        "spirits": [
            {
                "type": "infernal",
                "count": 2
            },
            {
                "type": "arcane",
                "count": 4
            }
        ]
    }).id(recipeId + "empty_blaze_burner")

    //Crafting Terminal
    e.custom({
        "type": "malum:spirit_infusion",
        "extra_items": [
            {
                "count": 4,
                "item": "create:electron_tube"
            },
            {
                "count": 1,
                "item": "create:mechanical_crafter"
            },
            {
                "count": 2,
                "item": "malum:spectral_optic"
            }, 
            {
                "count": 1,
                "item": "kubejs:basic_circuit"
            }
        ],
        "input": {
            "count": 1,
            "item": "prettypipes:item_terminal"
        },
        "output": {
            "item": "prettypipes:crafting_terminal"
        },
        "spirits": [
            {
                "type": "sacred",
                "count": 4
            },
            {
                "type": "wicked",
                "count": 4
            },
            {
                "type": "arcane",
                "count": 4
            },
            {
                "type": "eldritch",
                "count": 4
            },
            {
                "type": "aerial",
                "count": 4
            },
            {
                "type": "aqueous",
                "count": 4
            },
            {
                "type": "earthen",
                "count": 4
            },
            {
                "type": "infernal",
                "count": 4
            }
        ]
    }).id(recipeId + "item_terminal")

    //Runewood Sapling
    e.custom({
        "type": "malum:spirit_infusion",
        "extra_items": [
            {
                "count": 1,
                "item": "malum:runic_sapball"
            },
            {
                "count": 1,
                "item": "malum:hex_ash"
            }
        ],
        "input": {
            "count": 1,
            "tag": "minecraft:saplings"
        },
        "output": {
            "item": "malum:runewood_sapling"
        },
        "spirits": [
            {
                "type": "arcane",
                "count": 2
            },
            {
                "type": "earthen",
                "count": 1
            }
        ]
    }).id(recipeId + "runewood_sapling")
    
    //Azure Runewood Sapling
    e.custom({
        "type": "malum:spirit_infusion",
        "extra_items": [
            {
                "count": 1,
                "item": "malum:runic_sapball"
            },
            {
                "count": 1,
                "item": "malum:hex_ash"
            }
        ],
        "input": {
            "count": 1,
            "tag": "minecraft:saplings"
        },
        "output": {
            "item": "malum:azure_runewood_sapling"
        },
        "spirits": [
            {
                "type": "arcane",
                "count": 2
            },
            {
                "type": "aqueous",
                "count": 1
            }
        ]
    }).id(recipeId + "azure_runewood_sapling")
});