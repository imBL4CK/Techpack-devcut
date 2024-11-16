CustomMachineryEvents.upgrades((e) => {
    //Speed Modifier
  e.create(Item.of("kubejs:speed_modifier"))
    .machine("custommachinery:industrialrevival/alloy_foundry")
    .modifier(CMRecipeModifierBuilder.mulInput("custommachinery:speed", 0.5));
    //Energy Modifier
  e.create(Item.of("kubejs:energy_modifier"))
    .machine("custommachinery:industrialrevival/alloy_foundry")
    .modifier(CMRecipeModifierBuilder.mulInput("custommachinery:energy", 1.5));
    //Luck Modifier
  e.create(Item.of("kubejs:luck_modifier"))
    .machine("custommachinery:industrialrevival/alloy_foundry")
    .modifier(CMRecipeModifierBuilder.mulInput("custommachinery:drop", 1.5));
    //Fuel Modifier
  e.create(Item.of("kubejs:fuel_efficiency_modifier"))
    .machine("custommachinery:industrialrevival/alloy_foundry")
    .modifier(CMRecipeModifierBuilder.mulInput("custommachinery:fuel", 0.5));
});