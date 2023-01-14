import css from './StatisticItem.module.css';
import PropTypes from 'prop-types';
import { getRandomHexColor } from '../../utils/randomColor';

export const StatisticItem = ({ label, percentage }) => (
  <li
    style={{
      backgroundColor: getRandomHexColor(),
    }}
    className={css.stats_item}
  >
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
  </li>
);

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
