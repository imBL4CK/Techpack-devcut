ServerEvents.recipes(event => {

    event.shaped(
            Item.of('ad_astra:coal_generator', 2),
            [
                    'ABA',
                    'CDC',
                    'ABA'
            ],
            {
                    B: 'thermal:redstone_servo',
                    D: 'thermal:dynamo_stirling',
                    A: 'thermal:steel_plate',
                    C: 'thermal:rf_coil'
            }
    )
    event.shaped(
            Item.of('ad_astra:compressor'),
            [
                    ' A ',
                    'BCB',
                    ' D '
            ],
            {
                    C: 'actuallyadditions:iron_casing',
                    A: 'create:mechanical_press',
                    B: 'thermal:rf_coil',
                    D: 'minecraft:piston'
            }
    )
    event.shaped(
            Item.of('ad_astra:etrionic_blast_furnace'),
            [
                    ' A ',
                    'BCB',
                    'DED'
            ],
            {
                    E: 'kubejs:basic_machine_casing',
                    A: 'kubejs:advanced_alloy_plate',
                    D: 'thermal:steel_plate',
                    B: 'thermal:rf_coil',
                    C: 'minecraft:blast_furnace'
            }
    )
    event.shaped(
            Item.of('ad_astra:fuel_refinery'),
            [
                    ' A ',
                    'BCB',
                    'DED'
            ],
            {
                    E: 'kubejs:basic_machine_casing',
                    D: '#forge:plates/steel',
                    C: 'pneumaticcraft:refinery',
                    B: 'tfmg:steel_fluid_tank',
                    A: 'pneumaticcraft:refinery_output'
            }
    )
    event.shaped(
            Item.of('ad_astra:fuel_refinery'),
            [
                    'ABA',
                    'CDC',
                    'EFE'
            ],
            {
                    F: 'kubejs:basic_machine_casing',
                    E: '#forge:plates/steel',
                    B: 'ad_astra:fan',
                    C: 'ad_astra:gas_tank',
                    A: 'thermal:steel_plate',
                    D: 'thermal:rf_coil'
            }
    )
    event.shaped(
            Item.of('ad_astra:water_pump'),
            [
                    'ABC',
                    'DED',
                    'FGF'
            ],
            {
                    G: 'actuallyadditions:iron_casing',
                    C: '#forge:plates/desh',
                    B: 'ad_astra:desh_plate',
                    D: 'create:fluid_tank',
                    E: 'ad_astra:gas_tank',
                    A: '#forge:plates/sdesh',
                    F: 'thermal:steel_plate'
            }
    )
    event.shaped(
            Item.of('ad_astra:gravity_normalizer'),
            [
                    'ABA',
                    'CDC',
                    'EEE'
            ],
            {
                    A: 'ad_astra:etrionic_capacitor',
                    C: 'eidolon:gold_inlay',
                    B: 'eidolon:ender_calx',
                    D: 'eidolon:gravity_belt',
                    E: '#forge:plates/desh'
            }
    )
    event.shaped(
            Item.of('ad_astra:energizer'),
            [
                    ' A ',
                    'BCB',
                    'DED'
            ],
            {
                    A: 'ad_astra:etrionic_capacitor',
                    E: 'kubejs:basic_machine_casing',
                    C: 'tfmg:capacitor',
                    D: '#forge:plates/ostrum',
                    B: 'thermal:rf_coil'
            }
    )
    event.shaped(
            Item.of('ad_astra:cryo_freezer'),
            [
                    ' A ',
                    'BCB',
                    'DEF'
            ],
            {
                    E: 'kubejs:basic_machine_casing',
                    A: 'eidolon:wraith_heart',
                    C: 'ad_astra:large_gas_tank',
                    F: '#forge:plates/ostrum',
                    D: '#forge:plates/ostrum',
                    B: 'thermal:blizz_rod'
            }
    )
    event.shaped(
            Item.of('ad_astra:oxygen_sensor'),
            [
                    'ABA',
                    'CDE',
                    'FGF'
            ],
            {
                    G: 'kubejs:basic_machine_casing',
                    D: 'thermal:redstone_servo',
                    B: 'minecraft:calibrated_sculk_sensor',
                    F: '#forge:plates/ostrum',
                    E: 'malum:soul_stained_steel_plating',
                    A: 'pneumaticcraft:plastic',
                    C: 'malum:spectral_optic'
            }
    )
    event.shaped(
            Item.of('pneumaticcraft:refinery'),
            [
                    ' A ',
                    'BCB',
                    'DEF'
            ],
            {
                    B: 'thermal:obsidian_glass',
                    A: 'kubejs:basic_circuit',
                    E: 'eidolon:pewter_inlay',
                    C: 'tfmg:steel_distillation_controller',
                    D: 'malum:auric_embers',
                    F: 'malum:ether'
            }
    )
    event.shaped(
            Item.of('pneumaticcraft:refinery_output'),
            [
                    ' A ',
                    ' B ',
                    ' C '
            ],
            {
                    A: 'thermal:obsidian_glass',
                    B: 'tfmg:steel_distillation_output',
                    C: 'malum:auric_embers'
            }
    )
    event.shaped(
            Item.of('pneumaticcraft:advanced_air_compressor'),
            [
                    ' A ',
                    ' B ',
                    'CDC'
            ],
            {
                    D: 'kubejs:advanced_machine_casing',
                    A: 'pneumaticcraft:advanced_pressure_tube',
                    B: 'pneumaticcraft:air_compressor',
                    C: 'malum:auric_embers'
            }
    )
    event.shaped(
            Item.of('pneumaticcraft:liquid_compressor'),
            [
                    'ABA',
                    'CDC',
                    ' E '
            ],
            {
                    C: 'pneumaticcraft:pressure_tube',
                    B: '#forge:glass',
                    D: 'pneumaticcraft:air_compressor',
                    A: 'thermal:fluid_duct_windowed',
                    E: 'pneumaticcraft:small_tank'
            }
    )
    event.shaped(
            Item.of('pneumaticcraft:pneumatic_dynamo'),
            [
                    ' A ',
                    'BCB',
                    'DED'
            ],
            {
                    B: 'thermal:redstone_servo',
                    D: 'pneumaticcraft:compressed_iron_gear',
                    A: 'pneumaticcraft:advanced_pressure_tube',
                    C: 'kubejs:basic_circuit',
                    E: 'malum:auric_embers'
            }
    )
    event.shaped(
            Item.of('pneumaticcraft:solar_compressor'),
            [
                    'ABC',
                    ' D ',
                    'EFE'
            ],
            {
                    F: 'kubejs:basic_machine_casing',
                    D: 'kubejs:basic_circuit',
                    E: 'pneumaticcraft:advanced_pressure_tube',
                    A: 'enderio:photovoltaic_plate',
                    C: 'pneumaticcraft:solar_cell',
                    B: 'malum:spectral_optic'
            }
    )
    event.shaped(
            Item.of('pneumaticcraft:thermal_compressor'),
            [
                    ' A ',
                    'BCD',
                    'EFE'
            ],
            {
                    F: 'kubejs:basic_machine_casing',
                    A: 'pneumaticcraft:compressed_iron_gear',
                    E: 'pneumaticcraft:pressure_tube',
                    B: '#forge:plates/silver',
                    C: 'pneumaticcraft:air_compressor',
                    D: '#forge:plates/copper'
            }
    )
    event.shaped(
            Item.of('pneumaticcraft:vortex_tube'),
            [
                    'ABA',
                    'CDC',
                    'EBF'
            ],
            {
                    D: 'pneumaticcraft:pressure_tube',
                    C: '#forge:gears/copper',
                    A: 'malum:astral_weave',
                    F: 'create:blaze_cake',
                    E: 'thermal:blizz_rod',
                    B: 'pneumaticcraft:ingot_iron_compressed'
            }
    )
});
