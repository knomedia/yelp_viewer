import React from 'react';
import YelpLogo from '../YelpLogo'

const YelpLink = (props) => {
  const url = props.url
  return (
    <a className="YelpLink" href={url} target="__blank">
      <YelpLogo />
    </a>
  );
}

export default YelpLink
