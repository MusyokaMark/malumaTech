import { Globe, ShoppingCart, LayoutDashboard } from 'lucide-react'

export const projectTypes = [
  { id: 'site', icon: Globe, label: 'Business website', text: 'Present your business and get enquiries.', price: 15000 },
  { id: 'shop', icon: ShoppingCart, label: 'Online shop', text: 'Show products and take orders.', price: 35000 },
  { id: 'system', icon: LayoutDashboard, label: 'Custom system', text: 'Booking, inventory or management tools.', price: 60000 },
]

export const pageOptions = [
  { id: 'p1', label: '1 to 5 pages', price: 0 },
  { id: 'p2', label: '6 to 10 pages', price: 6000 },
  { id: 'p3', label: 'More than 10 pages', price: 15000 },
]

export const extras = [
  { id: 'logo', label: 'Logo design', price: 5000 },
  { id: 'seo', label: 'Search engine setup (SEO)', price: 8000 },
  { id: 'hosting', label: 'Domain and first-year hosting', price: 6000 },
  { id: 'training', label: 'Training on how to update the site', price: 3000 },
  { id: 'support', label: '3 months of support after launch', price: 7000 },
]