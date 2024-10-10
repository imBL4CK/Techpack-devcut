ClientEvents.lang('en_us', e => {
    const customname = [
        //Pipe (Pretty Pipes)
        {
            from: "prettypipes:pipe",
            to: "Logistical Pipe"
        },
        //Iron Backpack
        {
            from: "sophisticatedbackpacks:iron_backpack",
            to: "Bronze Backpack"
        },
    ];
    customname.forEach((rename) => {
        e.renameItem(rename.from, rename.to);
    });
})