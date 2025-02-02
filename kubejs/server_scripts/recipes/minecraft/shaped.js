ServerEvents.recipes((e) => {
  let recipeId = ["minecraft:shaped/"];

  const recipes = [
    //Wooden Gear
    {
      result: "4x #forge:gears/wood",
      pattern: [" W ", "W W", " W "],
      key: {
        W: "#forge:plates/wood",
      },
      id: recipeId + "wood_gear",
    },
    //Wooden Gear by Planks
    {
      result: "#forge:gears/wood",
      pattern: [" W ", "W W", " W "],
      key: {
        W: "#minecraft:planks",
      },
      id: recipeId + "wood_gear_by_planks",
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
        G: "#forge:gears/wood",
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
        G: "#forge:gears/wood",
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
        G: "#forge:gears/wood",
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
        G: "#forge:gears/wood",
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
        G: "#forge:gears/wood",
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
        G: "#forge:gears/wood",
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
        G: "#forge:gears/wood",
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
        G: "#forge:gears/wood",
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
        G: "#forge:gears/wood",
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
        G: "#forge:gears/wood",
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
        G: "#forge:gears/wood",
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
        G: "#forge:gears/wood",
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
        G: "#forge:gears/wood",
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
        R: "#forge:ingots/red_alloy",
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
      pattern: ["FCI", "FGP", "FCI"],
      key: {
        F: "#forge:plates/iron",
        I: "#forge:plates/invar",
        C: "tfmg:electric_casing",
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
      pattern: ["WPD", "FCF", "GBG"],
      key: {
        W: "create:crushing_wheel",
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
    //Stirling Dynamo
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
    //iR Alloy Foundry
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/alloy_foundry"}'
      ),
      pattern: ["AIA", "PCB", "RMR"],
      key: {
        A: "kubejs:advanced_alloy_plate",
        I: "tfmg:capacitor_",
        P: "actuallyadditions:powered_furnace",
        C: "kubejs:basic_circuit",
        B: "minecraft:blast_furnace",
        R: "thermal:rf_coil",
        M: "kubejs:basic_machine_casing",
      },
      id: recipeId + "industrial_revival/alloy_foundry",
    },
    //AA Crusher
    {
      result: "actuallyadditions:crusher",
      pattern: ["GBG", "FCF", "GIG"],
      key: {
        G: "kubejs:energized_steel_gear",
        B: "actuallyadditions:basic_coil",
        F: "minecraft:flint",
        C: "kubejs:basic_circuit",
        I: "actuallyadditions:iron_casing",
      },
      id: recipeId + "actuallysubstractions/crusher",
    },
    //AA Double Crusher
    {
      result: "actuallyadditions:crusher_double",
      pattern: ["GBG", "RCR", "GIG"],
      key: {
        G: "kubejs:energized_steel_gear",
        B: "actuallyadditions:advanced_coil",
        R: "actuallyadditions:crusher",
        C: "kubejs:basic_circuit",
        I: "actuallyadditions:iron_casing",
      },
      id: recipeId + "actuallysubstractions/double_crusher",
    },
    //AA Powered Furnace
    {
      result: "actuallyadditions:powered_furnace",
      pattern: ["EBE", "FCF", "GIG"],
      key: {
        B: "actuallyadditions:basic_coil",
        E: "actuallyadditions:enori_crystal",
        F: "minecraft:furnace",
        C: "kubejs:basic_circuit",
        G: "kubejs:energized_steel_gear",
        I: "actuallyadditions:iron_casing",
      },
      id: recipeId + "actuallysubstractions/powered_furnace",
    },
    //Leather Backpack
    {
      result: "sophisticatedbackpacks:backpack",
      pattern: ["SIS", "LCL", "III"],
      key: {
        S: "#forge:string",
        I: "kubejs:industrial_leather",
        L: "minecraft:lead",
        C: "#forge:chests",
      },
      id: recipeId + "leather_backpack",
    },
    //TFMG Copper Cable wRubber
    {
      result: "tfmg:copper_cable",
      pattern: [" C ", "CSC", "RC "],
      key: {
        C: "#forge:wires/copper",
        S: "createaddition:spool",
        R: "thermal:cured_rubber",
      },
      id: recipeId + "tfmg/copper_cable_with_rubber",
    },
    //TFMG Copper Cable wPlastic
    {
      result: "tfmg:copper_cable",
      pattern: [" C ", "CSC", "RC "],
      key: {
        C: "#forge:wires/copper",
        S: "createaddition:spool",
        R: "#forge:plastic",
      },
      id: recipeId + "tfmg/copper_cable_with_plastic",
    },
    //Golden Hand
    {
      result: "kubejs:golden_hand",
      pattern: [" A ", "PPP", " P "],
      key: {
        A: "create:andesite_alloy",
        P: "#forge:plates/gold",
      },
      id: recipeId + "golden_hand",
    },
    //Alloy Klin Controller
    {
      result: "mm:alloy_klin_controller",
      pattern: ["AAA", "FBF", "AAA"],
      key: {
        A: "kubejs:klin_bricks",
        F: "minecraft:furnace",
        B: "create:blaze_burner",
      },
      id: recipeId + "alloy_klin_controller",
    },
    //Fishing Basin
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/fishing_basin"}'
      ),
      pattern: ["PSP", "SFS", "PSP"],
      key: {
        P: "#minecraft:planks",
        S: "#forge:string",
        F: "minecraft:fishing_rod",
      },
      id: recipeId + "industrialrevival/fishing_basin",
    },
    //iR Metal Former
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/metal_former"}'
      ),
      pattern: ["PMP", "RCR", "OBO"],
      key: {
        P: "minecraft:piston",
        M: "create:mechanical_press",
        R: "thermal:rf_coil",
        C: "kubejs:basic_circuit",
        O: "actuallyadditions:basic_coil",
        B: "kubejs:basic_machine_casing",
      },
      id: recipeId + "industrial_revival/metal_former",
    },
    //Magic Workbench
    {
      result: "eidolon:worktable",
      pattern: [" D ", "CCC", "PPP"],
      key: {
        D: "#forge:gems/diamond",
        C: "minecraft:purple_carpet",
        P: "malum:runewood_planks",
      },
      id: recipeId + "magic_workbench",
    },
    //Item Conduit
    {
      result: Item.of("enderio:item_conduit", 8),
      pattern: ["BNB", "BNB", "DLD"],
      key: {
        B: "enderio:conduit_binder",
        N: "#forge:nuggets/pulsating_alloy",
        D: "#forge:ingots/dark_steel",
        L: "prettypipes:pipe",
      },
      id: recipeId + "item_conduit",
    },
    //Oil Generator
    {
      result: "actuallyadditions:oil_generator",
      pattern: ["PBP", "PCP", "PIP"],
      key: {
        P: "kubejs:energized_steel_plate",
        B: "actuallyadditions:basic_coil",
        C: "actuallyadditions:canola",
        I: "actuallyadditions:iron_casing",
      },
      id: recipeId + "oil_generator",
    },
    //Piston
    {
      result: "minecraft:piston",
      pattern: ["PPP", "CRC", "CIC"],
      key: {
        P: "#minecraft:planks",
        C: "#forge:cobblestone",
        R: "#forge:rods/copper",
        I: "#forge:plates/iron",
      },
      id: recipeId + "piston",
    },
    //Pity Machine Frame
    {
      result: "industrialforegoing:machine_frame_pity",
      pattern: ["PIP", "ICI", "PIP"],
      key: {
        P: "#minecraft:planks",
        C: "kubejs:basic_machine_casing",
        I: "#forge:plates/iron",
      },
      id: recipeId + "pity_machine_frame",
    },
    //Fluid Extractor
    {
      result: "industrialforegoing:fluid_extractor",
      pattern: ["HAH", "HCH", "HPH"],
      key: {
        H: "kubejs:hdpe_sheet",
        A: "thermal:device_tree_extractor",
        C: "kubejs:basic_circuit",
        P: "industrialforegoing:machine_frame_pity",
      },
      id: recipeId + "fluid_extractor",
    },
    //Latex Processing Unit
    {
      result: "industrialforegoing:latex_processing_unit",
      pattern: ["HFH", "TCT", "HPH"],
      key: {
        H: "kubejs:hdpe_sheet",
        F: "minecraft:furnace",
        T: "create:fluid_tank",
        C: "kubejs:basic_circuit",
        P: "industrialforegoing:machine_frame_pity",
      },
      id: recipeId + "latex_processing_unit",
    },
    //Tinker Bench
    {
      result: "thermal:tinker_bench",
      pattern: ["III", "HCH", "PPP"],
      key: {
        I: "#forge:plates/iron",
        H: "#thermal:glass/hardened",
        C: "kubejs:basic_circuit",
        P: "#minecraft:planks",
      },
      id: recipeId + "tinker_bench",
    },
    //Energetic Infuser
    {
      result: "thermal:charge_bench",
      pattern: ["EEE", "ACA", "EBE"],
      key: {
        E: "#forge:plates/electrum",
        A: "tfmg:capacitor",
        C: "thermal:energy_cell_frame",
        B: "kubejs:basic_circuit",
      },
      id: recipeId + "energetic_infuser",
    },
    //Thermal Redstone Furnace
    {
      result: "thermal:machine_furnace",
      pattern: ["IFI", "RCR", "GAG"],
      key: {
        I: "#forge:plates/invar",
        F: "minecraft:furnace",
        R: "thermal:rf_coil",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/bronze",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/redstone_furnace",
    },
    //Thermal Sawmill
    {
      result: "thermal:machine_sawmill",
      pattern: ["ISI", "RCR", "GAG"],
      key: {
        I: "#forge:plates/invar",
        S: "thermal:saw_blade",
        R: "thermal:rf_coil",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/bronze",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/sawmill",
    },
    //Thermal Pulverizer
    {
      result: "thermal:machine_pulverizer",
      pattern: ["IDI", "WCW", "GAG"],
      key: {
        I: "#forge:plates/invar",
        D: "thermal:drill_head",
        W: "create:crushing_wheel",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/bronze",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/pulverizer",
    },
    //Thermal Induction Smelter
    {
      result: "thermal:machine_smelter",
      pattern: ["BIB", "RCR", "GAG"],
      key: {
        B: "minecraft:blast_furnace",
        I: "#forge:plates/invar",
        R: "thermal:rf_coil",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/invar",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/induction_smelter",
    },
    //Thermal Centrifugal Separator
    {
      result: "thermal:machine_centrifuge",
      pattern: ["IPI", "RCR", "GAG"],
      key: {
        I: "#forge:plates/invar",
        P: "minecraft:compass",
        R: "thermal:rf_coil",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/constantan",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/centrifuge",
    },
    //Thermal Multiservo Press
    {
      result: "thermal:machine_press",
      pattern: ["IPI", "RCR", "GAG"],
      key: {
        I: "#forge:plates/invar",
        P: "create:mechanical_press",
        R: "thermal:rf_coil",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/constantan",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/multiservo_press",
    },
    //Thermal Magma Crucible
    {
      result: "thermal:machine_crucible",
      pattern: ["IHI", "NCN", "GAG"],
      key: {
        I: "#forge:plates/invar",
        H: "#thermal:glass/hardened",
        N: "minecraft:nether_bricks",
        C: "kubejs:advanced_circuit",
        G: "#forge:gears/invar",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/magma_crucible",
    },
    //Thermal Blast Chiller
    {
      result: "thermal:machine_chiller",
      pattern: ["IHI", "BCB", "GAG"],
      key: {
        I: "#forge:plates/invar",
        H: "#thermal:glass/hardened",
        B: "thermal:blizz_rod",
        C: "kubejs:advanced_circuit",
        G: "#forge:gears/invar",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/blast_chiller",
    },
    //Thermal Fractionating Still
    {
      result: "thermal:machine_refinery",
      pattern: ["IHI", "OCT", "GAG"],
      key: {
        I: "#forge:plates/invar",
        H: "#thermal:glass/hardened",
        O: "tfmg:steel_distillation_output",
        T: "tfmg:steel_distillation_controller",
        C: "kubejs:advanced_circuit",
        G: "#forge:gears/invar",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/fractionating_still",
    },
    //Thermal Pyrolyzer
    {
      result: "thermal:machine_pyrolyzer",
      pattern: ["IBI", "NCN", "GAG"],
      key: {
        I: "#forge:plates/invar",
        B: "create:blaze_cake",
        N: "minecraft:nether_bricks",
        C: "kubejs:advanced_circuit",
        G: "#forge:gears/constantan",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/pyrolyzer",
    },
    //Thermal Fluid Encapsulator
    {
      result: "thermal:machine_bottler",
      pattern: ["ISI", "HCH", "GAG"],
      key: {
        I: "#forge:plates/invar",
        S: "create:spout",
        H: "#thermal:glass/hardened",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/bronze",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/fluid_encapsulator",
    },
    //Thermal Alchemical Imbuer
    {
      result: "thermal:machine_brewer",
      pattern: ["IBI", "HCH", "GAG"],
      key: {
        I: "#forge:plates/invar",
        B: "minecraft:brewing_stand",
        H: "#thermal:glass/hardened",
        C: "kubejs:advanced_circuit",
        G: "#forge:gears/constantan",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/alchemical_imbuer",
    },
    //Thermal Sequential Fabricator
    {
      result: Item.of("thermal:machine_crafter", 2),
      pattern: ["IRI", "TCT", "GAG"],
      key: {
        I: "#forge:plates/invar",
        R: "thermal:rf_coil",
        T: "minecraft:crafting_table",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/bronze",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/sequential_fabricator",
    },
    //Compression Dynamo
    {
      result: "thermal:dynamo_compression",
      pattern: [" C ", "TGT", "PBP"],
      key: {
        C: "thermal:rf_coil",
        T: "create:fluid_tank",
        G: "#forge:gears/bronze",
        P: "#forge:plates/bronze",
        B: "kubejs:basic_machine_casing",
      },
      id: recipeId + "compression_dynamo",
    },
    //Magmatic Dynamo
    {
      result: "thermal:dynamo_magmatic",
      pattern: [" C ", "TGT", "PSP"],
      key: {
        C: "thermal:rf_coil",
        T: "tfmg:steel_fluid_tank",
        G: "#forge:gears/invar",
        P: "#forge:plates/invar",
        S: "thermal:dynamo_stirling",
      },
      id: recipeId + "magmatic_dynamo",
    },
    //Disenchantment Dynamo
    {
      result: "thermal:dynamo_disenchantment",
      pattern: [" C ", "PTP", "EBE"],
      key: {
        C: "thermal:rf_coil",
        P: "#forge:plates/iron",
        T: "minecraft:enchanting_table",
        E: "minecraft:experience_bottle",
        B: "kubejs:basic_machine_casing",
      },
      id: recipeId + "disenchantment_dynamo",
    },
    //Gourmand Dynamo
    {
      result: "thermal:dynamo_gourmand",
      pattern: [" C ", "AGA", "PBP"],
      key: {
        C: "thermal:rf_coil",
        A: "kubejs:advanced_circuit",
        G: "#forge:gears/copper",
        P: "#forge:plates/tin",
        B: "kubejs:basic_machine_casing",
      },
      id: recipeId + "gourmand_dynamo",
    },
    //Energy Cell Frame
    {
      result: "thermal:energy_cell_frame",
      pattern: ["PHP", "HCH", "PHP"],
      key: {
        P: "#forge:plates/lead",
        H: "#thermal:glass/hardened",
        C: "tfmg:capacitor",
      },
      id: recipeId + "energy_cell_frame",
    },
    //Energy Cell
    {
      result: "thermal:energy_cell",
      pattern: ["PAP", "RCR", "PAP"],
      key: {
        P: "#forge:plastic",
        A: "#forge:ingots/red_alloy",
        R: "thermal:rf_coil",
        C: "thermal:energy_cell_frame",
      },
      id: recipeId + "energy_cell",
    },
    //Fluid Cell Frame
    {
      result: "thermal:fluid_cell_frame",
      pattern: ["PHP", "HCH", "PHP"],
      key: {
        P: "#forge:plates/bronze",
        H: "#thermal:glass/hardened",
        C: "create:fluid_tank",
      },
      id: recipeId + "fluid_cell_frame",
    },
    //Fluid Cell
    {
      result: "thermal:fluid_cell",
      pattern: ["BGB", "RCR", "BGB"],
      key: {
        B: "thermal:cured_rubber",
        G: "#forge:gears/iron",
        R: "thermal:redstone_servo",
        C: "thermal:fluid_cell_frame",
      },
      id: recipeId + "fluid_cell",
    },
    //Energy Duct
    {
      result: Item.of("thermal:energy_duct", 6),
      pattern: ["PPP", "RHR", "PPP"],
      key: {
        P: "#forge:plates/lead",
        R: "#forge:ingots/red_alloy",
        H: "#thermal:glass/hardened",
      },
      id: recipeId + "energy_duct",
    },
    //Aqueos Accumulator
    {
      result: "thermal:device_water_gen",
      pattern: ["PRP", "HBH", "PCP"],
      key: {
        P: "#forge:plates/copper",
        R: "thermal:redstone_servo",
        B: "minecraft:bucket",
        H: "#thermal:glass/hardened",
        C: "thermal:machine_frame",
      },
      id: recipeId + "aqueous_accumulator",
    },
    //Igeneous Extruder
    {
      result: "thermal:device_rock_gen",
      pattern: ["PGP", "HBH", "PCP"],
      key: {
        P: "#forge:plates/invar",
        G: "#forge:gears/constantan",
        B: "minecraft:bucket",
        H: "#thermal:glass/hardened",
        C: "thermal:machine_frame",
      },
      id: recipeId + "igneous_extruder",
    },
    //Vaccumulator
    {
      result: "thermal:device_collector",
      pattern: ["PEP", "HOH", "PCP"],
      key: {
        P: "#forge:plates/tin",
        E: "minecraft:ender_pearl",
        O: "minecraft:hopper",
        H: "#thermal:glass/hardened",
        C: "thermal:machine_frame",
      },
      id: recipeId + "vaccumulator",
    },
    //Insighful Condenser
    {
      result: "thermal:device_xp_condenser",
      pattern: ["PGP", "HIH", "PCP"],
      key: {
        P: "#forge:plates/silver",
        G: "#forge:gears/lapis",
        I: "thermal:xp_crystal",
        H: "#thermal:glass/hardened",
        C: "thermal:machine_frame",
      },
      id: recipeId + "insighful_condenser",
    },
    //Nullifier
    {
      result: "thermal:device_nullifier",
      pattern: ["PRP", "HLH", "PSP"],
      key: {
        P: "#forge:plates/tin",
        R: "#forge:ingots/red_alloy",
        L: "minecraft:lava_bucket",
        H: "#thermal:glass/hardened",
        S: "thermal:redstone_servo",
      },
      id: recipeId + "nullifier",
    },
    //Decoctive Diffuser
    {
      result: "thermal:device_potion_diffuser",
      pattern: ["PGP", "HBH", "PSP"],
      key: {
        P: "#forge:plates/silver",
        G: "#forge:gears/constantan",
        B: "minecraft:glass_bottle",
        H: "#thermal:glass/hardened",
        S: "thermal:redstone_servo",
      },
      id: recipeId + "decoctive_diffuser",
    },
    //Dieser Generator
    {
      result: "createdieselgenerators:diesel_engine",
      pattern: [" D ", "PTP", "BCB"],
      key: {
        D: "thermal:dynamo_compression",
        P: "createdieselgenerators:engine_piston",
        T: "create:fluid_tank",
        B: "#forge:plates/brass",
        C: "kubejs:basic_machine_casing",
      },
      id: recipeId + "createdieselgenerators/diesel_engine",
    },
    //Modular Dieser Generator
    {
      result: "createdieselgenerators:large_diesel_engine",
      pattern: ["   ", "TET", "BDB"],
      key: {
        T: "create:fluid_tank",
        E: "createdieselgenerators:diesel_engine",
        B: "#forge:plates/brass",
        D: "thermal:dynamo_compression",
      },
      id: recipeId + "createdieselgenerators/modular_diesel_engine",
    },
    //Energy Laser Relay
    {
      result: Item.of("actuallyadditions:laser_relay", 4),
      pattern: [" C ", "RAR", " O "],
      key: {
        C: "tfmg:copper_cable",
        R: "actuallyadditions:restonia_crystal",
        A: "actuallyadditions:advanced_coil",
        O: "minecraft:obsidian",
      },
      id: recipeId + "laser_relay",
    },
    //Satchel
    {
      result: "thermal:satchel",
      pattern: ["STS", "IWI", "S S"],
      key: {
        S: "minecraft:string",
        T: "#forge:ingots/tin",
        I: "kubejs:industrial_leather",
        W: "#minecraft:wool",
      },
      id: recipeId + "satchel",
    },
    //Steel Item Port Input
    {
      result: "mm:steel_item_port_input",
      pattern: ["S S", " C ", "SHS"],
      key: {
        S: "#forge:plates/steel",
        C: "minecraft:chest",
        H: "minecraft:hopper",
      },
      id: recipeId + "steel_item_port_input",
    },
    //Steel Fluid Port Input
    {
      result: "mm:steel_fluid_port_input",
      pattern: ["S S", " T ", "SHS"],
      key: {
        S: "#forge:plates/steel",
        T: "create:fluid_tank",
        H: "minecraft:hopper",
      },
      id: recipeId + "steel_fluid_port_input",
    },
    //Steel Energy Port Input
    {
      result: "mm:steel_energy_port_input",
      pattern: ["S S", " A ", "SHS"],
      key: {
        S: "#forge:plates/steel",
        A: "createaddition:modular_accumulator",
        H: "minecraft:hopper",
      },
      id: recipeId + "steel_energy_port_input",
    },
    //iR Energetic Smelter
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/energetic_smelter"}'
      ),
      pattern: [" F ", "RCR", "SMS"],
      key: {
        F: "minecraft:furnace",
        C: "kubejs:basic_circuit",
        R: "thermal:rf_coil",
        S: "#forge:gears/steel",
        M: "kubejs:basic_machine_casing",
      },
      id: recipeId + "industrial_revival/energetic_smelter",
    },
    //iR Assembler
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/assembler"}'
      ),
      pattern: ["HIH", "RCR", "GMG"],
      key: {
        H: "kubejs:hdpe_sheet",
        I: "tfmg:capacitor_",
        R: "thermal:rf_coil",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/energized_steel",
        M: "kubejs:basic_machine_casing",
      },
      id: recipeId + "industrial_revival/assembler",
    },
    //Bronze Casing
    {
      result: Item.of("kubejs:bronze_casing", 4),
      pattern: ["PPP", "PGP", "PPP"],
      key: {
        P: "#forge:plates/bronze",
        G: "#forge:gears/bronze",
      },
      id: recipeId + "mm/bronze_casing",
    },
    //Steel Casing
    {
      result: Item.of("kubejs:steel_casing", 4),
      pattern: ["PPP", "PGP", "PPP"],
      key: {
        P: "#forge:plates/steel",
        G: "#forge:gears/steel",
      },
      id: recipeId + "mm/steel_casing",
    },
    //Heatproof Casing
    {
      result: Item.of("kubejs:heatproof_casing", 4),
      pattern: ["PPP", "PGP", "PPP"],
      key: {
        P: "#forge:plates/invar",
        G: "#forge:gears/invar",
      },
      id: recipeId + "mm/heatproof_casing",
    },
    //Arc Furnace Controller
    {
      result: "mm:arc_furnace_controller",
      pattern: ["PMP", "CAC", "PCP"],
      key: {
        P: "#forge:plates/steel",
        M: "kubejs:steel_casing",
        C: "kubejs:basic_circuit",
        A: Item.of(
          "custommachinery:custom_machine_item",
          '{machine:"custommachinery:industrialrevival/alloy_foundry"}'
        ).strongNBT(),
      },
      id: recipeId + "arc_furnace_controller",
    },
    //Steam Macerator Controller
    {
      result: "mm:steam_macerator_controller",
      pattern: ["WMW", "PAP", "WPW"],
      key: {
        W: "create:crushing_wheel",
        P: "#forge:plates/bronze",
        M: "kubejs:bronze_casing",
        A: Item.of(
          "custommachinery:custom_machine_item",
          '{machine:"custommachinery:industrialrevival/macerator"}'
        ).strongNBT(),
      },
      id: recipeId + "steam_macerator_controller",
    },
    //Constantan Coil
    {
      result: "kubejs:constantan_coil",
      pattern: ["SSS", "CCC", "SSS"],
      key: {
        S: "#forge:plates/steel",
        C: "#forge:plates/constantan",
      },
      id: recipeId + "constantan_coil",
    },
    //Shadow Bronze Coil
    {
      result: "kubejs:shadow_bronze_coil",
      pattern: ["SSS", "CCC", "SSS"],
      key: {
        S: "#forge:plates/steel",
        C: "kubejs:shadow_bronze_plate",
      },
      id: recipeId + "shadow_bronze_coil",
    },
  ];
  recipes.forEach((recipe) => {
    e.shaped(recipe.result, recipe.pattern, recipe.key).id(recipe.id);
  });
});

/*
    //
    {
      result: "",
      pattern: ["P", "", ""],
      key: {
        P: "#forge:plates/silver",
      },
      id: recipeId + "",
    },
*/
