//this part using globalsound was done by rad23  in Latvian.dev Discord, tysm!

global.sound = (entity, soundId, volume, pitch, shift) => {
  entity.level.runCommandSilent(
    `playsound ${soundId} player @p ${entity.x} ${entity.y} ${
      entity.z
    } ${volume} ${pitch - shift / 2 + Math.random() * shift}`
  );
};

(() => {
  /** @type {{string:Internal.Direction_}} */
  const direction = {
    up: Direction.UP,
    down: Direction.DOWN,
    north: Direction.NORTH,
    south: Direction.SOUTH,
    east: Direction.EAST,
    west: Direction.WEST,
  };

  const whitelist = {
    "custommachinery:custom_machine_block": true,
    "minecraft:piston": true,
    "minecraft:sticky_piston": true,
    "minecraft:repeater": true,
    "minecraft:comparator": true,
    "minecraft:dispenser": true,
    "minecraft:dropper": true,
    "minecraft:hopper": true,
    "minecraft:observer": true,
    "thermal:machine_furnace": true,
    "thermal:machine_sawmill": true,
    "thermal:machine_pulverizer": true,
    "thermal:machine_smelter": true,
    "thermal:machine_insolator": true,
    "thermal:machine_centrifuge": true,
    "thermal:machine_press": true,
    "thermal:machine_crucible": true,
    "thermal:machine_chiller": true,
    "thermal:machine_refinery": true,
    "thermal:machine_pyrolyzer": true,
    "thermal:machine_bottler": true,
    "thermal:machine_brewer": true,
    "thermal:machine_crystallizer": true,
    "thermal:machine_crafter": true,
    "thermal:dynamo_stirling": true,
    "thermal:dynamo_compression": true,
    "thermal:dynamo_magmatic": true,
    "thermal:dynamo_numismatic": true,
    "thermal:dynamo_lapidary": true,
    "thermal:dynamo_disenchantment": true,
    "thermal:dynamo_gourmand": true,
  };

  const blacklist = {
    "minecraft:hopper": "up",
  };

  BlockEvents.rightClicked((e) => {
    const { item, hand, facing, block, player } = e;
    if (hand !== "main_hand" || player.crouching) return;
    if (item.id !== "kubejs:wrench") return;
    if (block.id.startsWith("create:")) return;
    if (!whitelist[block.id]) return;
    if (block.properties === undefined) return;
    const blockFacing = block.properties.facing;
    if (blockFacing === undefined) return;
    /** @type {Internal.Direction_} */
    const blockFacingDirection = direction[blockFacing];
    let newDirection;
    if (facing.axisDirection.step > 0) {
      newDirection = blockFacingDirection.getClockWise(facing.axis);
    } else {
      newDirection = blockFacingDirection.getCounterClockWise(facing.axis);
    }
    const newProperties = Object.assign({}, block.properties, {
      facing: newDirection,
    });
    if (blacklist[block.id] === newDirection) return;
    block.set(block.id, newProperties);
    player.swing();
    if (newDirection !== blockFacingDirection) {
      global.sound(e.player, "kubejs:wrench_interact", 1, 1, 0.2);
    }
    e.cancel();
  });
})();
