const Auth_Key = "563492ad6f91700001000001fbae0fb882b04b2d82dd1a7e074b3425";
const BASE_URL = "https://api.pexels.com/v1";

export function fetchPhotos(search) {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await fetch(
                `${BASE_URL}/search?query=${search}&per_page=10&page=1`, 
                {headers: {Auth_Key}}
            );
            if(response.status !== 200) {
                throw new Error();
            }
            const data = await response.json();
            return resolve(data);
        } catch(error) {
            return reject(error);
        }
    })
} 