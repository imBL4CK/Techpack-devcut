ServerEvents.recipes((e) => {
  const recipes = [
    //Crude Oil
    {
      Replace: "#forge:crude_oil",
      Into: "tfmg:crude_oil",
    },
    //Creosote
    {
      Replace: "tfmg:creosote",
      Into: "thermal:creosote",
    },
  ];
  recipes.forEach((recipe) => {
    e.replaceInput({}, recipe.Replace, recipe.Into);
    e.replaceOutput({}, recipe.Replace, recipe.Into);
  });
});
