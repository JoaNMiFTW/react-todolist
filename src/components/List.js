import React, { useEffect, useState } from 'react'

export const List = () => {

    const [tasks, setTasks] = useState([])
    const [errores, setErrores] = useState("")

    const getTasks = async () => {
        try {
            const headers = { 'Content-Type': 'application/json' }
            const peticion = await fetch("http://localhost:9010/task/", { headers })
            const data = await peticion.json();

            setTasks(data)
        } catch (error) {
            setErrores(error.message)
        }
    }

    //remove function
    const removeTask = async (id) => {
        try {
            const requestOptions = {
                method: 'DELETE',
                headers: { 
                    'Content-Type': 'application/json'
                }
            };
            
            await fetch("http://localhost:9010/task/"+id, requestOptions)

            getTasks()
        } catch (error) {
            setErrores(error.message)
        }
    }


    useEffect(() => {
        getTasks()
    }, [])

    return (
        <ul className="list-group mb-0">
            {
                tasks.map(task => {
                    return (
                        <li key={task.ID} className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                            <div className="d-flex align-items-center">
                                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                {task.title}
                            </div>
                            <a href="#!" onClick={() => removeTask(task.ID)} data-mdb-toggle="tooltip" title="Remove item">
                                <i className='fas fa-times text-primary'></i>
                            </a>

                        </li>
                    )
                })
            }

        </ul>
    )
}
