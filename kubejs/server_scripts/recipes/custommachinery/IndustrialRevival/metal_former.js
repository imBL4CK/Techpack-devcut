ServerEvents.recipes((e) => {
  let materials = [
    "brass",
    "bronze",
    "constantan",
    "copper",
    "electrum",
    "energized_steel",
    "gold",
    "invar",
    "iron",
    "lead",
    "nickel",
    "netherite",
    "red_alloy",
    "silver",
    "steel",
    "tin",
    "zinc",
    "stainless_steel"
  ];
  materials.forEach((material) => {
    e.recipes.custommachinery.custom_machine("custommachinery:industrialrevival/metal_former", 200)
    .requireEnergyPerTick(8)
    .requireItemTag("#forge:ingots/"+material)
    .produceItem("#forge:plates/"+material);
  });
});
