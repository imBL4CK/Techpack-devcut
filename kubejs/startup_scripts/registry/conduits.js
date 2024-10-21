EnderIOEvents.conduits((e) => {
  const conduits = [
    //Basic Energy Conduit
    {
      id: "basic_energy_conduit",
      name: "Basic Energy Conduit",
      transfer: 1280,
    },
    //Enhanced Energy Conduit
    {
      id: "enhanced_energy_conduit",
      name: "Enhanced Energy Conduit",
      transfer: 5120,
    },
    //Ender Energy Conduit
    {
      id: "ender_energy_conduit",
      name: "Ender Energy Conduit",
      transfer: 20480,
    },
  ];
  conduits.forEach((conduit) => {
    e.registerEnergyConduit(conduit.id, conduit.name, conduit.transfer);
  });
});
