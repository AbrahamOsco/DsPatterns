import { Button } from "../Button/Button";

export interface  Panel{
    add(button: Button);
    draw(); 
}