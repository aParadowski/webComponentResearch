import React, { useState, useRef } from 'react';
import { Button, AppBar, Card, CardHeader, CardContent, Typography, Grid, Divider } from '@ayx/ui-core';

import CounterBox from '../containers/CounterBox';

export default () => {
  const counterElement = useRef(null);
  const [count, setCount] = useState(0);
  const [expanded, setExpanded] = useState(1);

  const incrementCounter = () => {
    // increment the declarative counter
    setCount(count + 1);
    // incerement the imperative counter
    // counterElement.current.increment();
  };

  const decrementCounter = () => {
    // decrement the declarative counter
    setCount(count - 1);
    // decrement the imperative counter
    // counterElement.current.decrement();
  };

  return (
    <>
      <AppBar position="static"> We Components + react </AppBar>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={8}>
          
          <Card>
            <CardHeader title="Web Component Counters" />
            <CardContent>
              <Grid container justify="flex-end" spacing={2}>
                {/* <Grid item xs={4}>
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
                </Grid> */}
                <Grid item xs={4}>
                  <CounterBox>
                    <h5>Typography Declarative Counter </h5>
                    <Typography variant="h1"> {count} </Typography>
                  </CounterBox>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>Basic Ui-Core Components</Typography>
                </Grid>
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
              <Divider style={{margin: 20}} />
              <Grid container justify="flex-end">
                <Grid item xs={4}>
                  <CounterBox>
                    <h5>Typography Declarative Counter </h5>
                    <ayx-typography variant="h1"> {count} </ayx-typography>
                  </CounterBox>
                </Grid>
              </Grid>
              <ayx-typography>Web Components</ayx-typography>
              <Grid container spacing={2}>
                <Grid item xs>
                  <ayx-button variant="contained" color="primary" onClick={incrementCounter}>Increment</ayx-button>
                </Grid>
                <Grid item xs="auto">
                  <ayx-button onMouseEnter={() => console.log('i did it')} onClick={decrementCounter} variant="contained" color="secondary" title="test">
                    <ayx-typography variant="h6"> {count} </ayx-typography>
                  </ayx-button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card>
            <CardHeader title="Converted Component Demos" />
            <CardContent>

              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <ayx-typography variant="h3">List</ayx-typography>
                  <ayx-list>
                    <ayx-list-item button>
                      <ayx-list-item-text>
                        Item One
                      </ayx-list-item-text>
                    </ayx-list-item>
                    <ayx-list-item button>
                      <ayx-list-item-text>
                        Item Two
                      </ayx-list-item-text>
                    </ayx-list-item>
                    <ayx-list-item button disabled>
                      <ayx-list-item-text>
                        Disabled
                      </ayx-list-item-text>
                    </ayx-list-item>
                  </ayx-list>
                </Grid>

                <Grid item xs={3}>
                  <ayx-typography variant="h3">Circular Progress</ayx-typography>
                  <ayx-circular-progress />
                </Grid>
                
                <Grid item xs={3}>
                  <ayx-typography variant="h3">Inputs</ayx-typography>
                  <Grid container justify="center" spacing={4}>
                    <Grid item xs={12}>
                      <ayx-input
                        defaultValue="Hello world"
                        inputProps={{
                          'aria-label': 'Description'
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ayx-input
                        inputProps={{
                          'aria-label': 'Description'
                        }}
                        placeholder="Placeholder"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ayx-input
                        disabled
                        inputProps={{
                          'aria-label': 'Description'
                        }}
                        value="Disabled"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ayx-input
                        defaultValue="Error"
                        error
                        inputProps={{'aria-label': 'Description' }}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={3}>
                  <ayx-typography variant="h3">Expansion Panels</ayx-typography>
                  <ayx-expansion-panel onClick={() => setExpanded(1)} expanded={expanded === 1}>
                    <ayx-expansion-panel-summary slot="panelSummary" aria-controls="panel1a-content" id="panel1a-header">
                      <ayx-typography>Expansion Panel 1</ayx-typography>
                    </ayx-expansion-panel-summary>
                    <ayx-expansion-panel-details slot="panelDetails">
                      <ayx-typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </ayx-typography>
                    </ayx-expansion-panel-details>
                  </ayx-expansion-panel>
                  <ayx-expansion-panel onClick={() => setExpanded(2)} expanded={expanded === 2}>
                    <ayx-expansion-panel-summary slot="panelSummary" aria-controls="panel2a-content" id="panel2a-header">
                      <ayx-typography>Expansion Panel 2</ayx-typography>
                    </ayx-expansion-panel-summary>
                    <ayx-expansion-panel-details slot="panelDetails">
                      <ayx-typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </ayx-typography>
                    </ayx-expansion-panel-details>
                  </ayx-expansion-panel>
                  <ayx-expansion-panel disabled>
                    <ayx-expansion-panel-summary slot="panelSummary" aria-controls="panel3a-content" id="panel3a-header">
                      <ayx-typography>Disabled Expansion Panel</ayx-typography>
                    </ayx-expansion-panel-summary>
                  </ayx-expansion-panel>
                </Grid>

                
                

              </Grid>


            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}