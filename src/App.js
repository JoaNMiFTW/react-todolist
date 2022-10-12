import './App.min.css';
import './custom.css';
import { useState } from 'react';
import { Add } from './components/Add';
import { List } from './components/List';

function App() {

    const [taskListState, setTaskListState] = useState([])

    return (
        <section className="vh-100 bgcust">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">

                        <div className="card bdrds">
                            <div className="card-body p-5">

                                <h6 className="mb-3">Awesome Todo List</h6>

                                <Add setTaskListState={setTaskListState} />

                                <List taskListState={taskListState} setTaskListState={setTaskListState} />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;
