export default function Textarea({
  label,
  name,
  placeholder,
  required = false,
  value,
  onChange,
  error,
  maxWords = 400,
  rows = 4,
  className = "",
}) {
  const words = value?.trim() ? value.trim().split(/\s+/).length : 0;
  const isOverLimit = maxWords && words > maxWords;

  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`
          w-full px-4 py-2.5 border rounded-lg resize-none text-sm
          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
          transition-all duration-200 placeholder-gray-400
          ${error || isOverLimit ? "border-red-400 bg-red-50" : "border-gray-300 hover:border-gray-400"}
        `}
      />
      <div className="flex justify-between items-center">
        {(error || isOverLimit) ? (
          <p className="text-xs text-red-500 flex items-center gap-1">
            <span className="inline-block w-3 h-3 rounded-full bg-red-500 text-white text-center leading-3 font-bold text-[8px]">!</span>
            {isOverLimit ? `Exceeds ${maxWords} word limit` : error}
          </p>
        ) : <span />}
        {maxWords && (
          <span className={`text-xs font-medium ${isOverLimit ? "text-red-500" : words > maxWords * 0.85 ? "text-amber-500" : "text-gray-400"}`}>
            {words} / {maxWords} words
          </span>
        )}
      </div>
    </div>
  );
}