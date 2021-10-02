let apiURL = "https://rickandmortyapi.com/api/character/?page=1";

let data
let allData = []

const fetchRequest = {
    fetchData: async () => {
        const res = await fetch(apiURL);
        data = await res.json();
        allData.push(...data.results)
        if (data.info.next !== null) {
            apiURL = data.info.next
            return await fetchRequest.fetchData()
        } else {
            return allData;
        }
    },
};


export default fetchRequest