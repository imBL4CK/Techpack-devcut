ServerEvents.recipes((e) => {
  let recipeId = "create:mixing/";

  e.recipes.create.mixing(["4x #forge:dusts/bronze"], ["#forge:dusts/copper", "3x #forge:dusts/tin"]).id(recipeId + "bronze_blend").heated();
  e.recipes.create.mixing(["4x moreminecarts:silica_steel_mix"], ["#forge:dusts/iron", "#forge:coal_coke", "3x #forge:gems/quartz"]).id(recipeId + "coal_coke").heated();

  const recipes = [
    //Andesite Alloy from iron
    {
      output: [Item.of("create:andesite_alloy", 4)],
      input: ["minecraft:andesite", "#forge:nuggets/iron", "minecraft:clay_ball"],
      id: recipeId + "andesite_alloy_from_iron",
    },
    //Andesite Alloy from zinc
    {
      output: [Item.of("create:andesite_alloy", 4)],
      input: ["minecraft:andesite", "#forge:nuggets/zinc", "minecraft:clay_ball"],
      id: recipeId + "andesite_alloy_from_zinc"
    }
  ];
  recipes.forEach((recipe) => {
    e.recipes.create.mixing(recipe.output, recipe.input).id(recipe.id);
  });
});
