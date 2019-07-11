import React from 'react'
import {Feed} from '..'

// renders Feed component for each item in feeds array
const FeedList = ({feeds}) =>
 <div>
 {feeds.map(feed =>
        <Feed feed={feed} />
      )}
 </div>  


export default FeedList
