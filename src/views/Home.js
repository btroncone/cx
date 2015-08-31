import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
          <div className="container"> 
            <ul>
              <li><Link to="/slack">Testing Slack API Integration</Link></li>
              <li><Link to="/mongo">Testing Mongo API Integration</Link></li>
            </ul>
          </div>
      </div>
    );
  }
}

export default Home;




