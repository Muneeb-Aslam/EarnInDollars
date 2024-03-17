
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({
  type,
  value,
  name,
  placeholder,
  disabled,
  className,
  onChange,
}:Props) => {
  return (
      <input
        className={` ${className}`}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
  )
}

export default Input