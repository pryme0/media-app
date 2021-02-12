import React from "react";
import StreamNav from "../../StreamNavs/TwitterStreamNav";

interface Props {}

const TwitterStream = (props: Props) => {
    const [value, setValue] = React.useState<number>(0);

    return (
        <div>
            <StreamNav value={value} setValue={setValue} />
            <h1>Twitter</h1>
        </div>
    );
};

export default TwitterStream;
