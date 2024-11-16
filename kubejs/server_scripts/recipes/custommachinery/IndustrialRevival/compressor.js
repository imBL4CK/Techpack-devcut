ServerEvents.recipes((e) => {
  //Mixed Metal Ingot
  e.recipes.custommachinery.custom_machine("custommachinery:industrialrevival/compressor", 200)
    .requireEnergyPerTick(5)
    .requireItemTag("#forge:ingots/tin")
    .requireItemTag("#forge:ingots/bronze")
    .requireItemTag("#forge:ingots/steel")
    .produceItem("kubejs:mixed_metal_ingot");
});
