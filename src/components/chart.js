import React from 'react';
import _ from 'lodash';
import {Sparklines, SparklinesBars, SparklinesReferenceLine} from 'react-sparklines';
import { BarChart } from 'react-d3';

// function average(data) {
//   return _.round(_.sum(data)/data.length);
// }
// export default (props) => {
//   return (
//     <div>
//       <Sparklines height={120} width={180} data={props.data}>
//         <SparklinesBars style={{ fill: "#41c3f9" }} />
//         <SparklinesReferenceLine type='avg'/>
//       </Sparklines>
//       <div>{average(props.data)} {props.units}</div>
//     </div>
//   );
// }

export default (props) => {
  return (
    <div>
      <BarChart
        data={props.barData}
        width={200}
        height={100}
        fill={'#3182bd'}
      />
    </div>
  );
}
