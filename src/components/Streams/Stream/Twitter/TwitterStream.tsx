import React from "react";
import StreamNav from "../../StreamNavs/TwitterStreamNav";
import Tweet from "./Tweet";

interface Props {}

const TwitterStream = (props: Props) => {
    const [value, setValue] = React.useState<number>(0);

    return (
        <div>
            <Tweet />
            <StreamNav value={value} setValue={setValue} />
        </div>
    );
};

export default TwitterStream;
