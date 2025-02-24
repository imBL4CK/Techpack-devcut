ServerEvents.recipes((e) => {
  let recipeId = "malum:spirit_infusion/";

  const recipes = [
    //Empty Blaze Burner
    {
      extra_items: [
        {
          count: 4,
          tag: "forge:plates/iron",
        },
      ],
      input: {
        count: 1,
        tag: "forge:netherrack",
      },
      output: {
        item: "create:empty_blaze_burner",
      },
      spirits: [
        {
          type: "infernal",
          count: 2,
        },
        {
          type: "arcane",
          count: 4,
        },
      ],
      id: recipeId + "empty_blaze_burner",
    },
    //Crafting Terminal
    {
      extra_items: [
        {
          count: 4,
          item: "create:electron_tube",
        },
        {
          count: 1,
          item: "create:mechanical_crafter",
        },
        {
          count: 2,
          item: "malum:spectral_optic",
        },
        {
          count: 1,
          item: "kubejs:basic_circuit",
        },
      ],
      input: {
        count: 1,
        item: "prettypipes:item_terminal",
      },
      output: {
        item: "prettypipes:crafting_terminal",
      },
      spirits: [
        {
          type: "sacred",
          count: 4,
        },
        {
          type: "wicked",
          count: 4,
        },
        {
          type: "arcane",
          count: 4,
        },
        {
          type: "eldritch",
          count: 4,
        },
        {
          type: "aerial",
          count: 4,
        },
        {
          type: "aqueous",
          count: 4,
        },
        {
          type: "earthen",
          count: 4,
        },
        {
          type: "infernal",
          count: 4,
        },
      ],
      id: recipeId + "crafting_terminal",
    },
    //Runewood Sapling
    {
      extra_items: [
        {
          count: 1,
          item: "malum:runic_sapball",
        },
        {
          count: 1,
          item: "malum:hex_ash",
        },
      ],
      input: {
        count: 1,
        tag: "minecraft:saplings",
      },
      output: {
        item: "malum:runewood_sapling",
      },
      spirits: [
        {
          type: "arcane",
          count: 2,
        },
        {
          type: "earthen",
          count: 1,
        },
      ],
      id: recipeId + "runewood_sapling",
    },
    //Azure Runewood Sapling
    {
      extra_items: [
        {
          count: 1,
          item: "malum:runic_sapball",
        },
        {
          count: 1,
          item: "malum:hex_ash",
        },
      ],
      input: {
        count: 1,
        tag: "minecraft:saplings",
      },
      output: {
        item: "malum:azure_runewood_sapling",
      },
      spirits: [
        {
          type: "arcane",
          count: 2,
        },
        {
          type: "aqueous",
          count: 1,
        },
      ],
      id: recipeId + "azure_runewood_sapling",
    },
    //Mixing Cauldron
    {
      extra_items: [
        {
          count: 2,
          item: "malum:tainted_rock",
        },
        {
          count: 2,
          item: "malum:twisted_rock",
        },
        {
          count: 1,
          item: "malum:chunk_of_brilliance",
        },
        {
          count: 1,
          item: "malum:arcane_charcoal",
        },
      ],
      input: {
        count: 1,
        item: "minecraft:cauldron",
      },
      output: {
        item: "hexerei:mixing_cauldron",
      },
      spirits: [
        {
          type: "arcane",
          count: 2,
        },
        {
          type: "aerial",
          count: 2,
        },
      ],
      id: recipeId + "mixing_cauldron",
    },
    //Pewter Inlay
    {
      extra_items: [
        {
          count: 4,
          item: "eidolon:pewter_ingot",
        },
      ],
      input: {
        count: 1,
        item: "malum:processed_soulstone",
      },
      output: {
        count: 2,
        item: "eidolon:pewter_inlay",
      },
      spirits: [
        {
          type: "arcane",
          count: 2,
        },
      ],
      id: recipeId + "pewter_inlay",
    },
    //Chromatic Compound
    {
      extra_items: [
        {
          count: 4,
          item: "create:polished_rose_quartz",
        },
        {
          count: 4,
          item: "create:powdered_obsidian",
        },
        {
          count: 4,
          item: "minecraft:glowstone_dust",
        },
      ],
      input: {
        count: 1,
        item: "malum:ether",
      },
      output: {
        count: 4,
        item: "create:chromatic_compound",
      },
      spirits: [
        {
          type: "arcane",
          count: 2,
        },
        {
          type: "sacred",
          count: 2,
        },
      ],
      id: recipeId + "chromatic_compound",
    },
    //Spirit Jar
    {
      extra_items: [
        {
          count: 1,
          item: "malum:hallowed_gold_ingot",
        },
        {
          count: 1,
          item: "malum:processed_soulstone",
        },
      ],
      input: {
        count: 1,
        item: "supplementaries:jar",
      },
      output: {
        count: 1,
        item: "malum:spirit_jar",
      },
      spirits: [
        {
          type: "arcane",
          count: 2,
        },
      ],
      id: recipeId + "spirit_jar",
    },
    //Clibano Core
    {
      extra_items: [
        {
          count: 8,
          item: "forbidden_arcanus:polished_darkstone",
        },
      ],
      input: {
        count: 1,
        item: "minecraft:blast_furnace",
      },
      output: {
        count: 1,
        item: "forbidden_arcanus:clibano_core",
      },
      spirits: [
        {
          type: "arcane",
          count: 2,
        },
        {
          type: "earthen",
          count: 1,
        },
      ],
      id: recipeId + "clibano_core",
    },
    //Thermal Machine Frame
    {
      extra_items: [
        {
          count: 1,
          item: "actuallyadditions:iron_casing",
        },
        {
          count: 1,
          item: "kubejs:basic_machine_casing",
        },
        {
          count: 1,
          item: "industrialforegoing:machine_frame_pity",
        },
        {
          count: 1,
          item: "create:refined_radiance",
        },
      ],
      input: {
        count: 1,
        tag: "thermal:glass/hardened",
      },
      output: {
        count: 1,
        item: "thermal:machine_frame",
      },
      spirits: [
        {
          type: "arcane",
          count: 4,
        },
      ],
      id: recipeId + "thermal_machine_frame",
    },
    //EnderIO Void Chasis
    {
      extra_items: [
        {
          count: 1,
          item: "create:shadow_steel",
        },
        {
          count: 4,
          item: "enderio:infinity_rod",
        },
        {
          count: 1,
          item: "actuallyadditions:black_quartz",
        },
        {
          count: 1,
          item: "enderio:dark_steel_ingot",
        },
      ],
      input: {
        count: 1,
        item: "enderio:grains_of_infinity",
      },
      output: {
        count: 1,
        item: "enderio:void_chassis",
      },
      spirits: [
        {
          type: "wicked",
          count: 4,
        },
      ],
      id: recipeId + "enderio_void_chassis",
    },
    //Insighful Crystal
    {
      extra_items: [
        {
          count: 2,
          tag: "forge:gems/lapis",
        },
        {
          count: 2,
          item: "minecraft:experience_bottle",
        },
      ],
      input: {
        count: 1,
        tag: "forge:gems/emerald",
      },
      output: {
        count: 1,
        item: "thermal:xp_crystal",
      },
      spirits: [
        {
          type: "arcane",
          count: 1,
        },
      ],
      id: recipeId + "insighful_crystal",
    },
    //Spectral Lens
    {
      extra_items: [
        {
          count: 1,
          item: "forbidden_arcanus:mundabitur_dust",
        },
        {
          count: 1,
          item: "minecraft:amethyst_shard",
        },
        {
          count: 1,
          item: "malum:hex_ash",
        },
        {
          count: 1,
          item: "eidolon:pewter_inlay",
        },
      ],
      input: {
        count: 1,
        tag: "forge:glass_panes",
      },
      output: {
        count: 1,
        item: "malum:spectral_lens",
      },
      id: recipeId + "spectral_lens",
    },
    //Elvin Gateway
    {
      extra_items: [
        {
          count: 2,
          item: "malum:complete_design",
        },
        {
          count: 4,
          item: "botania:terrasteel_ingot",
        },
        {
          count: 2,
          item: "malum:malignant_pewter_plating",
        },
        {
          count: 1,
          item: "botania:natura_pylon",
        },
        {
          count: 2,
          item: "kubejs:ender_dew",
        },
        {
          count: 4,
          item: "forbidden_arcanus:mundabitur_dust",
        },
        {
          count: 1,
          item: "forbidden_arcanus:dark_matter",
        },
        {
          count: 1,
          item: "eidolon:holy_symbol",
        },
      ],
      input: {
        count: 8,
        item: "botania:livingwood_log",
      },
      output: {
        count: 1,
        item: "botania:alfheim_portal",
      },
      spirits: [
        {
          type: "arcane",
          count: 32,
        },
        {
          type: "sacred",
          count: 32,
        },
        {
          type: "earthen",
          count: 32,
        },
        {
          type: "aqueous",
          count: 32,
        },
      ],
      id: recipeId + "alfheim_portal",
    },
    //Crude Manasteel
    {
      extra_items: [
        {
          count: 1,
          item: "forbidden_arcanus:mundabitur_dust",
        },
        {
          count: 1,
          item: "malum:hex_ash",
        },
      ],
      input: {
        count: 1,
        tag: "forge:ingots/steel",
      },
      output: {
        item: "kubejs:crude_manasteel",
      },
      spirits: [
        {
          type: "sacred",
          count: 2,
        },
      ],
      id: recipeId + "crude_manasteel",
    },
    //Terrestrial Agglomeration Plate
    {
      extra_items: [
        {
          count: 1,
          item: "forbidden_arcanus:mundabitur_dust",
        },
        {
          count: 1,
          item: "kubejs:ender_dew",
        },
        {
          count: 1,
          item: "malum:complete_design",
        },
        {
          count: 1,
          item: "botania:rune_water",
        },
        {
          count: 1,
          item: "botania:rune_earth",
        },
        {
          count: 1,
          item: "botania:rune_mana",
        },
        {
          count: 1,
          item: "botania:rune_air",
        },
        {
          count: 1,
          item: "botania:rune_fire",
        },
      ],
      input: {
        count: 1,
        item: "botania:manasteel_block",
      },
      output: {
        item: "botania:terra_plate",
      },
      spirits: [
        {
          type: "sacred",
          count: 32,
        },
        {
          type: "arcane",
          count: 32,
        },
        {
          type: "aerial",
          count: 32,
        },
        {
          type: "aqueous",
          count: 32,
        },
        {
          type: "earthen",
          count: 32,
        },
        {
          type: "infernal",
          count: 32,
        },
      ],
      id: recipeId + "terrestrial_agglomeration_plate",
    },
    //Mana Pool
    {
      extra_items: [
        {
          count: 1,
          item: "forbidden_arcanus:carved_edelwood_log",
        },
        {
          count: 1,
          item: "eidolon:offering_incense",
        },
        {
          count: 1,
          item: "malum:mnemonic_fragment",
        },
        {
          count: 1,
          item: "malum:warp_flux",
        },
        {
          count: 1,
          item: "malum:astral_weave",
        },
        {
          count: 1,
          item: "eidolon:holy_symbol",
        },
      ],
      input: {
        count: 5,
        item: "botania:livingrock",
      },
      output: {
        item: "botania:mana_pool",
      },
      spirits: [
        {
          type: "arcane",
          count: 24,
        },
        {
          type: "sacred",
          count: 16,
        },
      ],
      id: recipeId + "mana_pool",
    },
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "malum:spirit_infusion",
      extra_items: recipe.extra_items,
      input: recipe.input,
      output: recipe.output,
      spirits: recipe.spirits,
    }).id(recipe.id);
  });
});
