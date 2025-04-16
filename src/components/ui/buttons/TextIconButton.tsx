import React, { FC, ReactElement } from "react";

interface props {
  className?: string;
  children: string | ReactElement;
  onClick?: () => void;
}

const TextIconButton: FC<props> = ({ className, children, onClick, }) => {
  return (
    <button
      onClick={onClick}
      className={className}
    >
    {children}
    </button>
  );
};

export default TextIconButton;