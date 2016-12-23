import React, {PropTypes} from 'react';
import MixinDecorator from 'react-mixin-decorator';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';

import GithubProfile from './github/github-profile';
import Repos from './github/repos';
import Notes from './notes';
import firebaseConfig from '../config/firebase';

const ReactFireDecorator = MixinDecorator(
  'ReactFireDecorator',
  ReactFireMixin,
  {
    bindAsArray: ReactFireMixin.bindAsArray,
    unbind: ReactFireMixin.unbind,
  }
);

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bio: {name: 'vmlinz'},
      repos: [{name: 'git'}],
      notes: [],
    };

    console.log(this);
  }

  componentDidMount() {
    this.database = Firebase.initializeApp(firebaseConfig).database();
    console.log(this, this.props.params.username);
    // let ref = this.database.ref().child(`${this.props.params.username}`).child('notes');
    let ref = this.database.ref().child('name');
    console.log(ref);
    ref.on('value', snap => {
      console.log(snap);
      snap.forEach((item) => {
        console.log(item.val());
      });
    });
    this.props.bindAsArray(ref, 'notes');
  }

  componentWillUnmount() {
    this.props.unbind('notes');
  }

  render() {
    console.log(this.state);
    return (
      <div className="row">
        <div className="col-md-4">
          <GithubProfile name={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes} />
        </div>
      </div>
    );
  }
};

export default ReactFireDecorator(Profile);
