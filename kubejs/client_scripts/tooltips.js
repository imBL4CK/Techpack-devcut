ItemEvents.tooltip((e) => {
  //Smelters
  e.add(
    [
      "minecraft:furnace",
      "quark:deepslate_furnace",
      "quark:blackstone_furnace",
      "actuallyadditions:powered_furnace",
      "enderio:alloy_smelter",
      "industrialforegoing:resourceful_furnace",
      "thermal:machine_furnace",
    ],
    "This block has the function of a furnace"
  );
  //Energy Conduits
  e.addAdvanced(["enderio:basic_energy_conduit"], (item, advanced, text) => {
    text.add(1, [Text.of("Max Energy Transfer: 1280").aqua()]);
  });
  e.addAdvanced(["enderio:enhanced_energy_conduit"], (item, advanced, text) => {
    text.add(1, [Text.of("Max Energy Transfer: 5120").aqua()]);
  });
  e.addAdvanced(["enderio:ender_energy_conduit"], (item, advanced, text) => {
    text.add(1, [Text.of("Max Energy Transfer: 20480").aqua()]);
  });
});
