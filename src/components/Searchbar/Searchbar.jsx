import { Component } from 'react';
import s from './Searchbar.module.css';
import { PropTypes } from 'prop-types';
// сюда должен прийти пропс сабмыт
export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.query.trim()) {
      alert('Please, enter your request');
      return;
    }
    // console.log(this.state.query);
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    // console.log(this.state.query);

    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormBtn}>
            <span>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            value={this.state.query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={e => this.setState({ query: e.target.value })}
          />
        </form>
      </header>
    );
  }
}
