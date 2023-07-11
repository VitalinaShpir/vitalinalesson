import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    text: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.text.trim()) {
      return;
    }
    const newTodo = {
      text: this.state.text,
      id: nanoid(),
    };

    this.props.onSubmit(newTodo);
    this.setState({ text: '' });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <div>
        <h2>SearchForm</h2>
        <SearchFormStyled onSubmit={this.handleSubmit}>
          <InputSearch value={this.state.text} onChange={this.handleChange} />
          <FormBtn>
            <FiSearch />
          </FormBtn>
        </SearchFormStyled>
      </div>
    );
  }
}
