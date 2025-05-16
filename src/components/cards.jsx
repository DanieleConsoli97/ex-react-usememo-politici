import React from 'react'
const Cards = React.memo(
  ({ poli }) => {
    console.log(`render`, poli.name)
    return (
      <div>
        <ul>
          <li>{poli.name}</li>
          <li>{poli.biography}</li>
          <li>{poli.country}</li>
          <li>{poli.dob}</li>
          <li>{poli.party}</li>
          <li>{poli.position}</li>
          <li>{poli.years_in_office}</li>
        </ul>
      </div>
    )
  }
)

export default Cards