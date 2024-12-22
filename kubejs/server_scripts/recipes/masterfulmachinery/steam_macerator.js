MMEvents.createProcesses((e) => {
  e.create("mm:steam_macerator/advanced_alloy_ingot")
    .structureId("mm:steam_macerator_structure")
    .ticks(150)
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:item",
        item: "kubejs:mixed_metal_ingot",
        count: 1,
      },
    })
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:fluid",
        fluid: "systeams:steam",
        amount: 200,
      },
    })
    .output({
      type: "mm:output/simple",
      ingredient: {
        type: "mm:item",
        item: "kubejs:advanced_alloy_dust",
        count: 1,
      },
    });
});
