StartupEvents.registry("item", (e) => {
  let item = [
    "wooden_gear",
    "wooden_board",
    "makeshift_mechanism",
    "basic_circuit",
    "logistic_machine",
    "vaccum_tube",
    "golden_hand",
    "calcium_dust"
  ];
  item.forEach((registry) => {
    e.create(registry);
  });
});
