ServerEvents.recipes((e) => {
  let recipeId = "actuallysubstractions:empowering/";

  const recipes = [
    //Knowledge Concentrator
    {
      base: {
        item: "thermal:xp_crystal",
      },
      color: 16735052,
      energy: 8000,
      modifiers: [
        {
          item: "minecraft:experience_bottle",
        },
        {
          item: "minecraft:book",
        },
        {
          item: "minecraft:golden_apple",
        },
        {
          item: "thermal:invar_plate",
        },
      ],
      result: {
        item: "thermal:xp_storage_augment",
      },
      time: 300,
      id: recipeId + "knowledge_concentrator",
    },
    //Expanded RF Coil
    {
      base: {
        item: "thermal:rf_coil",
      },
      color: 16735052,
      energy: 8000,
      modifiers: [
        {
          item: "thermal:gold_plate",
        },
        {
          item: "thermal:gold_plate",
        },
        {
          item: "thermal:silver_plate",
        },
        {
          item: "thermal:silver_plate",
        },
      ],
      result: {
        item: "thermal:rf_coil_augment",
      },
      time: 300,
      id: recipeId + "expanded_rf_coil",
    },
    //Stabilized RF Coil
    {
      base: {
        item: "thermal:rf_coil",
      },
      color: 16735052,
      energy: 8000,
      modifiers: [
        {
          item: "thermal:gold_plate",
        },
        {
          item: "thermal:gold_plate",
        },
        {
          item: "thermal:gold_plate",
        },
        {
          item: "thermal:silver_plate",
        },
      ],
      result: {
        item: "thermal:rf_coil_storage_augment",
      },
      time: 300,
      id: recipeId + "stabilized_rf_coil",
    },
    //High-Flux RF Coil
    {
      base: {
        item: "thermal:rf_coil",
      },
      color: 16735052,
      energy: 8000,
      modifiers: [
        {
          item: "thermal:silver_plate",
        },
        {
          item: "thermal:silver_plate",
        },
        {
          item: "thermal:silver_plate",
        },
        {
          item: "thermal:gold_plate",
        },
      ],
      result: {
        item: "thermal:rf_coil_xfer_augment",
      },
      time: 300,
      id: recipeId + "high_flux_rf_coil",
    },
    //Expanded Tank Construction
    {
      base: {
        item: "thermal:obsidian_glass",
      },
      color: 16735052,
      energy: 8000,
      modifiers: [
        {
          item: "thermal:iron_plate",
        },
        {
          item: "thermal:iron_plate",
        },
        {
          item: "thermal:cured_rubber",
        },
        {
          item: "thermal:cured_rubber",
        },
      ],
      result: {
        item: "thermal:fluid_tank_augment",
      },
      time: 300,
      id: recipeId + "expanded_tank_construction",
    },
    //Flux Linkage Amplifier
    {
      base: {
        item: "thermal:rf_coil",
      },
      color: 16735052,
      energy: 8000,
      modifiers: [
        {
          item: "thermal:lead_gear",
        },
        {
          item: "thermal:lead_gear",
        },
        {
          item: "thermal:electrum_plate",
        },
        {
          item: "thermal:electrum_plate",
        },
      ],
      result: {
        item: "thermal:machine_speed_augment",
      },
      time: 300,
      id: recipeId + "flux_linkage_amplifier",
    },
    //Flux Efficience
    {
      base: {
        item: "thermal:rf_coil",
      },
      color: 16735052,
      energy: 8000,
      modifiers: [
        {
          item: "thermal:nickel_gear",
        },
        {
          item: "thermal:nickel_gear",
        },
        {
          item: "thermal:lumium_plate",
        },
        {
          item: "thermal:lumium_plate",
        },
      ],
      result: {
        item: "thermal:machine_efficiency_augment",
      },
      time: 300,
      id: recipeId + "flux_efficience",
    },
    //Auxiliary Process Sieve
    {
      base: {
        item: "thermal:redstone_servo",
      },
      color: 16735052,
      energy: 8000,
      modifiers: [
        {
          item: "thermal:bronze_gear",
        },
        {
          item: "thermal:bronze_gear",
        },
        {
          item: "thermal:invar_plate",
        },
        {
          item: "thermal:invar_plate",
        },
      ],
      result: {
        item: "thermal:machine_output_augment",
      },
      time: 300,
      id: recipeId + "auxiliary_process_sieve",
    },
    //Cyclical Processing
    {
      base: {
        item: "thermal:redstone_servo",
      },
      color: 16735052,
      energy: 8000,
      modifiers: [
        {
          item: "thermal:silver_plate",
        },
        {
          item: "thermal:constantan_plate",
        },
        {
          item: "thermal:signalum_plate",
        },
        {
          item: "thermal:signalum_plate",
        },
      ],
      result: {
        item: "thermal:machine_cycle_augment",
      },
      time: 300,
      id: recipeId + "cyclical_processing",
    },
    //Auxiliary Cactus
    {
      base: {
        item: "minecraft:cactus",
      },
      color: 16735052,
      energy: 8000,
      modifiers: [
        {
          item: "thermal:silver_plate",
        },
        {
          item: "thermal:silver_plate",
        },
        {
          item: "thermal:silver_plate",
        },
        {
          item: "thermal:silver_plate",
        },
      ],
      result: {
        item: "thermal:machine_null_augment",
      },
      time: 300,
      id: recipeId + "auxiliary_cactus",
    },
    //Auxiliary Reaction Chamber
    {
      base: {
        item: "thermal:obsidian_glass",
      },
      color: 16735052,
      energy: 8000,
      modifiers: [
        {
          item: "thermal:signalum_plate",
        },
        {
          item: "thermal:signalum_plate",
        },
        {
          item: "thermal:silver_gear",
        },
        {
          item: "thermal:silver_gear",
        },
      ],
      result: {
        item: "thermal:dynamo_output_augment",
      },
      time: 300,
      id: recipeId + "auxiliary_reaction_chamber",
    },
    //Multi Cycle Injectors
    {
      base: {
        item: "thermal:obsidian_glass",
      },
      color: 16735052,
      energy: 8000,
      modifiers: [
        {
          item: "thermal:lumium_plate",
        },
        {
          item: "thermal:lumium_plate",
        },
        {
          item: "thermal:lead_gear",
        },
        {
          item: "thermal:lead_gear",
        },
      ],
      result: {
        item: "thermal:dynamo_fuel_augment",
      },
      time: 300,
      id: recipeId + "multi_cycle_injectors",
    },
    //Excitation Field Limiter
    {
      base: {
        item: "thermal:electrum_plate",
      },
      color: 16735052,
      energy: 8000,
      modifiers: [
        {
          item: "thermal:lead_gear",
        },
        {
          item: "thermal:lead_gear",
        },
        {
          item: "thermal:lead_gear",
        },
        {
          item: "thermal:lead_gear",
        },
      ],
      result: {
        item: "thermal:dynamo_throttle_augment",
      },
      time: 300,
      id: recipeId + "excitation_field_limiter",
    },
    //Radial Enhancement
    {
      base: {
        item: "thermal:electrum_plate",
      },
      color: 16735052,
      energy: 8000,
      modifiers: [
        {
          item: "thermal:iron_gear",
        },
        {
          item: "thermal:iron_gear",
        },
        {
          item: "thermal:tin_gear",
        },
        {
          item: "thermal:tin_gear",
        },
      ],
      result: {
        item: "thermal:area_radius_augment",
      },
      time: 300,
      id: recipeId + "radial_enhancement",
    },
    //Alchemical Amplifier
    {
      base: {
        item: "thermal:obsidian_glass",
      },
      color: 16735052,
      energy: 8000,
      modifiers: [
        {
          item: "thermal:signalum_gear",
        },
        {
          item: "thermal:signalum_gear",
        },
        {
          item: "thermal:copper_plate",
        },
        {
          item: "thermal:copper_plate",
        },
      ],
      result: {
        item: 'thermal:potion_amplifier_augment',
      },
      time: 300,
      id: recipeId + "alchemical_amplifier",
    },
    //Alchemical Extender
    {
      base: {
        item: "thermal:obsidian_glass",
      },
      color: 16735052,
      energy: 8000,
      modifiers: [
        {
          item: "thermal:lumium_gear",
        },
        {
          item: "thermal:lumium_gear",
        },
        {
          item: "thermal:copper_plate",
        },
        {
          item: "thermal:copper_plate",
        },
      ],
      result: {
        item: 'thermal:potion_duration_augment',
      },
      time: 300,
      id: recipeId + "alchemical_extender",
    },
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "actuallyadditions:empowering",
      base: recipe.base,
      color: recipe.color,
      energy: recipe.energy,
      modifiers: recipe.modifiers,
      result: recipe.result,
      time: recipe.time,
    }).id(recipe.id);
  });
});
