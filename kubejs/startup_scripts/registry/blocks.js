StartupEvents.registry("block", (e) => {
    let block = [];
    let stones = [
      "klin_bricks"
    ];
    let casing = [
      "heatproof_casing",
      "steel_casing",
      "basic_machine_casing"
    ];
    casing.forEach((registry) => {
      e.create(registry)
      .material("metal")
      .soundType("metal")
      .requiresTool(true)
      .tagBlock("mineable/pickaxe") 
      .tagBlock("minecraft:needs_iron_tool")
    });
    stones.forEach((registry) => {
      e.create(registry)
      .soundType("stone")
      .requiresTool(true)
      .tagBlock("mineable/pickaxe")
    });
  });
  