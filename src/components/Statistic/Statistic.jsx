import css from '../Statistic/Statistic.module.css';
import PropTypes from 'prop-types';
import { StatisticList } from 'components/StatisticList/StatisticList';
import { StatisticTitle } from 'components/StatisticTitle/StatisticTitle';

export const Statistics = ({ stats, title }) => (
  <section className={css.statistics}>
    {title && <StatisticTitle title={title}></StatisticTitle>}
    <StatisticList stats={stats}></StatisticList>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
};
