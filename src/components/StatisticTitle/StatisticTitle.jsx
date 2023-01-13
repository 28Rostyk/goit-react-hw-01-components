import css from '../StatisticTitle/StatisticTitle.module.css';
import PropTypes from 'prop-types';

export const StatisticTitle = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};

StatisticTitle.propTypes = {
  title: PropTypes.string,
};
