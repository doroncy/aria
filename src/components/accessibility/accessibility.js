import React, { Component } from 'react';
import accessibility from './accessibility.scss';

export default class Accessibility extends Component {
  constructor(props) {
    super();

    this.pageData = {
      bg: '',
      title: 'Fully Accessibility Statement',
      text: ``
    }

    this.state = {
      contentBoxVisible: false
    }

    this.toggleContentVisible = this.toggleContentVisible.bind(this);
  }

  toggleContentVisible() {
    this.setState({
      contentBoxVisible: !this.state.contentBoxVisible
    });
  }

  render() {
    return(
      <div className={`animated fadeIn height100 background background-fade`}>
        <div className="row content-page-wrap accessibility-wrap">
          <section>
            <h3>FULLY ACCESSIBILITY STATEMENT</h3>
            <p>
              The regulations require publishing an accessibility statement to show the commitments of ensuring equal access to information for people with disabilities
            </p>
          </section>
          <section>
            <h3>EQUALWEB PREMIUM PLAN: FULLY-MANAGED ACCESSIBILITY STATEMENT</h3>
            <p>
              EqualWeb is committed to promoting digital accessibility for people with disabilities. We are continually improving the user experience for all site visitors and applying the relevant accessibility standards. EqualWeb has taken careful measure to ensure an excellent user experience, regardless of the assistive technology being used to access this site.
            </p>
          </section>
          <section>
            <h3>CERTIFICATE & CONFORMANCE STATUS</h3>
            <p>
              This is to confirm that this site has been reviewed by software developers and remediated to meet standards set by the WCAG 2.1 (Web Content Accessibility Guidelines 2.1) at the AA level. The WCAG 2.1 AA level covers a wide range of recommendations for making Web content more accessible. WCAG 2.1 AA level guidelines include specific details on how to develop accessible Web content. This statement certifies that specific techniques were met for the Success Criterion detailed by WCAG. As a result, this website`s content has been made more accessible to a wider range of people with disabilities, including blindness and low vision, deafness and hearing loss, learning disabilities, cognitive limitations, limited movement, speech disabilities, photosensitivity and combinations of thereof. By implementing and adhering to these guidelines, this website`s web content has also become more usable to users in general. Using the accessibility widget is subject to the our privacy policy which can be found at the company`s website.
            </p>
          </section>
          <section>
            <h3>MEASURES TAKEN TO MAKE THIS WEBSITE MORE ACCESSIBLE</h3>
            <p>
              Equalweb`s Automatic system, team of developers, designers and content accessibility experts has reviewed, remediated and tested this website by performing multi-layered accessibility testing and analysis of the new and updated accessibility measures and web content. As part of the process to make this website more accessible, adjustments were made which include JavaScript & CSS work. The process also included accessibility modifications for assistive technologies (e.g. NVDA, JAWS etc.). Below is a complete list of accessibility modifications and functionalities made.
            </p>
          </section>
          <section>
            <h3>COMPATIBILITY WITH BROWSERS AND ASSISTIVE TECHNOLOGY</h3>
            <p>
              Our mission goal is to be able to support the widest array of browsers and assistive technologies as possible. We have therefore invested efforts to support popular systems with high market share, including Safari, Chrome, Firefox, and Opera. We have also addressed JAWS and NVDA assistive technologies for Windows and MAC.
            </p>
          </section>
          <section>
            <h3>IN ADDITION, THE FOLLOWING MODIFICATIONS WERE MADE DURING THE AUDIT TO MAKE THIS WEBSITE ACCESSIBLE:</h3>
            <ul>
              <li>Enables keyboard navigation</li>
              <li>Enables smart navigation</li>
              <li>Blinks Blocking</li>
              <li>OCR Image description</li>
              <li>Fonts - Ability to increase and decrease the site font, adjust, align etc`</li>
              <li>Voice command the browser using your voice</li>
              <li>Change color contrast based on dark background</li>
              <li>Change color contrast based on a light background</li>
              <li>Change the Site`s colors</li>
              <li>Matching and monochrome option for color blind people</li>
              <li>Change the font for readability</li>
              <li>Increase the cursor and change its color to black or white</li>
              <li>Increase the display to 200%</li>
              <li>Highlight links on the site</li>
              <li>Highlighting headers on the site</li>
              <li>Display an alternative description of the images</li>
              <li>Increase the content chosen by the cursor, showed in a tooltip</li>
              <li>Describe words by mouse selection</li>
              <li>Displays the site`s contents in a new window clearly and readable</li>
              <li>Enables users to type contents using the mouse</li>
            </ul>
          </section>

          <section>
            <h3>TECHNICAL SPECIFICATIONS</h3>
            <p>
              Accessibility of this website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
              HTML
              WAI-ARIA
              CSS
              JavaScript
            </p>
            <p>
              These technologies are relied upon for conformance with the accessibility standards used.
            </p>
          </section>
        </div>
      </div>
    );
  }
}
