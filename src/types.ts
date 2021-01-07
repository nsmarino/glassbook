export interface BlogPost {
  frontmatter: {
    project: string
    slug: number
    title: string
    tags: string[]
  }
  html: string
}

export interface ProjectData {
  name: string
  year: string
  description: string
  url: string
  blogs: BlogPost[]
}