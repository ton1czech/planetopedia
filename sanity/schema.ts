import { type SchemaTypeDefinition } from 'sanity'

import hotel from './schemas/hotel'
import blockContent from './schemas/blockContent'
import restaurant from './schemas/restaurant'
import creators from './schemas/creators'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hotel, restaurant, creators, blockContent],
}
