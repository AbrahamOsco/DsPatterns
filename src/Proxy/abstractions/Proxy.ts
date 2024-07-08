import { ServiceInterface } from "./ServiceInterface";

export class Proxy implements ServiceInterface {

    private cache: Map<string, {data:any, amount:number}>;
    private service: ServiceInterface;
    
    public constructor(service: ServiceInterface){
        this.service = service;
        this.cache = new Map<string, {data:any, amount:number}>();
    }
    
    public async fetchData(url: string): Promise<any> {
        if (this.cache.has(url)){
            this.cache.get(url).amount++;
            return Promise.resolve(this.cache.get(url).data);
        }
        const response = await this.service.fetchData(url)
        this.cache.set(url, {data: response, amount: 0});
        return response;
    }
    
    public timesCacheAccessed(url:string) : number{
        if(this.cache.has(url)){
            return this.cache.get(url).amount;
        }
        return 0;
    }

}