ServerEvents.recipes((e) => {
  let recipeId = ["eidolon:worktable/"];

  const recipes = [
    //Research Table
    {
      pattern: [" M ", "CCC", "PPP"],
      reagents: "d   ",
      key: {
        d: { tag: "forge:gems/diamond" },
        M: { item: "eidolon:magic_candle" },
        C: { item: "minecraft:red_carpet" },
        P: { item: "malum:runewood_planks" },
      },
      result: { item: "eidolon:research_table" },
      id: recipeId + "research_table",
    },
    //Pestle and Mortar
    {
      pattern: ["   ", "I I", "SSS"],
      reagents: "s   ",
      key: {
        s: { item: "malum:arcane_spirit" },
        I: { tag: "forge:ingots/iron" },
        S: { tag: "forge:stone" },
      },
      result: { item: "hexerei:pestle_and_mortar" },
      id: recipeId + "pestle_and_mortar",
    },
    //Brazier
    {
      pattern: ["PPP", " C ", "R R"],
      reagents: "s   ",
      key: {
        s: { item: "malum:arcane_spirit" },
        P: { tag: "forge:ingots/pewter" },
        C: { tag: "forge:storage_blocks/coal" },
        R: { item: "malum:runewood_item_pedestal" },
      },
      result: { item: "eidolon:brazier" },
      id: recipeId + "brazier",
    },
    //Spirit Altar
    {
      type: "eidolon:worktable",
      pattern: [" O ", "GWG", "WMW"],
      reagents: "s   ",
      key: {
        s: { item: "malum:arcane_spirit" },
        O: { item: "malum:processed_soulstone" },
        G: { tag: "forge:plates/gold" },
        W: { item: "malum:runewood_planks" },
        M: { item: "kubejs:makeshift_mechanism" },
      },
      result: { item: "malum:spirit_altar" },
      id: recipeId + "spirit_altar",
    },
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "eidolon:worktable",
      pattern: recipe.pattern,
      reagents: recipe.reagents,
      key: recipe.key,
      result: recipe.result,
    }).id(recipe.id);
  });
});
