import {
  Plug,
  Briefcase,
  Mouse,
  Keyboard,
  Usb,
  Fan,
  Headphones,
  HardDrive,
  Cable,
} from 'lucide-react'

export const categories = ['All', 'Power', 'Bags and Cases', 'Input Devices', 'Storage', 'Audio and Cooling']

export const products = [
  { id: 1, name: 'Laptop Charger (universal)', category: 'Power', price: 2500, icon: Plug, text: 'Fits most popular laptop brands.' },
  { id: 2, name: 'USB-C Charging Cable', category: 'Power', price: 600, icon: Cable, text: 'Durable braided cable for phones and laptops.' },
  { id: 3, name: 'Laptop Backpack', category: 'Bags and Cases', price: 2800, icon: Briefcase, text: 'Padded compartment, water resistant.' },
  { id: 4, name: 'Wireless Mouse', category: 'Input Devices', price: 900, icon: Mouse, text: 'Comfortable grip with long battery life.' },
  { id: 5, name: 'Wireless Keyboard', category: 'Input Devices', price: 1800, icon: Keyboard, text: 'Slim, quiet keys for home and office.' },
  { id: 6, name: 'Flash Drive 64GB', category: 'Storage', price: 900, icon: Usb, text: 'Fast USB 3.0 for files and backups.' },
  { id: 7, name: 'External Hard Drive 1TB', category: 'Storage', price: 8500, icon: HardDrive, text: 'Portable storage for photos, work and backups.' },
  { id: 8, name: 'Laptop Cooling Pad', category: 'Audio and Cooling', price: 2200, icon: Fan, text: 'Keeps your laptop cool during long use.' },
  { id: 9, name: 'Headphones with Mic', category: 'Audio and Cooling', price: 1500, icon: Headphones, text: 'Clear sound for calls, classes and music.' },
]