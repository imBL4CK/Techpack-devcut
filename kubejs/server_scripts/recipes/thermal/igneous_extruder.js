ServerEvents.recipes((e) => {
  let recipeId = "thermal:rock_gen/";

  let Cstones = [
    "minecraft:andesite",
    "minecraft:diorite",
    "minecraft:granite",
    "minecraft:calcite",
    "minecraft:tuff",
    "create:limestone",
    "create:scorchia",
    "create:scoria",
    "quark:shale",
    "quark:myalite",
    "quark:limestone",
    "quark:jasper",
  ];
  Cstones.forEach((stones) => {
    let StoneGen = {
      type: "thermal:rock_gen",
      adjacent: "water",
      below: stones,
      result: stones,
    };
    e.custom(StoneGen);
  });
});
