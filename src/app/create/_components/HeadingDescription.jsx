import React from 'react'

const HeadingDescription = ({title,description}) => {
  return (
    <div className="text-center px-4 md:px-8 lg:px-16 py-10">
  <h2 className="text-4xl md:text-5xl font-bold text-violet-900 mb-4">
    {title}
  </h2>
  <p className="text-lg md:text-xl text-gray-600">
    {description}
  </p>
</div>

  )
}

export default HeadingDescription
