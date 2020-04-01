import React from "react";

function LastUpdateInfo(props) {
    return (
        <>
            <div className="updateContainer">
                <div className="infoText">
                    OSTATNIA AKTUALIZACJA
                    <div style={{ fontSize: "15px" }}>
                        (RRRR-MM-DD GG:MM:SS)
                    </div>
                    <div style={{ color: "#E5E5E5" }}>
                        {props.update.lastUpdate}
                    </div>
                </div>
            </div>
        </>
    );
}

export default LastUpdateInfo;
