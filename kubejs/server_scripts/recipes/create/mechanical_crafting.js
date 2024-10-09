ServerEvents.recipes((e) => {
  let recipeId = "create:mechanical_crafting/";

  const recipes = [
    //Surface Scanner
    {
      output: "tfmg:surface_scanner",
      pattern: ["SCS", "PAP", "MFM"],
      keys: {
        S: "#forge:plates/steel",
        C: "minecraft:compass",
        P: "#forge:plates/copper",
        A: "tfmg:steel_casing",
        M: "tfmg:steel_mechanism",
        F: "create:shaft",
      },
      id: recipeId + "surface_scanner",
    },
    //Pumpjack Crank
    {
      output: "tfmg:pumpjack_crank",
      pattern: ["SOS", "RHR", "MSM"],
      keys: {
        R: "tfmg:rebar",
        H: "tfmg:heavy_machinery_casing",
        S: "#forge:plates/steel",
        O: "quark:rope",
        M: "tfmg:steel_mechanism",
      },
      id: recipeId + "pumpjack_crank",
    },
    //Pumpjack Base
    {
      output: "tfmg:pumpjack_base",
      pattern: ["SRS", "MHM", "SIS"],
      keys: {
        R: "quark:rope",
        H: "tfmg:heavy_machinery_casing",
        S: "#forge:plates/steel",
        M: "tfmg:steel_mechanism",
        I: "tfmg:industrial_pipe",
      },
      id: recipeId + "pumpjack_base",
    },
    //Steel Distillation Output
    {
      output: "tfmg:steel_distillation_output",
      pattern: ["SPS", "IHI", "SMS"],
      keys: {
        S: "#forge:plates/steel",
        P: "tfmg:industrial_pipe",
        M: "tfmg:steel_mechanism",
        I: "tfmg:steel_pipe",
        H: "tfmg:heavy_machinery_casing",
      },
      id: recipeId + "steel_distillation_output",
    },
    //Steel Distillation Controller
    {
      output: "tfmg:steel_distillation_controller",
      pattern: ["SPS", "MDE", "SHS"],
      keys: {
        S: "#forge:plates/steel",
        P: "tfmg:industrial_pipe",
        M: "tfmg:steel_mechanism",
        D: "create:display_board",
        E: "create:precision_mechanism",
        H: "tfmg:heavy_machinery_casing",
      },
      id: recipeId + "steel_distillation_controller",
    },
    //Steam Engine
    {
      output: "create:steam_engine",
      pattern: ["RSR", "E  ", "BBB"],
      keys: {
        B: "#forge:plates/bronze",
        S: "create:shaft",
        R: "#forge:plates/brass",
      },
      id: recipeId + "steam_engine",
    },
    //TFMG Rotor
    {
      output: "tfmg:rotor",
      pattern: [
        " CCC ", 
        "CRPWC", 
        "CGSGC", 
        "CWPRC", 
        " CCC "],
      keys: {
        C: "tfmg:copper_coil",
        R: "thermal:rf_coil",
        P: "#forge:plates/bronze",
        W: "#forge:wires/aluminum",
        G: "#forge:gears/bronze",
        S: "create:shaft"
      },
      id: recipeId + "rotor",
    },
  ];
  recipes.forEach((recipe) => {
    e.recipes.create
      .mechanical_crafting(recipe.output, recipe.pattern, recipe.keys)
      .id(recipe.id);
  });
});
