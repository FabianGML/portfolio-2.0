export interface TechBadgeInfo {
  link?: string
  github?: string
  altImage?: string
  badges: TechBadgeInterface[]
}

export interface TechBadgeInterface {
  label: string
  image: string
  color: string
}

export interface Experience {
  title: string
  company: string
  location: string
  date: string
  descriptions: string[]
}

export interface Project {
  projectTitle: string
  descriptions: string[]
}
