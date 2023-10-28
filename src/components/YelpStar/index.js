import React from 'react';
import './styles.css';

const YelpStar = (props) => {
  const active = !!props.active
  const partial = !!props.partial
  const full = props.full || 1
  const buildActiveCN = () => {

  }
  const buildCN = () => {
    let cn = "YelpStar"
    const ACTIVE_CN = ` YelpStar__Active__${full}`
    if (active) {
      cn += ACTIVE_CN
    }
    if (partial) {
      cn += ` ${ACTIVE_CN} YelpStar__Partial`
    }
    return cn
  }
  return (
    <svg className={buildCN()} viewBox="0 0 42 42" fill="none">
      <rect width="42" height="42" rx="6" fill="lightgrey"/>
      <path className="YelpStar__Half" d="M21 0H36C39.3137 0 42 2.68629 42 6V36C42 39.3137 39.3137 42 36 42H21V0Z" fill="#A9A6A6"/>
      <path d="M21 7L16.5 16L6 17L13.5 24L12 34L21 29.5L29.5 34L28 24L34.5 17L25 16L21 7Z" fill="white"/>
    </svg>
  );
}

export default YelpStar
