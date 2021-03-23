import React from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchPostAXN } from './redux/actions/postActions/postActions';

// Components
import Header from './component/header/header';
import Headline from './component/headline/headline';
import Button from './component/button/button';
import ListItem from './component/ListItem/listItem';

import './app.scss';

const App = ({ postRXS, fetchPostAXN }) => {
  const onFetch = () => fetchPostAXN(); 

  const configButton = {
    buttonText: 'Get Posts',
    emitEvent: onFetch,
  };

  return (
    <div className="">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          description="Click the button to render post!"
        />
        <Button {...configButton} />

        {postRXS.length > 0 && (
          <div>
            {postRXS.map((post, index) => {
              const { title, body } = post;
              const configListItem = {
                title,
                desc: body,
              };

              return <ListItem key={index} {...configListItem} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postRXS: state.postRXS,
  };
};

export default connect(mapStateToProps, { fetchPostAXN })(App);
