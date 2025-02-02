StartupEvents.registry("fluid", (e) => {
  //Molten Red Alloy
  e.create("molten_red_alloy")
    .stillTexture("kubejs:block/molten_red_alloy_still")
    .flowingTexture("kubejs:block/molten_red_alloy_flow")
    .density(4000)
    .viscosity(2000)

  //Benzene
  e.create("benzene")
    .color(784335)
    .density(1000)
    .viscosity(1000)
});
