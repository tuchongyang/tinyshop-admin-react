export interface LoginOpt {
  name: string
  password: string
}

export interface MenuItem {
  children?: MenuItem[]
  icon?: string
  id: number
  name: string
  parentId?: number
  path: string
  sort: number
}
