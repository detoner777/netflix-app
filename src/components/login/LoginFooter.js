import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";
import { generateMedia } from "styled-media-query";

class LoginFooter extends Component {
  state = {
    langContent: false
  };

  handleToggle = e => {
    e.preventDefault();
    this.setState({
      langContent: !this.state.langContent
    });
  };

  render() {
    return (
      <FooterContainer>
        <span style={{ marginLeft: "10%" }}>
          Questions? <Link>1-877-742-1335</Link>
        </span>
        <div className="footer-colons">
          <ul>
            <li>
              <Link>Gifts Card Terms</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Terms of use</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Privacy Statement</Link>
            </li>
          </ul>
        </div>
        {/* Language Button */}
        <div className="lang-btn" onClick={this.handleToggle}>
          <Icon icon={iosWorld} size={20} />
          English
          <Icon icon={arrowSortedDown} />
        </div>

        {/* Togle Language Content */}
        {this.state.langContent && (
          <div className="lang-toggle">
            <ul>
              <li>English</li>
            </ul>
            <ul style={{ position: "absolute", top: "55%" }}>
              <li>French</li>
            </ul>
          </div>
        )}
        <span
          style={{ marginLeft: "10%", fontSize: "0.9rem", marginTop: "2rem" }}
        >
          Netflix Canada
        </span>
      </FooterContainer>
    );
  }
}

export default LoginFooter;

//Media
const customMedia = generateMedia({
  lgDesktop: "1350px",
  tablet: "740px"
});

const FooterContainer = styled.footer`
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  padding-top: 3rem;
  padding-bottom: 6rem;
  margin-top: 6rem;
  position: relative;
  z-index: 5;

  .footer-colons {
    width: 80%;
    margin: 1rem auto 0;
    color: #999;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    ${customMedia.lessThan("tablet")`
            grid-template-columns: repeat(2, 1fr);
                      	
		`}
  }

  ul li {
    list-style: none;
    line-height: 2.5;
  }

  a {
    color: #999;
    font-size: 0.9rem;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  p {
    text-decoration: underline;
    cursor: pointer;
  }

  /* Language Button */
  .lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    margin-left: 10%;
    margin-top: 2rem;
    padding: 1rem;
    color: #999;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    cursor: pointer;
    ${customMedia.lessThan("tablet")`
    margin-left: 1rem;
  `}
  }
  /* Toggle Language Content */
  .lang-toggle {
    margin-left: 10%;
    position: absolute;
    margin-top: -1.1rem;
    cursor: pointer;
  }

  .lang-toggle ul {
    background: var(--main-deep-dark);
    width: 8rem;
    border: 1px solid #333;

    &:hover {
      background: #0085ff;
      color: #fff;
    }
  }
`;
