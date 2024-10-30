ServerEvents.recipes((e) => {
  let recipeId = "create:mixing/";

  const recipes = [
    //Andesite Alloy from iron
    {
      output: [Item.of("create:andesite_alloy", 4)],
      input: [
        "minecraft:andesite",
        "#forge:nuggets/iron",
        "minecraft:clay_ball",
      ],
      id: recipeId + "andesite_alloy_from_iron",
    },
    //Andesite Alloy from zinc
    {
      output: [Item.of("create:andesite_alloy", 4)],
      input: [
        "minecraft:andesite",
        "#forge:nuggets/zinc",
        "minecraft:clay_ball",
      ],
      id: recipeId + "andesite_alloy_from_zinc",
    },
  ];
  const heatedRecipes = [
    //Brass From Dusts
    {
      output: "4x #forge:ingots/bronze",
      input: "4x #forge:dusts/bronze",
      id: recipeId + "bronze_ingot_from_dusts",
    },
    //Silica Steel Mix
    {
      output: ["4x moreminecarts:silica_steel_mix"],
      input: ["#forge:dusts/iron", "#forge:coal_coke", "3x #forge:gems/quartz"],
      id: recipeId + "silica_mix",
    },
    //Klin Bricks
    {
      output: ["kubejs:klin_bricks"],
      input: ["2x minecraft:brick", "2x minecraft:mud_bricks"],
      id: recipeId + "klin_bricks",
    },
  ];
  recipes.forEach((recipe) => {
    e.recipes.create.mixing(recipe.output, recipe.input).id(recipe.id);
  });
  heatedRecipes.forEach((recipe) => {
    e.recipes.create.mixing(recipe.output, recipe.input).id(recipe.id).heated();
  });
});
