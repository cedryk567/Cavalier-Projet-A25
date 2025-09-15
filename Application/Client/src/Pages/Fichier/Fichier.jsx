import React, { useState } from "react";
function Fichier() {

    const [loading, setLoading] = useState(false)

    const handleFileUpload = async (e) => {
        const file = e.target.files[0]
        
        if(!file) return
        setLoading(true)
        console.log(file)

        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset","Documents")
        data.append("cloud_name", "dsyvykrwo")

        const reponse = await fetch("https://api.cloudinary.com/v1_1/dsyvykrwo/image/upload",{
            method: "POST",
            body: data
        })

        const uploadImageURL = await reponse.json()
        console.log(uploadImageURL.url)
        setLoading(false)
    }


    return(
    <div>
        <input type="file"
        className="file-input"
        onChange={handleFileUpload} />
    </div>
    )
}

export default Fichier;