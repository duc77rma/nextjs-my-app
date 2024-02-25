import { LayoutProps } from '@/models/common'
import Link from 'next/link'

export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Main Layout</h1>

      <Link legacyBehavior href="/">
        <a>Home</a>
      </Link>

      <Link legacyBehavior href="/posts">
        <a>Posts</a>
      </Link>

      <div>{children}</div>
    </div>
  )
}
