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
import './web-components/CoreWebComponent';
import './web-components/CoreDecButton';

// taken from https://www.grapecity.com/blogs/using-web-components-with-react-2019
const App = () => {
  return (
    <AyxAppWrapper>
      <Grid container justify="center">
        <Counter />
      </Grid>
    </AyxAppWrapper>
  );
}
export default App;
// render(<CounterApp />, document.getElementById('root'));
