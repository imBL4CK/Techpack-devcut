StartupEvents.registry("creative_mode_tab", (event) => {
  event.create("industrial_revival").icon(() =>
      Item.of("custommachinery:custom_machine_item",'{machine:"custommachinery:industrialrevival/energetic_smelter"}'))
    .content(() => [
      "kubejs:basic_machine_casing",
      Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/generator"}'
      ),
      Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/energetic_smelter"}'
      ),
      Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/compressor"}'
      ),
      Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/macerator"}'
      ),
      Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/alloy_foundry"}'
      ),
    ]);
});
