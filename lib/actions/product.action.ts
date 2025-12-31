'use server'

import { prisma } from '@/db/prisma'
import { prismaToJson } from "../utils"
import { LATEST_PRODUCTS_LIMIT } from "../constants"

export async function getLatestProducts() {
  const products = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  })

  return prismaToJson(products)
}

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug },
  })
}
