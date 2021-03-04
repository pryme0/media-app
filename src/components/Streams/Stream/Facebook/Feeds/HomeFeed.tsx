import { useEffect, useState } from 'react';
import { getFacebookPost } from '../../../../../services/facebookStream';
import { FixMeLater } from '../../../../../types';
import StreamContainer from '../../../StreamContainer';
import Post from './Post';

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
			{posts.map((post: FixMeLater) => (
				<Post post={post} />
			))}
		</StreamContainer>
	);
};

export default HomeFeed;
