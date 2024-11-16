ServerEvents.recipes((e) => {
  //Advanced Alloy Ingot
  e.recipes.custommachinery.custom_machine("custommachinery:industrialrevival/macerator", 300)
    .requireEnergyPerTick(16)
    .requireItem("kubejs:mixed_metal_ingot")
    .produceItem("kubejs:advanced_alloy_dust");
});
