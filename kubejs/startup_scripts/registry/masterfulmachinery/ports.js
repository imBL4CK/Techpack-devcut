MMEvents.registerPorts((e) => {
  //Steel Energy Port
  {
    e.create("steel_energy_port")
      .name("Steel Energy Port")
      .controllerId("mm:arc_furnace_controller")
      .config("mm:energy", (c) => {
        c.capacity(32000).maxReceive(1024).maxExtract(1024);
      });
  }
  //Steel Item Port
  {
    e.create("steel_item_port")
      .name("Steel Item Port")
      .controllerId("mm:arc_furnace_controller")
      .config("mm:item", (c) => {
        c.rows(2).columns(2);
      });
  }
  //Steel Fluid Port
  {
    e.create("steel_fluid_port")
      .name("Steel Fluid Port")
      .controllerId("mm:steam_macerator_controller")
      .config("mm:fluid", (c) => {
        c.rows(1).columns(1).slotCapacity(8000);
      });
  }
  //Klin Item Port
  {
    e.create("klin_item_port")
      .name("Klin Item Port")
      .controllerId("mm:alloy_klin_controller")
      .config("mm:item", (c) => {
        c.rows(1).columns(3);
      });
  }
});
