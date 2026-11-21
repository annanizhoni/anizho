
import { type SchemaTypeDefinition } from 'sanity'
import { artwork } from './artwork'
import { muralProject } from './muralProject'
import { press } from './press'
import { signProject } from './signProject'
import { commissionService } from './commissionService'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    artwork,
    muralProject,
    press,
    signProject,
    commissionService,
  ],
}
