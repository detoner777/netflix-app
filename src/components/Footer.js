import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Icon} from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld';
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown';
import {generateMedia} from 'styled-media-query';

class Footer extends Component {
    state = {
        langContent: false
    }

    handleToggle = e => {
        e.preventDefault();
        this.setState({
            langContent: !this.state.langContent
        })
    }

    render() {
        return (
            <FooterContainer>
                <span style={{marginLeft: '15%', fontSize: '1.125rem'}}>
                    Questions? <Link>1-877-742-1335</Link>
                </span>
            <div className='footer-colons'>
                <ul>
                    <li>
                        <Link>FAQ</Link>
                    </li>
                    <li>
                        <Link>Investor Relations</Link>
                    </li>
                    <li>
                        <Link>Way to Watch</Link>
                    </li>
                    <li>
                        <Link>Corporate Information</Link>
                    </li>
                    <li>
                        <Link>Netflix Originals</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link>Help Center</Link>
                    </li>
                    <li>
                        <Link>Jobs</Link>
                    </li>
                    <li>
                        <Link>Terms of Use</Link>
                    </li>
                    <li>
                        <Link>Contact Us</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link>Account</Link>
                    </li>
                    <li>
                        <Link>Reddem Gift Cards</Link>
                    </li>
                    <li>
                        <Link>Privacy</Link>
                    </li>
                    <li>
                        <Link>Speed Test</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link>Media Center</Link>
                    </li>
                    <li>
                        <Link>By Gift Cards</Link>
                    </li>
                    <li>
                        <Link>Cookies</Link>
                    </li>
                    <li>
                        <Link>Speed Test</Link>
                    </li>
                </ul>
                {/* Language Button */}
                <div className='lang-btn' onClick={this.handleToggle}>
                <Icon icon={iosWorld} size={20} />
                 English
                <Icon icon={arrowSortedDown}  />
                </div> 
             </div>
             {/* Togle Language Content */}
             {this.state.langContent && (
             <div className="lang-toggle">
                 <ul>
                     <li>English</li>
                 </ul>
                 <ul style={{position:'absolute', top: '55%'}}>
                     <li>French</li>
                 </ul>
             </div>
             )}
             <span style={{marginLeft: '15%', fontSize: '0.9rem'}}>Netflix Canada</span>
            </FooterContainer>
            
        );
    }
}

export default Footer;

//Media
const customMedia = generateMedia({
    lgDesktop: '1350px',
    tablet: '740px'
})


const FooterContainer = styled.footer`
    background: var(--main-deep-dark);
    padding-top: 10rem;
    padding-bottom: 3rem;
    color: #999;

    .footer-colons {
        width: 70%;
        margin: 1rem auto 0;
        font-size:0.9rem;
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        ${customMedia.lessThan('tablet')`
            grid-template-columns: repeat(2, 1fr);
                      	
		`}
   }

   ul li {
    list-style: none;
    line-height: 2.5;
   }

   a {
       color: #999;
   }

   a:hover{
       text-decoration: underline;
       cursor: pointer;
   }

//Language Button
.lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0 2rem;
}
/* Toggle Language Content */
.lang-toggle {
    margin-left: 14.8%;
    position: absolute;
    margin-top: -3.1rem;
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