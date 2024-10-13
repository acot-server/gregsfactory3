// Rolling Machine
ServerEvents.recipes(event => {
    event.remove([{output: 'railcraft:manual_rolling_machine'}, {input: 'railcraft:manual_rolling_machine'}])
    event.remove([{output: 'railcraft:powered_rolling_machine'}, {input: 'railcraft:powered_rolling_machine'}])
})
BlockEvents.rightClicked('railcraft:manual_rolling_machine', event => {event.block.set('minecraft:stone')})
BlockEvents.rightClicked('railcraft:powered_rolling_machine', event => {event.block.set('minecraft:stone')})

BlockEvents.placed('railcraft:manual_rolling_machine', event => event.cancel())
BlockEvents.placed('railcraft:powered_rolling_machine', event => event.cancel())

// World Spike
ServerEvents.recipes(event => {
    event.remove([{output: 'railcraft:world_spike'}, {input: 'railcraft:world_spike'}])
    event.remove([{output: 'railcraft:world_spike_minecart'}, {input: 'railcraft:world_spike_minecart'}])
    event.remove([{output: 'railcraft:personal_world_spike'}, {input: 'railcraft:personal_world_spike'}])
})
BlockEvents.rightClicked('railcraft:world_spike', event => {event.block.set('minecraft:stone')})
BlockEvents.rightClicked('railcraft:personal_world_spike', event => {event.block.set('minecraft:stone')})

BlockEvents.placed('railcraft:world_spike', event => event.cancel())
BlockEvents.placed('railcraft:personal_world_spike', event => event.cancel())
ItemEvents.entityInteracted(event => {
    if(event.target.type == 'railcraft:world_spike_minecart'){
        event.getTarget().kill()
    }
})
// Steam Oven
ServerEvents.recipes(event => {
    event.remove([{output: 'railcraft:steam_oven'}, {input: 'railcraft:steam_oven'}])
})
BlockEvents.rightClicked('railcraft:steam_oven', event => {event.block.set('minecraft:stone')})
BlockEvents.placed('railcraft:steam_oven', event => event.cancel())
