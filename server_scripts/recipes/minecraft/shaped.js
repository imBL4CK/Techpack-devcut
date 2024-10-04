ServerEvents.recipes((e) => {
  let recipeId = ["minecraft:shaped/"];

  const recipes = [
    //Wooden Gear
    {
      result: "4x #forge:gears/wooden",
      pattern: [" W ", "W W", " W "],
      key: {
        W: "#forge:plates/wooden",
      },
      id: recipeId + "wooden_gear",
    },
    //Wooden Gear by Planks
    {
      result: "#forge:gears/wooden",
      pattern: [" W ", "W W", " W "],
      key: {
        W: "#minecraft:planks",
      },
      id: recipeId + "wooden_gear_by_planks",
    },
    //Crafting Table
    {
      result: "minecraft:crafting_table",
      pattern: ["FF ", "WW ", "   "],
      key: {
        W: "#minecraft:planks",
        F: "minecraft:flint",
      },
      id: recipeId + "crafting_table",
    },
    //Furnace
    {
      result: "minecraft:furnace",
      pattern: ["CCC", "CGC", "COC"],
      key: {
        C: "#forge:cobblestone",
        G: "#forge:gears/wooden",
        O: "#minecraft:coals",
      },
      id: recipeId + "furnace",
    },
    //Primitive Hammer
    {
      result: "kubejs:primitive_hammer",
      pattern: [" IS", " SI", "S  "],
      key: {
        S: "minecraft:stick",
        I: "#forge:ingots/iron",
      },
      id: recipeId + "primitive_hammer",
    },
    //Andesite Alloy
    {
      result: "create:andesite_alloy",
      pattern: ["AS ", "CA ", "   "],
      key: {
        A: "minecraft:andesite",
        C: "minecraft:clay_ball",
        S: "#forge:slag",
      },
      id: recipeId + "andesite_alloy",
    },
    //Oak chest
    {
      result: "woodworks:oak_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:oak_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "oak_chest",
    },
    //Spruce chest
    {
      result: "woodworks:spruce_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:spruce_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "spruce_chest",
    },
    //Birch chest
    {
      result: "woodworks:birch_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:birch_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "birch_chest",
    },
    //Acacia chest
    {
      result: "woodworks:acacia_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:acacia_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "acacia_chest",
    },
    //Jungle chest
    {
      result: "woodworks:jungle_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:jungle_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "jungle_chest",
    },
    //Dark Oak chest
    {
      result: "woodworks:dark_oak_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:dark_oak_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "dark_oak_chest",
    },
    //Mangrove chest
    {
      result: "woodworks:mangrove_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:mangrove_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "mangrove_chest",
    },
    //Crimson chest
    {
      result: "woodworks:crimson_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:crimson_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "crimson_chest",
    },
    //Warped chest
    {
      result: "woodworks:warped_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:warped_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "warped_chest",
    },
    //Cherry chest
    {
      result: "woodworks:cherry_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:cherry_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "cherry_chest",
    },
    //Drifwood chest
    {
      result: "upgrade_aquatic:driftwood_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "upgrade_aquatic:driftwood_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "driftwood_chest",
    },
    //River chest
    {
      result: "upgrade_aquatic:river_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "upgrade_aquatic:river_planks",
        G: "#forge:gears/wooden",
        B: "minecraft:stone_button",
      },
      id: recipeId + "river_chest",
    },
    //Redstone Flux Coil
    {
      result: "thermal:rf_coil",
      pattern: ["GR ", " E ", " RG"],
      key: {
        E: "create:electron_tube",
        G: "#forge:plates/gold",
        R: "#forge:dusts/redstone",
      },
      id: recipeId + "rf_coil",
    },
    //Pipe (Pretty Pipes)
    {
      result: "4x prettypipes:pipe",
      pattern: ["RSR", "IPI", "BCB"],
      key: {
        R: "thermal:rf_coil",
        S: "thermal:redstone_servo",
        I: "moreminecarts:silica_steel",
        P: "#forge:glass_panes",
        B: "#forge:gears/bronze",
        C: "create:cogwheel",
      },
      id: recipeId + "logistical_pipe",
    },
    //Item Terminal
    {
      result: "prettypipes:item_terminal",
      pattern: ["ERP", "FVF", "IMI"],
      key: {
        E: "create:electron_tube",
        R: "thermal:rf_coil",
        P: "prettypipes:pipe",
        V: "create:item_vault",
        F: "create:brass_funnel",
        I: "moreminecarts:silica_steel",
        M: "tfmg:steel_mechanism",
      },
      id: recipeId + "item_terminal",
    },
  ];
  recipes.forEach((recipe) => {
    e.shaped(recipe.result, recipe.pattern, recipe.key).id(recipe.id);
  });
});
