let Materials = [
  "bronze",
  "copper",
  "tin",
  "redstone_alloy",
  "bronze",
  "brass",
  "constantan",
  "red_alloy",
  "steel",
  "invar",
  "electrum",
  "energized_steel",
  "aluminum",
  "tin",
  "lead",
  "silver",
  "nickel",
  "zinc",
];
let Raw_materials = [
    "aluminum", 
    "tin", 
    "lead", 
    "silver", 
    "nickel", 
    "zinc"
];

ServerEvents.tags("item", (e) => {
  Materials.forEach((ibMaterials) => {
    //Ingots
    e.add("forge:ingots/" + ibMaterials, "kubejs:" + ibMaterials + "_ingot");
    e.add("forge:ingots", "kubejs:" + ibMaterials + "_ingot");
    //Plates
    e.add("forge:plates", "kubejs:" + ibMaterials + "_plate");
    e.add("forge:plates/" + ibMaterials, "kubejs:" + ibMaterials + "_plate");
    //Gears
    e.add("forge:gears", "kubejs:" + ibMaterials + "_gear");
    e.add("forge:gears/" + ibMaterials, "kubejs:" + ibMaterials + "_gear");
    //Wires
    e.add("forge:wires", "kubejs:" + ibMaterials + "_wire");
    e.add("forge:wires/" + ibMaterials, "kubejs:" + ibMaterials + "_wire");
    //Nugget
    e.add("forge:nuggets", "kubejs:" + ibMaterials + "_nugget");
    e.add("forge:nuggets/" + ibMaterials, "kubejs:" + ibMaterials + "_nugget");
    //Storage Blocks
    e.add("forge:storage_blocks", "kubejs:" + ibMaterials + "_block");
    e.add("forge:storage_blocks/" + ibMaterials, "kubejs:" + ibMaterials + "_block");
    //Ores
    e.add("forge:ores", "kubejs:" + ibMaterials + "_ore");
    e.add("forge:ores/" + ibMaterials, "kubejs:" + ibMaterials + "_ore");
    e.add("forge:ores", "kubejs:deepslate/" + ibMaterials + "_ore");
    e.add("forge:ores/" + ibMaterials, "kubejs:deepslate" + ibMaterials + "_ore");
  });
  Raw_materials.forEach((raw) => {
    //Raw Materials
    e.add("forge:raw_materials/" + raw, "kubejs:raw_" + raw);
  });
});
