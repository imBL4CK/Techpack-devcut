ServerEvents.recipes(e =>{
    let recipeId = ['pneumaticcrafto:thermopneumatic_plant/']

    //BioPlastic From LPG
        e.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 500,
            tag: "forge:lpg",
        },
        fluid_output: { 
            type: "pneumaticcraft:fluid",
            amount: 50,
            tag: "forge:creosote",
        },
        item_input: { tag: "forge:coal_coke" },
        item_output: { item: "kubejs:bio_plastic" },
        temperature: { min_temp: 373 },
        speed: 0.1,
        pressure: 4,
        }).id(recipeId + "liquid_plastic_from_lpg"),
    //BioPlastic From Biodiesel
        e.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
        type: "pneumaticcraft:fluid",
        amount: 500,
        tag: "forge:biodiesel",
        },
        fluid_output: { 
            fluid: "thermal:resin", 
            amount: 50 
        },
        item_input: { item: "industrialforegoing:dryrubber" },
        item_output: { item: "kubejs:bio_plastic" },
        temperature: { min_temp: 373 },
        speed: 0.1,
        }).id(recipeId + "liquid_plastic_from_biodiesel");
    //Acetaldehyde by Ethanol
        e.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
        type: "pneumaticcraft:fluid",
        amount: 500,
        tag: "forge:ethanol",
        },
        fluid_output: { 
            fluid: "kubejs:acetaldehyde", 
            amount: 500 
        },
        temperature: { min_temp: 373 },
        speed: 0.1,
        }).id(recipeId + "acetaldehyde_from_ethanol");
    //Duroplast by Acetaldehyde
        e.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
        type: "pneumaticcraft:fluid",
        amount: 500,
        fluid: "kubejs:acetaldehyde",
        },
        fluid_output: { 
            fluid: "kubejs:duroplast_resin", 
            amount: 250 
        },
        temperature: { min_temp: 373 },
        speed: 0.1,
        }).id(recipeId + "duroplast_resin_from_acetaldehyde");
})
