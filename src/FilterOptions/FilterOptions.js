import React from 'react';

export default function FilterOptions(props) {
  return (
    <section className="options">
      <form onChange>
        <fieldset>
          <legend>Color</legend>
          <input type="checkbox" id="red" name="color" value="r" />
          <label htmlFor="red">R</label>
          <input type="checkbox" id="black" name="color" value="b" />
          <label htmlFor="Black">B</label>
          <input type="checkbox" id="blue" name="color" value="u" />
          <label htmlFor="blue">U</label>
          <input type="checkbox" id="white" name="color" value="w" />
          <label htmlFor="white">W</label>
          <input type="checkbox" id="green" name="color" value="g" />
          <label htmlFor="green">G</label>
        </fieldset>
        <fieldset>
          <legend>Test Card Type</legend>
          <input type="checkbox" id="creature" name="type" value="creature" />
          <label htmlFor="creature">Creatures</label>
          <input
            type="checkbox"
            id="planeswalker"
            name="type"
            value="planeswalker"
          />
          <label htmlFor="planeswalker">Planeswalkers</label>
          <br />
          <input type="checkbox" id="artifact" name="type" value="artifact" />
          <label htmlFor="Artifact">Artifacts</label>
          <input
            type="checkbox"
            id="enchantment"
            name="type"
            value="enchantment"
          />
          <label htmlFor="enchantment">Enchantments</label>
          <br />
          <input type="checkbox" id="sorcery" name="type" value="sorcery" />
          <label htmlFor="sorcery">Sorcery</label>
          <input type="checkbox" id="instant" name="type" value="instant" />
          <label htmlFor="instant">Instants</label>
          <input type="checkbox" id="land" name="type" value="land" />
          <label htmlFor="land">Lands</label>
        </fieldset>
      </form>
    </section>
  );
}
