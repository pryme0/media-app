import React from "react";
import Post from "./Post";
import StreamContainer from "../../StreamContainer";
import { useStyles } from "./styles/Tweet.styles";

interface Props {}

const Tweet = (props: Props) => {
    return (
        <StreamContainer>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </StreamContainer>
    );
};

export default Tweet;
