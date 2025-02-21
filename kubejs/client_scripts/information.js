JEIEvents.information((e) => {
  const information = [
    {
      item: "minecraft:bucket",
      info: "You can store items inside this vial by right-clicking.",
    },
    {
      item: "#malum:spirit",
      info: "can be obtained by killing mobs using the crude scythe or other soul-shattering damage items.",
    },
    {
      item: "malum:astral_weave",
      info: "can be obtained by killing ghasts or phantons using the crude scythe or other soul-shattering damage items.",
    },
    {
      item: "malum:warp_flux",
      info: "can be obtained by killing endermans using the crude scythe or other soul-shattering damage items.",
    },
    {
      item: "malum:rotting_essence",
      info: "can be obtained by killing zombies (and husks) using the crude scythe or other soul-shattering damage items.",
    },
    {
      item: "malum:grim_talc",
      info: "can be obtained by killing skeletons using the crude scythe or other soul-shattering damage items.",
    },
  ];
  information.forEach((jei) => {
    e.addItem(jei.item, [jei.info]);
  });
  
});
