import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { fetchImages } from 'components/services/imageApi';
import s from './ImageGallery.module.css';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    onLoadMore: PropTypes.func.isRequired,
  };

  state = {
    images: [],
    isLoading: false,
    isRenderBtn: true,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.props;
    const { images, isRenderBtn } = this.state;

    if (prevProps.query !== query || prevProps.page !== page) {
      this.setState({ isLoading: true });

      fetchImages(query, page)
        .then(data => {
          console.log(data);
          // || data.totalHits
          if (!data.hits.length) {
            this.setState({ images: [], isLoading: false });
            if (data.totalHits <= data.hits.length) {
              return alert(`No results matching "${query}"`);
            } else {
              console.log(isRenderBtn);
              this.setState({ isRenderBtn: false });
            }
          }

          this.setState({
            images: page === 1 ? data.hits : [...images, ...data.hits],
            isLoading: false,
          });
        })
        .catch(error => console.log(error.message));
    }
  }

  render() {
    const { images, isLoading, isRenderBtn } = this.state;
    const { onLoadMore } = this.props;

    return (
      <>
        <ul className={s.ImageGallery}>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              imgUrl={webformatURL}
              largeImgUrl={largeImageURL}
              tags={tags}
            />
          ))}
        </ul>
        {isLoading && <Loader />}
        {images.length > 0 && isRenderBtn && (
          <Button children={'Load more'} onClick={onLoadMore} />
        )}
      </>
    );
  }
}
