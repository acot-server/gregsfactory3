ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('me_controller')
        .itemInputs(
            '4x #gtceu:circuits/mv',
            '#gtceu:batteries/mv',
            "2x gtceu:ram_chip",
            "gtceu:mv_machine_hull"
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 144)
        )
        .itemOutputs("ae2:controller")
        .duration(1200)
        .EUt(GTValues.VA[GTValues.MV])

        event.recipes.gtceu.assembler('me_chest')
        .itemInputs(
            '2x #gtceu:circuits/lv',
            'gtceu:steel_crate',
            "gtceu:lv_machine_hull"
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 144)
        )
        .itemOutputs("ae2:chest")
        .duration(1200)
        .EUt(GTValues.VA[GTValues.LV])

        event.recipes.gtceu.assembler('me_interface')
        .itemInputs(
            '2x gtceu:lv_conveyor_module',
            'gtceu:lv_buffer',
            'gtceu:lv_emitter',
            'gtceu:lv_sensor'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 144)
        )
        .itemOutputs("ae2:interface")
        .duration(1200)
        .EUt(GTValues.VA[GTValues.LV])

        event.recipes.gtceu.assembler('me_cell_workbench')
        .itemInputs(
            'minecraft:crafting_table',
            '#gtceu:circuits/lv'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 144)
        )
        .itemOutputs("ae2:cell_workbench")
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

        event.recipes.gtceu.assembler('me_energy_acceptor')
        .itemInputs(
            '#gtceu:batteries/lv',
            'gtceu:lv_energy_input_hatch',
            '4x #gtceu:circuits/lv',
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 144)
        )
        .itemOutputs('ae2:energy_acceptor')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.LV])

        event.recipes.gtceu.assembler('me_drive')
        .itemInputs(
            '16x gtceu:ram_chip',
            'gtceu:mv_input_bus',
            '64x gtceu:fine_red_alloy_wire',
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 144)
        )
        .itemOutputs('ae2:drive')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.MV])

        event.recipes.gtceu.assembler('me_io_port')
        .itemInputs(
            '64x gtceu:ram_chip',
            'gtceu:hv_input_bus',
            '16x gtceu:red_alloy_quadruple_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 144)
        )
        .itemOutputs('ae2:io_port')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.HV])

        event.recipes.gtceu.assembler('me_io_port')
        .itemInputs(
            '64x gtceu:ram_chip',
            'gtceu:hv_input_bus',
            '16x gtceu:red_alloy_quadruple_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 144)
        )
        .itemOutputs('ae2:io_port')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.HV])
})