
import { defineQuery } from 'next-sanity'

// ------------------------------------------
// ARTWORK
// ------------------------------------------

export const artworkPortfolioQuery = defineQuery(`
  *[
    _type == "artwork" &&
    showInPortfolio == true &&
    archived != true
  ] | order(year desc, title asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    medium,
    artworkType,
    year,
    width,
    height,
    dimensionsUnit,
    mainImage {
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
    description,
    price,
    availability,
    featured
  }
`)

export const artworkShopQuery = defineQuery(`
  *[
    _type == "artwork" &&
    showInShop == true &&
    archived != true &&
    availability == "available"
  ] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    medium,
    artworkType,
    year,
    width,
    height,
    dimensionsUnit,
    mainImage {
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
    description,
    price,
    availability
  }
`)

// ------------------------------------------
// MURAL PROJECTS
// ------------------------------------------

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
`)

// ------------------------------------------
// PRESS & MEDIA
// ------------------------------------------

export const pressQuery = defineQuery(`
  *[
    _type == "press"
  ] | order(publicationDate desc) {
    _id,
    title,
    "slug": slug.current,
    publication,
    mediaType,
    publicationDate,
    url,
    description,
    image,
    featured,
    sortOrder
  }
`)