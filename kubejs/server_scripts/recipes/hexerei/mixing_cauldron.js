ServerEvents.recipes(e => {
    let recipeId = ["hexerei:mixing_cauldron/"]
    const Hrecipes = [
      //Zombie Heart Doubling
      {
        liquid: {
            "fluid": "minecraft:water",
        },
        ingredients: [
          {
            "item": "eidolon:zombie_heart",
          },
          {
            "item": "malum:arcane_spirit"
          }
        ],
        output: {
          "item": "eidolon:zombie_heart",
          "count": 2
        },
        liquidOutput: {
          "fluid": "minecraft:water",
        },
        fluidConsumed: 500,
        heated: "heated",
        id: recipeId + "doubling/zombie_heart",
      },
      //Tattered Cloth Doubling
      {
        liquid: {
            "fluid": "minecraft:water",
        },
        ingredients: [
          {
            "item": "eidolon:tattered_cloth",
          },
          {
            "item": "malum:arcane_spirit"
          }
        ],
        output: {
          "item": "eidolon:tattered_cloth",
          "count": 2
        },
        liquidOutput: {
          "fluid": "minecraft:water",
        },
        fluidConsumed: 500,
        heated: "heated",
        id: recipeId + "doubling/tattered_cloth",
      },
      //Wraith Heart Doubling
      {
        liquid: {
            "fluid": "minecraft:water",
        },
        ingredients: [
          {
            "item": "eidolon:wraith_heart",
          },
          {
            "item": "malum:arcane_spirit"
          }
        ],
        output: {
          "item": "eidolon:wraith_heart",
          "count": 2
        },
        liquidOutput: {
          "fluid": "minecraft:water",
        },
        fluidConsumed: 500,
        heated: "heated",
        id: recipeId + "doubling/wraith_heart",
      },
      //Eidolon Tallow
      {
        liquid: {
            "fluid": "minecraft:water",
        },
        ingredients: [
          {
            "item": "minecraft:rotten_flesh"
          },
          {
            "item": "minecraft:rotten_flesh"
          },
          {
            "item": "minecraft:rotten_flesh"
          },
          {
            "item": "minecraft:rotten_flesh"
          },
        ],
        output: {
          "item": "eidolon:tallow",
          "count": 5
        },
        liquidOutput: {
          "fluid": "hexerei:blood_fluid",
        },
        fluidConsumed: 500,
        heated: "heated",
        id: recipeId + "tallow",
      }
    ];
    const recipes = [
      //Offering Incense
      {
        liquid: {
            "fluid": "minecraft:water",
        },
        ingredients: [
          {
            "item": "eidolon:merammer_resin",
          },
          {
            "item": "eidolon:enchanted_ash",
          },
          {
            "item": "eidolon:oanna_bloom",
          }
        ],
        output: {
          "item": "eidolon:offering_incense",
        },
        liquidOutput: {
          "fluid": "minecraft:water",
        },
        fluidConsumed: 500,
        id: recipeId + "offering_incense",
      }
    ];
    recipes.forEach((recipe) => {
        e.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": recipe.liquid,
        "ingredients": recipe.ingredients,
        "output": recipe.output,
        "liquidOutput": recipe.liquidOutput,
        "fluidLevelsConsumed": recipe.fluidConsumed,
    }).id(recipe.id);
  });
    //Heated
    Hrecipes.forEach((recipe) => {
      e.custom({
      "type": "hexerei:mixingcauldron",
      "liquid": recipe.liquid,
      "ingredients": recipe.ingredients,
      "output": recipe.output,
      "liquidOutput": recipe.liquidOutput,
      "fluidLevelsConsumed": recipe.fluidConsumed,
      "heatRequirement": recipe.heated
  }).id(recipe.id);
  });
})