function customRender(reactElement, Container) {

    /*
    const domElemnt = document.createElement(reactElement.type)
    domElemnt.innerHTML = reactElement.children

    //Problem will be created here, What if more than one or two attribute is used so i can't me manual.

    domElemnt.setAttribute('href', reactElement.props.href)
    domElemnt.setAttribute('target', reactElement.props.target)

    Container.appendChild(domElemnt )
    */

    const domElemnt = document.createElement(reactElement.type)
    domElemnt.innerHTML = reactElement.children

   for (const prop in reactElement.props) {
        if(prop == 'children') continue;
        domElemnt.setAttribute(prop, reactElement.props[prop])
    }

    Container.appendChild(domElemnt )

}


const reactElement = {
    type: "a",
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click here to visit Google'
}


const elementSelect = document.querySelector('#root')

customRender(reactElement, elementSelect)

