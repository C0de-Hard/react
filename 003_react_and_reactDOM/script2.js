// create any element directly w/o using the React.createElement by copyingobject from console and manually making it.
//lets make a form element


/* 
use :
{
    $$typeof : Symbol.for('react.element) //IMP 1
    "type": "h2", //IMP 2
    "key": null,
    "ref": null, //IMP 3 
    "props": { //IMP 4
        "children": [
            "this is subheading and is created using react and reactDOM"
        ]
    },
    "_owner": null,
    "_store": {}
}
*/
const form = {
    $$typeof : Symbol.for('react.element'),
    type : 'form',
    ref : null,
    props : {
        action : "https://www.youtube.com/results",
        children : [
            "INTRO TO FORM",
            // paste objects here like {...}
             // 1. Manual Object for <br>
            {
                $$typeof: Symbol.for('react.element'),
                type: 'br',
                ref: null,
                props: {},
                key: '1'
            },
            
            // 2. Manual Object for <label>
            {
                $$typeof: Symbol.for('react.element'),
                type: 'label',
                ref: null,
                props: {
                    htmlFor: "username_id", // Points to the input's ID
                    children: "enter your name first"
                },
                key: '2'
            },
            // 3. Manual Object for <input>
            {
                $$typeof: Symbol.for('react.element'),
                type: 'input',
                ref: null,
                props: {
                    name: "search_query",
                    id: "username_id" // Crucial for label connection
                },
                key: '3'
            },
            {
                $$typeof : Symbol.for('react.element'),
                type : 'button',
                key : 4,
                ref : null,
                props : {type : 'submit', children : 'Search YT'},

            }
            
        ]
    }
}
root2.render(form);

// if you call multiple renders, dont call it on same root-element coz it replaces the older dom/react-elements