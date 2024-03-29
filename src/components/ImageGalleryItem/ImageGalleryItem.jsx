import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

// ({ imgUrl, tags }) =>
export class ImageGalleryItem extends Component {
  static propTypes = {
    imgUrl: PropTypes.string.isRequired,
    largeImgUrl: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  state = {
    isModalOpen: false,
  };

  handleToggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { imgUrl, tags, largeImgUrl } = this.props;
    const { isModalOpen } = this.state;

    return (
      <li className={s.ImageGalleryItem}>
        <img
          onClick={this.handleToggleModal}
          className={s.ImageGalleryItemImage}
          src={imgUrl}
          alt={tags.split(',')}
        />
        {isModalOpen && (
          <Modal onCloseModal={this.handleToggleModal}>
            <img src={largeImgUrl} alt={tags.split(',')} />
          </Modal>
        )}
      </li>
    );
  }
}

//   {isModalOpen && (
//     <Modal onCloseModal={handleToggleModal}>
//       <img src={largeImgUrl} alt={tags.split(',')} />
//     </Modal>
// )}
