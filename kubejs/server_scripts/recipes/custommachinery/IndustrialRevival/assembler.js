ServerEvents.recipes((e) => {
  let recipeId = ["industrialrevival:assembling/"];

  //Resistance Circuit
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("thermal:invar_plate")
      .requireItem("kubejs:hdpe_sheet")
      .requireItem("pneumaticcraft:ingot_iron_compressed")
      .requireItem("kubejs:alchemical_brass_gear")
      .requireItem("kubejs:shadow_bronze_gear")
      .requireItem("thermal:redstone_servo")
      .produceItem("kubejs:resistance_circuit")
      .requireEnergy(2048);
  }
  //Resistance Circuit
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem(Item.of("thermal:rf_coil", 2))
      .requireItem("kubejs:hdpe_sheet")
      .requireItem("kubejs:black_quartzite_ingot")
      .requireItem("kubejs:alchemical_brass_gear")
      .produceItem("actuallyadditions:advanced_coil")
      .requireEnergy(2048);
  }
  //Advanced Circuit
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("kubejs:resistance_circuit")
      .requireItem(Item.of("actuallyadditions:advanced_coil", 2))
      .requireItem(Item.of("kubejs:vaccum_tube", 2))
      .requireItem("kubejs:stainless_steel_plate")
      .requireItem("pneumaticcraft:printed_circuit_board")
      .requireItem("kubejs:basic_circuit")
      .produceItem("kubejs:advanced_circuit")
      .requireEnergy(4096);
  }
  //Finished PCB
  {
    e.recipes.custommachinery.custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("pneumaticcraft:unassembled_pcb")
      .requireItem(Item.of("pneumaticcraft:transistor", 2))
      .requireItem(Item.of("tfmg:capacitor_", 2))
      .requireItem("kubejs:hdpe_sheet")
      .requireFluid(Fluid.of("pneumaticcraft:etching_acid", 100))
      .produceItem("pneumaticcraft:printed_circuit_board")
      .produceFluid(Fluid.of("pneumaticcraft:etching_acid", 100))
      .requireEnergy(2048);
  }
  //Electric Motor
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("tfmg:capacitor_")
      .requireItem("4x #forge:plates/brass")
      .requireItem("create:shaft")
      .requireItem("3x createaddition:copper_spool")
      .produceItem("createaddition:electric_motor")
      .requireEnergy(2048);
  }
  //Huge Diesel Engine
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("createdieselgenerators:diesel_engine")
      .requireItem("create:steam_engine")
      .requireItemTag("forge:plates/brass")
      .produceItem("createdieselgenerators:huge_diesel_engine")
      .requireEnergy(2048);
  }
  //Advanced Laser Relay
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("actuallyadditions:laser_relay")
      .requireItem("actuallyadditions:enori_crystal")
      .requireItem("actuallyadditions:restonia_crystal")
      .produceItem("actuallyadditions:advanced_laser_relay")
      .requireEnergy(2048);
  }
  //Hardened Integral Components
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/invar", 4)
      .requireItemTag("forge:ingots/red_alloy")
      .requireItemTag("forge:gears/gold")
      .requireItem("pneumaticcraft:printed_circuit_board")
      .requireItemTag("thermal:glass/hardened")
      .produceItem("thermal:upgrade_augment_1")
      .requireEnergy(4096);
  }
  /*
  //Fluid Extractor
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("industrialforegoing:machine_frame_pity")
      .requireItem(Item.of("kubejs:hdpe_sheet", 2))
      .requireItem("kubejs:basic_circuit")
      .requireItem("thermal:device_tree_extractor")
      .produceItem("industrialforegoing:fluid_extractor")
      .requireEnergy(2048);
  }
  /*
  const recipes = [
    //Resistance Circuit
    {
      Input1: "thermal:invar_plate",
      Input2: "kubejs:hdpe_sheet",
      Input3: "pneumaticcraft:ingot_iron_compressed",
      Input4: "kubejs:alchemical_brass_gear",
      Input5: "kubejs:shadow_bronze_gear",
      Input6: "thermal:redstone_servo",
      Output: "kubejs:resistance_circuit",
      Energy: 2048,
      id: recipeId + "kubejs:resistance_circuit",
    },
    //Resistance Circuit
    {
      Input1: Item.of("thermal:rf_coil", 2),
      Input2: "kubejs:hdpe_sheet",
      Input3: "kubejs:black_quartzite_ingot",
      Input4: "kubejs:alchemical_brass_gear",
      Output: "actuallyadditions:advanced_coil",
      Energy: 2048,
      id: recipeId + "advanced_coil",
    },
  ];
  recipes.forEach((recipe) => {
    e.recipes.custommachinery
      .custom_machine(
        "custommachinery:industrialrevival/assembler",
        300
      )
      .requireItem(recipe.Input1)
      .requireItem(recipe.Input2)
      .requireItem(recipe.Input3)
      .requireItem(recipe.Input4)
      .requireItem(recipe.Input5)
      .requireItem(recipe.Input6)
      .produceItem(recipe.Output)
      .requireEnergy(recipe.Energy)
  });
*/
});
