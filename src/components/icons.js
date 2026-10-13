import { Activity, Atom, Bot, Car, ChartColumn, Coffee, Container, HeartPulse, MousePointerClick, Plane, Radio, ShoppingCart, Trophy } from 'lucide-react'

const ICONS = { Activity, Atom, Bot, Car, ChartColumn, Coffee, Container, HeartPulse, MousePointerClick, Plane, Radio, ShoppingCart, Trophy }
export const getIcon = (name) => ICONS[name] ?? Atom
