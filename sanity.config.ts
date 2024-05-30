import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {studioProjectId, studioTitle} from './environment'

export default defineConfig({
  name: 'default',
  title: studioTitle,

  projectId: studioProjectId,
  dataset: 'studioDataset',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
