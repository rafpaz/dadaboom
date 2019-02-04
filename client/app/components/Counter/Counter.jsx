import React, { Component } from 'react';
import CounterBox from './CounterBox';
import { CountersSection, Overlay } from './counterStyles';
import Plugins from '../Home/plugins';

class Counter extends Component {
  componentDidMount() {
    Plugins.countTo();
  }

  render() {
    return (
      <CountersSection className="counter-section text-center">
        <Overlay id="counter" className="overlay">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <div className="projects">
                  <div className="row">
                    <CounterBox
                      to="512"
                      text="לקוחות מרוצים"
                    />
                    <CounterBox
                      border
                      to="363"
                      text="פרוייקטים"
                    />
                    <CounterBox
                      border
                      to="57472"
                      text="שעות עבודה"
                    />
                    <CounterBox
                      border
                      to="1219"
                      text="מקלות משומשים"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Overlay>
      </CountersSection>
    );
  }
}

export default Counter;
