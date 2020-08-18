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
            <label>
              <input
                onChange={props.onChange}
                type="checkbox"
                id="isRed"
                name="color"
                value="Red"
              />
              Red
            </label>
          </li>
          <li>
            <label>
              <input
                onChange={props.onChange}
                type="checkbox"
                id="isBlack"
                name="color"
                value="Black"
              />
              Black
            </label>
          </li>
          <li>
            <label>
              <input
                onChange={props.onChange}
                type="checkbox"
                id="isBlue"
                name="color"
                value="Blue"
              />
              Blue
            </label>
          </li>
          <li>
            <label>
              <input
                onChange={props.onChange}
                type="checkbox"
                id="isWhite"
                name="color"
                value="White"
              />
              White
            </label>
          </li>
          <li>
            <label>
              <input
                onChange={props.onChange}
                type="checkbox"
                id="isGreen"
                name="color"
                value="Green"
              />
              Green
            </label>
          </li>
        </ul>
        <ul className="ks-cboxtags">
          <li>
            <label>
              <input
                onChange={props.onChange}
                type="checkbox"
                id="isCreature"
                name="type"
                value="Creature"
              />
              Creatures
            </label>
          </li>
          <li>
            <label>
              <input
                onChange={props.onChange}
                type="checkbox"
                id="isPlaneswalker"
                name="type"
                value="Planeswalker"
              />
              Planeswalkers
            </label>
          </li>
          <li>
            <label>
              <input
                onChange={props.onChange}
                type="checkbox"
                id="isArtifact"
                name="type"
                value="Artifact"
              />
              Artifacts
            </label>
          </li>
          <li>
            <label>
              <input
                onChange={props.onChange}
                type="checkbox"
                id="isEnchantment"
                name="type"
                value="Enchantment"
              />
              Enchantments
            </label>
          </li>
          <li>
            <label>
              <input
                onChange={props.onChange}
                type="checkbox"
                id="isSorcery"
                name="type"
                value="Sorcery"
              />
              Sorcery
            </label>
          </li>
          <li>
            <label>
              <input
                onChange={props.onChange}
                type="checkbox"
                id="isInstant"
                name="type"
                value="Instant"
              />
              Instants
            </label>
          </li>
          <li>
            <label>
              <input
                onChange={props.onChange}
                type="checkbox"
                id="isLand"
                name="type"
                value="Land"
              />
              Lands
            </label>
          </li>
          {/* </fieldset>
          </form> */}
        </ul>
      </div>
    </section>
  );
}
