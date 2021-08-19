const apiURL = "https://rickandmortyapi.com/api/character";

const fetchRequest = {
    fetchData: async () => {
        const res = await fetch(apiURL);
        const data = await res.json();
        return data;
    },
};

export default fetchRequest