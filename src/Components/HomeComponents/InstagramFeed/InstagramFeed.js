import React from "react";
import "./InstagramFeed.css";
import logo from "../../../assets/united-cheer-sports-logo.svg";
import { SafeLink } from "../../SafeLink";

import { Facebookicon } from "../../../assets/facebookicon";
import { Instagramicon } from "../../../assets/instagramicon";

import Instafeed from "instafeed.js";

class InstagramFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientID: "09ec5dc4ee2b42abbacf29be681023bc",
      access_token: "1666601157.1677ed0.05bf59f4afb345878c017163814bb33f",
      userID: "1666601157",
      showFeed: false
    };
  }

  componentDidMount() {
    const feed = new Instafeed({
      get: "user",
      clientId: this.state.clientID,
      userId: this.state.userID,
      accessToken: this.state.access_token,
      sortBy: "most-liked",
      limit: 6,
      links: true,
      success: () => {
        this.setState({ showFeed: true });
      },
      template:
        '<a href="{{link}}" class="instafeedPost"><img class="instafeedImage" src="{{image}}" /><div class="InnerInstaFeedPost"><span class="InstaFeedLikes">{{likes}}</span><span class="InstaFeedComments">{{comments}}</span></div></a>'
    });

    feed.run();
  }

  render() {
    const showInstaFeed = this.state.showFeed;
    let instaFeed;

    if (showInstaFeed) {
      instaFeed = <div id="instafeed" />;
    }

    return (
      <div className="InstagramFeedContainer">
        <img
          className="Logo"
          src={logo}
          alt="United Cheer Sports e.V. Dortmund Schriftzug, Cheeleading, Cheerdance, Sport in Dortmund"
        />
        <div className="ContentContainer">
          {instaFeed}
          <div className="InstagramFeedLinks">
            <SafeLink
              className="SocialLink"
              to="https://www.facebook.com/UnitedCheerSports/"
              target="_blank"
            >
              <Facebookicon
                fill="#000000"
                size="30px"
                className="SocialLinkIcon"
              />
              UnitedCheerSports
            </SafeLink>
            <SafeLink
              className="SocialLink"
              to="https://www.instagram.com/unitedcheersports_cheerleader/"
              target="_blank"
            >
              unitedcheersports_cheerleader
              <Instagramicon
                fill="#000000"
                size="30px"
                className="SocialLinkIcon"
              />
            </SafeLink>
          </div>
        </div>
      </div>
    );
  }
}

export { InstagramFeed };
