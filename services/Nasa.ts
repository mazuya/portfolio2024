import axios from "axios";

type ResponseNasaService = {
    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

type RequestNasaService = {
    date?: string; 
    start_date?: string; 
    end_date?: string; 
    count?: number; 
    thumbs?: boolean; 
    api_key?: string;
}

export async function NasaService(input:RequestNasaService):Promise<ResponseNasaService[]> {
    try {
        
        const sites = await axios({
            method : "GET",
            url: "https://api.nasa.gov/planetary/apod?api_key=G49HX8PJrl3No1RJHa5H4DX5dgzogBAdUedUGeDv",
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