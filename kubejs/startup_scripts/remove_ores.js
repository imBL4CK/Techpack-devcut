WorldgenEvents.remove((event) => {
  event.removeOres(
    (ore) => (ore.blocks = [
        "eidolon:silver_ore",
        "eidolon:deep_silver_ore",
        "eidolon:lead_ore",
        "eidolon:deep_lead_ore",
        "embers:silver_ore",
        "embers:deepslate_silver_ore",
        "tfmg:lead_ore",
        "tfmg:deepslate_lead_ore",
        "tfmg:nickel_ore",
        "tfmg:deepslate_nickel_ore",
        "draconicevolution:overworld_draconium_ore",
        "draconicevolution:nether_draconium_ore",
        "draconicevolution:end_draconium_ore",
        "draconicevolution:deepslate_draconium_ore"
      ])
  );
});
