import React from "react";
import TwitterStreamNav from "../StreamNavs/TwitterStreamNav";

// interface Props {
//     social
// }

const Stream = () => {
    const [value, setValue] = React.useState<number>(0);
    return (
        <div>
            <TwitterStreamNav value={value} setValue={setValue} />
        </div>
    );
};

export default Stream;
