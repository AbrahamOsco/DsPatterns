import { RealService } from "../common/RealService";

jest.setTimeout(350000);
test('testing a fetch using directamente el objeto service ', async () => {
    const service = new RealService();
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    const result = await service.fetchData(url)
    const result2 = await service.fetchData(url)
    const result3 = await service.fetchData(url)
    
    expect(result).toEqual({
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    });


});


