ServerEvents.recipes((e) => {
  let recipeId = ["minecraft:shapeless/"];

  //Wooden Board
  e.shapeless("4x kubejs:wooden_board", [
    { tag: "minecraft:planks" },
    { tag: "minecraft:planks" },
    { tag: "forge:tools/saw" },
  ])
    .damageIngredient("#forge:tools/saw", "2")
    .id(recipeId + "wooden_board");

  //Flint
  e.shapeless("minecraft:flint", [
    { tag: "forge:gravel" },
    { tag: "forge:gravel" },
    { tag: "forge:gravel" },
  ]).id(recipeId + "flint");

  //Shaft
  e.shapeless("4x create:shaft", [
    "create:andesite_alloy",
    "kubejs:primitive_saw",
  ])
    .id(recipeId + "shaft")
    .damageIngredient("kubejs:primitive_saw", "4");

  //Cogwheel
  e.shapeless("create:cogwheel", [
    "create:shaft",
    { tag: "forge:gears/wood" },
    "kubejs:primitive_hammer",
    "kubejs:primitive_saw",
  ])
    .id(recipeId + "cogwheel")
    .damageIngredient("kubejs:primitive_hammer", "2")
    .damageIngredient("kubejs:primitive_saw", "2");

  //Large Cogwheel From Little
  e.shapeless("create:large_cogwheel", [
    "create:cogwheel",
    { tag: "forge:gears/wood" },
    "kubejs:primitive_saw",
    "kubejs:primitive_hammer",
  ])
    .id(recipeId + "large_cogwheel_from_little")
    .damageIngredient("kubejs:primitive_hammer", "2")
    .damageIngredient("kubejs:primitive_saw", "2");

  //Large Cogwheel
  e.shapeless("create:large_cogwheel", [
    "create:shaft",
    { tag: "forge:gears/wood" },
    { tag: "forge:gears/wood" },
    "kubejs:primitive_saw",
    "kubejs:primitive_hammer",
  ])
    .id(recipeId + "large_cogwheel")
    .damageIngredient("kubejs:primitive_hammer", "2")
    .damageIngredient("kubejs:primitive_saw", "2");

  //Pressure Chamber Wall
  e.shapeless("4x pneumaticcraft:pressure_chamber_wall", [
    "#forge:plates/invar",
    "pneumaticcraft:reinforced_bricks",
    "#forge:tools/hammer",
    "#forge:tools/saw",
  ])
    .id(recipeId + "pressure_chamber_wall")
    .damageIngredient("#forge:tools/hammer", "1")
    .damageIngredient("#forge:tools/saw", "1");

  //MM Item Port Input to Output
  e.shapeless("mm:steel_item_port_output", ["mm:steel_item_port_input"]).id(
    recipeId + "mm_steel_item_port_input_to_output"
  );
  //MM Item Port Output to Input
  e.shapeless("mm:steel_item_port_input", ["mm:steel_item_port_output"]).id(
    recipeId + "mm_steel_item_port_output_to_input"
  );
  //MM Fluid Port Fluid to Output
  e.shapeless("mm:steel_fluid_port_output", ["mm:steel_fluid_port_input"]).id(
    recipeId + "mm_steel_fluid_port_input_to_output"
  );
  ///MM Fluid Port Output to Input
  e.shapeless("mm:steel_fluid_port_input", ["mm:steel_fluid_port_output"]).id(
    recipeId + "mm_steel_fluid_port_output_to_input"
  );
  //MM Energy Port Energy to Output
  e.shapeless("mm:steel_energy_port_output", ["mm:steel_energy_port_input"]).id(
    recipeId + "mm_steel_energy_port_input_to_output"
  );
  ///MM Energy Port Output to Input
  e.shapeless("mm:steel_energy_port_input", ["mm:steel_energy_port_output"]).id(
    recipeId + "mm_steel_energy_port_output_to_input"
  );
});
