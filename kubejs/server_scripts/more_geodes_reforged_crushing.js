ServerEvents.recipes(event => {
    event.recipes.gtceu.forge_hammer('emerald_geode_crystal_block')
        .itemInputs(
            '1x geodes:emerald_crystal_block'
        )
        .itemOutputs("8x gtceu:purified_emerald_ore")
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.forge_hammer('quartz_geode_crystal_block')
        .itemInputs(
            '1x geodes:quartz_crystal_block'
        )
        .itemOutputs("8x gtceu:purified_nether_quartz_ore")
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.forge_hammer('diamond_geode_crystal_block')
        .itemInputs(
            '1x geodes:diamond_crystal_block'
        )
        .itemOutputs("8x gtceu:purified_diamond_ore")
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
    
    event.recipes.gtceu.forge_hammer('lapis_geode_crystal_block')
        .itemInputs(
            '1x geodes:lapis_crystal_block'
        )
        .itemOutputs("8x gtceu:purified_lapis_ore")
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
    
    event.recipes.gtceu.forge_hammer('gypsum_geode_crystal_block')
        .itemInputs(
            '1x geodes:gypsum_crystal_block'
        )
        .itemOutputs("8x gtceu:purified_gypsum_ore")
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.forge_hammer('pyrite_geode_crystal_block')
        .itemInputs(
            '1x geodes:pyrite'
        )
        .itemOutputs("8x gtceu:purified_pyrite_ore")
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
})