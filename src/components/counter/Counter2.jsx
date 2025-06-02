import React from "react";
import CountUp from "react-countup";
function Counter2() {
  return (
    <div className="home-two-counter mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="our-activitys">
              <div className="booking counter-item d-flex align-items-center">
                <div className="number counter">
                  <h2 className="odometer" data-odometer-final={10}>
                    <CountUp start={0} end={1} />
                  </h2>
                </div>
                <div className="contents">
                  <p>
                    Booking <br />
                    Of Month
                  </p>
                </div>
              </div>
              <div className="visitors counter-item d-flex align-items-center">
                <div className="number counter">
                  <h2 className="odometer" data-odometer-final={50}>
                    <CountUp start={0} end={50} />
                  </h2>
                </div>
                <div className="contents">
                  <p>
                    Visitors Visit <br />
                    Daily.
                  </p>
                </div>
              </div>
              <div className="satisfied-gest counter-item d-flex align-items-center">
                <div className="number counter d-flex align-items-center">
                  <h2 className="odometer" data-odometer-final="1.5">
                    <CountUp start={0} end={1.5} />
                  </h2>
                  <span>K</span>
                </div>
                <div className="contents">
                  <p>
                    Satisfied <br />
                    Guest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter2;
