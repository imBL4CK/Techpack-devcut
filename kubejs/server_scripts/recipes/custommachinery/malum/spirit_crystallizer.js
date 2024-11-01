ServerEvents.recipes((e) => {
  const recipes = [
    //Sacred
    {
      inputTag: "#techpack:malum/1sacred_spirit",
      outputItem: "malum:sacred_spirit",
    },
    //Arcane
    {
      inputTag: "techpack:malum/1arcane_spirit",
      outputItem: "malum:arcane_spirit",
    },
    /*
    //Wicked
    {
      inputTag: "techpack:malum/1wicked_spirit",
      outputItem: "malum:wicked_spirit",
    },
    //Eldritch
    {
      inputTag: "techpack:malum/1eldritch_spirit",
      outputItem: "malum:eldritch_spirit",
    },
    //Aerial
    {
      inputTag: "techpack:malum/1aerial_spirit",
      outputItem: "malum:aerial_spirit",
    },
    //Aqueous
    {
      inputTag: "techpack:malum/1aqueous_spirit",
      outputItem: "malum:aqueous_spirit",
    },
    //Earthen
    {
      inputTag: "techpack:malum/1earthen_spirit",
      outputItem: "malum:earthen_spirit",
    },
    //Infernal
    {
      inputTag: "techpack:malum/1infernal_spirit",
      outputItem: "malum:infernal_spirit",
    },
    */
  ];
  const Mixed2TagRecipes = [
    //Sacred
    {
      inputTag: "#techpack:malum/1sacred1arcane_spirit",
      output1: "malum:arcane_spirit",
      output2: "malum:sacred_spirit",
    },
  ]
  recipes.forEach((recipe) => {
    e.recipes.custommachinery.custom_machine("custommachinery:malum/spirit_crystallizer", 600)
      .requireItemTag(recipe.inputTag)
      .produceItem(recipe.outputItem)
      .requireFuel(1);
  });
  Mixed2TagRecipes.forEach((recipe) => {
    e.recipes.custommachinery.custom_machine("custommachinery:malum/spirit_crystallizer", 600)
      .requireItemTag(recipe.inputTag)
      .produceItem(recipe.output1)
      .produceItem(recipe.output2)
      .requireFuel(1);
  });
});