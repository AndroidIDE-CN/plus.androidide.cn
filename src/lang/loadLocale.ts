import getLanguageTemplate from './lang.ts';

const allElement = (attribute: string) => {
  const allElements = document.getElementsByTagName("*")
  const elementsWithAttribute = []

  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].hasAttribute(attribute)) {
      elementsWithAttribute.push(allElements[i])
    }
  }
  return elementsWithAttribute
}

export const loadTemplate = () => {
  console.log('Load locale')
  const elementsWithCustomAttr = allElement('template')
  elementsWithCustomAttr.forEach(element => {
    console.log(element)
    // @ts-ignore
    element.innerHTML = getLanguageTemplate()[element.getAttribute('template')]
  })
  console.log('Load locale done')
}

export default loadTemplate