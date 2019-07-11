import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {FeedList} from '../../components'
import * as feedsAction from '../../actions/feedsAction'
import {connect} from 'react-redux'

class Home extends Component {
  componentWillMount() {
    // get all Feeds before component mount
    this.props.actions.getFeeds();
  }

  render() {
    const {feeds} = this.props;
    return (
      <div className="home mt-5 table-responsive">
        <table class="table table-bordered table-dark">
        <thead>
            <tr>
            <th scope="col">Output from Module-1, Module-2</th>
            <th scope="col">Formatted Text from Module-3</th>
            </tr>
        </thead>
        <tbody>
        <tr id='trFeeds'>
            <td>
            {feeds.map(feed =>
              <span>{feed.text}</span>
            )}
            </td>
          <td><FeedList feeds={feeds}/> </td>
          </tr> 
          </tbody>
        </table>      
      </div>
    )
  }
}

export default connect(
  state => ({
    feeds: state.feed.feeds
  }),
  dispatch => ({
    actions: bindActionCreators(feedsAction, dispatch)
  })
)(Home)
