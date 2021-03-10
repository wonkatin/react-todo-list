import { Component } from 'react'
import ListItem from '../list-item/ListItem'
import placeHolderTasks from './placeHolderTasks.js'

class TodoList extends Component {
    state = {
       taskArray:  placeHolderTasks,
       newItemInput: ''
    }
    handleNewItemChange = (e) => {
        this.setState({
            newItemInput: e.target.value
        }, () => console.log(this.state))
    }
    
    handleNewItemSubmit = (e) => {
        e.preventDefault()
        this.setState((prevState, props) => {
            return {
                taskArray: [...prevState.taskArray, this.state.newItemInput]
            }
        }, () => this.setState({ newItemInput: '' }))
    }
    handleDeleteItem = (index) => {
        this.setState((prevState) => {
            let newTaskArray = [...prevState.taskArray]
            newTaskArray.splice(index, 1)
            return{
                taskArray: newTaskArray
            }
        })
    }
    handleClearList = () => {
        this.setState({
          taskArray: []
        }, () => console.log('clearing the list!', this.state))
      }
    render () {
        const tasks = this.state.taskArray.map((placeHolderTask, index) => {
            return (
                <ListItem 
                key={`task ${index}`}
                task={placeHolderTask.task}
                handleDeleteItem={() => { this.handleDeleteItem(index) }}
                />
            )
        })
        return (
            <div>
                <h1> Things I should stop procrastinating:</h1>
                <form onSubmit={this.handleNewItemSubmit}>
                    <input 
                    type='text'
                    id='task-input'
                    placeholder='Type an item here'
                    onChange={this.handleNewItemChange}
                    value={this.state.newItemInput}
                    />
                    <input 
                    type="submit"
                    value='Add Item'
                    />
                </form>
                <ul>
                    {tasks}
                </ul>
                <button onClick={this.handleClearList}>Clear List</button>
            </div>
        )
    }
}
export default TodoList;