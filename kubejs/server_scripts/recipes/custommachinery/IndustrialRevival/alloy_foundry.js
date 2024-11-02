ServerEvents.recipes((e) => {
  //Fluid Tank
  e.recipes.custommachinery.custom_machine("custommachinery:industrialrevival/alloy_foundry", 300)
    .requireEnergyPerTick(16)
    .requireItemTag("#forge:ingots/copper", 3)
    .requireItemTag("#forge:ingots/tin", 1)
    .produceItem("4x #forge:ingots/bronze");
});
CustomMachineryEvents.upgrades(event => {
  event.create(Item.of('thermal:upgrade_augment_1'))
      .machine("custommachinery:industrialrevival/alloy_foundry")
      .modifier(CMRecipeModifierBuilder.mulInput('custommachinery:energy', 0.5).max(1000))
      .modifier(CMRecipeModifierBuilder.mulInput('custommachinery:speed', 0.5).min(100))
})