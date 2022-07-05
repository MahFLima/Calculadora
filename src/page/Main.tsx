import classNames from "classnames";
import {
  Backspace,
  Divide,
  Equals,
  Minus,
  Moon,
  Plus,
  Prohibit,
  Sun,
  X,
} from "phosphor-react";
import { useState } from "react";
import { ButtonType, NumberButton } from "../components/NumberButton";

import data from "../data/dat-value";

import Calc, { CalcInput, InputType, OperatorType } from "../modules/calc";

export function Main() {
  const [isActiveMode, setIsActiveMode] = useState<Boolean>(false);
  const [inputs, setInputs] = useState<Array<CalcInput>>([]);
  const state = Calc.getState(inputs);

  function handleClickMode() {
    isActiveMode ? setIsActiveMode(false) : setIsActiveMode(true);
  }

  const handleAllClear = () => setInputs([]);

  const handleBackspace = () => setInputs((prev) => prev.slice(0, -1));

  const appendInput = (input: CalcInput): void => {
    setInputs((prev) => [...prev, input]);
  };

  const handlerNumerical = (value: number) => () =>
    appendInput({ type: InputType.Numerical, value });

  const handleOperator = (operator: OperatorType) => () =>
    appendInput({ type: InputType.Operator, operator });

  return (
    <div className="flex flex-col w-full max-w-md bg-white md:mt-10">
      <header
        className={classNames("flex items-center justify-between p-4", {
          "bg-black text-white": isActiveMode,
        })}
      >
        <div className="flex gap-3 items-center">
          <span className="text-xl font-semibold">Calculadora</span>
        </div>
        <button onClick={handleClickMode}>
          {isActiveMode ? <Moon size={24} /> : <Sun size={24} />}
        </button>
      </header>
      <div
        className={classNames(
          "flex flex-col w-full items-end justify-end bg-white h-44 p-4",
          {
            "bg-blue-500": isActiveMode,
          }
        )}
      >
        <span
          className={classNames("text-3xl text-end bg-transparent", {
            "text-white": isActiveMode,
          })}
        >
          {state.displayValue}
        </span>
      </div>

      <div
        className={classNames("w-full p-4", {
          "bg-blue-600": isActiveMode,
          "bg-blue-100": !isActiveMode,
        })}
      >
        <div className="grid grid-cols-4 w-full gap-1">
          <div className="order-last"></div>
          {data.map((item) => {
            return (
              <NumberButton
                key={item.valueN}
                label={item.label}
                buttonType={ButtonType.Number}
                style={
                  isActiveMode ? `text-white ${item.style}` : `${item.style}`
                }
                onClick={handlerNumerical(item.valueN)}
              >
                {item.label}
              </NumberButton>
            );
          })}
          <div className="order-last"></div>

          <button
            className="btn order-3"
            onClick={handleOperator(OperatorType.Add)}
          >
            <Plus color="#00B0D7" size={32} />
          </button>

          <button
            className="btn order-first col-span-2 bg-red-500"
            onClick={handleAllClear}
          >
            <Prohibit color="white" size={32} />
          </button>
          <button className="btn order-first bg-blue-300" onClick={handleBackspace}>
            <Backspace color="white" size={32} />
          </button>
          <button
            className="btn order-last"
            onClick={handleOperator(OperatorType.Equals)}
          >
            <Equals color="#00B0D7" size={32} />
          </button>
          <button
            className="btn order-first"
            onClick={handleOperator(OperatorType.Divide)}
          >
            <Divide color="#00B0D7" size={32} />
          </button>
          <button
            className="btn order-1"
            onClick={handleOperator(OperatorType.Multiply)}
          >
            <X color="#00B0D7" size={32} />
          </button>

          <button
            className="btn order-2"
            onClick={handleOperator(OperatorType.Subtract)}
          >
            <Minus color="#00B0D7" size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}
