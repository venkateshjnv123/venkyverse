import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDir = path.join(process.cwd(), 'content', 'life')

export function getAllEntries() {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'))

  const entries = files.map(filename => {
    const slug = filename.replace(/\.mdx$/, '')
    const filePath = path.join(contentDir, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data: frontmatter, content } = matter(raw)
    const readTime = readingTime(content).text

    return {
      slug,
      readTime,
      ...frontmatter,
    }
  })

  return entries.sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year
    return b.month - a.month
  })
}

export function getEntryBySlug(slug) {
  const filePath = path.join(contentDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data: frontmatter, content } = matter(raw)
  const readTime = readingTime(content).text

  return { frontmatter: { ...frontmatter, readTime }, content }
}

export function getAllYears() {
  const entries = getAllEntries()
  const years = [...new Set(entries.map(e => e.year))]
  return years.sort((a, b) => b - a)
}

export function getEntriesByYear(year) {
  const entries = getAllEntries().filter(e => e.year === year)

  const grouped = {}
  entries.forEach(entry => {
    const m = entry.month
    if (!grouped[m]) {
      grouped[m] = { month: m, monthLabel: entry.monthLabel, entries: [] }
    }
    grouped[m].entries.push(entry)
  })

  return Object.values(grouped).sort((a, b) => b.month - a.month)
}
