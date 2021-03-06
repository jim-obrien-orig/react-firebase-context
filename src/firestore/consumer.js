import React, { Component, Fragment } from 'react';
import { autobind } from 'core-decorators';
import invariant from 'invariant';
import withFirestore from './hoc';

@withFirestore
@autobind
class Firestore extends Component {
  fetchData () {
    invariant(
      this.props.query,
      'You need to pass a `query` to `<Firestore />`!'
    );
    return this.props.firestore.query(this.props.query);
  }

  render () {
    const { firestore } = this.props;
    const data = this.fetchData();
    return <Fragment>{this.props.children({ firestore, data })}</Fragment>;
  }
}

export default Firestore;
