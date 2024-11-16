let alloy = [
  "red_alloy", 
  "energized_steel"
];
StartupEvents.registry("item", (e) => {
  alloy.forEach((registry) => {
    e.create(registry + "_ingot");
    e.create(registry + "_plate");
    e.create(registry + "_gear");
  })
});