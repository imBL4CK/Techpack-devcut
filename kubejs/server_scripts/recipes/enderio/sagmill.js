ServerEvents.recipes((e) => {
  let recipeId = "enderio:sagmill/";

  const recipes = [
    //Amethyst Dust
    {
      output: ["#forge:dusts/amethyst"],
      input: ["#forge:gems/amethyst"],
      id: recipeId + "amethyst_dust",
    },
    //Zinc Dust
    {
      output: ["#forge:dusts/zinc"],
      input: ["#forge:ingots/zinc"],
      id: recipeId + "zinc_dust",
    },
  ];
  recipes.forEach((recipe) => {
    e.recipes.enderio.sag_milling(recipe.output, recipe.input).id(recipe.id);
  });
});
