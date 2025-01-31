StartupEvents.registry('fluid', event => {
  //Molten Red Alloy
  event.create('molten_red_alloy')
    .displayName('Molten Red Alloy')
    .stillTexture('kubejs:block/molten_red_alloy_still') 
    .flowingTexture('kubejs:block/molten_red_alloy_flow')
    .density(4000)
    .viscosity(2000)
    .bucketItem.texture('kubejs:item/molten_red_alloy_bucket')
})
