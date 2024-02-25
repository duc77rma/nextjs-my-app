import { MainLayout } from '@/components/layout'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'

export interface PostsPageProps {
  posts: any[]
}

function PostsPage({ posts }: PostsPageProps) {
  return (
    <MainLayout>
      <h1>Posts Page</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link legacyBehavior href={`/demo/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

PostsPage.Layout = MainLayout;
export default PostsPage

export const getStaticProps: GetStaticProps<PostsPageProps> = async (
  context: GetStaticPropsContext
) => {
  // server side
  // build time
  const res = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await res.json()

  return {
    props: {
      posts: data.data.map((i: any) => ({ id: i.id, title: i.title })),
    },
  }
}
