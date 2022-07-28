export interface Project {
  name: string
  imgUrl: string
  techStack: string[];
  liveUrl?: string;
}

export interface ServicesDetailsInterface {
  title: string
  desc: string
  image: string
  approaches: string[]
  idx: number
}

export interface TechstackProps {
  isHome?: boolean
}
export interface ContactProps {
  FaqRequired?: boolean
  showHead?: boolean
}
