// @ts-nocheck
import { GetListingsTypes } from 'types'

interface ObjectWithChildren {
  id: string
  parent_id: string | null
  name: string
  slug: string
  children?: ObjectWithChildren[]
  level?: number
}

export default function convertToNestedArray(
  arr: GetListingsTypes.ISearchResults['search_form']['popular_locations']
): ObjectWithChildren[] {
  const nestedArr: ObjectWithChildren[] = []
  const map = new Map<string, ObjectWithChildren>()

  // First pass: create a map of each object's ID to its corresponding object
  for (const obj of arr) {
    map.set(obj.id, obj)
  }

  // Second pass: create the nested array
  for (const obj of arr) {
    if (obj.parent_id === null) {
      // If the object has no parent, it is a top-level object
      nestedArr.push(obj)
    } else {
      // Otherwise, find the parent object and add the current object as its child
      const parent = map.get(obj.parent_id)
      if (!parent?.children) {
        parent.children = []
      }
      parent?.children.push(obj)
    }
  }

  // Third pass: add a "level" property to each object
  function addLevel(obj: ObjectWithChildren, level: number) {
    obj.level = level
    if (obj.children) {
      for (const child of obj.children) {
        addLevel(child, level + 1)
      }
    }
  }
  for (const obj of nestedArr) {
    addLevel(obj, 0)
  }

  return nestedArr
}
