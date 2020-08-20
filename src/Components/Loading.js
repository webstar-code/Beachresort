import React from 'react';
import LoadingGif from '../images/gif/loading-arrow.gif';

const Loading = () => {
  return(
    <div className="Loading">
      <h4>featured Rooms Loading...</h4>
      <img src={LoadingGif} alt=""/>
    </div>
  )
}
export default Loading;