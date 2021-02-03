export interface BlogPost {
  frontmatter: {
    text: string
    slug: number
    title: string
  }
  html: string
}

export interface ProjectData {
  name: string
  year: string
  description: string
  url: string
  blogs: BlogPostData[]
}

export interface ProjectJSON {
  name: string
  year: string
  description: string
  url: string
}

export interface BlogPostData {
  frontmatter: {
    project: string
    slug: number
    title: string
    tags: string[]
    date: string
  }
}