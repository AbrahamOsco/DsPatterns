export interface ServiceInterface{
    fetchData(url:string) : Promise<any>;
}
