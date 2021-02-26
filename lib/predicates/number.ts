import { func } from '../symbols'

const predicates = {
  positive: (value: number) => (value > 0),
  negative: (value: number) => (value < 0),
  nonNegative: (value: number) => (value >= 0),
  integer: (value: number) => (value === (value | 0)),

  [func]: {
    is: (fn: any) => fn,
    eq: (v: any) => (value: any) => (value === v),
    gt: (v: number) => (value: number) => (value > v),
    gte: (v: number) => (value: number) => (value >= v),
    lt: (v: number) => (value: number) => (value < v),
    lte: (v: number) => (value: number) => (value <= v)
  }
}

const validator = (value: any) => (typeof value === 'number')

export default {
  predicates,
  validator
}
