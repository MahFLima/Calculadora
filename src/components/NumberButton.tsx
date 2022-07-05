import classNames from "classnames";
import { FunctionComponent } from "react";

export enum ButtonType{
  Number,
  Operation
}

type Props = React.HTMLProps<HTMLButtonElement> &{
  buttonType: ButtonType
  label: string;
  style: string;
}

export const NumberButton: FunctionComponent<Props> = ({buttonType = ButtonType.Operation, label, style, onClick, children}) => {
  return (
    <button onClick={onClick} className={classNames('p-4 text-2xl text-center',style)}>
      {children}
    </button>
  );
}
