// adaptee
export class OldAPI{

    public oldRequest(message:string, version: number) : string{
        return `Send request ${message} with version ${version}`
    }

}