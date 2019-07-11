import React from 'react'

class Feed extends React.Component {      
    render() {
    const {feed} = this.props;
    let feedObject = {};
    let feedText='';
    if(feed && feed.text){
     feedText = feed.text;
    // get entities, link, usernames based on position using substring
    let entity1 = feedText.substring(0, 5);
    let entity2 = feedText.substring(14, 22);
    let link = feedText.substring(37, 54);
    let userName = feedText.substring(56, 67);
    // build feedObject
    feedObject = {
            entity1:entity1,
            entity2: entity2,
            Link: link,
            userName: userName
            }
    }
    return(
   <div>
       {feedObject &&
       <div>        
       <p id="demo">
       <strong>{feedObject.entity1}</strong> 
            &nbsp; visited 
            &nbsp;<strong>{feedObject.entity2}</strong> 
            &nbsp; headquarters: 
            &nbsp;<a href={feedObject.Link} target='blank'>{feedObject.Link}</a> 
            &nbsp; @ 
            <a href={`http://twitter.com/${feedObject.userName}`} target='blank1'>{feedObject.userName}</a>
        </p>
        </div>}
    </div>
    )
    }
}
export default Feed;
