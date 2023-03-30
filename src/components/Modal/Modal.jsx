import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
    onCloseModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  render() {
    const { onCloseModal, children } = this.props;
    return (
      <div className={s.Overlay} onClick={onCloseModal}>
        <div className={s.Modal}>{children}</div>
      </div>
    );
  }
}
