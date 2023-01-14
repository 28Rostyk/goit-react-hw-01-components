import css from './TransactionItems.module.css';
import PropTypes from 'prop-types';

export const TransactionItems = ({ type, amount, currency }) => (
  <tr>
    <td>{type}</td>
    <td>{Number(amount)}</td>
    <td>{currency}</td>
  </tr>
);

TransactionItems.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
