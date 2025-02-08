StartupEvents.registry("item", (e) => {
  //Wrench
  e.create("wrench", "pickaxe").tier("wrench").maxStackSize(1);

  //Primitive Saw
  e.create("primitive_fishing_net")
    .maxStackSize(1)
    .maxDamage(256)
    .texture("kubejs:item/placeholder");

  //Primitive Saw
  e.create("primitive_saw", "axe")
    .maxStackSize(1)
    .tier("primitive_tier")
    .maxDamage(128)
    .attackDamageBaseline(1);

  //Primitive Hammer
  e.create("primitive_hammer", "pickaxe")
    .maxStackSize(1)
    .tier("primitive_tier")
    .maxDamage(128)
    .attackDamageBaseline(1);

  //Primitive Wirecutter
  e.create("primitive_wirecutter", "shears").maxStackSize(1).maxDamage(128);

  //Rustic Saw
  e.create("rustic_saw", "axe")
    .maxStackSize(1)
    .tier("rustic_tier")
    .maxDamage(312)
    .attackDamageBaseline(1);

  //Rustic Hammer
  e.create("rustic_hammer", "pickaxe")
    .maxStackSize(1)
    .tier("rustic_tier")
    .maxDamage(312)
    .attackDamageBaseline(1);

  //Rustic Wirecutter
  e.create("rustic_wirecutter", "shears").maxStackSize(1).maxDamage(312);

  //Basic Saw
  e.create("basic_saw", "axe")
    .maxStackSize(1)
    .tier("basic_tier")
    .maxDamage(312)
    .attackDamageBaseline(1)
    .speed(6.0);

  //Basic Hammer
  e.create("basic_hammer", "pickaxe")
    .maxStackSize(1)
    .tier("basic_tier")
    .maxDamage(312)
    .attackDamageBaseline(1)
    .speed(6.0);

  //Basic Wirecutter
  e.create("basic_wirecutter", "shears").maxStackSize(1).maxDamage(312);

  //Reinforced Armor
  e.create("reinforced_armor_helmet", "helmet").tier("reinforced_armor");
  e.create("reinforced_armor_chestplate", "chestplate").tier(
    "reinforced_armor"
  );
  e.create("reinforced_armor_leggings", "leggings").tier("reinforced_armor");
  e.create("reinforced_armor_boots", "boots").tier("reinforced_armor");
  e.create("boots_of_the_traveller", "boots").tier("boots_of_the_traveller");
});
