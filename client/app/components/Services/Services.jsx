import React from 'react';
import QueueMusic from '@material-ui/icons/QueueMusic';
import Work from '@material-ui/icons/Work';
import TagFaces from '@material-ui/icons/TagFaces';
import School from '@material-ui/icons/School';
import get from 'lodash/get';
import data from './servicesData.json';
import ServiceBox from './ServiceBox';

const icons = {
  music: QueueMusic,
  work: Work,
  faces: TagFaces,
  school: School,
};

const Boxes = () => Object.keys(data)
  .map((serviceKey) => {
    const service = data[serviceKey];
    const Icon = icons[service.icon];
    return (
      <ServiceBox
        key={service.title}
        title={service.title}
        text={service.text}
        images={get(service, 'images', null)}
      >
        <Icon />
      </ServiceBox>
    );
  });

const Services = () => (
  <section id="services" className="services-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h1 data-tip data-for="happyFace">שירותים</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <Boxes />
      </div>
    </div>
  </section>
);

export default Services;
