ServerEvents.recipes(event => {
    event.remove([{output: 'ae2:controller'}, {input: 'ae2:controller'}])
    event.remove({output: 'ae2:drive'})
    event.remove([{output: 'ae2:chest'}, {input: 'ae2:chest'}])
    event.remove({output: 'ae2:interface'})
    event.remove({output: 'ae2:io_port'})
    event.remove([{output: 'ae2:cell_workbench'}, {input: 'ae2:cell_workbench'}])
    event.remove([{output: 'ae2:energy_acceptor'}, {input: 'ae2:energy_acceptor'}])
    event.remove({output: 'ae2:energy_cell'})
    event.remove({output: 'ae2:dense_energy_cell'})
    event.remove({output: 'ae2:crafting_unit'})
    event.remove({output: 'ae2:crafting_accelerator'})
})