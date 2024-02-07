type Step = {
  title: string
  description: string
  info?: string
  properties: {
    placement?: 'center' | 'auto'
    target: string
  }
}

export type Steps = Step[]
