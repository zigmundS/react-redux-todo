import React from 'react';

const tasks = [
    {
        title: "task 1",
        close: false
    },
    {
        title: "task 2",
        close: false
    },
    {
        title: "task 3",
        close: false
    },
]

const Panel = () => <div>
    <button>fill</button>
</div>

const List = () => <ul>
    {
        tasks.map(e => <li>{e.title}</li>)
    }
</ul>

function App() {
    return (
        <>
            <h1>todo list</h1>
            <Panel/>
            <List/>
        </>
    );
}

export default App;
