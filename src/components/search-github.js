import React, { PropTypes } from 'react';
import { withRouter, routerShape } from 'react-router';

class SearchGithub extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleSubmit() {
    // goto target profile url by using router
    this.props.router.push(`/profile/${this.state.username}`)

    // restore username state
    this.setState({
      username: '',
    });
  }

  handleOnChange(ev) {
    // set username to input value
    this.setState({
      username: ev.target.value,
    });
  }

  render() {
    console.log("search github", this.props);
    return (<div className="col-sm-12">
      <form onSubmit={this.handleSubmit}>
        <div className="form-group col-sm-7">
          <input
            type="text"
            className="form-control"
            onChange={this.handleOnChange}
            value={this.state.username}
          />
        </div>
        <div className="form-group col-sm-5">
          <button
            type="submit"
            className="btn btn-block btn-default">
            Search Github
          </button>
        </div>
      </form>
    </div>);
  }
}

SearchGithub.propTypes = {
  router: routerShape,
};

export default withRouter(SearchGithub);
