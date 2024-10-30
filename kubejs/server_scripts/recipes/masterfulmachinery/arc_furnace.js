MMEvents.createProcesses((e) => {
  e.create("mm:arc_furnace/recycle/rod_to_steel")
    .structureId("mm:arc_furnace_structure")
    .ticks(100)
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:item",
        tag: "forge:rods/steel",
        count: 1,
      },
    })
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:energy",
        amount: 2048,
      },
    })
    .output({
      type: "mm:output/simple",
      ingredient: {
        type: "mm:item",
        item: "thermal:steel_ingot",
        count: 1,
      },
    });
});
