export const Input = ({
  text,
  type,
  placeholder,
  onChangeHandler,
  otherClasses,
  required,
}) => {
  return (
    <input
      type={type}
      className={`border rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary ${otherClasses}`}
      placeholder={placeholder}
      value={text}
      onChange={onChangeHandler}
      required={required}
    />
  );
};
