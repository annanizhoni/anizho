
import type { SanityImage } from './artwork'

export interface CommissionPricingItem {
  _key?: string
  title: string
  priceType?: 'fixed' | 'starting-at' | 'hourly' | 'per-square-foot' | 'custom-quote'
  amount?: number
  unit?: string
  description?: string
}

export interface CommissionService {
  _id: string
  title: string
  slug: string
  category: 'fine-art' | 'murals' | 'beadwork' | 'signs-windows'
  shortDescription?: string
  description?: unknown[]
  coverImage?: SanityImage
  pricingItems?: CommissionPricingItem[]
  pricingNotes?: string
  gallery?: SanityImage[]
  displayOrder?: number
  published?: boolean
}
