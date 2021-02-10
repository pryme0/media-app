import React from "react";
import FacebookStreamNav from "../StreamNavs/FacebokStreamNav";
import TwitterStream from "./Twitter/TwitterStream";
import { FixMeLater } from "../../../types";

interface IProps {
    socialAccount: FixMeLater;
}

const Stream = ({ socialAccount }: IProps) => {
    const [value, setValue] = React.useState<number>(0);

    // this block of code will render different stream base on the social provider type
    const renderStreamSocial = () => {
        switch (socialAccount.account.accountType.toUpperCase()) {
            case "TWITTER":
                return <TwitterStream />;
                break;
            case "FACEBOOK":
                return <FacebookStreamNav value={value} setValue={setValue} />;
                break;
            case "INSTAGRAM":
                return <h1>Instagram</h1>;
                break;
            case "LINKEDIN":
                return <h1>Linkedin</h1>;
                break;
            default:
                break;
        }
    };

    return renderStreamSocial();
};

export default Stream;
