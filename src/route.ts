export type Route = 'home' | 'menu' | 'about' | 'order' | 'checkout' | 'reservation' | 'contact' | 'login' | 'signup'

export const go = (r: Route) => {
  window.location.hash = r
  window.scrollTo(0, 0)
}
