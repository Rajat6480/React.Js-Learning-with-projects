const mainContainer = document.querySelector('#root')
const reactElement = {
    type : 'a',
    props:{
        href: 'http://google.com',
        target:'_blank'
    },
    children :"Click here to visit google" 
}

function  renderElement(reactElement,mainContainer){
    let element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children
    /*
    element.setAttribute('href'  , reactElement.props.href)
    element.setAttribute('target'  , reactElement.props.target)*/
    for (const prop in reactElement.props) {
        element.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(element)
}

renderElement(reactElement,mainContainer)