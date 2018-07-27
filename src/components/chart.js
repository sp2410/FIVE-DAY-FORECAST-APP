import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';


function average(data){
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={100} width={150} data={props.data}>
        <SparklinesLine style={{ fill: props.color}} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Average: {average(props.data)} {props.units}</div>
    </div>
  )
}
