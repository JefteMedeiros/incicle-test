import React, { useState } from 'react';

import Layout from './components/layout';
import Notification from './components/Notification';
import Events from './components/Events';
import Nav from './components/Nav';
import Frame from './components/Frame';

import { Aside, Section, Wrapper } from './styles/Global';

import './index.css';

const src: React.FC = () => {
  const [filters, setFilters] = useState<string[]>([]);

  return (
    <Layout>
      <Wrapper sx={{ flexDirection: { lg: 'row' }, padding: { lg: '25px 75px' } }}>
        <Section>
          <Nav filters={filters} onFilterChange={filters => setFilters(typeof filters === 'string' ? filters.split(',').filter(Boolean) : filters)} />
          <Events filters={filters} />
        </Section>
        <Aside
          sx={{
            flexDirection: { sm: 'row', xs: 'column', lg: 'column' },
          }}
        >
          <Notification />
          <Frame />
        </Aside>
      </Wrapper>
    </Layout>
  );
};

export default src;
