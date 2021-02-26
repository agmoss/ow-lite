import { func } from '../symbols'

const predicates = {
  plain: (value: any) => {
    if (typeof value !== 'object') return false

    const proto = Object.getPrototypeOf(value)
    return proto === null || proto === Object.getPrototypeOf({})
  },
  empty: (value: {}) => Object.keys(value).length === 0,
  nonEmpty: (value: {}) => Object.keys(value).length > 0,

  [func]: {
    is: (fn: any) => fn,
    instanceOf: (v: any) => (value: any) => (value instanceof v)
  }
}

const validator = (value: any) => (typeof value === 'object')

export default {
  predicates,
  validator
}

