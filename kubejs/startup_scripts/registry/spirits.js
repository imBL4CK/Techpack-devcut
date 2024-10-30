StartupEvents.registry("item", (e) => {
    let item = [
      "willing",
      "powerful"
    ];
    item.forEach((registry) => {
      e.create(registry+"_spirit").glow(true);
    });
  });
  