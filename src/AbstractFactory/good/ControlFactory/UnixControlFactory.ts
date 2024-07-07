import { UnixButton } from "../../common/UnixButton";
import { UnixPanel } from "../../common/UnixPanel";
import { ControlFactory } from "./ControlFactory";

export class UnixControlFactory implements ControlFactory{
    
    public createButton(): UnixButton{
        return new UnixButton();
    }

    public createPanel(): UnixPanel{
        return new UnixPanel();
    }
}

