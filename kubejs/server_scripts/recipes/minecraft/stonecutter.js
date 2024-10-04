ServerEvents.recipes((event) => {
  //Logistical Machines
  let logistical_id = [
    "create:linked_controller",
    "create:analog_lever",
    "create:pulse_repeater",
    "create:pulse_extender",
    "create:powered_latch",
    "create:powered_toggle_latch",
    "createaddition:redstone_relay",
    "minecraft:repeater",
    "minecraft:comparator"
  ];
  logistical_id.forEach(function (logistical) {
    var craft = {
      type: "minecraft:stonecutting",
      ingredient: {
        item: "kubejs:logistic_machine"
      },
      result: logistical,
      count: 1
    };
    event.custom(craft);
  });
  //Redstone Link StandAlone
  event.stonecutting("2x create:redstone_link", "kubejs:logistic_machine");
  //Tfmg Screw
  event.stonecutting("tfmg:screw", "#forge:ingots/iron");
});
