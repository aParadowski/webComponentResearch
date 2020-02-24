import React, { useState, useRef } from 'react';
import { Button, AppBar, Card, CardHeader, CardContent, Typography, Grid } from '@ayx/ui-core';

import CounterBox from '../containers/CounterBox';

export default () => {
  const counterElement = useRef(null);
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    // increment the declarative counter
    setCount(count + 1);
    // incerement the imperative counter
    counterElement.current.increment();
  };

  const decrementCounter = () => {
    // decrement the declarative counter
    setCount(count - 1);
    // decrement the imperative counter
    counterElement.current.decrement();
  };

  return (
    <>
      <AppBar position="static"> We Components + react </AppBar>
      <Card style={{ width: 1200 }}>
        <CardHeader title="Web Component Counters" />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <CounterBox>
                <h5>Imperative Counter</h5>
                <i-counter ref={counterElement} />
              </CounterBox>
            </Grid>
            <Grid item xs={4}>
              <CounterBox>
                <h5>Declarative Counter</h5>
                <d-counter count={count} />
              </CounterBox>
            </Grid>
            <Grid item xs={4}>
              <CounterBox>
                <h5>Typography Declarative Counter</h5>
                <td-counter count={count} />
              </CounterBox>
            </Grid>
          </Grid>
          <Typography>Basic components</Typography>
          <Grid container spacing={2} style={{ marginTop: 20 }}>
            <Grid item xs>
              <Button color="primary" onClick={incrementCounter} variant="contained">
                Increment
              </Button>
            </Grid>

            <Grid item xs="auto">
              <Button color="primary" onClick={decrementCounter} variant="contained">
                Decrement
              </Button>
            </Grid>
          </Grid>

          <Typography>Web Components</Typography>
          <Grid container spacing={2} style={{ marginTop: 20 }}>
            <Grid item xs>
              <core-inc-btn onClick={incrementCounter} />
            </Grid>
            <Grid item xs="auto">
              <core-dec-btn onMouseEnter={() => console.log('i did it')} onClick={decrementCounter} variant="contained" color="primary" title="test">
                <td-counter count={count} />
              </core-dec-btn>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}