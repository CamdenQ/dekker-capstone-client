import React from 'react';

export default function FilterOptions(props) {
  return (
    <section className="options">
      <form>
        <fieldset>
          <legend>Color</legend>

          <input
            onChange={props.onChange}
            type="checkbox"
            id="isRed"
            name="color"
            value="Red"
          />
          <label htmlFor="red">Red</label>
          <input
            onChange={props.onChange}
            type="checkbox"
            id="isBlack"
            name="color"
            value="Black"
          />
          <label htmlFor="Black">Black</label>
          <input
            onChange={props.onChange}
            type="checkbox"
            id="isBlue"
            name="color"
            value="Blue"
          />
          <label htmlFor="blue">Blue</label>
          <input
            onChange={props.onChange}
            type="checkbox"
            id="isWhite"
            name="color"
            value="White"
          />
          <label htmlFor="white">White</label>
          <input
            onChange={props.onChange}
            type="checkbox"
            id="isGreen"
            name="color"
            value="Green"
          />
          <label htmlFor="green">Green</label>
        </fieldset>
        <fieldset>
          <legend>Type</legend>
          <input
            onChange={props.onChange}
            type="checkbox"
            id="isCreature"
            name="type"
            value="Creature"
          />
          <label htmlFor="creature">Creatures</label>
          <input
            onChange={props.onChange}
            type="checkbox"
            id="isPlaneswalker"
            name="type"
            value="Planeswalker"
          />
          <label htmlFor="planeswalker">Planeswalkers</label>
          <input
            onChange={props.onChange}
            type="checkbox"
            id="artifact"
            name="type"
            value="artifact"
          />
          <label htmlFor="Artifact">Artifacts</label>
          <input
            onChange={props.onChange}
            type="checkbox"
            id="isEnchantment"
            name="type"
            value="Enchantment"
          />
          <label htmlFor="enchantment">Enchantments</label>
          <input
            onChange={props.onChange}
            type="checkbox"
            id="isSorcery"
            name="type"
            value="Sorcery"
          />
          <label htmlFor="sorcery">Sorcery</label>
          <input
            onChange={props.onChange}
            type="checkbox"
            id="isInstant"
            name="type"
            value="Instant"
          />
          <label htmlFor="instant">Instants</label>
          <input
            onChange={props.onChange}
            type="checkbox"
            id="isLand"
            name="type"
            value="Land"
          />
          <label htmlFor="land">Lands</label>
        </fieldset>
      </form>
    </section>
  );
}
