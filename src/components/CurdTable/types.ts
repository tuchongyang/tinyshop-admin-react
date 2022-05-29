import type { SortOrder } from "antd/lib/table/interface"
export interface TableProps<T, U> {
  columns: any[]
  request?: (
    params: U & {
      pageSize?: number
      current?: number
      keyword?: string
    }
  ) => Promise<Partial<RequestData<T>>>
}
export type RequestData<T> = {
  data: T[] | undefined
  success?: boolean
  total?: number
} & Record<string, any>
export type PageInfo = {
  pageSize: number
  total: number
  current: number
}
