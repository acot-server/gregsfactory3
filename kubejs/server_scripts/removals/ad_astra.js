ServerEvents.recipes(it => {
    it.remove([{input: "ad_astra:solar_panel"}, {output: "ad_astra:solar_panel"}]);
    it.remove([{input: "ad_astra:water_pump"}, {output: "ad_astra:water_pump"}]);
    it.remove([{input: "ad_astra:compressor"}, {output: "ad_astra:compressor"}]);
    it.remove([{input: "ad_astra:etrionic_blast_furnace"}, {output: "ad_astra:etrionic_blast_furnace"}]);
}
);
BlockEvents.rightClicked("ad_astra:solar_panel", it => {it.block.set("minecraft:stone");});
BlockEvents.placed("ad_astra:solar_panel", it => it.cancel());
BlockEvents.rightClicked("ad_astra:water_pump", it => {it.block.set("minecraft:stone");})
BlockEvents.placed("ad_astra:water_pump", it => it.cancel());
BlockEvents.rightClicked("ad_astra:compressor", it => {it.block.set("minecraft:stone");});
BlockEvents.placed("ad_astra:compressor", it => it.cancel());
BlockEvents.rightClicked("ad_astra:etrionic_blast_furnace", it => {it.block.set('minecraft:stone');});
BlockEvents.placed("ad_astra:etrionic_blast_furnace", it => it.cancel());