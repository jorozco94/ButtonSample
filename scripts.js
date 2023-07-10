// Add a button to the 3 section elements
// grab each section element
// add a button to the section element
import { buttonCreator } from "./buttonHelper.js";
const sections = document.querySelectorAll('section');

// const buttonCreator = (element) => {
//   const btn = document.createElement('button');
//   btn.textContent = 'Click Here'
//   element.appendChild(btn);
// }

sections.forEach((section) => buttonCreator(section, {color: 'blue', center: true}));