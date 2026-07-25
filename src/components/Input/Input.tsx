import type { InputProps } from "./Input.types";
export function Input({
  id,
  label,
  placeholder,
  type = "text",
  required = false,
  disabled = false,
  className = "",
}: InputProps) {

return (
  <div className=" flex flex-col gap-2 m-2">
    {label && (
      <label htmlFor={id} className="text-base">
        {label}
      </label>
    )}

    <input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
        className={`rounded-xl bg-white p-3 text-xl outline-1 outline-blue-600 hover:bg-gray-50 hover:text-black disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      />
    </div>
  );
}

export default Input;