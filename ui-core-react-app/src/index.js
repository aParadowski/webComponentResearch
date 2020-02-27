import React from 'react';
import { AyxAppWrapper, Grid } from '@ayx/ui-core';
import { render } from 'react-dom';

// import core web components
import 'core-web-components/AyxButton';
import 'core-web-components/AyxTypography';
import 'core-web-components/AyxList';
import 'core-web-components/AyxListItem';
import 'core-web-components/AyxListItemText';


//wips 
import './web-components/AyxToolitp';
import './web-components/AyxCircularProgress';
import './web-components/AyxExpansionPanel';
import './web-components/AyxExpansionPanelSummary';
import './web-components/AyxExpansionPanelDetails';
import './web-components/AyxInput';

// import local components
import Counter from './components/CounterHook';
import './web-components/DeclarativeCounter';
import './web-components/ImperativeCounter';

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
