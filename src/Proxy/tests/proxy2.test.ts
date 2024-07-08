import { Proxy } from "../abstractions/Proxy";
import { RealService } from "../common/RealService";

jest.setTimeout(350000);
test('testing a fetch using directamente el objeto service ', async () => {
    const proxy = new Proxy(new RealService());
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    const result1 = await proxy.fetchData(url);
    const result2 = await proxy.fetchData(url);
    const result3 = await proxy.fetchData(url);
    expect(result3).toEqual({
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    });
    expect(proxy.timesCacheAccessed(url)).toBe(2);

});