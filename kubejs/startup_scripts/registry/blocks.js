StartupEvents.registry("block", (e) => {
    let block = [
      "heatproof_casing",
      "basic_machine_casing"
    ];
    block.forEach((registry) => {
      e.create(registry);
    });
  });
  