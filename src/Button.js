import className from 'classnames';

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  onClick,
}) => {
  const classes = className('flex items-center px-3 py-1.5 border', {
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-gray-500 bg-gray-500 text-white': secondary,
    'border-green-500 bg-green-500 text-white-500': success,
    'border-yellow-500 bg-yellow-500 text-white': warning,
    'border-red-500 bg-red-500 text-white-500': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-500': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-500': outline && warning,
    'text-red-500': outline && danger,
  });

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
  }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger) +
      Number(!!outline) +
      Number(!!rounded);

    if (count > 1) {
      return new Error('Only one variation can be true');
    }
  },
};

export default Button;
