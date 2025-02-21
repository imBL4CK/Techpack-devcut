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
      .requireEnergy(2048)
      .jei()
      .priority(1);
  }
  //Advanced Coil
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem(Item.of("thermal:rf_coil", 2))
      .requireItem("kubejs:hdpe_sheet")
      .requireItem("kubejs:black_quartzite_ingot")
      .requireItem("kubejs:alchemical_brass_gear")
      .produceItem("actuallyadditions:advanced_coil")
      .requireEnergy(2048)
      .jei()
      .priority(1);
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
      .requireEnergy(4096)
      .jei()
      .priority(2);
  }
  //Finished PCB
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("pneumaticcraft:unassembled_pcb")
      .requireItem(Item.of("pneumaticcraft:transistor", 2))
      .requireItem(Item.of("tfmg:capacitor_", 2))
      .requireItem("kubejs:hdpe_sheet")
      .requireFluid(Fluid.of("pneumaticcraft:etching_acid", 100))
      .produceItem("pneumaticcraft:printed_circuit_board")
      .produceFluid(Fluid.of("pneumaticcraft:etching_acid", 100))
      .requireEnergy(2048)
      .jei()
      .priority(2);
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
      .produceItem("actuallyadditions:laser_relay_advanced")
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
      .requireEnergy(1024);
  }
  //Redstone Flux Coil
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:ingots/gold")
      .requireItemTag("forge:ingots/red_alloy")
      .requireItem("create:electron_tube")
      .produceItem(Item.of("thermal:rf_coil", 2))
      .requireEnergy(1024)
      .jei()
      .priority(3);
  }
  //Redstone Servo
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("kubejs:makeshift_mechanism")
      .requireItem("thermal:cured_rubber")
      .requireFluid("thermal:redstone")
      .produceItem(Item.of("thermal:redstone_servo", 2))
      .requireEnergy(1024)
      .jei()
      .priority(3);
  }
  //Makeshift Mechanism
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/wood")
      .requireItem("create:cogwheel")
      .requireItem("create:andesite_alloy")
      .produceItem(Item.of("kubejs:makeshift_mechanism", 2))
      .requireEnergy(1024);
  }
  //Precision Mechanism
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("create:electron_tube")
      .requireItem("thermal:redstone_servo")
      .requireItemTag("forge:plates/brass")
      .produceItem(Item.of("create:precision_mechanism", 2))
      .requireEnergy(1024);
  }
  //Precision Mechanism
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/steel")
      .requireItem("thermal:rf_coil")
      .requireItem("thermal:redstone_servo")
      .produceItem(Item.of("tfmg:steel_mechanism", 2))
      .requireEnergy(1024);
  }
  //Basic Mechanism
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("actuallyadditions:black_quartz")
      .requireItem("moreminecarts:silica_steel")
      .requireItem("actuallyadditions:basic_coil")
      .requireItem(Item.of("thermal:rf_coil", 2))
      .requireItem(Item.of("kubejs:vaccum_tube", 2))
      .requireItem("tfmg:steel_mechanism")
      .produceItem("kubejs:basic_circuit")
      .requireEnergy(2048);
  }
  //Steel Cable
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("#forge:plates/steel", 2)
      .requireItemTag("#forge:wires/copper", 2)
      .produceItem(Item.of("ad_astra:steel_cable", 16))
      .requireEnergy(256);
  }
  //Steel Item Port Input
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("#forge:plates/steel", 4)
      .requireItem("minecraft:chest")
      .requireItem("minecraft:hopper")
      .produceItem("mm:steel_item_port_input")
      .requireEnergy(1024)
      .jei()
      .priority(4);
  }
  //Steel Energy Port Input
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("#forge:plates/steel", 4)
      .requireItem("createaddition:modular_accumulator")
      .requireItem("minecraft:hopper")
      .produceItem("mm:steel_energy_port_input")
      .requireEnergy(1024)
      .jei()
      .priority(4);
  }
  //Steel Fluid Port Input
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("#forge:plates/steel", 4)
      .requireItem("create:fluid_tank")
      .requireItem("minecraft:hopper")
      .produceItem("mm:steel_fluid_port_input")
      .requireEnergy(1024)
      .jei()
      .priority(4);
  }
  //Fluid Extractor
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("industrialforegoing:machine_frame_pity")
      .requireItem(Item.of("kubejs:hdpe_sheet", 6))
      .requireItem("kubejs:basic_circuit")
      .requireItem("thermal:device_tree_extractor")
      .produceItem("industrialforegoing:fluid_extractor")
      .requireEnergy(1024)
      .jei()
      .priority(5);
  }
  //Latex Processing Unit
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("industrialforegoing:machine_frame_pity")
      .requireItem(Item.of("kubejs:hdpe_sheet", 4))
      .requireItem("kubejs:basic_circuit")
      .requireItem(Item.of("create:fluid_tank", 2))
      .requireItem("minecraft:furnace")
      .produceItem("industrialforegoing:fluid_extractor")
      .requireEnergy(1024)
      .jei()
      .priority(5);
  }
  //Steel Casing
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/steel", 8)
      .requireItemTag("forge:gears/steel")
      .produceItem(Item.of("kubejs:steel_casing", 4))
      .requireEnergy(512)
      .jei()
      .priority(6);
  }
  //Bronze Casing
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/bronze", 8)
      .requireItemTag("forge:gears/bronze")
      .produceItem(Item.of("kubejs:bronze_casing", 4))
      .requireEnergy(512)
      .jei()
      .priority(6);
  }
  //Heatproof Casing
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/invar", 8)
      .requireItemTag("forge:gears/invar")
      .produceItem(Item.of("kubejs:heatproof_casing", 4))
      .requireEnergy(512)
      .jei()
      .priority(6);
  }
  //Constantan Coil
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/steel", 6)
      .requireItemTag("forge:plates/constantan", 3)
      .produceItem("kubejs:constantan_coil")
      .requireEnergy(512)
      .jei()
      .priority(7);
  }
  //Shadow Bronze Coil
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/steel", 6)
      .requireItem(Item.of("kubejs:shadow_bronze_plate", 3))
      .produceItem("kubejs:shadow_bronze_coil")
      .requireEnergy(512)
      .jei()
      .priority(7);
  }
  //Fluid Cell Frame
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("thermal:glass/hardened", 4)
      .requireItemTag("forge:plates/bronze")
      .requireItem("create:fluid_tank")
      .produceItem("thermal:fluid_cell_frame")
      .requireEnergy(512)
      .jei()
      .priority(8);
  }
  //Fluid Cell
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("thermal:cured_rubber", 4)
      .requireItemTag("forge:gears/iron", 2)
      .requireItem(Item.of("thermal:redstone_servo", 2))
      .requireItem("thermal:fluid_cell_frame")
      .produceItem("thermal:fluid_cell")
      .requireEnergy(512)
      .jei()
      .priority(9);
  }
  //Energy Cell Frame
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("thermal:glass/hardened", 4)
      .requireItemTag("forge:plates/lead")
      .requireItem("tfmg:capacitor")
      .produceItem("thermal:energy_cell_frame")
      .requireEnergy(512)
      .jei()
      .priority(10);
  }
  //Energy Cell
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plastic", 4)
      .requireItemTag("forge:ingots/red_alloy", 2)
      .requireItem(Item.of("thermal:rf_coil", 2))
      .requireItem("thermal:energy_cell_frame")
      .produceItem("thermal:energy_cell")
      .requireEnergy(512)
      .jei()
      .priority(11);
  }
  //Fluixduct
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:plates/lead", 6)
      .requireItemTag("forge:ingots/red_alloy", 2)
      .produceItem(Item.of("thermal:energy_duct", 6))
      .requireEnergy(512)
      .jei()
      .priority(12);
  }
  //Fluxbore
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:ingots/steel", 2)
      .requireItemTag("forge:gears/tin", 2)
      .requireItemTag("forge:gears/gold")
      .requireItem("thermal:rf_coil")
      .requireItem("thermal:drill_head")
      .produceItem("thermal:flux_drill")
      .requireEnergy(4096)
      .jei()
      .priority(13);
  }
  //Fluxsaw
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:ingots/steel", 2)
      .requireItemTag("forge:gears/tin", 2)
      .requireItemTag("forge:gears/gold")
      .requireItem("thermal:rf_coil")
      .requireItem("thermal:saw_blade")
      .produceItem("thermal:flux_saw")
      .requireEnergy(4096)
      .jei()
      .priority(13);
  }
  //FluxMagnet
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:ingots/steel", 3)
      .requireItemTag("forge:gears/lead", 2)
      .requireItemTag("forge:gears/red_alloy")
      .requireItem("thermal:rf_coil")
      .produceItem("thermal:flux_magnet")
      .requireEnergy(4096)
      .jei()
      .priority(14);
  }
  //FluxCapacitor
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItemTag("forge:ingots/lead", 2)
      .requireItemTag("forge:gears/lead", 1)
      .requireItemTag("forge:gears/red_alloy")
      .requireItem("thermal:rf_coil")
      .produceItem("thermal:flux_capacitor")
      .requireEnergy(4096)
      .jei()
      .priority(14);
  }
  //Display Stand
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem(Item.of("actuallyadditions:ethetic_green_block", 3))
      .requireItem(Item.of("actuallyadditions:ethetic_white_block", 3))
      .requireItem(Item.of("actuallyadditions:advanced_coil", 3))
      .produceItem("actuallyadditions:display_stand")
      .requireEnergy(1024);
  }
  //Flux Compressor
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem(Item.of("pneumaticcraft:advanced_air_compressor"))
      .requireItem(Item.of("pneumaticcraft:turbine_rotor"))
      .requireItem(Item.of("kubejs:basic_circuit"))
      .produceItem("pneumaticcraft:flux_compressor")
      .requireEnergy(1024);
  }
  /*
  //
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/assembler", 300)
      .requireItem("")
      .produceItem("")
      .requireEnergy(4096);
  } 
  */
});
