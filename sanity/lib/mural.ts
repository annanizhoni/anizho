import { defineQuery } from "next-sanity";

export const muralProjectsQuery = defineQuery(`
  *[
    _type == "muralProject"
  ] | order(year desc, sortOrder asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    category,
    year,
    location,
    client,
    status,
    description,
    concept,
    heroImage {
      ...,
      asset-> {
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      }
    },
    gallery[] {
      ...,
      asset-> {
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      }
    },
    collaborators,
    featured,
    sortOrder
  }
`);

export const muralBySlugQuery = defineQuery(`
  *[
    _type == "muralProject" &&
    slug.current == $slug
  ][0] {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    category,
    year,
    location,
    client,
    status,
    description,
    concept,
    heroImage {
      ...,
      asset-> {
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      }
    },
    gallery[] {
      ...,
      asset-> {
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      }
    },
    collaborators
  }
`);