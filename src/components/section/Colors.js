import React, { Component } from 'react';

export class Colors extends Component {
  render() {
    const { colors } = this.props;
    return (
      <div>
        {colors.map((color, index) => (
          <button key={index} style={{ background: color }}>
            0
          </button>
        ))}
      </div>
    );
  }
}

export default Colors;
