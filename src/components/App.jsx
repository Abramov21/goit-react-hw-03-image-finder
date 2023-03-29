import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
export class App extends Component {
  state = {
    query: '',
    page: 1,
  };
  changeQuery = query => {
    this.setState({ query, page: 1 });
    // console.log(query);
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
    console.log('handleLoadMore');
  };
  // componentDidUpdate(prevState, prevProps) {
  //   console.log(123);
  // }

  render() {
    // console.log(this.state.query);
    const { query, page } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery
          query={query}
          page={page}
          onLoadMore={this.handleLoadMore}
        />
      </>
    );
  }
}
