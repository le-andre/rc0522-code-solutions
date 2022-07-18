import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

// const element = (
//   <ul>
//     {
//     pokedex.map(pokemon => {
//       return <li key={pokemon.number}>{pokemon.name}</li>;
//     })
//     }
//       </ul>
// );

const pokeList = pokedex.map(pokemon => {
  return <li key={pokemon.number}>{pokemon.name}</li>;
});
const element = (
  <ul>
    {pokeList}
  </ul>
);
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
