import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ResourceList = ({resource}) => { //resource is a prop
    const [resources, setResources] = useState([]);//this is a hook

   const fetchResource = async () => {
       const response = await axios.get(`https://swapi.co/api/${resource}`)

       setResources(response.data);
    }
    useEffect(()=>{
        fetchResource(resource);
    }, [resource]) //this solves problems, its basicaly the previous props, the value in the array is checked for change, solves useless updates
    return(
        
    <ul>{resources.results && resources.results.map(resource => <li>{resource.name}</li>)}</ul>
    )
}

export default ResourceList;