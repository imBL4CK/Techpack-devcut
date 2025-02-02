MMEvents.registerControllers((e) => {
  //Arc Furnace
  e.create("arc_furnace_controller")
    .name("Arc Furnace Controller")
    .type("mm:machine");

  //Alloy Klin
  e.create("alloy_klin_controller")
    .name("Alloy Klin Controller")
    .type("mm:machine");

  //Steam Macerator
  e.create("steam_macerator_controller")
    .name("Steam Macerator Controller")
    .type("mm:machine");

  //Freezer
  e.create("freezer_controller")
    .name("Freezer Controller ")
    .type("mm:machine");

  //Pyrolyse Oven
  e.create("pyrolyse_oven_controller")
    .name("Pyrolyse Oven Controller ")
    .type("mm:machine");
});
