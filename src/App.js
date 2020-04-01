import React, { useState, useEffect } from "react";
import "./App.css";
import InfoTable from "./components/info-table";
import LastUpdateInfo from "./components/last-update-info";

function App() {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const key = process.env.REACT_APP_X_RAPIDAPI_KEY;
        const apiHost = process.env.REACT_APP_X_RAPIDAPI_HOST;

        const fetchedData = async () => {
            console.log("Fetching");
            const response = await fetch(
                "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Poland",
                {
                    method: "GET",
                    headers: {
                        "x-rapidapi-host": apiHost,
                        "x-rapidapi-key": key
                    }
                }
            );
            const requestParsed = await response.json();
            setData(requestParsed.data.covid19Stats[0]);
            setIsLoaded(true);
        };
        fetchedData();
    }, []);

    if (!isLoaded) {
        return (
            <>
                <div className="loaderContainer">
                    <div className="loader"></div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="App">
                <InfoTable data={data} />
            </div>
            <div className="bottomSection">
                <LastUpdateInfo update={data} />
            </div>
        </>
    );
}

export default App;
