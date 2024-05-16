import { v4 as uuid } from "uuid";

/* Select a random element from values array. */
function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

/* Format card data to be easier to use. */
function formatCard(data) {
  return { ...data.cards[0], id: uuid() };
}

/* Format pokemon data to be easier to use. */
function formatPokemon(data) {
  return {
    id: uuid(),
    name: data.name,
    front: data.sprites.front_default,
    back: data.sprites.back_default,
    stats: data.stats.map((stat) => ({
      value: stat.base_stat,
      name: stat.stat.name,
    })),
  };
}

export { choice, formatCard, formatPokemon };
