import { FooterLink, HeaderLink } from '@/types'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

export const headerLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Events',
    href: '/events',
  },
  {
    title: 'Exhibitors',
    href: '/exhibitors',
  },
]

export const footerLinks: FooterLink[] = [
  {
    title: 'Linkedin',
    href: 'https://linkedin.com',
    className: 'text-blue-500',
    icon: <Linkedin aria-hidden='true' />,
  },
  {
    title: 'Youtube',
    href: 'https://youtube.com',
    className: 'text-red-500',
    icon: <Youtube aria-hidden='true' />,
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com',
    className: 'text-pink-500',
    icon: <Instagram aria-hidden='true' />,
  },
  {
    title: 'Facebook',
    href: 'https://facebook.com',
    className: 'text-blue-500',
    icon: <Facebook aria-hidden='true' />,
  },
]
