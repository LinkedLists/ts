const apiURL = "https://raw.githubusercontent.com/ajhyndman/fire-emblem-working-title/master/packages/fire-emblem-heroes-stats/stats.json";

const fetchRequest = {
    fetchData: async () => {
        const res = await fetch(apiURL);
        const data = await res.json();
        return data;
    },
};

export default fetchRequest