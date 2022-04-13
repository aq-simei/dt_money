import render from '@testing-library/react'
import {TransactionsContext} from '../contexts/TransactionsContext'

const customRender = (ui, {TransactionsContextValue, ...options} = {}) => {
    return render(
        <TransactionsContext.Provider value={{...TransactionsContextValue}}>
            {ui}
        </TransactionsContext.Provider>,
        {...options}
    );
};

export * from '@testing-library/react'
export {customRender as render};
