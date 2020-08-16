import React from 'react';
import './FilterOptions.css';

export default function FilterOptions(props) {
  return (
    <section className="options">
      <div className="container">
        <ul className="ks-cboxtags">
          {/* <form>
            <fieldset>
              <legend>Color</legend> */}

          <li>
            <input
              onChange={props.onChange}
              type="checkbox"
              id="isRed"
              name="color"
              value="Red"
            />
            <label htmlFor="red">Red</label>
          </li>
          <li>
            <input
              onChange={props.onChange}
              type="checkbox"
              id="isBlack"
              name="color"
              value="Black"
            />
            <label htmlFor="Black">Black</label>
          </li>
          <li>
            <input
              onChange={props.onChange}
              type="checkbox"
              id="isBlue"
              name="color"
              value="Blue"
            />
            <label htmlFor="blue">Blue</label>
          </li>
          <li>
            <input
              onChange={props.onChange}
              type="checkbox"
              id="isWhite"
              name="color"
              value="White"
            />
            <label htmlFor="white">White</label>
          </li>
          <li>
            <input
              onChange={props.onChange}
              type="checkbox"
              id="isGreen"
              name="color"
              value="Green"
            />
            <label htmlFor="green">Green</label>
          </li>
        </ul>
        <ul className="ks-cboxtags">
          <li>
            <input
              onChange={props.onChange}
              type="checkbox"
              id="isCreature"
              name="type"
              value="Creature"
            />
            <label htmlFor="creature">Creatures</label>
          </li>
          <li>
            <input
              onChange={props.onChange}
              type="checkbox"
              id="isPlaneswalker"
              name="type"
              value="Planeswalker"
            />
            <label htmlFor="planeswalker">Planeswalkers</label>
          </li>
          <li>
            <input
              onChange={props.onChange}
              type="checkbox"
              id="isArtifact"
              name="type"
              value="Artifact"
            />
            <label htmlFor="Artifact">Artifacts</label>
          </li>
          <li>
            <input
              onChange={props.onChange}
              type="checkbox"
              id="isEnchantment"
              name="type"
              value="Enchantment"
            />
            <label htmlFor="enchantment">Enchantments</label>
          </li>
          <li>
            <input
              onChange={props.onChange}
              type="checkbox"
              id="isSorcery"
              name="type"
              value="Sorcery"
            />
            <label htmlFor="sorcery">Sorcery</label>
          </li>
          <li>
            <input
              onChange={props.onChange}
              type="checkbox"
              id="isInstant"
              name="type"
              value="Instant"
            />
            <label htmlFor="instant">Instants</label>
          </li>
          <li>
            <input
              onChange={props.onChange}
              type="checkbox"
              id="isLand"
              name="type"
              value="Land"
            />
            <label htmlFor="land">Lands</label>
          </li>
          {/* </fieldset>
          </form> */}
        </ul>
      </div>
    </section>
  );
}
