ItemEvents.toolTierRegistry((e) => {
  e.add("primitive_tier", (tier) => {
    tier.uses = 128;
    tier.speed = 4.0;
    tier.attackDamageBonus = 2.0;
    tier.level = 2;
    tier.enchantmentValue = 14;
    tier.repairIngredient = "#forge:ingots/iron";
  });
  e.add("basic_tier", (tier) => {
    tier.uses = 312;
    tier.speed = 4.0;
    tier.attackDamageBonus = 2.0;
    tier.level = 2;
    tier.enchantmentValue = 14;
    tier.repairIngredient = "#forge:ingots/steel";
  });
  e.add("rustic_tier", (tier) => {
    tier.uses = 312;
    tier.speed = 4.0;
    tier.attackDamageBonus = 2.0;
    tier.level = 2;
    tier.enchantmentValue = 14;
    tier.repairIngredient = "#forge:ingots/bronze";
  });
});
