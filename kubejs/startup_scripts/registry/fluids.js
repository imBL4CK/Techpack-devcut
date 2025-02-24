StartupEvents.registry("fluid", (e) => {
  //Molten Red Alloy
  e.create("molten_red_alloy")
    .stillTexture("kubejs:block/molten_red_alloy_still")
    .flowingTexture("kubejs:block/molten_red_alloy_flow")
    .density(4000)
    .viscosity(2000);

  //Benzene
  e.create("benzene")
    .stillTexture("kubejs:block/benzene_still")
    .flowingTexture("kubejs:block/benzene_flow")
    .density(1000)
    .viscosity(1000);
  
  //Acetaldehyde
  e.create("acetaldehyde")
    .stillTexture("kubejs:block/acetaldehyde_still")
    .flowingTexture("kubejs:block/acetaldehyde_flow")
    .density(1000)
    .viscosity(1000);
  
  //Duroplast resin
  e.create("duroplast_resin")
    .stillTexture("kubejs:block/duroplast_resin_still")
    .flowingTexture("kubejs:block/duroplast_resin_flow")
    .density(1000)
    .viscosity(1000);
});
