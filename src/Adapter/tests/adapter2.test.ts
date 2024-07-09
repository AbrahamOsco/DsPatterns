import { OldAPIAdapter } from "../abstractions/OldAPIAdapter";
import { OldAPI } from "../common/OldAPI";


test('test we should the correct response using a OldAPI', async () => {
    const oldApi = new OldAPI();
    const oldApiAdapater = new OldAPIAdapter(oldApi);
    const message = 'hello world'
    const response = oldApiAdapater.newRequest(message)
    expect(response.includes(message)).toBe(false);
});
