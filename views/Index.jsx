const React = require('react');


class Index extends React.Component {
    render(){
        const toDo = this.props.todo
    return (
        <div>
        <h1>To Do List</h1>
        </div>
    )
    }
}

module.exports = Index;