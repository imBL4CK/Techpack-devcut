ServerEvents.tags("item", (e) => {
  const customtag = [
    //TFMG Plastic
    {
      tag: "forge:plastic",
      item: "tfmg:plastic_sheet",
    },
    //Pneumaticcraft Plastic
    {
      tag: "forge:plastic",
      item: "pneumaticcraft:plastic",
    },
    //Pneumaticcraft Plastic 2
    {
      tag: "forge:ingots/plastic",
      item: "pneumaticcraft:plastic",
    },
    //Primitive Hammer
    {
      tag: "forge:tools/hammer",
      item: "kubejs:primitive_hammer",
    },
    //Primitive Saw
    {
      tag: "forge:tools/saw",
      item: "kubejs:primitive_saw",
    },
    //Primitive Wirecutter
    {
      tag: "forge:tools/wirecutter",
      item: "kubejs:primitive_wirecutter",
    },
    //Rustic Hammer
    {
      tag: "forge:tools/hammer",
      item: "kubejs:rustic_hammer",
    },
    //Rustic Saw
    {
      tag: "forge:tools/saw",
      item: "kubejs:rustic_saw",
    },
    //Rustic Wirecutter
    {
      tag: "forge:tools/wirecutter",
      item: "kubejs:rustic_wirecutter",
    },
    //Basic Hammer
    {
      tag: "forge:tools/hammer",
      item: "kubejs:basic_hammer",
    },
    //Basic Saw
    {
      tag: "forge:tools/saw",
      item: "kubejs:basic_saw",
    },
    //Basic Wirecutter
    {
      tag: "forge:tools/wirecutter",
      item: "kubejs:basic_wirecutter",
    },
    //Wooden Board
    {
      tag: "forge:plates/wood",
      item: "kubejs:wooden_board",
    },
    //Wooden Gear
    {
      tag: "forge:gears/wood",
      item: "kubejs:wooden_gear",
    },
    //Techpack Crafting Tools
    {
      tag: "techpack:crafting_tools",
      item: [
        "kubejs:primitive_hammer",
        "kubejs:primitive_saw",
        "kubejs:primitive_wirecutter",
        "kubejs:rustic_hammer",
        "kubejs:rustic_saw",
        "kubejs:rustic_wirecutter",
        "kubejs:basic_hammer",
        "kubejs:basic_saw",
        "kubejs:basic_wirecutter",
      ],
    },
    //Techpack Shells
    {
      tag: "techpack:shells",
      item: [
        "seafarer:clam_shell",
        "seafarer:horn_shell",
        "seafarer:spiky_shell",
        "seafarer:spiral_shell",
        "seafarer:swirl_shell",
        "seafarer:pyramid_shell",
      ],
    },
    //Techpack Blend Tags
    {
      tag: "techpack:blends",
      item: [
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
      ],
    },
    //Techpack Catalysts
    {
      tag: "techpack:catalysts",
      item: ["minecraft:glowstone_dust", "minecraft:redstone"],
    },
    //Coal Coke
    {
      tag: "forge:coal_coke",
      item: "tfmg:coal_coke",
    },
    //Actually Goggles
    {
      tag: "curios:head",
      item: [
        "actuallyadditions:engineers_goggles",
        "actuallyadditions:engineers_goggles_advanced",
      ],
    },
    //Zinc Plate
    {
      tag: "forge:plates/zinc",
      item: "createdeco:zinc_sheet",
    },
    //Forge Wires
    {
      tag: "forge:wires",
      item: ["tfmg:copper_wire", "tfmg:aluminum_wire"],
    },
    //Charcoal Block
    {
      tag: "forge:storage_blocks",
      item: "architects_palette:charcoal_block",
    },
    //Charcoal Block 2
    {
      tag: "forge:storage_blocks/charcoal",
      item: "architects_palette:charcoal_block",
    },
    //Coal Coke Block
    {
      tag: "forge:storage_blocks",
      item: "tfmg:coal_coke_block",
    },
    //Coal Coke Block 2
    {
      tag: "forge:storage_blocks/coal_coke",
      item: "tfmg:coal_coke_block",
    },
    //Industrial Iron Ingot
    {
      tag: "forge:ingots",
      item: "createdeco:industrial_iron_ingot",
    },
    //Industrial Iron Ingot 2
    {
      tag: "forge:ingots/cast_iron",
      item: "createdeco:industrial_iron_ingot",
    },
    //Cast Iron
    {
      tag: "createdeco:internal/ingots/industrial_iron_ingots",
      item: "tfmg:cast_iron_ingot",
    },
    //Bio Plastic Mesh
    {
      tag: "forge:plastic",
      item: "kubejs:bio_plastic_mesh",
    },
    //Alchemical Brass Ingot
    {
      tag: "forge:ingots/brass",
      item: "kubejs:alchemical_brass_ingot",
    },
    //Alchemical Brass Plate
    {
      tag: "forge:plates/brass",
      item: "kubejs:alchemical_brass_plate",
    },
    //Alchemical Brass Gear
    {
      tag: "forge:gears/brass",
      item: "kubejs:alchemical_brass_gear",
    },
  ];
  customtag.forEach((custom) => {
    e.add(custom.tag, custom.item);
  });
});
