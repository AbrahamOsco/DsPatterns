import { Notifier } from "./Notifier";

export class BaseNotifier implements Notifier{
    
    private notifier: Notifier;
    
    constructor(notifier: Notifier){
        this.notifier = notifier;
    }
    
    public send(aMessage: string): string {
        return this.notifier.send(aMessage);
    }
    



}

