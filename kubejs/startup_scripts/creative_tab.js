StartupEvents.modifyCreativeTab("custommachinery:custommachinery", (event) => {
  event.remove([
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
  ]); //doesn't remove from tab
});
