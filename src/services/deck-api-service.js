import config from '../config';

const DeckApiService = {
  getDecks() {
    return fetch(`${config.API_ENDPOINT}/api/decks`, {}).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getDeck(id) {
    return fetch(`${config.API_ENDPOINT}/api/decks/:${id}`).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postDeck(deck) {
    return fetch(`${config.API_ENDPOINT}/api/decks`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(deck),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  removeUserDeck(user_id, id) {
    return fetch(`${config.API_ENDPOINT}/user-decks/${user_id}/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ user_id, id: id }),
    })
      .then((res) => {
        // console.log(res);
        return res;
      })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      );
  },

  getDeckBySearch(keyword, filter) {
    return fetch(
      `${config.API_ENDPOINT}/decks?keyword=${keyword}&filter=${filter}`,
      {}
    ).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default DeckApiService;
