/** Colorful scattered dots used behind the "Our customers say" testimonial section. */
export const Confetti = () => {
  const dots: [string, string, number, string][] = [
    ['12%', '8%', 20, 'bg-leaf/40'], ['4%', '46%', 14, 'bg-orange/40'], ['10%', '78%', 12, 'bg-orange/30'],
    ['30%', '18%', 16, 'bg-brown/10 dark:bg-white/10'], ['26%', '46%', 40, 'bg-brown/10 dark:bg-white/10'], ['46%', '30%', 16, 'bg-brown/10 dark:bg-white/10'],
    ['58%', '10%', 12, 'bg-sky-300/50'], ['62%', '48%', 16, 'bg-brown/10 dark:bg-white/10'], ['86%', '20%', 10, 'bg-pink-300/50'], ['90%', '52%', 14, 'bg-purple-300/50'],
  ]
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map(([t, l, s, c], i) => <span key={i} className={`absolute rounded-full ${c}`} style={{ top: t, left: l, width: s, height: s }} />)}
    </div>
  )
}
