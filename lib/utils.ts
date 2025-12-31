import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert Prisma object into JSON serializable object
export function prismaToJson<T>(data: T): T {
  return JSON.parse(JSON.stringify(data))
}

// Format number with decimal places
export function formatNumberWithDecimals(value: number, decimalPlaces: number = 2): string {
  const [int, decimal] = value.toString().split(".")
  return decimal ? `${int}.${decimal.padEnd(decimalPlaces, "0")}` : `${int}.${"0".repeat(decimalPlaces)}`
}

