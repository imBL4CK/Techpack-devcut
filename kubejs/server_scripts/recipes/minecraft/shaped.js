ServerEvents.recipes((e) => {
  let recipeId = ["minecraft:shaped/"];

  const recipes = [
    //Wooden Gear
    {
      result: "4x #forge:gears/wooden",
      pattern: [" W ", "W W", " W "],
      key: {
        W: "#forge:plates/wooden",
      },
      id: recipeId + "wooden_gear",
    },
    //Wooden Gear by Planks
    {
      result: "#forge:gears/wooden",
      pattern: [" W ", "W W", " W "],
      key: {
        W: "#minecraft:planks",
      },
      id: recipeId + "wooden_gear_by_planks",
    },
    //Crafting Table
    {
      result: "minecraft:crafting_table",
      pattern: ["FF ", "WW ", "   "],
      key: {
        W: "#minecraft:planks",
        F: "minecraft:flint",
      },
      id: recipeId + "crafting_table",
    },
    //Furnace
    {
      result: "minecraft:furnace",
      pattern: ["CCC", "CGC", "COC"],
      key: {
        C: "#forge:cobblestone",
        G: "#forge:gears/wooden",
        O: "#minecraft:coals",
      },
      id: recipeId + "furnace",
    },
    //Primitive Hammer
    {
      result: "kubejs:primitive_hammer",
      pattern: [" IS", " SI", "S  "],
      key: {
        S: "minecraft:stick",
        I: "#forge:ingots/iron",
      },
      id: recipeId + "primitive_hammer",
    },
    //Andesite Alloy
    {
      result: "create:andesite_alloy",
      pattern: ["AS ", "CA ", "   "],
      key: {
        A: "minecraft:andesite",
        C: "minecraft:clay_ball",
        S: "#forge:slag",
      },
      id: recipeId + "andesite_alloy",
    },
    //Oak chest
    {
      result: "woodworks:oak_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:oak_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "oak_chest",
    },
    //Spruce chest
    {
      result: "woodworks:spruce_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:spruce_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "spruce_chest",
    },
    //Birch chest
    {
      result: "woodworks:birch_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:birch_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "birch_chest",
    },
    //Acacia chest
    {
      result: "woodworks:acacia_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:acacia_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "acacia_chest",
    },
    //Jungle chest
    {
      result: "woodworks:jungle_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:jungle_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "jungle_chest",
    },
    //Dark Oak chest
    {
      result: "woodworks:dark_oak_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:dark_oak_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "dark_oak_chest",
    },
    //Mangrove chest
    {
      result: "woodworks:mangrove_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:mangrove_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "mangrove_chest",
    },
    //Crimson chest
    {
      result: "woodworks:crimson_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:crimson_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "crimson_chest",
    },
    //Warped chest
    {
      result: "woodworks:warped_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:warped_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "warped_chest",
    },
    //Cherry chest
    {
      result: "woodworks:cherry_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:cherry_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "cherry_chest",
    },
    //Drifwood chest
    {
      result: "upgrade_aquatic:driftwood_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "upgrade_aquatic:driftwood_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "driftwood_chest",
    },
    //River chest
    {
      result: "upgrade_aquatic:river_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "upgrade_aquatic:river_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "river_chest",
    },
    //Redstone Flux Coil
    {
      result: "thermal:rf_coil",
      pattern: ["GR ", " E ", " RG"],
      key: {
        E: "create:electron_tube",
        G: "#forge:plates/gold",
        R: "#forge:dusts/redstone",
      },
      id: recipeId + "rf_coil",
    },
    //Pipe (Pretty Pipes)
    {
      result: "4x prettypipes:pipe",
      pattern: ["RSR", "IPI", "BCB"],
      key: {
        R: "thermal:rf_coil",
        S: "thermal:redstone_servo",
        I: "moreminecarts:silica_steel",
        P: "#forge:glass_panes",
        B: "#forge:gears/bronze",
        C: "create:cogwheel",
      },
      id: recipeId + "logistical_pipe",
    },
    //Item Terminal
    {
      result: "prettypipes:item_terminal",
      pattern: ["ERP", "FVF", "IMI"],
      key: {
        E: "create:electron_tube",
        R: "thermal:rf_coil",
        P: "prettypipes:pipe",
        V: "create:item_vault",
        F: "create:brass_funnel",
        I: "moreminecarts:silica_steel",
        M: "tfmg:steel_mechanism",
      },
      id: recipeId + "item_terminal",
    },
    //Servo attachment
    {
      result: Item.of("thermal:servo_attachment", 2),
      pattern: ["GRG", "SIS", "PMP"],
      key: {
        G: "#forge:gears/tin",
        R: "thermal:rf_coil",
        S: "thermal:redstone_servo",
        I: "#forge:ingots/red_alloy",
        P: "#forge:plates/iron",
        M: "tfmg:steel_mechanism",
      },
      id: recipeId + "servo_attachment",
    },
    //Electric Casing
    {
      result: "tfmg:electric_casing",
      pattern: ["CCC", "AHA", "RSR"],
      key: {
        C: "tfmg:copper_cable",
        A: "createaddition:capacitor",
        H: "tfmg:heavy_machinery_casing",
        R: "thermal:rf_coil",
        S: "thermal:redstone_servo",
      },
      id: recipeId + "electric_casing",
    },
    //Electric Motor (TFMG)
    {
      result: "tfmg:electric_motor",
      pattern: ["ICP", "MES", "ICP"],
      key: {
        I: "create:industrial_iron_block",
        M: "tfmg:steel_mechanism",
        C: "tfmg:copper_cable",
        E: "tfmg:electric_casing",
        S: "create:shaft",
        P: "#forge:plates/copper",
      },
      id: recipeId + "electric_motor",
    },
    //Resistor (TFMG)
    {
      result: "tfmg:resistor",
      pattern: ["PGP", "MES", "PGP"],
      key: {
        P: "#forge:plates/lead",
        G: "#forge:gears/lead",
        M: "tfmg:steel_mechanism",
        E: "tfmg:electric_casing",
        S: "create:shaft",
      },
      id: recipeId + "resistor",
    },
    //Charger
    {
      result: "ae2:charger",
      pattern: ["FCI", "EGP", "FCI"],
      key: {
        F: "#forge:plates/iron",
        I: "#forge:plates/invar",
        C: "tfmg:electric_casing",
        E: "kubejs:energized_steel_ingot",
        G: "#forge:glass",
        P: "#forge:plates/copper",
      },
      id: recipeId + "charger",
    },
    //Copper Coil
    {
      result: "tfmg:copper_coil",
      pattern: ["WWW", "WSW", "WWW"],
      key: {
        W: "#forge:wires/copper",
        S: "#forge:ingots/steel",
      },
      id: recipeId + "copper_coil",
    },
    //Actually Casing
    {
      result: "actuallyadditions:iron_casing",
      pattern: ["HVH", "TET", "HVH"],
      key: {
        H: "tfmg:heavy_machinery_casing",
        T: "create:electron_tube",
        V: "kubejs:vaccum_tube",
        E: "tfmg:electric_casing",
      },
      id: recipeId + "iron_casing",
    },
    //Inscriber
    {
      result: "ae2:inscriber",
      pattern: ["IPI", "GCG", "EPE"],
      key: {
        I: "#forge:plates/invar",
        P: "minecraft:sticky_piston",
        G: "#forge:gears/invar",
        C: "tfmg:electric_casing",
        E: "kubejs:energized_steel_ingot",
      },
      id: recipeId + "inscriber",
    },
    //Atomic Reconstructor
    {
      result: "actuallyadditions:atomic_reconstructor",
      pattern: ["PPP", "MCL", "PGP"],
      key: {
        P: "#forge:plates/steel",
        G: "#forge:gears/steel",
        M: "tfmg:electric_motor",
        C: "actuallyadditions:iron_casing",
        L: "actuallyadditions:lens",
      },
      id: recipeId + "atomic_reconstructor",
    },
    //Basic Circuit
    {
      result: "kubejs:basic_circuit",
      pattern: ["BIC", "RSR", "VMV"],
      key: {
        B: "actuallyadditions:black_quartz",
        I: "moreminecarts:silica_steel",
        C: "actuallyadditions:basic_coil",
        R: "thermal:rf_coil",
        S: "thermal:redstone_servo",
        V: "kubejs:vaccum_tube",
        M: "tfmg:steel_mechanism",
      },
      id: recipeId + "basic_circuit",
    },
    //iR Basic Casing
    {
      result: "kubejs:basic_machine_casing",
      pattern: ["PGP", "GVG", "PIP"],
      key: {
        P: "#forge:plates/steel",
        G: "#forge:gears/energized_steel",
        V: "kubejs:vaccum_tube",
        I: "actuallyadditions:iron_casing",
      },
      id: recipeId + "basic_machine_casing",
    },
    //iR Macerator
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/macerator"}'
      ),
      pattern: ["SPD", "FCF", "GBG"],
      key: {
        S: "thermal:saw_blade",
        P: "minecraft:piston",
        D: "thermal:drill_head",
        F: "minecraft:flint",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/steel",
        B: "kubejs:basic_machine_casing",
      },
      id: recipeId + "industrial_revival/macerator",
    },
    //iR Compressor
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/compressor"}'
      ),
      pattern: [" M ", "PCP", "GBG"],
      key: {
        M: "create:mechanical_press",
        P: "minecraft:piston",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/compressed_iron",
        B: "kubejs:basic_machine_casing",
      },
      id: recipeId + "industrial_revival/compressor",
    },
    //Lens
    {
      result: "actuallyadditions:lens",
      pattern: ["PGP", "GGG", "PGP"],
      key: {
        P: "#forge:plates/energized_steel",
        G: "#forge:glass_panes",
      },
      id: recipeId + "lens",
    },
    //Air Compressor
    {
      result: "pneumaticcraft:air_compressor",
      pattern: [" C ", "GPG", "IEI"],
      key: {
        C: "kubejs:basic_circuit",
        G: "#forge:gears/compressed_iron",
        P: "pneumaticcraft:pressure_tube",
        I: "#forge:ingots/compressed_iron",
        E: Item.of(
          "custommachinery:custom_machine_item",
          '{machine:"custommachinery:industrialrevival/generator"}'
        ).weakNBT(),
      },
      id: recipeId + "air_compressor",
    },
    //iR Combustion Generator
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/generator"}'
      ),
      pattern: ["GFS", "RDR", "PBP"],
      key: {
        G: "kubejs:energized_steel_gear",
        S: "thermal:redstone_servo",
        F: "minecraft:blast_furnace",
        R: "thermal:rf_coil",
        D: "thermal:dynamo_stirling",
        P: "kubejs:energized_steel_plate",
        B: "kubejs:basic_machine_casing",
      },
      id: recipeId + "industrial_revival/generator",
    },
    //Stirling Generator
    {
      result: "thermal:dynamo_stirling",
      pattern: [" C ", "SGS", "RBR"],
      key: {
        C: "thermal:rf_coil",
        S: "thermal:redstone_servo",
        G: "kubejs:energized_steel_gear",
        R: "pneumaticcraft:reinforced_stone",
        B: "kubejs:basic_machine_casing",
      },
      id: recipeId + "stirling_dynamo",
    },
    //Reinforced Armor Helmet
    {
      result: "kubejs:reinforced_armor_helmet",
      pattern: ["AAA", "AIA", "   "],
      key: {
        A: "kubejs:advanced_alloy_ingot",
        I: "minecraft:iron_helmet",
      },
      id: recipeId + "reinforced_armor_helmet",
    },
    //Reinforced Armor Chestplate
    {
      result: "kubejs:reinforced_armor_chestplate",
      pattern: ["AIA", "AAA", "AAA"],
      key: {
        A: "kubejs:advanced_alloy_ingot",
        I: "minecraft:iron_chestplate",
      },
      id: recipeId + "reinforced_armor_chestplate",
    },
    //Reinforced Armor Leggings
    {
      result: "kubejs:reinforced_armor_leggings",
      pattern: ["AAA", "AIA", "A A"],
      key: {
        A: "kubejs:advanced_alloy_ingot",
        I: "minecraft:iron_leggings",
      },
      id: recipeId + "reinforced_armor_leggings",
    },
    //Reinforced Armor Boots
    {
      result: "kubejs:reinforced_armor_boots",
      pattern: ["   ", "AIA", "A A"],
      key: {
        A: "kubejs:advanced_alloy_ingot",
        I: "minecraft:iron_boots",
      },
      id: recipeId + "reinforced_armor_boots",
    },
    //Alloy Foundry
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/alloy_foundry"}'
      ),
      pattern: ["ACA", "PIB", "RMR"],
      key: {
        A: "kubejs:advanced_alloy_plate",
        C: "kubejs:basic_circuit",
        P: "actuallyadditions:powered_furnace",
        I: "tfmg:capacitor_",
        B: "minecraft:blast_furnace",
        R: "thermal:rf_coil",
        M: "kubejs:basic_machine_casing",
      },
      id: recipeId + "industrial_revival/alloy_foundry",
    },
  ];
  recipes.forEach((recipe) => {
    e.shaped(recipe.result, recipe.pattern, recipe.key).id(recipe.id);
  });
});
