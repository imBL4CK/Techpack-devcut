ServerEvents.tags("item", (e) => {
  e.add("forge:plastic", "tfmg:plastic_sheet");
  //primitive tools
  e.add("forge:tools/saw", "kubejs:primitive_saw");
  e.add("forge:tools/hammer", "kubejs:primitive_hammer");
  e.add("forge:tools/wirecutter", "kubejs:primitive_wirecutter");
  //Wooden Board
  e.add("forge:plates/wooden", "kubejs:wooden_board");
  //Wooden Gear
  e.add("forge:gears/wooden", "kubejs:wooden_gear");
  //Basic tools
  e.add("forge:tools/saw", "kubejs:basic_saw");
  e.add("forge:tools/hammer", "kubejs:basic_hammer");
  e.add("forge:tools/wirecutter", "kubejs:basic_wirecutter");
  //Crafting Tools
  e.add("techpack:crafting_tools", [
    "kubejs:primitive_hammer",
    "kubejs:primitive_saw",
    "kubejs:primitive_wirecutter",
    "kubejs:rustic_hammer",
    "kubejs:rustic_saw",
    "kubejs:rustic_wirecutter",
    "kubejs:basic_hammer",
    "kubejs:basic_saw",
    "kubejs:basic_wirecutter",
  ]);
  //Rustic tools
  e.add("forge:tools/saw", "kubejs:rustic_saw");
  e.add("forge:tools/hammer", "kubejs:rustic_hammer");
  e.add("forge:tools/wirecutter", "kubejs:rustic_wirecutter");
  //Coal Coke
  e.add("forge:coal_coke", "tfmg:coal_coke");
  //Techpack Shells
  e.add("techpack:shells", [
    "seafarer:clam_shell",
    "seafarer:horn_shell",
    "seafarer:spiky_shell",
    "seafarer:spiral_shell",
    "seafarer:swirl_shell",
    "seafarer:pyramid_shell",
  ]);
  //Actually Goggles
  e.add("curios:head", "actuallyadditions:engineers_goggles_advanced");
  e.add("curios:head", "actuallyadditions:engineers_goggles");
  //Blend Tags
  e.add("techpack:blends", [
    "thermal:steel_dust",
    "thermal:rose_gold_dust",
    "thermal:bronze_dust",
    "thermal:electrum_dust",
    "thermal:invar_dust",
    "thermal:constantan_dust",
    "thermal:signalum_dust",
    "thermal:lumium_dust",
    "thermal:enderium_dust",
    "thermalendergy:prismalium_dust",
    "thermalendergy:stellarium_dust",
    "thermalendergy:melodium_dust",
  ]);
  e.add("techpack:catalysts", [
    "minecraft:glowstone_dust",
    "minecraft:redstone",
  ]);
});
