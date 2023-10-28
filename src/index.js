import React from 'react';
import YelpStars from './components/YelpStars'
import YelpLink from './components/YelpLink'
import YelpCount from './components/YelpCount'
import './styles.css';

//const YELP_DEFAULT_URL = "https://www.yelp.com/biz/mountain-ford-bryson-city"
const YELP_DEFAULT_URL = "https://www.yelp.com"

const YelpViewer = (props) => {
  const rating = props.rating || 0
  const count = props.count || 0
  const template = props.template
  const url = props.url || YELP_DEFAULT_URL
  return (
    <div className="YelpViewer">
      <div>
        <YelpStars rating={rating} />
        <YelpLink url={url} />
      </div>
      <YelpCount count={count} template={template}/>
    </div>
  );
}

export default YelpViewer
