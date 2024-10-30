let CustomMaterials = [
    "bronze",
    "copper",
    "tin",
    "redstone_alloy"
   ];
   let Raw_materials = [
    'mica',
    'tungsten',
    'manganese',
    'orichalcum'
   ]
ServerEvents.tags('item', e => {
    CustomMaterials.forEach((cMaterials) => {
        //Ingots
        e.add('forge:ingots/'+cMaterials, 'kubejs:'+cMaterials+'_ingot')
        e.add('forge:ingots', 'kubejs:'+cMaterials+'_ingot')
        //Plates
        e.add('forge:plates', 'kubejs:'+cMaterials+'_plate')
        e.add('forge:plates/'+cMaterials, 'kubejs:'+cMaterials+'_plate')
        //Gears
        e.add('forge:gears', 'kubejs:'+cMaterials+'_gear')
        e.add('forge:gears/'+cMaterials, 'kubejs:'+cMaterials+'_gear')
        //Wires
        e.add('forge:wires', 'kubejs:'+cMaterials+'_wire')
        e.add('forge:wires/'+cMaterials, 'kubejs:'+cMaterials+'_wire')
        //Nugget
        e.add('forge:nuggets', 'kubejs:'+cMaterials+'_nugget')
        e.add('forge:nuggets/'+cMaterials, 'kubejs:'+cMaterials+'_nugget')
    });
    Raw_materials.forEach((raw) => {
        //Raw Materials
        e.add('forge:raw_materials/'+raw, 'kubejs:raw_'+raw)
    })
})