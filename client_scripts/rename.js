ClientEvents.lang('en_us', e => {
    const customname = [
        //Pipe (Pretty Pipes)
        {
            from: "prettypipes:pipe",
            to: "Logistical Pipe"
        },
    ];
    customname.forEach((rename) => {
        e.renameItem(rename.from, rename.to);
    });
})