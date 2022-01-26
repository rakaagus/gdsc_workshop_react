import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Badge = ({ type, children }) => {
  const className = classNames(
    {
      'bg-slate-800': type === 'primary',
      'bg-slate-500': type === 'secondary',
    },
    'text-white px-1 py-[2px] text-sm font-semibold rounded'
  );
  return <span className={className}>{children}</span>;
};

Badge.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Badge;