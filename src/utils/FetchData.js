export const fecthData = async ()=>{
    const  data = await(await fetch('https://intent-kit-16.hasura.app/api/rest/blogs',
    {         
        method:"GET",  
        headers:{
            'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
        }
    }
    )).json();
    return data;
}