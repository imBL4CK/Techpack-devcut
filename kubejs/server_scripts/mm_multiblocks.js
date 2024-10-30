MMEvents.createStructures((e) => {
  //ARC Furnace
  {
    e.create("mm:arc_furnace_structure")
      .controllerId("mm:arc_furnace_controller")
      .name("Arc Furnace")
      .layout((l) => {
        l.layer(["ISI", "SSS", "SSS"])
          .layer(["HHH", "H H", "HHH"])
          .layer(["SES", "SSS", "SCS"])
          .key("I", {
            portType: "mm:item",
          })
          .key("S", {
            block: "kubejs:steel_casing",
          })
          .key("H", {
            block: "kubejs:heatproof_casing",
          })
          .key("U", {
            block: "create:blaze_burner",
          })
          .key("E", {
            portType: "mm:energy",
            input: true,
          });
      });
  }
  //Alloy Klin
  {
    e.create("mm:alloy_klin_structure")
      .controllerId("mm:alloy_klin_controller")
      .name("Alloy Klin")
      .layout((l) => {
        l.layer(["BBB", "BBB"])
          .layer(["BBB", "ICI"])
          .key("B", {
            block: "kubejs:klin_bricks",
          })
          .key("I", {
            portType: "mm:item",
          });
      });
  }
});
