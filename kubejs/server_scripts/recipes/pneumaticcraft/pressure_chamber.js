ServerEvents.recipes((e) => {
  //Diamond
  e.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        tag: "forge:storage_blocks/coal_coke",
        count: 16,
      },
    ],
    pressure: 4,
    results: [
      {
        item: "minecraft:diamond",
      },
    ],
  });
  //Ender IO Basic Capacitor
  e.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        item: "enderio:grains_of_infinity",
        count: 2,
      },
      {
        type: "pneumaticcraft:stacked_item",
        item: "kubejs:advanced_alloy_ingot",
        count: 1,
      },
      {
        type: "pneumaticcraft:stacked_item",
        item: "thermal:rf_coil",
        count: 1,
      },
      {
        type: "pneumaticcraft:stacked_item",
        tag: 'forge:wires/copper',
        count: 1,
      },
    ],
    pressure: 2,
    results: [
      {
        item: "enderio:basic_capacitor",
      },
    ],
  });
  //Ender IO Basic Capacitor
  e.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        item: "thermal:cured_rubber",
        count: 2,
      },
      {
        type: "pneumaticcraft:stacked_item",
        tag: 'forge:wires/copper',
        count: 2,
      },
      {
        type: "pneumaticcraft:stacked_item",
        tag: 'forge:ingots/nickel',
        count: 1,
      },
      {
        type: "pneumaticcraft:stacked_item",
        item: "kubejs:advanced_alloy_ingot",
        count: 1,
      },
    ],
    pressure: 2,
    results: [
      {
        item: "tfmg:capacitor_",
      },
    ],
  });
  //PCB
  /*
  e.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        tag: "forge:plastic",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "pneumaticcraft:capacitor",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "pneumaticcraft:transistor",
      },
      {
        item: "thermal:rf_coil",
      }
    ],
    pressure: 1,
    results: [
      {
        item: "pneumaticcraft:empty_pcb",
        count: 1,
      },
    ],
  })*/
});
