ServerEvents.recipes((e) => {
  e.custom({
    type: "thermal:centrifuge",
    ingredient: {
      item: "thermal:oil_red_sand",
    },
    result: [
      {
        item: "minecraft:red_sand",
        chance: 0.75,
        locked: true,
      },
      {
        item: "thermal:bitumen",
        chance: 1.5,
      },
      {
        item: "thermal:tar",
        chance: 1.0,
      },
      {
        fluid: "tfmg:crude_oil",
        amount: 100,
      },
    ],
    energy: 20000,
    experience: 1.0,
  }).id("library/thermal/centrifuge/red_sand");
  e.custom({
    type: "thermal:centrifuge",
    ingredient: {
      item: "thermal:oil_sand",
    },
    result: [
      {
        item: "minecraft:sand",
        chance: 0.75,
        locked: true,
      },
      {
        item: "thermal:bitumen",
        chance: 1.5,
      },
      {
        item: "thermal:tar",
        chance: 1.0,
      },
      {
        fluid: "tfmg:crude_oil",
        amount: 100,
      },
    ],
    energy: 20000,
    experience: 1.0,
  }).id("library/thermal/centrifuge/sand");
  e.custom({
    type: "thermal:centrifuge",
    ingredient: {
      item: "thermal_and_space:oil_venus_sand",
    },
    result: [
      {
        item: "ad_astra:venus_sand",
        chance: 0.75,
        locked: true,
      },
      {
        item: "thermal:bitumen",
        chance: 1.5,
      },
      {
        item: "thermal:tar",
        chance: 1.0,
      },
      {
        fluid: "tfmg:crude_oil",
        amount: 100,
      },
    ],
    energy: 20000,
    experience: 1.0,
  }).id("library/thermal/centrifuge/venus_sand");
  e.custom({
    type: "thermal:centrifuge",
    ingredient: {
      item: "thermal_and_space:oil_moon_sand",
    },
    result: [
      {
        item: "ad_astra:moon_sand",
        chance: 0.75,
        locked: true,
      },
      {
        item: "thermal:bitumen",
        chance: 1.5,
      },
      {
        item: "thermal:tar",
        chance: 1.0,
      },
      {
        fluid: "tfmg:crude_oil",
        amount: 100,
      },
    ],
    energy: 20000,
    experience: 1.0,
  }).id("library/thermal/centrifuge/moon_sand");
  e.custom({
    type: "thermal:centrifuge",
    ingredient: {
      item: "thermal_and_space:oil_mars_sand",
    },
    result: [
      {
        item: "ad_astra:mars_sand",
        chance: 0.75,
        locked: true,
      },
      {
        item: "thermal:bitumen",
        chance: 1.5,
      },
      {
        item: "thermal:tar",
        chance: 1.0,
      },
      {
        fluid: "tfmg:crude_oil",
        amount: 100,
      },
    ],
    energy: 20000,
    experience: 1.0,
  }).id("library/thermal/centrifuge/mars_sand");
});
