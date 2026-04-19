import { getAllEntries, getEntryBySlug } from '@/lib/life'
import { notFound } from 'next/navigation'
import LifeEntryMDX from '@/components/LifeEntryMDX'

export function generateStaticParams() {
  const entries = getAllEntries() as any[]
  return entries.map((entry: any) => ({ slug: entry.slug }))
}

export default function LifeEntryPage({ params }: { params: { slug: string } }) {
  const data = getEntryBySlug(params.slug) as any

  if (!data) {
    notFound()
  }

  return <LifeEntryMDX frontmatter={data.frontmatter} content={data.content} />
}
