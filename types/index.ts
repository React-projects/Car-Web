import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerstyles?: string;
  handelClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit"  

}
