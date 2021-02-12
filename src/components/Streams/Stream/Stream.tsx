import React from "react";
import FacebookStreamNav from "../StreamNavs/FacebokStreamNav";
import TwitterStream from "./Twitter/TwitterStream";
import { FixMeLater } from "../../../types";

interface IProps {
    socialAccount: FixMeLater;
}

const Stream = ({ socialAccount }: IProps) => {
    const [value, setValue] = React.useState<number>(0);
    const streamProviderType = socialAccount.account.accountType.toUpperCase();

    // this block of code will render different stream base on the social provider type
    const renderStreamSocial = (): JSX.Element => {
        if (streamProviderType === "TWITTER") {
            return <TwitterStream />;
        } else if (streamProviderType === "FACEBOOK") {
            return <FacebookStreamNav value={value} setValue={setValue} />;
        } else if (streamProviderType === "INSTAGRAM") {
            return <h1>Instagram</h1>;
        } else if (streamProviderType === "LINKEDIN") {
            return <h1>Linkedin</h1>;
        } else {
            return <h1>Stream</h1>;
        }
    };

    return renderStreamSocial();
};

export default Stream;
