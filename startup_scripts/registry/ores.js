StartupEvents.registry("item", (e) => {
  let item = [];
  item.forEach((registry) => {
    e.create(registry + "_ingot");
  });
});
