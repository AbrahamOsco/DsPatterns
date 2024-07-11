import { Observable } from "../Observable/Observable";

export interface Observer{
    notify(observable: Observable): void;
}
