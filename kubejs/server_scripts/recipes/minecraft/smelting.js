ServerEvents.recipes((e) => {
  let recipeId = ["minecraft:smelting/"];

  const recipes = [
    //Wooden Gear
    {
      Input: "kubejs:advanced_alloy_dust",
      Output: "kubejs:advanced_alloy_ingot",
      id: recipeId + "advanced_alloy_ingot",
    },
  ];
  recipes.forEach((recipe) => {
    e.smelting(recipe.Output, recipe.Input).id(recipe.id);
  });
});
