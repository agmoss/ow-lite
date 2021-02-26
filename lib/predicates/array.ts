import { func } from '../symbols'

const predicates = {
  empty: (value: string | any[]) => (value.length === 0),
  nonEmpty: (value: string | any[]) => (value.length > 0),

  [func]: {
    is: (fn: any) => fn,
    length: (v: any) => (value: string | any[]) => (value.length === v),
    minLength: (v: number) => (value: string | any[]) => (value.length >= v),
    maxLength: (v: number) => (value: string | any[]) => (value.length <= v)
  }
}

const validator = (value: any) => Array.isArray(value)

export default {
  predicates,
  validator
}
