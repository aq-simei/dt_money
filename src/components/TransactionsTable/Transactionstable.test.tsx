import {TransactionsTable} from '.';
import {render, screen} from '../../utils/test-utils';

describe ('TransactionsTable', () => {
    it ('Renders a table', () => {
        render(<TransactionsTable />);
        const table = screen.getByRole('table');
        expect(table).toBeInTheDocument();
    });
})
