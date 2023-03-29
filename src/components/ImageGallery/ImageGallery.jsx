import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { fetchImages } from 'components/services/imageApi';

export class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.props;
    const { images } = this.state;
    if (prevProps.query !== query || prevProps.page !== page) {
      this.setState({ isLoading: true });
      fetchImages(query, page)
        .then(data => {
          if (!data.hits.length) {
            this.setState({ images: [], isLoading: false });
            alert(`No results matching "${query}"`);
            return;
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
    const { images } = this.state;
    console.log(images);

    return (
      <ul>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            imgUrl={webformatURL}
            largeImgUrl={largeImageURL}
            tags={tags}
          />
        ))}
      </ul>
    );
  }
}
