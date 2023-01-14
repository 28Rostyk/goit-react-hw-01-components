import { Statlist } from 'components/StatisticList/StatisticList';
import { StatTitle } from 'components/StatisticTitle/StatisticTitle';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => (
  <section className={css.statistics}>
    {title && <StatTitle title={title}></StatTitle>}
    <Statlist stats={stats}></Statlist>
  </section>
);

StatTitle.propTypes = {
  title: PropTypes.string,
};
