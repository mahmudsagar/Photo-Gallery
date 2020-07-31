import {useState, useEffect} from 'react'
import {projectStorage, projectFireStore, timeStamp} from '../firebase/config'

const useStroage = (file) => {
    const [progress, setProgrees] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null)

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFireStore.collection('image')

        storageRef.put(file).on('state_changed', (snap) => {
            let percentge = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgrees(percentge)
        }, (err) =>{
            setError(err)
        }, async() => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timeStamp()
            collectionRef.add({url, createdAt})
            setUrl(url)
        })
    }, [file])

    return {progress, url, error}
}

export default useStroage;