/** Round photo framed by soft concentric rings, as used across the Figma pages. */
export const Ringed = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => (
  <div className={`aspect-square rounded-full bg-[#F5EDE0] p-[7%] dark:bg-night2 ${className}`}>
    <img src={src} alt={alt} className="h-full w-full rounded-full object-cover" loading="lazy" />
  </div>
)
