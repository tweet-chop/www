import React from 'react';

import Chop from '../../components/Chop';
import Loading from '../../components/Loading';

import './Chops.css';

const Chops = ({ loading, chops }) => (
  <div className="chops">
    {loading ? (
      <Loading />
    ) : chops.length ? (
      <ul className="chops-list">
        {chops.map(chop => <Chop key={chop} chop={chop} />)}
      </ul>
    ) : null}
  </div>
);

export default Chops;
