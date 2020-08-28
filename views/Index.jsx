const React = require('react');


class Index extends React.Component {
    render(){
    return (
        <div>
        <h1>To Do List</h1>
        {this.props.toDos.map((toDo, index) => {
            return (
            <div>
            <h3>Chore: {toDo.ToDo}</h3>
            <li>Completed: {toDo.Completed ? `Chore Completed` : `Chore not Completed`}</li>
            </div>
            )})}
        <h1>Add to To Do List</h1>
        <form action="/to-do" method="POST">
            Add To Do Item Here: <input type="text" name="ToDo"/><br/>
            Completed: <input type="checkbox" name="Completed"/><br/>
            <input type="submit" value="Create To Do Item"/>
        </form>
        </div>
    )
    }
}

module.exports = Index;