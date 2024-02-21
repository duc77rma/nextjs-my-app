import { GetStaticProps, GetStaticPropsContext } from 'next'

export interface PostsPageProps {
  posts: any[]
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <h1>Posts Page</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async (
  context: GetStaticPropsContext
) => {
  // server side
  // build time
  const res = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await res.json()

  console.log(data);

  return {
    props: {
      posts: data.data.map((i: any) => ({id: i.id, title: i.title})),
    },
  }
}
