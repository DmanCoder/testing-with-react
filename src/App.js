import React from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchPost } from './redux/actions/postActions/postActions';

// Components
import Header from './component/header/header';
import Headline from './component/headline/headline';
import Button from './component/button/button';
import ListItem from './component/ListItem/listItem';

import './app.scss';

const App = ({ postRXS }) => {
  console.log(postRXS);
  return (
    <div className="">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          description="Click the button to render post!"
        />
        <Button />
        <ListItem />
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postRXS: state.postRXS,
  };
};

export default connect(mapStateToProps, { fetchPost })(App);
