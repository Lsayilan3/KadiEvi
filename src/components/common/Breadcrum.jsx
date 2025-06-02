import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";

function Breadcrum({  name }) {
  return (
    <div className="breadcrumb-section">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center text-center">
          <div className="col-lg-8">
            <h2 className="breadcrumb-title">{<FormattedMessage id="suitHouse" values={{ name }} />}</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb d-flex justify-content-center">
                <li className="breadcrumb-item">
                  <Link href="/">
                    <a>{<FormattedMessage id="anasayfa" values={{ name }} />}</a>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                 {<FormattedMessage id="suitHouse" values={{ name }} />}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrum;
