ServerEvents.recipes(event => {
    event.remove([{output: 'create:mechanical_drill'}, {input: 'create:mechanical_drill'}])

    event.recipes.gtceu.assembler('mechanical_drill')
        .itemInputs(
            '3x #forge:double_plates/aluminium',
            '#forge:gears/steel',
            "gtceu:mv_machine_casing"
        )
        .itemOutputs(
            "create:mechanical_drill"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])
})