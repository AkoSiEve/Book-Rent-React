import React from 'react'
import Star from '../../assets/star.svg'

const Rating = ({value}) => {
    const stars = Array(value).fill(Star)
  return (
    <>
        {
            stars.map((star,index)=>(
                <img src={star} key={index} height={"14"} width={"14"} alt='star'/>
            ))
        }
    </>
  )
}

export default Rating