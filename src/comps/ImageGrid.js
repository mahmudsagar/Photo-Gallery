import React from 'react'
import useFireStore from '../hooks/useFireStore'

export default function ImageGrid() {
    const {docs} = useFireStore('image')
    console.log(docs)
    return (
        <div className="img-grid">
            {docs && docs.map(doc =>(
                <div className="img-wrap" key={doc.id}> 
                    <img src={doc.url} alt={doc.id}/>
                </div>
            ))}
        </div>
    )
}
