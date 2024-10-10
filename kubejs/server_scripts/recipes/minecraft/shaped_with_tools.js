ServerEvents.recipes((e) => {
  let recipeId = ["minecraft:shaped/"];

  //Water Wheel
  e.shaped("create:water_wheel", ["WSW", "GHG", "WMW"], {
    G: "#forge:gears/wooden",
    W: "#forge:plates/wooden",
    H: "create:hand_crank",
    S: "#forge:tools/saw",
    M: "#forge:tools/hammer",
  }).damageIngredient("#forge:tools/saw", "6")
    .damageIngredient("#forge:tools/hammer", "6")
    .id(recipeId + "water_wheel");

  //Large Water Wheel
  e.shaped("create:large_water_wheel", ["WGW", "SLH", "WGW"], {
    G: "#forge:gears/wooden",
    W: "#forge:plates/wooden",
    S: "#forge:tools/saw",
    L: "create:water_wheel",
    H: "#forge:tools/hammer",
  }).damageIngredient("#forge:tools/saw", "4")
    .damageIngredient("#forge:tools/hammer", "4")
    .id(recipeId + "large_water_wheel");

  //Millstone
  e.shaped("create:millstone", [" C ", "HAP", "GSG"], {
    A: "create:andesite_casing",
    S: "#forge:stone",
    C: "create:cogwheel",
    H: "#forge:tools/hammer",
    P: "#forge:tools/saw",
    G: "#forge:gears/wooden",
  }).damageIngredient("#forge:tools/hammer", "16")
    .damageIngredient("#forge:tools/saw", "16")
    .id(recipeId + "millstone");

  //Create Wrench
  e.shaped("create:wrench", ["GGH", "GCW", " S "], {
    C: "create:cogwheel",
    H: "#forge:tools/hammer",
    S: "minecraft:stick",
    W: "#forge:gears/wooden",
    G: "#forge:plates/gold",
  }).damageIngredient("#forge:tools/hammer", "4")
    .id(recipeId + "create_wrench");

  //Hand Crank
  e.shaped("create:hand_crank", ["GWW", "SCA"], {
    A: "create:andesite_alloy",
    G: "#forge:gears/wooden",
    W: "#forge:plates/wooden",
    C: "create:cogwheel",
    S: "#forge:tools/saw",
  }).damageIngredient("#forge:tools/saw", "2")
    .id(recipeId + "hand_crank");

  //Primitive Saw
  e.shaped("kubejs:primitive_saw", ["  S", "HSI", "SI "], {
    S: "minecraft:stick",
    I: "#forge:ingots/iron",
    H: "#forge:tools/hammer",
  }).damageIngredient("#forge:tools/hammer", "2")
    .id(recipeId + "primitive_saw");

  //Primitive Wirecutter
  e.shaped("kubejs:primitive_wirecutter", ["WI ", "I I", "SIH"], {
    S: "minecraft:stick",
    I: "#forge:ingots/iron",
    W: "#forge:tools/saw",
    H: "#forge:tools/hammer",
  }).damageIngredient("#forge:tools/saw", "2")
    .damageIngredient("#forge:tools/hammer", "2")
    .id(recipeId + "primitive_wirecutter");

  //Logistic Machine
  e.shaped("kubejs:logistic_machine", ["CTC", "RSR", "WLH"], {
    C: "#forge:plates/copper",
    T: "minecraft:redstone_torch",
    R: "minecraft:redstone",
    S: "thermal:redstone_servo",
    L: "minecraft:stone_slab",
    W: "#forge:tools/saw",
    H: "#forge:tools/hammer",
  }).damageIngredient("#forge:tools/saw", "2")
    .damageIngredient("#forge:tools/hammer", "2")
    .id(recipeId + "logistic_machine");

  //Smithing Table
  e.shaped("minecraft:smithing_table", ["HS ", "II ", "PG "], {
    H: "#forge:tools/hammer",
    S: "#forge:tools/saw",
    I: "#forge:ingots/iron",
    P: "#minecraft:planks",
    G: "#forge:gears/wooden",
  }).damageIngredient("#forge:tools/saw", "2")
    .damageIngredient("#forge:tools/hammer", "2")
    .id(recipeId + "smithing_table");

  //Spirit Altar
  e.shaped("malum:spirit_altar", ["HOS", "GWG", "WMW"], {
    H: "#forge:tools/hammer",
    O: "malum:processed_soulstone",
    S: "#forge:tools/saw",
    G: "#forge:plates/gold",
    W: "malum:runewood_planks",
    M: "kubejs:makeshift_mechanism",
  }).damageIngredient("#forge:tools/saw", "2")
    .damageIngredient("#forge:tools/hammer", "2")
    .id(recipeId + "spirit_altar");

  //Arboreal Extractor
  e.shaped("thermal:device_tree_extractor", ["WLW", "HBS", "WGW"], {
    W: "#forge:plates/wooden",
    L: "#forge:glass",
    H: "#forge:tools/hammer",
    B: "minecraft:bucket",
    S: "#forge:tools/saw",
    G: "#forge:gears/iron",
  }).damageIngredient("#forge:tools/saw", "2")
    .damageIngredient("#forge:tools/hammer", "2")
    .id(recipeId + "arboreal_extractor");

  //Create Copper Fluid Tank
  e.shaped("create:fluid_tank", ["RPR", "HGS", "RPR"], {
    R: "thermal:cured_rubber",
    P: "#forge:plates/bronze",
    H: "#forge:tools/hammer",
    G: "#forge:glass_panes",
    S: "#forge:tools/saw"
  }).damageIngredient("#forge:tools/saw", "4")
    .damageIngredient("#forge:tools/hammer", "2")
    .id(recipeId + "copper_fluid_tank");

  //Create Copper Fluid Pipe
  e.shaped("4x create:fluid_pipe", ["PRP", "HS ", "   "], {
    P: "#forge:plates/bronze",
    R: "thermal:cured_rubber",
    S: "#forge:tools/saw",
    H: "#forge:tools/hammer",
  }).damageIngredient("#forge:tools/saw", "2")
    .damageIngredient("#forge:tools/hammer", "2")
    .damageIngredient("#forge:tools/crowbar", "2")
    .damageIngredient("#forge:tools/screwdriver", "1")
    .id(recipeId + "copper_fluid_pipe");

  //Create Copper Mechanical Pump
  e.shaped("create:mechanical_pump", ["PCR", "HS ", "   "], {
    P: "create:fluid_pipe",
    C: "create:cogwheel",
    R: "thermal:cured_rubber",
    H: "#forge:tools/hammer",
    S: "#forge:tools/saw"
  }).damageIngredient("#forge:tools/saw", "2")
    .damageIngredient("#forge:tools/hammer", "2")
    .id(recipeId + "copper_mechanical_pump");

  //Create Belt
  e.shaped("2x create:belt_connector", ["SW ", "RRR", "RRR"], {
    R: "thermal:cured_rubber",
    S: "#forge:tools/saw",
    W: "#forge:tools/wirecutter",
  }).damageIngredient("#forge:tools/saw", "1")
    .damageIngredient("#forge:tools/wirecutter", "1")
    .id(recipeId + "mechanical_belt");

  //Fireproof Bricks
  e.shaped("tfmg:fireproof_bricks", ["BRG", "RB ", "   "], {
    B: "tfmg:fireproof_brick",
    R: "#forge:plates/bronze",
    G: "create:super_glue"
  }).damageIngredient("create:super_glue", "1")
    .id(recipeId + "fireproof_bricks");

  //Blast Furnace Output
  e.shaped("tfmg:blast_furnace_output", ["CBC", "RUR", "SVH"], {
    C: "#forge:ingots/cast_iron",
    B: "tfmg:fireproof_bricks",
    R: "#forge:plates/bronze",
    U: "create:empty_blaze_burner",
    S: "#forge:tools/saw",
    V: "thermal:redstone_servo",
    H: "#forge:tools/hammer",
  }).damageIngredient("#forge:tools/saw", "2")
    .damageIngredient("#forge:tools/hammer", "2")
    .id(recipeId + "blast_furnace_output");

  //Casting Spout
  e.shaped("tfmg:casting_spout", ["COC", "SPH", " I "], {
    C: "#forge:ingots/cast_iron",
    O: "create:spout",
    S: "#forge:tools/saw",
    P: "create:precision_mechanism",
    H: "#forge:tools/hammer",
    I: "tfmg:cast_iron_pipe"
  }).damageIngredient("#forge:tools/saw", "2")
    .damageIngredient("#forge:tools/hammer", "2")
    .id(recipeId + "casting_spout");

  //Bucket
  e.shaped("minecraft:bucket", ["PHP", " S ", "   "], {
    P: "#forge:plates/iron",
    H: "#forge:tools/hammer",
  }).damageIngredient("#forge:tools/hammer", "2")
    .id(recipeId + "bucket");

  //Casting Spout
  e.shaped("prettypipes:wrench", ["PGP", " M ", "HLS"], {
    P: "#forge:plates/steel",
    G: "#forge:gears/steel",
    M: "tfmg:steel_mechanism",
    H: "#forge:tools/hammer",
    L: "prettypipes:pipe",
    S: "#forge:tools/saw",
  }).damageIngredient("#forge:tools/saw", "2")
    .damageIngredient("#forge:tools/hammer", "2")
    .id(recipeId + "prettypipes_wrench");

  //Hose Pulley
  e.shaped("create:hose_pulley", ["PCP", "BRB", "HIS"], {
    P: "#forge:plates/bronze",
    C: "create:copper_casing",
    I: "create:fluid_pipe",
    B: "thermal:cured_rubber",
    R: "#forge:rope",
    H: "#forge:tools/hammer",
    S: "#forge:tools/saw",
  }).damageIngredient("#forge:tools/saw", "2")
    .damageIngredient("#forge:tools/hammer", "2")
    .id(recipeId + "hose_pulley");

  //Item Drain
  e.shaped("create:item_drain", ["PIP", "FCF", "HBS"], {
    P: "#forge:plates/bronze",
    I: "minecraft:iron_bars",
    F: "create:fluid_pipe",
    C: "create:copper_casing",
    H: "#forge:tools/hammer",
    B: "minecraft:bucket",
    S: "#forge:tools/saw",
  }).damageIngredient("#forge:tools/saw", "2")
    .damageIngredient("#forge:tools/hammer", "2")
    .id(recipeId + "item_drain");
  
  //Spout
  e.shaped("create:spout", ["HTS", "RCR", "PBP"], {
    H: "#forge:tools/hammer",
    T: "create:fluid_tank",
    S: "#forge:tools/saw",
    R: "thermal:cured_rubber",
    C: "create:copper_casing",
    P: "#forge:plates/bronze",
    B: "minecraft:bucket",
  }).damageIngredient("#forge:tools/saw", "2")
    .damageIngredient("#forge:tools/hammer", "2")
    .id(recipeId + "spout");

  //Steam Engine
  e.shaped("create:steam_engine", ["BSB", "MCM", "WTH"], {
    B: "#forge:plates/brass",
    S: "create:shaft",
    M: "tfmg:steel_mechanism",
    C: "ae2:charged_certus_quartz_crystal",
    W: "#forge:tools/saw",
    T: "create:fluid_tank",
    H: "#forge:tools/hammer",
  }).damageIngredient("#forge:tools/saw", "8")
    .damageIngredient("#forge:tools/hammer", "8")
    .id(recipeId + "steam_engine");
});
  