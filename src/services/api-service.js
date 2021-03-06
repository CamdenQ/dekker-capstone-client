import config from '../config';

const ApiService = {
  getCards(page) {
    return fetch(`${config.API_ENDPOINT}/api/cards?page=${page}`).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getDecks() {
    return fetch(`${config.API_ENDPOINT}/api/decks`, {}).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getDeck(id) {
    return fetch(`${config.API_ENDPOINT}/api/decks/${id}`).then((res) =>
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

  updateDeck(deck) {
    return fetch(`${config.API_ENDPOINT}/api/decks/${deck.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(deck),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  deleteDeck(id) {
    return fetch(`${config.API_ENDPOINT}/api/decks/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) =>
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

export default ApiService;
