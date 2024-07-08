import { WindowsButton } from "../../common/WindosButton";
import { WindowsPanel } from "../../common/WindowsPanel";
import { Button } from "../Button/Button";
import { Panel } from "../Panel/Panel";
import { ControlFactory } from "./ControlFactory";

export class WindowsControlFactory implements ControlFactory{
    
    public createButton() : Button {
        return new WindowsButton()
    }
    
    public createPanel() : Panel{
        return new WindowsPanel()
    }
}
