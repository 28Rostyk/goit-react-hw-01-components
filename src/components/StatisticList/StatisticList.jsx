import css from './StatisticList.module.css';
import PropTypes from 'prop-types';
import { StatisticItem } from 'components/StatisticItem/StatisticItem';

export const StatisticList = ({ stats }) => {
  return (
    <ul className={css.list}>
      {stats.map(({ id, label, percentage }) => (
        <StatisticItem
          key={id}
          label={label}
          percentage={percentage}
        ></StatisticItem>
      ))}
    </ul>
  );
};

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
