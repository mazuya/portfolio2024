import axios from "axios";

type ResponseGetListSiteService = {
    id: string;
    site_id: string;
    plan: string;
    ssl_plan: null | string;
    premium: boolean;
    claimed: boolean;
    name: string;
    custom_domain: null | string;
    branch_deploy_custom_domain: null | string;
    deploy_preview_custom_domain: null | string;
    domain_aliases: string[];
    password: null | string;
    password_hash: null | string;
    sso_login: boolean;
    sso_login_context: string;
    notification_email: null | string;
    url: string;
    admin_url: string;
    deploy_id: string;
    build_id: string;
    deploy_url: string;
    state: string;
    screenshot_url: string;
    created_at: string;
    updated_at: string;
    user_id: string;
    error_message: null | string;
    ssl: boolean;
    ssl_url: string;
    force_ssl: null | boolean;
    ssl_status: null | string;
    max_domain_aliases: number;
    prerender: null | any;
    prerender_headers: null | any;
    deploy_hook: string;
  
    managed_dns: boolean;
    jwt_secret: null | string;
    jwt_roles_path: string;
    account_id: string;
    account_slug: string;
    account_name: string;
    account_type: string;
 
    dns_zone_id: null | string;
}

type RequestGetListSiteService = {
    page : number;
    per_page? : number;
}

export async function GetListSiteService( input: RequestGetListSiteService ):Promise<ResponseGetListSiteService[]> {
    try {
        
        const sites = await axios({
            method : "GET",
            url: "https://api.netlify.com/api/v1/sites",
            params : {
                ...input,
            },
            headers : { Authorization: `Bearer ${process.env.NEXT_PUBLIC_NETLIFY_TOKEN}`}
        })
         return sites.data

    } catch (error:any) {
       console.log(error) 
       throw error.response.data
    }
}