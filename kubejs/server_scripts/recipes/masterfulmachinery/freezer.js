MMEvents.createProcesses((e) => {
  //Shadow Bronze
  {
    e.create("mm:freezer/stainless_steel")
      .structureId("mm:freezer_structure")
      .ticks(100)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: "kubejs:hot_stainless_steel_ingot",
          count: 1,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:energy",
          amount: 4096,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: "kubejs:stainless_steel_ingot",
          count: 1,
        },
      });
  }
});
