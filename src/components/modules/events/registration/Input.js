export default function Input({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange,
  error,
  icon: Icon,
  className = "",
}) {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="w-4 h-4 text-gray-400" />
          </div>
        )}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`
            w-full py-2.5 border rounded-lg text-sm
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
            transition-all duration-200 bg-white placeholder-gray-400
            ${Icon ? "pl-9 pr-4" : "px-4"}
            ${error ? "border-red-400 bg-red-50" : "border-gray-300 hover:border-gray-400"}
          `}
        />
      </div>
      {error && (
        <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
          <span className="inline-block w-3 h-3 rounded-full bg-red-500 text-white text-center leading-3 font-bold text-[8px]">!</span>
          {error}
        </p>
      )}
    </div>
  );
}