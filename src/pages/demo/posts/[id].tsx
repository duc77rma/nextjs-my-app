import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

export interface PostDetailPageProps {
  data: any
}

export default function PostDetailPage(props: PostDetailPageProps) {
  const data = props.data;

  return (
    <>
      <h1>Post Detail Page</h1>
      <h3>{`ID: ${data.id}`}</h3>
      <h3>{`Title: ${data.title}`}</h3>
      <h3>{`Description: ${data.description}`}</h3>
      <h3>{`Author: ${data.author}`}</h3>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await res.json()

  return {
    paths: data.data.map((i: any) => ({ params: { id: i.id } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  // server side
  // build time

  const id = context.params?.id
  if (!id) {
    return { notFound: true }
  }

  const res = await fetch(`https://js-post-api.herokuapp.com/api/posts/${id}`)
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}
