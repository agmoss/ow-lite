import { func } from '../symbols'

const predicates = {
  empty: (value: string) => (value === ''),
  nonEmpty: (value: string) => (value !== ''),

  [func]: {
    is: (fn: any) => fn,
    eq: (v: any) => (value: any) => (value === v),
    length: (v: any) => (value: string | any[]) => (value.length === v),
    minLength: (v: number) => (value: string | any[]) => (value.length >= v),
    maxLength: (v: number) => (value: string | any[]) => (value.length <= v),
    matches: (v: { test: (arg0: any) => any }) => (value: any) => v.test(value),
    startsWith: (v: any) => (value: string) => value.startsWith(v),
    endsWith: (v: any) => (value: string) => value.endsWith(v)
  }
}

const validator = (value: any) => (typeof value === 'string')

export default {
  predicates,
  validator
}
