export default function Section({ title, description, icon: Icon, children }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 md:px-8 md:py-5 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="flex items-center justify-center w-9 h-9 bg-gray-100 rounded-lg shrink-0">
              <Icon className="w-5 h-5 text-purple-600" />
            </div>
          )}
          <div>
            <h2 className="text-lg md:text-xl font-bold text-gray-900">{title}</h2>
            {description && (
              <p className="text-xs text-gray-500 mt-0.5">{description}</p>
            )}
          </div>
        </div>
      </div>
      <div className="px-6 py-5 md:px-8 md:py-6 space-y-4">{children}</div>
    </div>
  );
}