import { ReactNode } from 'react'

export const Section = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <section className={`py-14 md:py-20 ${className}`}>
    <div className="wrap">{children}</div>
  </section>
)
