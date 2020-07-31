import React, { useState } from 'react'

function UploadForm() {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null)

    const types = ['image/png', 'image/jpeg', 'image/jpg']

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('')
        }else{
            setFile(null)
            setError('Please select an image file (png or jpg)')
        }
    }

    return (
        <form>
            <input type="file" name="" id="" onChange={changeHandler}/>
            <div className="output">
                {error && <div className="erro">{error}</div>   }
                {file && <div> {file.name} </div> }
            </div> 
        </form>
    )
}

export default UploadForm
