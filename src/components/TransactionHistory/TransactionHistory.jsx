import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
import { TransactionItems } from 'components/TransactionItems/TransactionItems';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionItems
            id={id}
            type={type}
            amount={amount}
            currency={currency}
          ></TransactionItems>
        ))}
      </tbody>
    </table>
  );
};
