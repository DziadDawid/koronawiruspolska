import React from "react";

function InfoTable(props) {
    return (
        <>
            <div className="infoText">
                ILOŚĆ ŚMIERCI
                <div className="infoCount" style={{ color: "#BA032F" }}>
                    {props.data.deaths}
                </div>
            </div>
            <div className="infoText">
                ILOŚĆ ZARAŻONYCH
                <div className="infoCount" style={{ color: "#E5E5E5" }}>
                    {props.data.confirmed}
                </div>
            </div>
            <div className="infoText">
                ILOŚĆ WYZDROWIAŁYCH
                <div className="infoCount" style={{ color: "#70A800" }}>
                    {props.data.recovered}
                </div>
            </div>
        </>
    );
}

export default InfoTable;
