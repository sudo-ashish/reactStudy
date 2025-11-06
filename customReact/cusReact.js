function createElement(root, reactElement) {
    // const newElement = document.createElement(reactElement.type)
    // newElement.innerHTML = reactElement.children
    // newElement.setAttribute('href', reactElement.props.href)
    // newElement.setAttribute('target', reactElement.props.target)

    const newElement = document.createElement(reactElement.type)
    newElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop == 'children') continue;
        newElement.setAttribute(prop, reactElement.props[prop])        
    }

    root.appendChild(newElement)
}

const reactElement = {
    "type": 'a',
    "props": {
        "href": 'https://youtube.com',
        "target": '_blank'
    },
    "children": 'Click to vist YouTube'
}

const root = document.getElementById('root')

createElement(root, reactElement)