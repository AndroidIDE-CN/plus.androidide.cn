import { TEMPLATE } from '../config.ts';

const allElement = (attribute: string) => {
  const allElements = document.getElementsByTagName("*");
  const elementsWithAttribute = [];

  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].hasAttribute(attribute)) {
      elementsWithAttribute.push(allElements[i]);
    }
  }
  return elementsWithAttribute;
}

console.log('Load locale')
const elementsWithCustomAttr = allElement('template')
elementsWithCustomAttr.forEach(element => {
  console.log(element)
  // @ts-ignore
  element.innerHTML = TEMPLATE[element.getAttribute('template')]
});