import React from "react";
import StreamNav from "../../StreamNavs/TwitterStreamNav";
import Tweets from "./Tweets";

interface Props {}

const TwitterStream = (props: Props) => {
    const [value, setValue] = React.useState<number>(0);

    return (
        <div style={{ display: "flex", width: "100%" }}>
            <StreamNav value={value} setValue={setValue} />
            <Tweets />
        </div>
    );
};

export default TwitterStream;
