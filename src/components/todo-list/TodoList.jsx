import { Component } from 'react'
import ListItems from '../list-item/ListItems'

class TodoList extends Component {
    render () {
        return (
            <div>
                <h1> Things I should stop procrastinating:</h1>
                <ul>
                    <ListItems />
                </ul>
            </div>
        )
    }
}
export default TodoList;