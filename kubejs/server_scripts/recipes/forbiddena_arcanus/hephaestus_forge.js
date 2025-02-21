ServerEvents.lowPriorityData(e => {

    const recipes = [
    //Manapool
      {
        id: "manapool",
        tier: 1,
        essences: {
          aureal: 100,
          blood: 0,
          experience:1000,
          souls:3,
        },
        inputs: {
          pedestals:[
          {
              "amount": 3,
              "ingredient": {
                  "item": "botania:livingrock"
              }
          },
          {
              "amount": 1,
              "ingredient": {
                  "item": "forbidden_arcanus:carved_edelwood_log"
              }
          }],
          mainItem: "eidolon:holy_symbol"
        },
        outputs: {
          quantity: 1,
          item: "botania:manapool"
        }
      },
    //Elder Miner's Pickaxe
    {
        id: "elders_miner_pickaxe",
        tier: 3,
        essences: {
        aureal: 100,
        blood: 0,
        experience:1000,
        souls:15,
        },
        inputs: {
        pedestals:[
        {
            "amount": 3,
            "ingredient": {
                "item": "botania:manasteel_ingot"
            }
        },
        {
            "amount": 3,
            "ingredient": {
                "item": "botania:elementium_ingot"
            }
        },
        {
            "amount": 3,
            "ingredient": {
                "item": "malum:maligant_pewter_ingot"
            }
        },
    ],
        mainItem: "eidolon:holy_symbol"
        },
        outputs: {
        quantity: 1,
        item: "kubejs:elders_miner_pickaxe"
        }
    }
    ]

    recipes.forEach((recipe) => {

        e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/'+recipe.id, {
            "additional_requirements": {
                "forge_tier": recipe.tier
            },
            "essences": {
                "aureal": recipe.essences.aureal,
                "blood": recipe.essences.blood,
                "experience": recipe.essences.experience,
                "souls": recipe.essences.souls
            },
            "inputs": recipe.inputs.pedestals,
            "main_ingredient": {
                "item": recipe.inputs.mainItem
            },
            "result": {
                "type": "forbidden_arcanus:create_item",
                "result_item": {
                    "Count": recipe.outputs.quantity,
                    "id": recipe.outputs.item
                }
            }
        })
    })
})