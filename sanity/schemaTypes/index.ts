
import { type SchemaTypeDefinition } from 'sanity'
import { artwork } from './artwork'
import { muralProject } from './muralProject'
import { press } from './press'
import { signProject } from "./signProject";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artwork, muralProject, press, signProject],
}