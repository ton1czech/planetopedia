import { type SchemaTypeDefinition } from 'sanity'

import hotel from './schemas/hotel'
import blockContent from './schemas/blockContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hotel, blockContent],
}
