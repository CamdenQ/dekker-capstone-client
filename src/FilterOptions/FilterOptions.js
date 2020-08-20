import React from 'react';
import './FilterOptions.css';

export default function FilterOptions(props) {
  return (
    <section className="options">
      <div className="container">
        <ul className="filters">
          <li>
            <label>
              <input
                onChange={props.onChange}
                type="checkbox"
                id="isRed"
                name="color"
                value="Red"
                checked={props.filters.colors.isRed}
              />{' '}
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
                checked={props.filters.colors.isBlack}
              />{' '}
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
                checked={props.filters.colors.isBlue}
              />{' '}
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
                checked={props.filters.colors.isWhite}
              />{' '}
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
                checked={props.filters.colors.isGreen}
              />{' '}
              Green
            </label>
          </li>
        </ul>
        <ul className="filters">
          <li>
            <label>
              <input
                onChange={props.onChange}
                type="checkbox"
                id="isCreature"
                name="type"
                value="Creature"
                checked={props.filters.types.isCreature}
              />{' '}
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
                checked={props.filters.types.isPlaneswalker}
              />{' '}
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
                checked={props.filters.types.isArtifact}
              />{' '}
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
                checked={props.filters.types.isEnchantment}
              />{' '}
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
                checked={props.filters.types.isSorcery}
              />{' '}
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
                checked={props.filters.types.isInstant}
              />{' '}
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
                checked={props.filters.types.isLand}
              />{' '}
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
