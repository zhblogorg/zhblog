import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('guidelines');

  return posts.map(post => ({
    params: {
      id: post.id,
    },
    props: {
      body: post.body,
    },
  }));
}

export async function GET({ props }: { props: { body: string } }) {
  return new Response(props.body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}