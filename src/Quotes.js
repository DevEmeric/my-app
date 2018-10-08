import React from "react";
import Quote from "./Quote.js"
// src/Quotes.js
const quotes = [ //array JS
  {
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },//premier objet du tableau
  {
    quote: "Nothing you say can upset us. We're the MTV generation.",
    character: "Bart Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
  },//deuxieme objet du tableau
  {
    quote: "That's where I saw the leprechaun...He told me to burn things.",
    character: "Ralph Wiggum",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
  },//troisieme objet du tableau
  {
    quote:
      "Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone. She was right to do it.",
    character: "Principal Skinner",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460"
  }//quatrieme objet du tableau
];

const Quotes = () => (
  <div>
    {quotes.map((quote, index) => ( <Quote quote={quote.quote} image={quote.image} character={quote.character} key={index} alt="pics" />))} 
  </div>//array.map(x => x * 2)
);/*Le résultat de map est un tableau d'éléments <img> qui auront dans leur attribut src la valeur de la propriété image de chaque objet du tableau quotes*/
//{quotes.map((quote, index) => ( <img src={quote.image} key={index} alt="pics" />))},
//{quotes.map((quote, index) => ( <Quote {...quote} />))} SPREAD OPERATOR

/*const todoItems = todos.map((todo, index) => // key attributes for id`ing` objects in the new array
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
*/

export default Quotes;