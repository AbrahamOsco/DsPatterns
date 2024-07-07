import { WindowsButton } from "../../common/WindosButton";
import { WindowsPanel } from "../../common/WindowsPanel";
import { ControlFactory } from "./ControlFactory";

export class WindowsControlFactory implements ControlFactory{
    
    public createButton() : WindowsButton {
        return new WindowsButton()
    }
    
    public createPanel() : WindowsPanel{
        return new WindowsPanel()
    }

}