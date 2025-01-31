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
    "alchemical_brass",
    "stainless_steel",
  ];
  //Gears in Thermal Press
  materials.forEach((ibMaterial) => {
    let gears = {
      type: "thermal:press",
      ingredients: [
        {
          tag: "forge:plates/" + ibMaterial,
          count: 4,
        },
        {
          item: "thermal:press_gear_die",
        },
      ],
      result: [
        {
          tag: "forge:gears/" + ibMaterial,
        },
      ],
    };
    e.custom(gears).id("thermal:press/library/" + ibMaterial);
  });
  //Plates in Mechanical Press
  materials.forEach((ibMaterials) => {
    let plates = {
      type: "create:pressing",
      ingredients: [
        {
          tag: "forge:ingots/" + ibMaterials,
        },
      ],
      results: [
        {
          tag: "forge:plates/" + ibMaterials,
        },
      ],
    };
    e.custom(plates).id("create/pressing/library/" + ibMaterials);
  });
});
