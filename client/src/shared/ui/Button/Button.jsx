/* eslint-disable react/prop-types */
export default function Button ({
    color,
    text,
    onClick,
    type = 'button',
    children,
    icon,
    disabled
}) {
    return (
        <div onClick={onClick}>
        <button
          type={type}
          style={{ backgroundColor: `${color}` }}
          disabled={disabled}
        >
          {icon && <img src={icon} width={20} />}
          {text}
          {children}
        </button>
      </div>
    )
}