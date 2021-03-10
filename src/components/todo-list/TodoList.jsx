import { Component } from 'react'
import ListItem from '../list-item/ListItem'
import placeHolderTasks from './placeHolderTasks.js'

class TodoList extends Component {
    state = {
       taskArray:  placeHolderTasks
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
                key={`${index}`}
                task={placeHolderTask.task}
                />
            )
        })
        return (
            <div>
                <h1> Things I should stop procrastinating:</h1>
                <ul>
                    {tasks}
                </ul>
                <button onClick={this.handleClearList}>Clear List</button>
            </div>
        )
    }
}
export default TodoList;