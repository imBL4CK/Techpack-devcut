ServerEvents.recipes((e) => {
  let recipeId = "create:cutting/";

  const recipes = [
    //Wooden Board
    {
      output: ["4x #forge:plates/wooden"],
      input: ["#minecraft:planks"],
      id: recipeId + "wooden_plate",
    },
  ];
  recipes.forEach((recipe) => {
    e.recipes.create.cutting(recipe.output, recipe.input).id(recipe.id);
  });
});
