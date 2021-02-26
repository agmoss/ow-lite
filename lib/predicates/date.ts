import { func } from '../symbols'
import { getObjectType } from '../utils'

const predicates = {
  [func]: {
    is: (fn: any) => fn,
    before: (v: { getTime: () => number }) => (value: { getTime: () => number }) => (value.getTime() < v.getTime()),
    after: (v: { getTime: () => number }) => (value: { getTime: () => number }) => (value.getTime() > v.getTime())
  }
}

const validator = (value: any) => (getObjectType(value) === 'Date')

export default {
  predicates,
  validator
}
