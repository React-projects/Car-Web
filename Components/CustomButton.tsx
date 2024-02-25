"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

function CustomButton({
  title,
  btnType,
  containerstyles,
  handelClick,
}: CustomButtonProps) {
  return (
    <div>
      <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerstyles}`}
        onClick={handelClick}
      >
    
        <span className={"flex-1"}>{title}</span>
      </button>
    </div>
  );
}

export default CustomButton;
