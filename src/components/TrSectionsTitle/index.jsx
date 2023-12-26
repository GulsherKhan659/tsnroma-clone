import React from 'react'
import "./index.css"

const SectionTitle = ({title,id}) => {
  return (
    <div className='sectionTitle' id={id}> 
        <h2>
            {title}
        </h2>
    </div>
  )
}

export default SectionTitle