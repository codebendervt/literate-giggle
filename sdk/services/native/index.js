//
// let keyPair = window.crypto.subtle.generateKey(
//     {
//         name: "RSA-OAEP",
//         modulusLength: 4096,
//         publicExponent: new Uint8Array([1, 0, 1]),
//         hash: "SHA-256"
//     },
//     true,
//     ["encrypt", "decrypt"]
// );
//
// let _key;

export const getUriParams = ({uri= window.location,query}) => {

    let url = new URL(uri)
    let searchParams = new URLSearchParams(url.search);
    return searchParams.get(query)
}

const getLocalStorage = (key) => {

    return localStorage.getItem(key)
}

const uid = () => {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substr(2)

    return crypto.randomUUID();

}


const encrypt = (salt, text) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);

    return text
        .split("")
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join("");
};

const decrypt = (salt, encoded) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded
        .match(/.{1,2}/g)
        .map((hex) => parseInt(hex, 16))
        .map(applySaltToChar)
        .map((charCode) => String.fromCharCode(charCode))
        .join("");
};

//https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto
// const encrypt = async (key, msg) => {
//     const _keyPair = await keyPair
//     _key = _keyPair
//     console.log(JSON.stringify(_keyPair.publicKey),'key')
//
//     let enc = new TextEncoder();
//     let encoded = enc.encode(msg);
//
//     let utf8decoder = new TextDecoder();
//
//
//     const encrypted =   await window.crypto.subtle.encrypt(
//         {
//             name: "RSA-OAEP"
//         },
//         _keyPair.publicKey,
//         stringToArrayBuffer(msg)
//     )
//
//     return encrypted;
// }
//
// const decrypt = async (encryptedUri) => {
//
//     const msg = await  crypto.subtle.decrypt({
//         name: 'RSA-OAEP',
//     }, _key.privateKey, encryptedUri);
//
//     return arrayBufferToString(msg)
// }
//
// const stringToArrayBuffer = (str) => {
//     const buff = new ArrayBuffer(str.length*2) // Because there are 2 bytes for each char.
//     const buffView = new Uint16Array(buff);
//     for(let i = 0, strLen = str.length; i < strLen; i++) {
//         buffView[i] = str.charCodeAt(i);
//     }
//     return buff;
// }
//
// const arrayBufferToString = (buff) => {
//     return String.fromCharCode.apply(null, new Uint16Array(buff) );
// }

export default {getUriParams,getLocalStorage, uid,encrypt,decrypt}