import React, { useEffect } from 'react'
import useStroage from '../hooks/useStorage'


export default function ProgressBar({file, setFile}) {

    const {url, progress} = useStroage(file);
    
    useEffect(() => {
        if (url) {
            setFile(null)
        }
    }, [url, setFile])

    return (
        <div className="progress-bar" style={{width: progress + '%'}}>
        </div>
    )
}
