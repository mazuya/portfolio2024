import axios from "axios";
type ResponseUnsplashService = {
    
}

type RequestUnsplashService = {

}

export async function UnsplashService(  ):Promise<ResponseUnsplashService[]> {
    try {
        
        const sites = await axios({
            method : "GET",
            url: "https://api.unsplash.com/photos/random?client_id=Kpp8iEfCY6UAetxlk46VqRlaLjDQyMPAhgAPYpDa6qQ",
           
            //headers : { Authorization: `Bearer ${process.env.NEXT_PUBLIC_NETLIFY_TOKEN}`}
        })
         return sites.data

    } catch (error:any) {
       console.log(error) 
       throw error.response.data
    }
}