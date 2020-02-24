import React from 'react';
import { AyxAppWrapper, Grid } from '@ayx/ui-core';
import { render } from 'react-dom';

// import './style.css';

// import NavBar from './containers/NavBar';
// import Card from './containers/Card';
import Counter from './components/CounterHook';

// import custom elements
import './web-components/ImperativeCounter';
import './web-components/DeclarativeCounter';
import './web-components/TypoDeclarativeCounter';
import './web-components/AyxButton';

// taken from https://www.grapecity.com/blogs/using-web-components-with-react-2019
const CounterApp = () => {
  return (
    <AyxAppWrapper>
      <Grid container justify="center">
        <Counter />
      </Grid>
    </AyxAppWrapper>
  );
}

render(<CounterApp />, document.getElementById('root'));
