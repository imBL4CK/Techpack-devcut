MMEvents.createStructures((e) => {
  //ARC Furnace
  {
    e.create("mm:arc_furnace_structure")
      .controllerId("mm:arc_furnace_controller")
      .name("Arc Furnace")
      .layout((l) => {
        l.layer(["SSS", "SSS", "SSS"])
          .layer(["HHH", "H H", "HHH"])
          .layer(["SES", "SSS", "ICI"])
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
  //Steam Macerator
  {
    e.create("mm:steam_macerator_structure")
      .controllerId("mm:steam_macerator_controller")
      .name("Steam Macerator")
      .layout((l) => {
        l.layer(["BBB", "BBB"])
          .layer(["BFB", "ICI"])
          .key("B", {
            block: "kubejs:bronze_casing",
          })
          .key("I", {
            portType: "mm:item",
          })
          .key("F", {
            portType: "mm:fluid",
          });
      });
  }
  //ARC Furnace (Shadow Bronze Coil)
  {
    e.create("mm:arc_furnace_shadow_bronze_structure")
      .controllerId("mm:arc_furnace_controller")
      .name("Arc Furnace (Shadow Bronze Coil)")
      .layout((l) => {
        l.layer(["SSS", "SSS", "SSS"])
          .layer(["BBB", "B B", "BBB"])
          .layer(["SES", "SSS", "ICI"])
          .key("I", {
            portType: "mm:item",
          })
          .key("S", {
            block: "kubejs:steel_casing",
          })
          .key("B", {
            block: "kubejs:shadow_bronze_coil",
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
  //Freezer
  {
    e.create("mm:freezer_structure")
      .controllerId("mm:freezer_controller")
      .name("Freezer")
      .layout((l) => {
        l.layer(["PPP", "PPP", "PPP"])
          .layer(["PPP", "P P", "PCP"])
          .layer(["FEF", "PPP", "IPI"])
          .key("I", {
            portType: "mm:item",
          })
          .key("F", {
            portType: "mm:fluid",
          })
          .key("P", {
            block: "kubejs:frostproof_casing",
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
});
