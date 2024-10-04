StartupEvents.registry("item", (e) => {
  let item = [
    "wooden_gear",
    "wooden_board",
    "logistic_machine",
    "makeshift_mechanism",
    "golden_hand",
    "calcium_dust",
  ];
  item.forEach((registry) => {
    e.create(registry);
  });
});
