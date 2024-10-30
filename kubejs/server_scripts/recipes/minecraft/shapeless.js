ServerEvents.recipes((e) => {
  let recipeId = ["minecraft:shapeless/"];

  //Wooden Board
  e.shapeless("4x kubejs:wooden_board", [
    { tag: "minecraft:planks" },
    { tag: "minecraft:planks" },
    { tag: "forge:tools/saw" },
  ]).damageIngredient("#forge:tools/saw", "2")
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
  ]).id(recipeId + "shaft")
    .damageIngredient("kubejs:primitive_saw", "4");

  //Cogwheel
  e.shapeless("create:cogwheel", [
    "create:shaft",
    "kubejs:wooden_gear",
    "kubejs:primitive_hammer",
    "kubejs:primitive_saw",
  ]).id(recipeId + "cogwheel")
    .damageIngredient("kubejs:primitive_hammer", "2")
    .damageIngredient("kubejs:primitive_saw", "2");

  //Large Cogwheel From Little
  e.shapeless("create:large_cogwheel", [
    "create:cogwheel",
    "kubejs:wooden_gear",
    "kubejs:primitive_saw",
    "kubejs:primitive_hammer",
  ]).id(recipeId + "large_cogwheel_from_little")
    .damageIngredient("kubejs:primitive_hammer", "2")
    .damageIngredient("kubejs:primitive_saw", "2");

  //Large Cogwheel
  e.shapeless("create:large_cogwheel", [
    "create:shaft",
    "kubejs:wooden_gear",
    "kubejs:wooden_gear",
    "kubejs:primitive_saw",
    "kubejs:primitive_hammer",
  ]).id(recipeId + "large_cogwheel")
    .damageIngredient("kubejs:primitive_hammer", "2")
    .damageIngredient("kubejs:primitive_saw", "2");
    
  //Pressure Chamber Wall
  e.shapeless('4x pneumaticcraft:pressure_chamber_wall',[
    '#forge:plates/invar',
    'pneumaticcraft:reinforced_bricks',
    '#forge:tools/hammer',
    '#forge:tools/saw'
  ]).id(recipeId + "pressure_chamber_wall")
    .damageIngredient('#forge:tools/hammer', '1')
    .damageIngredient('#forge:tools/saw', '1')
});
