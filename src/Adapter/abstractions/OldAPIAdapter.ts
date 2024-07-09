import { OldAPI } from "../common/OldAPI";
import { NewAPI } from "./NewAPI";
import * as crypto from "crypto-js";

export class OldAPIAdapter implements NewAPI{
    private oldApi: OldAPI;
    private SECRET_KEY ="SECRET";
    private VERSION_DEFAULT = 1;

    constructor(OldAPI: OldAPI){
        this.oldApi = OldAPI
    }

    public newRequest(message: string): string {
        const oldMessage = this.oldApi.oldRequest(message, this.VERSION_DEFAULT)
        return crypto.AES.encrypt(oldMessage, this.SECRET_KEY).toString();
    }

}