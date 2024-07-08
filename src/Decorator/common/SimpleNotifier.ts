import { Notifier } from "../abstractions/Notifier";

export class SimpleNotifier implements Notifier{

    public send(aMessage:string): string{
        return `Sendidng simple notifier: ${aMessage}\n`
    }

}