
const index = async () => {

    const out = Deno.run({
        cmd: ["dfx", "wallet", "-network","ic", "balance"],
        stderr: "piped",
        stdout: "piped"
    });
 
    const rawOutput = await out.output();
    const res = new TextDecoder().decode(rawOutput)

    return {status: 200, msg:'balance checked', body:{
        balance: res
    }}

}

 


export default {index}