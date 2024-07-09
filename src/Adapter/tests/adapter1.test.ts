import { OldAPI } from "../common/OldAPI";

test('test we should the correct response using a OldAPI', async () => {
    const oldApi = new OldAPI();
    const message = 'hello world'
    const version = 1.1
    const response = `Send request ${message} with version ${version}`
    expect(response.includes(message)).toBe(true);
    expect(oldApi.oldRequest(message, version)).toEqual(response);
});


