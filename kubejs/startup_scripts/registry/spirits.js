StartupEvents.registry("item", (e) => {
    let item = [
      "willing"
    ];
    item.forEach((registry) => {
      e.create(registry+"_spirit").glow(true);
    });
  });
  