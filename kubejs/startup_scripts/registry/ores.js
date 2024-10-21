StartupEvents.registry("item", (e) => {
  let alloy = ["red_alloy", "energized_steel"];
  alloy.forEach((registry) => {
    e.create(registry + "_ingot");
    e.create(registry + "_plate");
    e.create(registry + "_gear");
  });
});
