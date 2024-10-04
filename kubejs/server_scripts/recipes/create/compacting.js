ServerEvents.recipes((e) => {
    let recipeId = "create:compacting/";

    //Destabilized Redstone
    e.recipes.create.compacting(
        [Fluid.of("thermal:redstone", 100)], ["#forge:dusts/redstone"]
    ).id(recipeId + "redstone_fluid")
     .heated();
    //Destabilized Redstone
    e.recipes.create.compacting(
        [Fluid.of("thermal:redstone", 900)],
        ["#forge:storage_blocks/redstone"]
    ).id(recipeId + "redstone_fluid_using_block")
     .heated();
     //Rose Quartz
     e.recipes.create.compacting(
        ["create:rose_quartz"],
        [Fluid.of("thermal:redstone", 500), "#forge:gems/quartz"]
     ).id(recipeId + "rose_quartz")
      .heated();

    const recipes = [
        //Rubber
        {
            output: "thermal:rubber",
            input: [Fluid.of("minecraft:water", 25), Fluid.of("thermal:latex", 250)],
            id: recipeId + "rubber",
        },
    ];
    recipes.forEach((recipe) => {
        e.recipes.create.compacting(recipe.output, recipe.input).id(recipe.id);
    });
});
