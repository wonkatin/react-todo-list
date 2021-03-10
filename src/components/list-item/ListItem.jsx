import { Component } from 'react'

class ListItem extends Component {
    render () {
        return (
            <div>
                <li>{this.props.task}</li>
                <button onClick={this.props.handleDeleteItem}>Delete</button>
            </div>
        )
    }
}

export default ListItem;