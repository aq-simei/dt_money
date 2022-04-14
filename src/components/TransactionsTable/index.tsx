import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};

export function TransactionsTable() {
  const {transactions} = useTransactions();
  return (
    <Container>
      <table>
        <thead data-testid='table-header'>
          <tr>
            <th data-testid='transaction-title-header'>Título</th>
            <th data-testid='transaction-amount-header'>Valor</th>
            <th data-testid='transaction-category-header'>Categoria</th>
            <th data-testid='transaction-date-header'>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: Transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR',{
                style: 'currency',
                currency: 'BRL'}).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>

              <td>
                {new Intl.DateTimeFormat('pt-BR',).format(
                  new Date(transaction.createdAt))}
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
