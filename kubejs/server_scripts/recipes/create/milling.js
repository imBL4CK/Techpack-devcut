ServerEvents.recipes((e) => {
  let recipeId = "create:milling/";

  const recipes = [
    //Sand
    {
      output: ["#forge:sand"],
      input: ["#forge:gravel"],
      id: recipeId + "sand",
    },
    //Calcium Dust from shells
    {
      output: ["kubejs:calcium_dust"],
      input: ["#techpack:shells"],
      id: recipeId + "calcium_dust",
    },
  ];
  recipes.forEach((recipe) => {
    e.recipes.create.milling(recipe.output, recipe.input).id(recipe.id);
  });
});
