export class RealService {

    public async fetchData(url:string) : Promise<any>{
        const response =  await fetch(url);
        return response.json();
    }
}


