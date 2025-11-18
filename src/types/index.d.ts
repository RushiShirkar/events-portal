export interface FooterLink {
  title: string
  href: string
  className?: string
  icon: JSX.Element
}

export interface HeaderLink {
  title: string
  href: string
}

export interface Event {
  id?: string
  title?: string
  location?: string
  date?: string
  tags?: string[]
  slug?: string
  image?: string
  address?: string
  description?: string
}
