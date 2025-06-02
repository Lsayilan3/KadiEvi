import React from 'react'
import CountUp from 'react-countup';
import { FormattedMessage } from 'react-intl';
function Video({name}) {
  return (
    <div className="home-one-video mb-120"   >
    <div className="video-area">
      <video autoPlay loop="loop" muted preload="auto">
        <source src="https://demo.egenslab.com/download/hotel-room-2021-11-03-20-39-09-utc.mp4" type="video/mp4" />
      </video>
      <div className="our-activitys">
        <div className="booking counter-item d-flex align-items-center">
          <div className="number counter">
            <h2 className="odometer" data-odometer-final={10}><CountUp start={0} end={12}/></h2>
          </div>
          <div className="contents">
            <p><FormattedMessage id="rezervazyon" values={{ name }}/> <br /><FormattedMessage id="ayın" values={{ name }}/></p>
          </div>
        </div>
        <div className="visitors counter-item d-flex align-items-center">
          <div className="number counter">
            <h2 className="odometer" data-odometer-final={50}><CountUp start={0} end={85}/></h2>
          </div>
          <div className="contents">
            <p><FormattedMessage id="ziyaretci" values={{ name }}/> <br /><FormattedMessage id="gunluk" values={{ name }}/> </p>
          </div>
        </div>
        <div className="satisfied-gest counter-item d-flex align-items-center">
          <div className="number counter d-flex align-items-center">       
            <h2 className="odometer" data-odometer-final="1.5"><CountUp start={0} decimals={1.5} end={3.6} preserveValue={true}/></h2>
            <span>K</span>
          </div>
          <div className="contents">
            <p><FormattedMessage id="memnun" values={{ name }}/> <br /><FormattedMessage id="misafir" values={{ name }}/></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Video