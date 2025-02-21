StartupEvents.registry("block", (e) => {
    let stones = [
      "klin_bricks"
    ];
    let casing = [
      "heatproof_casing",
      "frostproof_casing",
      "steel_casing",
      "bronze_casing",
      "basic_machine_casing",
      "advanced_machine_casing",
      "constantan_coil",
      "shadow_bronze_coil",
      "advanced_thermal_alloy_casing"
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
  