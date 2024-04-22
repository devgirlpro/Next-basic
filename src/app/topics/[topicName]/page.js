import React from 'react'

const page = ({params: {
    topicName
}}) => {
    console.log(topicName)
  return (
    <div>{topicName}</div>
  )
}

export default page