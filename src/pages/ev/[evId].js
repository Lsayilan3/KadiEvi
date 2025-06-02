import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Layout from "../../components/Layout/Layout";
import Gallary1 from "../../components/gallary/Gallary1";
import RoomFeatures from "../../components/roomSuitsDetails/RoomFeatures";
import Breadcrum from "../../components/common/Breadcrum";
import Footer from "../../components/footer/Footer";

function Details() {
  const router = useRouter();
  const { evId } = router.query;
// console.log("evId", evId);

  

  return (
    <Layout>
      <Breadcrum pageName="Room & Suits Details" pageTitle="Room & Suits Details" />
      <div className="room-suits-details-page pt-120 mb-120">
        <div className="container">
        <Gallary1 evId={evId} />

          <div className="row mb-120">
            <div className="col-lg-12">
              <RoomFeatures evId={evId} />
            </div>
          </div>

        </div>
      </div>
      
    </Layout>
  );
}

export default Details;
