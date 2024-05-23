import React, { useState } from 'react';
import Header from './Header';
import BecomeACCA from './BecomeACCA';
import WhyChooseUs from './WhyChooseUs';
import Eligibility from './Eligibility';
import WhatYouWillLearn from './WhatYouWillLearn';
import PlacementAssistance from './PlacementAssistance';
import KickOffJourney from './KickOffJourney';
import RequestCallBackModal from './RequestCallBackModal';

const App = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App">
      <Header />
      <BecomeACCA />
      <WhyChooseUs />
      <Eligibility />
      <WhatYouWillLearn />
      <PlacementAssistance />
      <KickOffJourney />
      <button className="btn btn-primary" onClick={() => setModalShow(true)}>
        Request Call Back
      </button>
      <RequestCallBackModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default App;
