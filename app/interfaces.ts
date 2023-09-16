export interface NavLink {
  label: string
  path: string
  divider?: boolean
}

export interface Tab {
  title: string
  body: React.ReactNode
}

export interface MenuMeal {
  name: string
  description: string
  image: any
}

export interface MenuSection {
  title: string
  meals: MenuMeal[]
}

export interface InstagramPost {
  image: any
  alt: string
  description: string
}

// ABOUT

export interface TimelineEra {
  title: string
  description: string
  image: any
}

export interface TeamMember {
  name: string
  image: any
  description: string
}

export interface PhilosophyEntry {
  title: string
  description: string
  path: string
}
