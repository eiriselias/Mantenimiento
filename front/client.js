import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '0u5kjeku',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2025-01-30', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Needed for certain operations like updating content or accessing previewDrafts perspective
})

const builder = imageUrlBuilder(client)

export function urlFor (source){
  return builder.image(source)
}