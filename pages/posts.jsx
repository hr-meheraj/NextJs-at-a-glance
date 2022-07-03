import React from 'react'
import Link from 'next/link'
export default function posts({ datas}) {
  return (
    <div>
      <p>Total Posts : {datas.length}</p>
      <div className='cards'>
        {
          datas.map(data => {
            return (
              <article className='card' key={data.id}>
                <h3> {data.title.slice(0,40)}</h3>
                <button><Link href={`/posts/${data.id}`}>View Blog</Link></button>
              </article>
            )
          })
        }
      </div>
    </div>
  )
}


export const getStaticProps = async (context) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const datas = await res.json();

    return { props: { datas }};
}
