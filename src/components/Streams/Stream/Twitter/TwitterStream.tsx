import React from "react";
import StreamNav from "../../StreamNavs/TwitterStreamNav";
import TwitterStreamPanels from "./TwitterStreamPanels";

interface Props {}

const TwitterStream = (props: Props) => {
    let [currentStream, setCurrentStream] = React.useState<number>(0);

    return (
        <div style={{ display: "flex", width: "100%" }}>
            <StreamNav value={currentStream} setValue={setCurrentStream} />
            <TwitterStreamPanels value={currentStream} />
        </div>
    );
};

export default TwitterStream;
