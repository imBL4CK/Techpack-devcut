ServerEvents.recipes((e) => {
  let recipeId = "create:sequency_assembly/";

  //Makeshift Mechanism
  e.recipes.create.sequenced_assembly(
    [Item.of("kubejs:makeshift_mechanism")],
    "#forge:plates/wooden",
    [
      e.recipes.create.deploying("#forge:plates/wooden", [
        "#forge:plates/wooden",
        "create:cogwheel",
      ]),
      e.recipes.create.deploying("#forge:plates/wooden", [
        "#forge:plates/wooden",
        "create:andesite_alloy",
      ]),
      e.recipes.create.deploying("#forge:plates/wooden", [
        "#forge:plates/wooden",
        "#forge:tools/saw",
      ]),
    ]
  ).transitionalItem("#forge:plates/wooden")
    .loops(1)
    .id(recipeId + "makeshift_mechanism");

  //Redstone Servo
  e.recipes.create.sequenced_assembly(
    [Item.of("thermal:redstone_servo")],
    "#forge:plates/iron",
    [
      e.recipes.create.deploying("#forge:plates/iron", [
        "#forge:plates/iron",
        "kubejs:makeshift_mechanism",
      ]),
      e.recipes.create.deploying("#forge:plates/iron", [
        "#forge:plates/iron",
        "thermal:cured_rubber",
      ]),
      e.recipes.create.filling("#forge:plates/iron", [
        "#forge:plates/iron",
        Fluid.of("thermal:redstone", 125),
      ]),
    ]
  ).transitionalItem("#forge:plates/iron")
    .loops(1)
    .id(recipeId + "redstone_servo");
});
ServerEvents.recipes((e) => {

  let recipeId = "create:sequency_assembly/";

  const recipes = [
    //Precision Mechanism
    {
      output: ["create:precision_mechanism"],
      input: ["kubejs:makeshift_mechanism"],
      processes: [
        e.recipes.create.deploying("kubejs:makeshift_mechanism", [
          "kubejs:makeshift_mechanism",
          "create:electron_tube",
        ]),
        e.recipes.create.deploying("kubejs:makeshift_mechanism", [
          "kubejs:makeshift_mechanism",
          "thermal:redstone_servo",
        ]),
        e.recipes.create.deploying("kubejs:makeshift_mechanism", [
          "kubejs:makeshift_mechanism",
          "#forge:plates/brass",
        ]),
      ],
      transitionalItem: "kubejs:makeshift_mechanism",
      loops: 1,
      id: recipeId + "precision_mechanism",
    },
    //Coke Oven
    {
      output: ["tfmg:coke_oven"],
      input: ["create:industrial_iron_block"],
      processes: [
        e.recipes.create.deploying("create:industrial_iron_block", [
          "create:industrial_iron_block",
          "create:precision_mechanism",
        ]),
        e.recipes.create.deploying("create:industrial_iron_block", [
          "create:industrial_iron_block",
          "tfmg:screw",
        ]),
        e.recipes.create.deploying("create:industrial_iron_block", [
          "create:industrial_iron_block",
          "create:blaze_burner",
        ]),
      ],
      transitionalItem: "create:industrial_iron_block",
      loops: 1,
      id: recipeId + "coke_oven",
    },
    //Steel Mechanism
    {
      output: ["tfmg:steel_mechanism"],
      input: ["create:precision_mechanism"],
      processes: [
        e.recipes.create.deploying("create:precision_mechanism", [
          "create:precision_mechanism",
          "#forge:plates/steel",
        ]),
        e.recipes.create.deploying("create:precision_mechanism", [
          "create:precision_mechanism",
          "thermal:rf_coil",
        ]),
        e.recipes.create.deploying("create:precision_mechanism", [
          "create:precision_mechanism",
          "thermal:redstone_servo",
        ]),
      ],
      transitionalItem: "create:precision_mechanism",
      loops: 1,
      id: recipeId + "steel_mechanism",
    },
  ];
  recipes.forEach((recipe) => {
    e.recipes.create.sequenced_assembly(recipe.output, recipe.input, recipe.processes).transitionalItem(recipe.transitionalItem).loops(recipe.loops).id(recipe.id);
  });
})
