export const getObjectType = (value: any) => toString.call(value).slice(8, -1)
