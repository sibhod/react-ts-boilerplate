import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from 'components/Button';

const Container = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  padding: 20px 100px;
`;

const Nav = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
`;

const Content = styled.div`
  font-size: 8vw;
  text-align: center;
  color: #c5e478;
`;

type Path = {
  name: string;
  path: string;
};

const PATHS: Path[] = [
  {
    name: 'Hello World',
    path: '/hello-world',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

export const App = () => {
  return (
    <Container>
      <Nav>
        {PATHS.map(({ name, path }) => (
          <Link to={path} key={path}>
            <Button>{name}</Button>
          </Link>
        ))}
      </Nav>
      <Content>
        <Switch>
          {PATHS.map(({ name, path }) => (
            <Route exact path={path} key={path}>
              {name}
            </Route>
          ))}
        </Switch>
        <Route>
          <Redirect to={PATHS[0].path} />
        </Route>
      </Content>
    </Container>
  );
};
