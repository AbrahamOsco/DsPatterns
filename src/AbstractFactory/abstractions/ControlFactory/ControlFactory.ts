import { Button } from "../Button/Button"
import { Panel } from "../Panel/Panel"

export interface ControlFactory{
    createButton(): Button
    createPanel(): Panel
}

