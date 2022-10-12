export const saveTask = async (task) => {

    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    };
    
    try {
        const peticion = await fetch("http://localhost:9010/task/", requestOptions)
        const data = await peticion.json();
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}