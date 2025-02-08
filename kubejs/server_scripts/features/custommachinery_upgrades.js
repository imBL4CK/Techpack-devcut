CustomMachineryEvents.upgrades((e) => {
  const machines = [
    "custommachinery:industrialrevival/macerator",
    "custommachinery:industrialrevival/assembler",
    "custommachinery:industrialrevival/energetic_smelter",
    "custommachinery:industrialrevival/metal_former",
    "custommachinery:industrialrevival/rail_attacher",
    "custommachinery:industrialrevival/compressor",
  ];

  machines.forEach((upgrades) => {
    //Speed Modifier
    e.create(Item.of("kubejs:speed_modifier"))
      .machine(upgrades)
      .modifier(CMRecipeModifierBuilder.mulInput("custommachinery:speed", 0.5))
    //Energy Modifier
    e.create(Item.of("kubejs:energy_modifier"))
      .machine(upgrades)
      .modifier(CMRecipeModifierBuilder.mulInput("custommachinery:energy", 1.5))
    //Luck Modifier
    e.create(Item.of("kubejs:luck_modifier"))
      .machine(upgrades)
      .modifier(CMRecipeModifierBuilder.mulInput("custommachinery:item", 1.5))
    //Fuel Modifier
    e.create(Item.of("kubejs:fuel_efficiency_modifier"))
      .machine(upgrades)
      .modifier(CMRecipeModifierBuilder.mulInput("custommachinery:fuel", 1.5))
  });
});
