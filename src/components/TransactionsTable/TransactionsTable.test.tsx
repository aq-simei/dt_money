import {TransactionsTable} from '.';
import {render, screen} from '../../utils/test-utils';

beforeEach(()=> {
    render(<TransactionsTable/>)
})
describe ('TransactionsTable', () => {
    it('Renders a table', () => {
        const table = screen.getByRole('table');
        expect(table).toBeInTheDocument();
    });
    describe('TransactionsTable Header', () => {
        it('Renders the table header correctly', () => {

        const tableHeader = screen.getByTestId('table-header')
        expect(tableHeader).toBeInTheDocument();

        const transactionTitleHeader = screen.getByTestId('transaction-title-header')
        expect(transactionTitleHeader).toBeInTheDocument();
 
        const transactionAmountHeader = screen.getByTestId
        ('transaction-amount-header')
        expect (transactionAmountHeader).toBeInTheDocument();

        const transactionCategoryHeader = screen.getByTestId
        ('transaction-category-header')
        expect (transactionCategoryHeader).toBeInTheDocument()
        
        const transactionDateHeader = screen.getByTestId('transaction-date-header')
        expect (transactionDateHeader).toBeInTheDocument();
    })})
    
})
