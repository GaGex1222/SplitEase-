

const getBillImages = async () => {
    try{
        const res = await fetch("https://api.pexels.com/v1/search?query=nature&per_page=8", {
            headers: {
                "Authorization": PIXELS_API_KEY
            }
        });

        const data = await res.json()
        data['photos'].map((photo: object) => {

        })

    } catch(err) {
        console.log("Error getting images from pixels", err)
    }
    
}

getBillImages()