import { Component } from 'react';

// сюда должен прийти пропс сабмыт
export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    // if (!query.trim()) {
    //   toast.error('Please, enter your request');
    //   return;
    // }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
    // console.log(this.props);
  };

  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            value={this.state.query}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={e => this.setState({ query: e.target.value })}
          />
        </form>
      </header>
    );
  }
}
