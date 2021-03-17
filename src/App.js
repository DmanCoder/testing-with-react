import React from 'react';

import Header from './component/header/header';
import Headline from './component/headline/headline';

import './app.scss';

const App = () => {
  return (
    <div className="">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          description="Click the button to render post!"
        />
      </section>
    </div>
  );
};

export default App;
