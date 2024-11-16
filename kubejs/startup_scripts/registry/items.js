StartupEvents.registry("item", (e) => {
  let item = [
    "wooden_gear",
    "wooden_board",
    "makeshift_mechanism",
    "basic_circuit",
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
    "plate_mold",
    "modifier_base",
    "speed_modifier",
    "energy_modifier",
    "luck_modifier",
    "fuel_efficiency_modifier",
  ];
  item.forEach((registry) => {
    e.create(registry);
  });
});
