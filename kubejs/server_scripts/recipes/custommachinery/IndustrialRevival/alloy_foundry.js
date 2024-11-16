ServerEvents.recipes((e) => {
  //Fluid Tank
  e.recipes.custommachinery.custom_machine("custommachinery:industrialrevival/alloy_foundry", 300)
    .requireEnergyPerTick(16)
    .requireItemTag("#forge:ingots/copper", 3)
    .requireItemTag("#forge:ingots/tin", 1)
    .produceItem("4x #forge:ingots/bronze");
});