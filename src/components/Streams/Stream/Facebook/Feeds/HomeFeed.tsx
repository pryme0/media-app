import { useEffect, useState } from "react";
import { getFacebookPost } from "../../../../../services/facebookStream";
import { FixMeLater } from "../../../../../types";
import StreamContainer from "../../../StreamContainer";

interface IProps {
    socialAccount: FixMeLater;
}

const HomeFeed = ({ socialAccount }: IProps) => {
    let [posts, setPosts] = useState<FixMeLater[]>([]);

    useEffect(() => {
        getFacebookPost(socialAccount.accountId).then((res: FixMeLater) => {
            setPosts(res.posts.data);
        });
    }, []);

    return (
        <StreamContainer>
            <h1>Facebook Home Feeds </h1>
            {posts.map((post: FixMeLater) => (
                <p>{post.message}</p>
            ))}
        </StreamContainer>
    );
};

export default HomeFeed;
