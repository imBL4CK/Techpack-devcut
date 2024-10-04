ServerEvents.recipes((e) => {
  //Fluid Tank
  e.recipes.custommachinery.custom_machine("custommachinery:industrialrevival/generator", 600)
    .produceEnergyPerTick(16)
    .requireItemTag("minecraft:coals");
});
