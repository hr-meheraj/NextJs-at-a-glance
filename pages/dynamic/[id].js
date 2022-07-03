import React from 'react'
import {useRouter} from 'next/router'
export default function id() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>Hello Post {id} </div>
  )
}
