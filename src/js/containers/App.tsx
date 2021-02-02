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
  justify-content: space-between;
`;

const Content = styled.div`
  font-size: 50vw;
  text-align: center;
`;

const PATHS = ['🤔', '😰', '🦄', '🍖', '🍕'];

export const App = () => {
  return (
    <Container>
      <Nav>
        {PATHS.map(s => (
          <Link to={`/${s}`} key={s}>
            <Button>{s}</Button>
          </Link>
        ))}
      </Nav>
      <Content>
        <Switch>
          {PATHS.map(s => (
            <Route exact path={`/${s}`} key={s}>
              {s.toUpperCase()}
            </Route>
          ))}
        </Switch>
        <Route>
          <Redirect to={`/${PATHS[0]}`} />
        </Route>
      </Content>
    </Container>
  );
};
