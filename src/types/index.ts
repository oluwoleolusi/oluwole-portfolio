export interface ProjectScreenshots {
  primary: string
  secondary: string
  interaction: string
  mobile: string
}

export interface Project {
  slug: string
  title: string
  category: string
  description: string
  objective: string
  whatWasBuilt: string
  capabilities: string[]
  technologies: string[]
  preview: string
  screenshots: ProjectScreenshots
  demoPath: string
  githubUrl?: string
}

export interface ContactFormData {
  name: string
  email: string
  projectType: string
  message: string
}
