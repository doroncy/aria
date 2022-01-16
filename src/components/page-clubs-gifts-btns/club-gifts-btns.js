import React, { Component } from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';

export default class ClubGiftsBtns extends Component {
  constructor(props) {
    super();

    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    let themeClassName = '';
    let btnColorClassName = '';
    let mailIconClass = 'icon-icon_mail'

    if (this.props.theme === 'dark') {
      themeClassName = 'dark';
      btnColorClassName = 'color-gold';
      mailIconClass = 'icon-icon_mail_G';
    }

    let joinMomentsBtn = this.props.joinMoments === 'true'
      ? (
        <a onClick={this.openModal}>
          <div className={`content-box-title content-box-title-small ${btnColorClassName}`}>Join the Aria Moments club</div>
        </a>
      )
      : (
        <Link to="/moments">
          <div className={`content-box-title content-box-title-small ${btnColorClassName}`}>Join the Aria Moments club</div>
        </Link>
      );

    return(
      <div className="action-btn-wrap">
        <div className="action-btn-inner">
          <div className="row">
            <div className="small-12 medium-6 columns moments-club-wrap">
              <div className={`content-box table-btn ${themeClassName}`}>
                {joinMomentsBtn}
              </div>
            </div>
            <div className="small-12 medium-6 columns gift-card-wrap">
              <div className={`content-box table-btn ${themeClassName}`}>
                <a href="https://buyme.co.il/gift-card/364463#!/?display=money" target="_blank">
                  <div className={`content-box-title content-box-title-small ${btnColorClassName}`}>Get a gift card</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`content-box social-media-btn mail-btn show-for-medium ${themeClassName}`}>
          <a href="mailto:rona.eldad@gmail.com?subject=ARIA%20WEBSITE">
            <div className={`SVGIcon ${mailIconClass}`}></div>
          </a>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Choose language"
        >
          <button className="ReactModal__close font-ExBold" onClick={this.closeModal}>X</button>
          <div className="ReactModal__content_inner">
            <h3 className="font-ExBold">Choose language</h3>
            <div className={`content-box table-btn ${themeClassName}`}>
              <a href="http://www.valuecard.co.il/aria/tofes_rishum_en.asp" target="_blank">
                <div className={`content-box-title content-box-title-small ${btnColorClassName}`}>English</div>
              </a>
            </div>
            <div className={`content-box table-btn ${themeClassName}`}>
              <a href="http://www.valuecard.co.il/aria/tofes_rishum_he.asp" target="_blank">
                <div className={`content-box-title content-box-title-small ${btnColorClassName}`}>עברית</div>
              </a>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
