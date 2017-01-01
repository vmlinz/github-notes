import React, {PropTypes} from 'react';

import SearchGithub from './search-github';

const Main = ({ children }) => {
  return (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
          <SearchGithub />
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

Main.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Main;
