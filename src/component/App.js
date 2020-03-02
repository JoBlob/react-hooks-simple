import React, {useState} from 'react'
import ResourceList from './ResourceList'

const App =() => {
    const [resource, setResource] = useState('people')
        return (
        <div>
            <div>
                <button onClick={() => setResource('people')}>people</button>
                <button onClick={() => setResource('planets')}>planets</button>
                <button onClick={() => setResource('starships')}>starships</button>
            </div>
            <ResourceList resource={resource}/>
        </div>
    )}

export default App;