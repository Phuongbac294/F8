// su dung DOM
const dom = document.getElementById('dom');
const h1 = document.createElement('h1');
h1.id = 'heading';
h1.className = 'h1-dom';
h1.innerText = ' Hello guys'
h1.style.color = 'red';
Object.assign(h1.style, {
    color : 'blue',
    backgroundColor : '#333',
})

dom.appendChild(h1);


const ulDOM = document.createElement('ul');
const liDOM1 = document.createElement('li');
liDOM1.innerText = 'Javasrcipt';
const liDOM2 = document.createElement('li');
liDOM2.innerText = 'ReactJS';
liDOM2.id = 'li2-id';

ulDOM.appendChild(liDOM1)
ulDOM.appendChild(liDOM2)
dom.appendChild(ulDOM)


const divDOM = document.createElement('div');
    divDOM.className = 'post-item';
const h2DOM = document.createElement('h2');
    h2DOM.title = 'Học React tại F8';
    h2DOM.innerText = 'Học ReactJS';
const pDOM = document.createElement('p');
    pDOM.innerText = 'Học ReactJS từ cơ bản đến nâng cao';

divDOM.appendChild(h2DOM);
divDOM.appendChild(pDOM);
dom.appendChild(divDOM);



// React
//get root Element
const root = document.getElementById('root');

// react code
const h1re = React.createElement('h1', {
    title : 'Hello',
    className : 'Heading'
}, 'Hello Guys React!')


const ulre = React.createElement(
    'ul',
    null,
    React.createElement(
        'li',
        {id : 'li-id'},
        'Javasrcipt'
    ),
    React.createElement('li', null, 'ReactJS'),
)

const divre = React.createElement(
    'div',
    {className : 'post-item'},
    React.createElement(
        'h2',
        {title: 'Học React tại F8'},
        'Học ReactJS'
    ),
    React.createElement('p', null, 'Học ReactJS từ cơ bản đến nâng cao')
)
console.dir(h1re);
console.log(divre);

// React-DOM -> render UI
ReactDom.render(divre, root);