import React from 'react';
import ratings from './utils/ratings';
import YelpStar from '../YelpStar'

const MAX_STARS = 5;

const YelpStars = (props) => {
  const [full, partial] = ratings(props.rating || 0)
  const renderStars = (num, partial) => {
    let stars = []
    for(let i=0; i<MAX_STARS; i++) {
      let isActive = !!(num > i);
      let isPartial = false
      if (i === num && !!partial) {
        isPartial = true
      }
      stars.push({active: isActive, partial: isPartial})
    }
    return stars.map((data, i) => {
      return (
        <YelpStar active={data.active} full={full} partial={data.partial} key={i} />
      )
    })
  }

  return (
    <div className="YelpStars">
      {renderStars(full, partial)}
    </div>
  );
}

export default YelpStars
