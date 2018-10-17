import * as React from 'react';
import styles from './Meter.module.scss';
import { IMeterProps } from './IMeterProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Donut from './Donut';

export default class Meter extends React.Component<IMeterProps, {}> {
  public render(): React.ReactElement<IMeterProps> {
    return (
      <div className={ styles.meter }>
        <header style={{ textAlign: this.props.headerAlignment }}>
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
        </header>
        <Donut percentage={this.props.percentage} showPercentageValue={this.props.showPercentageValue} fillColor={this.props.fillColor} />
      </div>
    );
  }
}
