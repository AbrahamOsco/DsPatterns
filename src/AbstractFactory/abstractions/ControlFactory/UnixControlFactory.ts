import { UnixButton } from "../../common/UnixButton";
import { UnixPanel } from "../../common/UnixPanel";
import { Button } from "../Button/Button";
import { Panel } from "../Panel/Panel";
import { ControlFactory } from "./ControlFactory";

export class UnixControlFactory implements ControlFactory{
    
    public createButton(): Button{
        return new UnixButton();
    }

    public createPanel(): Panel{
        return new UnixPanel();
    }
}

