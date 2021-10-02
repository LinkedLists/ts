let apiURL = "https://rickandmortyapi.com/api/character/?page=1";

let data
let allData = {}

const fetchRequest = {
    fetchData: async () => {
        const res = await fetch(apiURL);
        data = await res.json();
        allData = Object.assign(allData, data.results)
        if (data.info.next !== null) {
            apiURL = data.info.next
            return await fetchRequest.fetchData()
        } else {
            return allData;
        }
    },

    // fetchAllCharacters() {
    //     while (data.info.next) {
    //         apiURL = data.info.next
    //         fetchRequest.fetchData()
    //     }
    //     return data
    // }

};


export default fetchRequest