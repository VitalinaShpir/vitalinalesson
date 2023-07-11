import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
  };

  handleSubmit = newTodo => {
  
    this.setState(prevState => ({ todos: [...prevState.todos, newTodo] }));
  };

  handleDeleteTodo = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };
  render() {
    const { todos } = this.state;
    return (
      <div>
        <Text>Todos</Text>
        <SearchForm onSubmit={this.handleSubmit} />
        <Grid>
          {todos.map(todo => (
            <GridItem key={todo.id}>
              <Todo
                text={todo.text}
                id={todo.id}
                handleDeleteTodo={this.handleDeleteTodo}
              />
            </GridItem>
          ))}
        </Grid>
      </div>
    );
  }
}
