StartupEvents.registry("item", (e) => {
  let item = [
    "wooden_gear",
    "wooden_board",
    "makeshift_mechanism",
    "basic_circuit",
    "advanced_circuit",
    "logistic_machine",
    "vaccum_tube",
    "golden_hand",
    "calcium_dust",
    "duroplast_sheet",
    "mixed_metal_ingot",
    "advanced_alloy_dust",
    "advanced_alloy_ingot",
    "advanced_alloy_plate",
    "bearing",
    "modifier_base",
    "speed_modifier",
    "energy_modifier",
    "luck_modifier",
    "fuel_efficiency_modifier",
    "industrial_leather",
    "bio_plastic",
    "bio_plastic_mesh",
    "hdpe_sheet",
    "hot_stainless_steel_ingot",
    "chromium_dust",
    "manganese_dust",
    "crushed_raw_desh",
    "crushed_raw_ostrum",
    "crushed_raw_calorite",
    "resistance_circuit",
    "black_quartzite_ingot",
    "zinc_dust",
    "amethyst_dust",
    "advanced_thermal_alloy",
    "crude_manasteel",
    "ender_dew"
  ];
  let shardsandclumps = [
    "iron",
    "copper",
    "gold",
    "tin",
    "lead",
    "silver",
    "nickel",
    "zinc",
    "lithium",
    "cobalt",
  ];
  item.forEach((registry) => {
    e.create(registry);
  });
  shardsandclumps.forEach((registry) => {
    e.create(registry + "_shard");
    e.create(registry + "_clump");
  });
  e.create("create:crushed_raw_cobalt").texture("kubejs:item/crushed_raw_cobalt");
  e.create("create:crushed_raw_lithium").texture("kubejs:item/crushed_raw_lithium");
});
