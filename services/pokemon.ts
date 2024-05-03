import axios from "axios";

type ResponsePokemonService = {

}

type RequestPokemonService = {

}

export async function PokemonService(input:RequestPokemonService):Promise<ResponsePokemonService[]> {
    try {
        
        const sites = await axios({
            method : "GET",
            url: "https://pokeapi.co/api/v2/item/master-ball",
            params : {
                ...input,
            },
            
            //headers : { Authorization: `Bearer ${process.env.NEXT_PUBLIC_NETLIFY_TOKEN}`}
        })
         return sites.data

    } catch (error:any) {
       console.log(error) 
       throw error.response.data
    }
}