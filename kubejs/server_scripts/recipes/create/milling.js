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
    //Crushed Raw Lithium by raw
    {
      output: ["create:crushed_raw_lithium"],
      input: ["tfmg:raw_lithium"],
      id: recipeId + "crushed_raw_lithium",
    },
  ];
  recipes.forEach((recipe) => {
    e.recipes.create.milling(recipe.output, recipe.input).id(recipe.id);
  });
});
