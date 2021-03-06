import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

export default (props) => {
  return (
    <div className="D3Chart">
      <Sparklines heigth={50} width={60} data={props.data}>
        <SparklinesLine color= {props.color} />
      </Sparklines>
    </div>
  );
}
