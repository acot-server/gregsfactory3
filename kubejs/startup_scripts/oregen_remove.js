WorldgenEvents.remove(event => {
    event.removeOres(props => {
      props.blocks = [
        // Railcraft
        "railcraft:lead_ore",
        "railcraft:nickel_ore",
        "railcraft:silver_ore",
        "railcraft:tin_ore",
        "railcraft:zinc_ore",
        "railcraft:sulfur_ore",
        "railcraft:deepslate_lead_ore",
        "railcraft:deepslate_nickel_ore",
        "railcraft:deepslate_silver_ore",
        "railcraft:deepslate_tin_ore",
        "railcraft:deepslate_zinc_ore",
        "railcraft:deepslate_sulfur_ore",
        // Create
        "create:zinc_ore",
        "create:deepslate_zinc_ore",
        // Galosphere
        "galosphere:silver_ore",
        "galosphere:deepslate_silver_ore"
      ]
    })
  });