ServerEvents.recipes((e) => {
  let Ores = [
    "copper",
    "iron",
    "gold",
    "zinc",
    "tin",
    "silver",
    "lead",
    "nickel",
  ];
  let KubejsOres = [
    "desh",
    "ostrum",
    "calorite",
  ]
  Ores.forEach((crushed) => {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/macerator", 300)
      .requireEnergy(1024)
      .requireItemTag("forge:raw_materials/" + crushed)
      .produceItem("create:crushed_raw_" + crushed);
  });
  KubejsOres.forEach((crushed) => {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/macerator", 300)
      .requireEnergy(1024)
      .requireItemTag("forge:raw_materials/" + crushed)
      .produceItem("kubejs:crushed_raw_" + crushed);
  });

  //Advanced Alloy Ingot
  e.recipes.custommachinery
    .custom_machine("custommachinery:industrialrevival/macerator", 300)
    .requireEnergyPerTick(16)
    .requireItem("kubejs:mixed_metal_ingot")
    .produceItem("kubejs:advanced_alloy_dust");
    
  //Crushed Soulstone
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("malum:raw_soulstone")
  .produceItem("malum:crushed_soulstone");

  //Crushed Brilliance
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("malum:cluster_of_brilliance")
  .produceItem("malum:crushed_brilliance");

  //Cobblestone
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:cobblestone")
  .produceItem("minecraft:gravel")
  .produceItem("minecraft:sand").chance(0.2)

  //Gravel
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("minecraft:gravel")
  .produceItem("minecraft:sand")
  .produceItem("minecraft:flint").chance(0.2)

  //Blaze Rod
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("minecraft:blaze_rod")
  .produceItem(Item.of("minecraft:blaze_powder", 3))
  .produceItem("#forge:gems/sulfur").chance(0.25)

  //Glowstone
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("minecraft:glowstone")
  .produceItem(Item.of("minecraft:glowstone_dust", 4))

  //Sandstone
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("c:uncolored_sandstone_blocks")
  .produceItem(Item.of("minecraft:sand", 2))
  .produceItem("#forge:gems/niter").chance(0.3)
  
  //Cinder flour
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("minecraft:netherrack")
  .produceItem(Item.of("create:cinder_flour"))
  .produceItem("create:cinder_flour").chance(0.1)
  
  //Basalz Shard
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("thermal:basalz_rod")
  .produceItem(Item.of("thermal:basalz_powder", 3))
  .produceItem("#forge:slag").chance(0.25)

  //Blitz Mote
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("thermal:blitz_rod")
  .produceItem(Item.of("thermal:blitz_powder", 3))
  .produceItem("#forge:gems/niter").chance(0.25)
  
  //Blizz Cube
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("thermal:blizz_rod")
  .produceItem(Item.of("thermal:blizz_powder", 3))
  .produceItem("minecraft:snowball").chance(0.25)

  //Andesite
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem(Item.of("minecraft:andesite", 2))
  .produceItem(Item.of("minecraft:cobblestone", 2))
  .produceItem("#forge:dusts/quartz")

  //Granite
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem(Item.of("minecraft:granite", 2))
  .produceItem(Item.of("minecraft:cobblestone", 2))
  .produceItem("#forge:dusts/quartz")

  //Diorite
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem(Item.of("minecraft:diorite", 2))
  .produceItem(Item.of("minecraft:cobblestone", 2))
  .produceItem("#forge:dusts/quartz")

  //Nether Quartz
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:ores/quartz")
  .produceItem(Item.of("minecraft:quartz", 2))
  .produceItem("#forge:gems/sulfur")

  //Gold Ore
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:ores/gold")
  .produceItem(Item.of("#forge:dusts/gold", 2))
  .produceItem("#forge:gems/cinnabar").chance(0.05)


  //Copper Ore
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:ores/copper")
  .produceItem(Item.of("#forge:dusts/copper", 6))
  .produceItem("#forge:dusts/gold").chance(0.1)

  //Silver Ore
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:ores/silver")
  .produceItem(Item.of("#forge:dusts/silver", 2))
  .produceItem("#forge:dusts/lead").chance(0.1)

  //Tin Ore
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:ores/tin")
  .produceItem(Item.of("#forge:dusts/tin", 2))
  .produceItem("#forge:gems/apatite").chance(0.5)

  //Nickel Ore
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:ores/nickel")
  .produceItem(Item.of("#forge:dusts/nickel", 2))
  .produceItem("#forge:dusts/copper").chance(0.1)

  //Sulfur Ore
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:ores/sulfur")
  .produceItem(Item.of("#forge:gems/sulfur", 4))

  //Emerald Ore
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:ores/emerald")
  .produceItem(Item.of("#forge:gems/emerald", 2))

  //Zinc Ore
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:ores/zinc")
  .produceItem(Item.of("#forge:dusts/zinc", 2))
  .produceItem("#forge:dusts/iron").chance(0.1)

  //Iron Ore
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:ores/iron")
  .produceItem(Item.of("#forge:dusts/iron", 2))
  .produceItem("#forge:dusts/nickel").chance(0.1)

  //Lead Ore
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:ores/lead")
  .produceItem(Item.of("#forge:dusts/lead", 2))
  .produceItem("#forge:dusts/silver").chance(0.1)

  //Lapis Ore
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:ores/lapis")
  .produceItem(Item.of("#forge:gems/lapis",2 ))
  .produceItem("#forge:gems/sulfur").chance(0.25)

  //Diamond Ore
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:ores/diamond")
  .produceItem(Item.of("#forge:gems/diamond", 2))

  //Coal Ore
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:ores/coal")
  .produceItem(Item.of("minecraft:coal", 2))
  .produceItem("#forge:gems/sulfur").chance(0.15)

  //Redstone Ore
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:ores/redstone")
  .produceItem(Item.of("#forge:dusts/redstone", 6))
  .produceItem("#forge:gems/cinnabar").chance(0.25)

  //Apatite Ore
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:ores/apatite")
  .produceItem(Item.of("#forge:gems/apatite", 6))

  //Cinnabar Ore
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:ores/cinnabar")
  .produceItem(Item.of("#forge:gems/cinnabar", 2))

  //Red Sandstone
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("c:red_sandstone_blocks")
  .produceItem(Item.of("minecraft:red_sand", 2))
  .produceItem("#forge:gems/niter").chance(0.3)

  //Diamond Armor
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:armor/diamond")
  .produceItem(Item.of("minecraft:diamond", 3))
  .produceItem("#forge:gems/diamond").chance(0.1)

  //Diamond Tools
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:tools/diamond")
  .produceItem(Item.of("minecraft:diamond", 1))
  .produceItem("thermal:sawdust")

  //Horse Diamond Armor
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("minecraft:diamond_horse_armor")
  .produceItem(Item.of("minecraft:diamond", 5))
  .produceItem("#forge:gems/diamond").chance(0.75)
  
  //Iron Armor
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:armor/iron")
  .produceItem(Item.of("#forge:dusts/iron", 3))
  .produceItem("#forge:dusts/iron").chance(0.1)

  //Iron Tools
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItemTag("forge:tools/iron")
  .produceItem(Item.of("#forge:dusts/iron", 1))
  .produceItem("thermal:sawdust")

  //Horse Iron Armor
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("minecraft:iron_horse_armor")
  .produceItem(Item.of("#forge:dusts/iron", 5))
  .produceItem("#forge:dusts/iron").chance(0.75)

  //Sugar by Rice
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("actuallyadditions:rice")
  .produceItem(Item.of("minecraft:sugar", 2));
  
  //Black Quartz
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("actuallyadditions:black_quartz_ore")
  .produceItem(Item.of("actuallyadditions:black_quartz", 2));
  
  //Prismarine Crystals
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("minecraft:prismarine_shard")
  .produceItem(Item.of("minecraft:prismarine_crystals", 2));
  
  //Bone Meal
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("#forge:bones")
  .produceItem(Item.of("minecraft:bone_meal", 6));
  
  //Moss Paste
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("minecraft:moss_block")
  .produceItem(Item.of("quark:moss_paste", 3));
  
  //Amethyst Shard
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("minecraft:amethyst_block")
  .produceItem(Item.of("minecraft:amethyst_shard", 3))
  .produceItem(Item.of("minecraft:amethyst_shard", 1)).chance(0.5);
  
  //Coke Dust
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("#forge:coal_coke")
  .produceItem(Item.of("#forge:dusts/coal_coke"));
  
  //Levitation Lubricant
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("minecraft:phantom_membrane")
  .produceItem(Item.of("moreminecarts:levitation_powder"))
  .produceItem(Item.of("moreminecarts:levitation_powder")).chance(0.5);
  
  //String Bye Wool
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("#minecraft:wool")
  .produceItem(Item.of("minecraft:string", 2))
  .produceItem(Item.of("minecraft:string", 1)).chance(0.5);
  
  //Levitation Lubricant
  e.recipes.custommachinery
  .custom_machine("custommachinery:industrialrevival/macerator", 300)
  .requireEnergy(1024)
  .requireItem("minecraft:shulker_shell")
  .produceItem(Item.of("moreminecarts:levitation_powder", 20))
});
