
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

export const fineArtQuery = defineQuery(`
  *[
    _type == "artwork" &&
    category in ["paintings", "drawings", "mixed-media", "other"] &&
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
    description,
    price,
    availability,
    featured
  }
`);


export const beadworkQuery = defineQuery(`
  *[
    _type == "artwork" &&
    category == "beadwork" &&
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
    description,
    price,
    availability,
    featured
  }
`);


export const signProjectsQuery = defineQuery(`
  *[
    _type == "signProject" &&
    showInPortfolio == true
  ] | order(year desc, sortOrder asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    projectType,
    year,
    location,
    client,
    description,
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
    featured,
    sortOrder
  }
`);


export const workCategoryImagesQuery = defineQuery(`
  {
    "murals": *[
      _type == "muralProject"
    ] | order(featured desc, year desc)[0] {
      "image": heroImage {
        ...,
        asset-> {
          _id,
          url
        }
      }
    },

    "signsWindows": *[
      _type == "signProject" &&
      showInPortfolio == true
    ] | order(featured desc, year desc)[0] {
      "image": heroImage {
        ...,
        asset-> {
          _id,
          url
        }
      }
    },

    "fineArt": *[
      _type == "artwork" &&
      category in ["paintings", "drawings", "mixed-media", "other"] &&
      showInPortfolio == true &&
      archived != true
    ] | order(featured desc, year desc)[0] {
      "image": mainImage {
        ...,
        asset-> {
          _id,
          url
        }
      }
    },

    "beadwork": *[
      _type == "artwork" &&
      category == "beadwork" &&
      showInPortfolio == true &&
      archived != true
    ] | order(featured desc, year desc)[0] {
      "image": mainImage {
        ...,
        asset-> {
          _id,
          url
        }
      }
    }
  }
`);


export const artworkBySlugQuery = defineQuery(`
  *[
    _type == "artwork" &&
    slug.current == $slug &&
    archived != true
  ][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    medium,
    artworkType,
    year,
    width,
    height,
    depth,
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
    availability
  }
`);

 
// ------------------------------------------
// COMMISSION SERVICES
// ------------------------------------------

export const commissionServicesQuery = defineQuery(`
  *[
    _type == "commissionService" &&
    published == true
  ] | order(displayOrder asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    shortDescription,
    description,
    coverImage {
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
    pricingItems[] {
      _key,
      title,
      priceType,
      amount,
      unit,
      description
    },
    pricingNotes,
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
    displayOrder,
    published
  }
`)

export const commissionServiceBySlugQuery = defineQuery(`
  *[
    _type == "commissionService" &&
    slug.current == $slug &&
    published == true
  ][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    shortDescription,
    description,
    coverImage {
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
    pricingItems[] {
      _key,
      title,
      priceType,
      amount,
      unit,
      description
    },
    pricingNotes,
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
    }
  }
`)
