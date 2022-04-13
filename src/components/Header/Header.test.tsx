import { Header } from '.';
import { render, screen } from '../../utils/test-utils';

describe ('Header', () => {
    it ('Renders a logo ', () => {
        render(<Header onOpenNewTransactionModal={function (): void {}}/> );
        const logoAltText = screen.getByAltText('my money')
        expect(logoAltText).toBeInTheDocument();
    });
    it ('Renders a New Transaction Button', () => {
        render(<Header onOpenNewTransactionModal={function (): void {}}/> );
        const newTransactionButton = screen.getByText('New Transaction');
        expect(newTransactionButton).toBeInTheDocument();
    })
    });
