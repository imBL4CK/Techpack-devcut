ServerEvents.tags("item", (e) => {
  //Sacred
  let sacred1 = [
    "minecraft:quartz",
    "minecraft:prismarine_crystals",
    "thermal:blitz_rod",
    "eidolon:basic_ring",
    "eidolon:arcane_gold_ingot",
    "eidolon:arcane_gold_nugget",
  ];
  //1 Sacred 1 Arcane
  let sacred1arcane1 = [
    "minecraft:beacon",
    "eidolon:holy_symbol",
    "eidolon:gold_inlay",
  ];
  //Arcane
  let arcane1 = [
    "minecraft:experience_bottle",
    "minecraft:enchanted_book",
    "eidolon:codex",
    "eidolon:soul_shard",
    "eidolon:ender_calx",
    "eidolon:lesser_soul_gem",
    "forbidden_arcanus:arcane_crystal",
    "forbidden_arcanus:arcane_crystal_dust",
    "forbidden_arcanus:mundabitur_dust",
  ];
  e.add("techpack:malum/1sacred_spirit", sacred1);
  e.add("techpack:malum/1sacred1arcane_spirit", sacred1arcane1);
  e.add("techpack:malum/1arcane_spirit", arcane1);
});
