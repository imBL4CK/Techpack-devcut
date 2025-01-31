ServerEvents.recipes((e) => {
  let recipeId = ["minecraft:smelting/"];

  const recipes = [
    //Advanced Alloy
    {
      Replace: "#forge:crude_oil",
      Into: "tfmg:crude_oil",
      id: recipeId + "advanced_alloy_ingot",
    },
  ];
  recipes.forEach((recipe) => {
    e.replaceInput({}, recipe.Replace, recipe.Into);
  });
});
