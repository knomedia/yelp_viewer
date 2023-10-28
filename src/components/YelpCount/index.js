import React from 'react';
import template from './utils/template'
import './styles.scss'

const DEFAULT_TEMPLATE = "Based on %%count%% reviews"

const YelpCount = (props) => {
  let {count} = props
  return (
    <div className="YelpCount">
      {template(count, (props.template || DEFAULT_TEMPLATE))}
    </div>
  );
}

export default YelpCount
