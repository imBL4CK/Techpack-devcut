// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

PlayerEvents.tick(e => {
    const { headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem } = e.player;
    if (headArmorItem.id === 'kubejs:reinforced_armor_helmet'
        && chestArmorItem.id === 'kubejs:reinforced_armor_chestplate'
        && legsArmorItem.id === 'kubejs:reinforced_armor_leggings'
        && feetArmorItem.id === 'kubejs:reinforced_armor_boots') {
            Utils.server.runCommandSilent("effect give ${player.username} minecraft:dolphins_grace 2 0 true")
    };
    //e.server.runCommand("/say "+headArmorItem.id)
});