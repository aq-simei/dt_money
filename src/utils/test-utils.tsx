import '@testing-library/jest-dom'
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import {
  TransactionsContext,
  TransactionsContextData,
  TransactionsContextDefaultValues,
} from "../hooks/useTransactions";

type CustomRenderProps = {
  TransactionsProviderProps ?: TransactionsContextData;
} & Omit<RenderOptions, "queries">;

const customRender = (
  ui: ReactElement,
  {
    TransactionsProviderProps = TransactionsContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) => {
  return render(
    <TransactionsContext.Provider value={{ ...TransactionsProviderProps }}>
      {ui}
    </TransactionsContext.Provider>,
    renderOptions
  );
};

export * from "@testing-library/react";
export { customRender as render };
