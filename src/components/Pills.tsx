export const Pills = ({ items, value, onChange }: { items: string[]; value: string; onChange: (v: string) => void }) => (
  <div className="flex gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
    {items.map(i => (
      <button
        key={i}
        onClick={() => onChange(i)}
        className={`shrink-0 rounded-full px-7 py-3 text-sm capitalize transition ${value === i ? 'bg-brown text-white dark:bg-orange' : 'bg-field text-brown/70 dark:bg-night2 dark:text-cream/70'}`}
      >
        {i}
      </button>
    ))}
  </div>
)
