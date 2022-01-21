// const jdenticon = require("jdenticon");
//
// // Custom identicon style
// // https://jdenticon.com/icon-designer.html?config=000000ff1168000064646464
// jdenticon.configure({
//     hues: [360],
//     lightness: {
//         color: [1.00, 1.00],
//         grayscale: [1.00, 1.00]
//     },
//     saturation: {
//         color: 0.00,
//         grayscale: 0.00
//     },
//     backColor: "#000"
// });
//
// //
// export default icon =  (hash) => jdenticon.toSvg(hash, 100);
import Identicon from 'identicon.js'

var options = {
    foreground: [255, 255, 255, 255],
    background: [0, 0, 0, 255],
    margin: 0.1,
    size: 64,
    format: 'svg'
};

const data = (hash) => new Identicon(hash, options).toString();
export default (hash) =>  <img className={'w-12 h-12'} src={`data:image/svg+xml;base64,${data(hash)}`}/>

// document.write('<img src="data:image/svg+xml;base64,' + data + '">');