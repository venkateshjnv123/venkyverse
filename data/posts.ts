export type ContentBlock =
  | { type: 'text'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'code'; content: string; language?: string }
  | { type: 'list'; items: string[] }

export interface BlogPost {
  slug: string
  title: string
  summary: string
  date: string
  readTime: string
  tags: string[]
  coverImage?: string
  content: ContentBlock[]
}

const posts: BlogPost[] = [
  {
    slug: 'redis-sorted-sets-real-time-leaderboards',
    title: 'How Do Online Games Update Leaderboards So Fast? — Redis Sorted Sets',
    summary: 'A friend got this question in an interview. The answer: Redis Sorted Sets. I decided to build a real-time leaderboard for our fitness challenge at Cars24.',
    date: '2025-02-13',
    readTime: '5 min read',
    tags: ['Redis', 'System Design', 'Backend Engineering', 'Data Structures'],
    coverImage: '/blog/redis-sorted-1.png',
    content: [
      { type: 'text', content: '"How do online games update leaderboards so fast?" A friend got this question in an interview last week. It stayed in my head all weekend.' },
      { type: 'text', content: 'The short answer: Redis Sorted Sets (ZSETs).' },
      { type: 'heading', content: 'Where You See Them Everywhere' },
      { type: 'list', items: [
        'Competitive coding platforms (LeetCode contests)',
        'Gaming leaderboards',
        'Trending music charts or tweets',
        'Anywhere ranks need to update instantly',
      ]},
      { type: 'image', src: '/blog/redis-sorted-1.png', alt: 'Redis Sorted Sets Architecture', caption: 'How Redis Sorted Sets power real-time leaderboards' },
      { type: 'heading', content: 'Building Something Real' },
      { type: 'text', content: 'Instead of just reading about it, I decided to build something real. At Cars24, we have a 60-day fitness challenge. People log daily scores for a challenge of the day — pushups in 60 secs, squats in 60 seconds.' },
      { type: 'text', content: 'I thought — a real-time leaderboard would actually motivate people. So I built one.' },
      { type: 'list', items: [
        'Submit your score → Your rank updates instantly',
        'Top 10 refreshes in real-time',
        'Your position shows up in milliseconds',
      ]},
      { type: 'heading', content: 'What Powered It?' },
      { type: 'text', content: 'Redis Sorted Sets. No complex SQL queries. No extra caching layers. Just Redis commands like ZADD, ZRANGE, ZRANK.' },
      { type: 'image', src: '/blog/redis-sorted-2.png', alt: 'Real-time Leaderboard Demo', caption: 'The fitness challenge leaderboard in action' },
      { type: 'heading', content: 'How Simple It Was' },
      { type: 'text', content: 'I always thought leaderboards were complex. Turns out, choosing the right tool solves most of the problem.' },
      { type: 'heading', content: 'Extra Features' },
      { type: 'list', items: [
        'Personal score history',
        'Admin controls for daily challenges',
        'Score moderation (because people get creative)',
      ]},
      { type: 'text', content: 'What are other real-world use cases of Redis Sorted Sets you\'ve seen or built?' },
    ]
  },
  {
    slug: 'how-seat-blocking-actually-works',
    title: 'How Does Seat Blocking Actually Work? — Lessons from RedBus',
    summary: 'While booking on RedBus, I wondered how seat blocking works across platforms. Turns out — independent blocking per platform leads to chaos. Here\'s the real solution.',
    date: '2025-02-13',
    readTime: '3 min read',
    tags: ['System Design', 'Distributed Systems', 'Backend Engineering'],
    coverImage: '/blog/booking-system.png',
    content: [
      { type: 'text', content: 'While booking on RedBus, I wondered: "How does seat blocking actually work?"' },
      { type: 'text', content: 'My first thought: "Just block seats in Redis for 10 mins, easy!"' },
      { type: 'text', content: 'But here\'s the catch — if RedBus blocks a seat, it\'s still available on AbhiBus. Someone else books the same seat. Double booking. Chaos.' },
      { type: 'image', src: '/blog/booking-system.png', alt: 'Seat Booking System Architecture', caption: 'How seat blocking works across multiple platforms' },
      { type: 'heading', content: 'The Problem' },
      { type: 'text', content: 'Each platform blocking independently = race conditions + angry customers.' },
      { type: 'heading', content: 'The Actual Solution: One Source of Truth' },
      { type: 'text', content: 'The bus operator owns the seat inventory. When you click "Book":' },
      { type: 'list', items: [
        'Platform requests a lock from the operator',
        'Seat gets locked everywhere (5–10 min TTL)',
        'Payment succeeds? → Confirmed',
        'Payment fails? → Auto-released',
      ]},
      { type: 'text', content: 'Redis is still used — just behind the centralized system, not per platform.' },
      { type: 'heading', content: 'Takeaway' },
      { type: 'text', content: 'Simple concept. Hard to get right. Distributed systems are fun… How would you design this?' },
    ]
  },
  {
    slug: 'queues-hidden-backbone-scalable-systems',
    title: 'Queues: The Hidden Backbone of Every Scalable System',
    summary: 'I used to think Queues were just another DSA topic to clear interviews. Turns out they silently power every scalable system — from async processing to traffic surge protection.',
    date: '2025-02-13',
    readTime: '4 min read',
    tags: ['System Design', 'Queues', 'Backend Engineering', 'Software Architecture'],
    coverImage: '/blog/queues-backbone.jpeg',
    content: [
      { type: 'text', content: 'I used to think Queues were just another DSA topic to clear interviews. Turns out… they\'re the silent backbone of every scalable system.' },
      { type: 'image', src: '/blog/queues-backbone.jpeg', alt: 'Queues: The Hidden Backbone of Scalable Systems', caption: 'How queues power real-world engineering' },
      { type: 'heading', content: 'Async Processing' },
      { type: 'text', content: 'Sending 10,000 emails without blocking your API? Queue it.' },
      { type: 'text', content: 'Report generation, payment processing, third-party API calls — all handled in the background while your system stays responsive.' },
      { type: 'heading', content: 'Traffic Surge Protection' },
      { type: 'text', content: 'Flash sales. Ticket drops. Viral traffic.' },
      { type: 'text', content: 'Instead of crashing, requests enter a queue — processed fairly, no downtime. This is how BookMyShow survives millions of concurrent users for peak time bookings like the Coldplay concert.' },
      { type: 'heading', content: 'Decoupled Systems' },
      { type: 'text', content: 'Forget tight API coupling. Services communicate via queues, making systems more resilient, scalable, and far easier to debug.' },
      { type: 'heading', content: 'Reliable Background Jobs' },
      { type: 'text', content: 'Data migrations, scheduled reports, cleanup tasks. Queues handle retries, failures (Dead Letter Queue), and monitoring without chaos.' },
      { type: 'heading', content: 'Bottom Line' },
      { type: 'text', content: 'Queues aren\'t just a DSA topic. They power the internet\'s reliability.' },
    ]
  },
  {
    slug: 'system-design-interview-lessons',
    title: 'How to Ace System Design Interviews — A 4-Step Framework',
    summary: 'My first system design interview was a disaster. Here\'s the framework I wish I had — from understanding requirements to wrapping up with strong impressions.',
    date: '2025-02-12',
    readTime: '4 min read',
    tags: ['System Design', 'Interviews', 'Backend Engineering'],
    coverImage: '/blog/system-design-process.png',
    content: [
      { type: 'heading', content: 'My First System Design Interview (2 years ago)' },
      { type: 'text', content: 'Interviewer: "Design a URL shortener."' },
      { type: 'text', content: 'Me (0–1 YOE, overconfident): "Let\'s use microservices…"' },
      { type: 'text', content: 'Interviewer: "Okay…"' },
      { type: 'text', content: 'Me (already drawing boxes): "Redis for cache, Kafka for events—"' },
      { type: 'text', content: 'Interviewer: "Before that… what are the requirements?"' },
      { type: 'text', content: 'Silence. Brain.exe stopped working.' },
      { type: 'image', src: '/blog/system-design-process.png', alt: 'System Design Interview: 4-Step Process', caption: 'The 4-step framework for system design interviews' },
      { type: 'heading', content: '1. Slow Down & Understand the Problem' },
      { type: 'text', content: 'I was that guy who answered before the question finished. Don\'t be that guy.' },
      { type: 'list', items: [
        'Ask questions',
        'Clarify what\'s actually needed',
        'Think in constraints'
      ]},
      { type: 'text', content: 'Speed doesn\'t matter if you\'re solving the wrong problem.' },
      { type: 'heading', content: '2. Start with the Big Picture (HLD)' },
      { type: 'text', content: 'Clients → APIs → DB/Cache → Queues. Estimate DAU, QPS, storage.' },
      { type: 'text', content: 'Talk through your thinking. Interviewers care more about how you think than what you know.' },
      { type: 'heading', content: '3. Deep Dive (But Smartly)' },
      { type: 'list', items: [
        'Focus on the most important parts first',
        'Identify bottlenecks and handle edge cases',
        'Where can it break? What happens when it does?'
      ]},
      { type: 'heading', content: '4. Before Wrapping Up' },
      { type: 'list', items: [
        'Quick recap of the design',
        'Scaling challenges and how you\'d address them',
        'Failures & recovery strategies',
        'Monitoring, metrics, and logs'
      ]},
      { type: 'text', content: 'Strong endings leave strong impressions.' },
      { type: 'heading', content: 'Final Thought' },
      { type: 'text', content: 'System design isn\'t a race — it\'s about thinking clearly. This framework isn\'t just for interviews — it actually works for real-world system design too.' },
      { type: 'text', content: 'Inspired by System Design Interview by Alex Xu.' },
    ]
  },
]

export default posts
