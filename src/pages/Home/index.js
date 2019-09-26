import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import stylesCommon from '@/components/styles';

export default class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className={stylesCommon.container}>
          <ul>
            <li>
              <Link to="/state">State Demo</Link>
            </li>
            <li>
              <Link to="/store">Store Demo</Link>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
