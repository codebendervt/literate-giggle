import keys from './key.json'  assert { type: "json" };
    /*
    Store the calculated ciphertext here, so we can decrypt the message later.
    */
    // let ciphertext;
  
// "decrypt"
    const _import = async(keyData,type ="encrypt") => {
        const result = await  crypto.subtle.importKey(
            'jwk',
            keyData,
            {
                name: "RSA-OAEP",
                // Consider using a 4096-bit key for systems that require long-term security
                modulusLength: 2048,
                publicExponent: new Uint8Array([1, 0, 1]),
                hash: "SHA-256",
                },
            true,
            [type]
        );

        return result;
    }
    /*
    Get the encoded message, encrypt it and display a representation
    of the ciphertext in the "Ciphertext" element.
    */
    async function encryptMessage(message = 'hello world') {

        let enc = new TextEncoder();
        let encoded = enc.encode(message); 
        let key = await _import(keys.public)

        const hash = await crypto.subtle.digest('SHA-256', encoded);
        console.log(hash,'digested')

      let ciphertext = await window.crypto.subtle.encrypt(
        {
          name: "RSA-OAEP"
        },
        key,
        encoded
      );
  

    // let buffer = new Uint8Array(ciphertext, 0, 5);

    //   let res = {data:c}
    //   var dec = new TextDecoder("utf-8");
    //   console.log(ciphertext.toString(),'encrypted text') 
    //   console.log(dec.decode(buffer),'encrypted text') 
    //   console.log(`${buffer}...[${ciphertext.byteLength} bytes total]`);

      return ciphertext
    }
  
    /*
    Fetch the ciphertext and decrypt it.
    Write the decrypted message into the "Decrypted" box.
    */
    async function decryptMessage(ciphertext) {

    let key = await _import(keys.private,"decrypt") 
      let decrypted = await window.crypto.subtle.decrypt(
        {
          name: "RSA-OAEP"
        },
        key,
        ciphertext
      );
  
      let dec = new TextDecoder();
    
      return dec.decode(decrypted)
    }

    const get_encrypt_keys = async () => {
        const keyPair =  await window.crypto.subtle.generateKey(
            {
            name: "RSA-OAEP",
            // Consider using a 4096-bit key for systems that require long-term security
            modulusLength: 2048,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: "SHA-256",
            },
            true,
            ["encrypt", "decrypt"]
          )

          const _publicKey = await crypto.subtle.exportKey('jwk', keyPair.publicKey)

          const _privateKey = await crypto.subtle.exportKey('jwk', keyPair.privateKey)
          console.log(_publicKey, _privateKey)
    }

    export {get_encrypt_keys, encryptMessage,decryptMessage}
   