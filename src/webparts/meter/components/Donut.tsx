import * as React from 'react';
import { IDonutProps } from './IDonutProps';

export default class Donut extends React.Component<IDonutProps> {
  public render(): JSX.Element {
    return (
      <div>
        <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
          <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
          <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#eee" strokeWidth="4"></circle>
          <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#47c3f0" strokeWidth="4" strokeDasharray={`${this.props.percentage} ${100 - this.props.percentage}`} strokeDashoffset="25"></circle>
          {this.props.showPercentageValue && <text className="donut-number" x="50%" y="50%" textAnchor="middle">{this.props.percentage}%</text>}
        </svg>
      </div>
    );
  }
}
