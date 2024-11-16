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
  e.create("steam_macerator")
    .name("Steam Macerator")
    .type("mm:machine");
});
