import { useState } from "react";
import FacebookStreamNav from "../../StreamNavs/FacebokStreamNav";
import FacebookStreamPanels from "./FacebookStreamPanels";
import { FixMeLater } from "../../../../types";

interface IProps {
    socialAccount: FixMeLater;
}

const FacebookStream = ({ socialAccount }: IProps) => {
    let [value, setValue] = useState<number>(0);

    return (
        <div>
            <FacebookStreamNav value={value} setValue={setValue} />
            <FacebookStreamPanels socialAccount={socialAccount} value={value} />
        </div>
    );
};

export default FacebookStream;
