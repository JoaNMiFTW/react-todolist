import React, { useState } from 'react'

export const Add = ({setTaskListState}) => {

    const [taskState, setTaskState] = useState({
        title: ''
    })

    const {title} = taskState

    const saveTask = async (task) => {

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        };
        
        try {
            await fetch("http://localhost:9010/task/", requestOptions)
        } catch (error) {
            console.log(error)
        }
    }

    const getFormData = e => {
        e.preventDefault()
        
        let target = e.target
        let title = target.title.value

        let task = {
            title
        }

        saveTask(task)

        setTaskState(task)

        setTaskListState(items => {
            return [...items, task]
        })

    }
    
    return (
        <form onSubmit={getFormData} className="d-flex justify-content-center align-items-center mb-4">
            <div className="form-outline flex-fill">
                <input id='add-input' type="text" name='title' className="form-control form-control-lg" />
                <label className="form-label" htmlFor='add-input' >What do you need to do today?</label>
            </div>
            <button type="submit" className="btn btn-primary btn-lg ms-2">Add</button>
        </form>
    )
}
