import { getAllEntries, getAllYears, getEntriesByYear } from '@/lib/life'
import LifePageClient from '@/components/LifePageClient'

export default function LifePage() {
  const allEntries = getAllEntries() as any[]
  const years = getAllYears() as number[]

  const groupedByYear: Record<number, any[]> = {}
  years.forEach(year => {
    groupedByYear[year] = getEntriesByYear(year) as any[]
  })

  return <LifePageClient allEntries={allEntries} years={years} groupedByYear={groupedByYear} />
}
