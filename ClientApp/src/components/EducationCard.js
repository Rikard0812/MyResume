import React, { Component } from 'react';
import './EducationCard.css';

export default class EducationCard extends Component {
  static displayName = EducationCard.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h6 className="card-text">
            {this.props.Name}
          </h6>
          <p className="card-text">
            {this.props.Duration}
          </p>
          <p className="card-text">
            {this.props.Info}
          </p>
        </div>
      </div>
    );
  }
}