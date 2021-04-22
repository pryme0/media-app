import React, { useEffect, useState } from 'react';
import { getFacebookPost } from '../../../../../services/facebookStream';
import { FixMeLater } from '../../../../../types';
import StreamContainer from '../../../StreamContainer';
import { likePost, unLikePost } from '../../../../../services/facebookStream';
import { addError, addSuccess } from 'redux-flash-messages';
import { updateCacheData } from '../../../../../services/utils';
import Loader from '../Loader';
import Post from './Post';

interface IProps {
	socialAccount: FixMeLater;
}

const HomeFeed = ({ socialAccount }: IProps) => {
	let [posts, setPosts] = useState<FixMeLater[]>([]);
	let [loading, setLoading] = React.useState<boolean>(true);

	const togglePostLike = async (postId: string | number, hasLike: boolean) => {
		if (hasLike) {
			let result: FixMeLater = await unLikePost(postId);
			if (!result.error) {
				let updateFeeds = posts.map((post) =>
					post.id === postId
						? {
								...post,
								likes: {
									...post.likes,
									summary: {
										...post.likes.summary,
										has_liked: false,
										total_count: post.likes.summary.total_count - 1,
									},
								},
						  }
						: post
				);
				setPosts(updateFeeds);
				updateCacheData(socialAccount.accountId, updateFeeds);
			}
		} else {
			let result: FixMeLater = await likePost(postId);
			if (!result.error) {
				let updateFeeds = posts.map((post) =>
					post.id === postId
						? {
								...post,
								likes: {
									...post.likes,
									summary: {
										...post.likes.summary,
										has_liked: true,
										total_count: post.likes.summary.total_count + 1,
									},
								},
						  }
						: post
				);
				setPosts(updateFeeds);
				updateCacheData(socialAccount.accountId, updateFeeds);
			}
		}
	};

	useEffect(() => {
		getFacebookPost(socialAccount.accountId).then((res: FixMeLater) => {
			setLoading(false);

			if (res.posts.error) {
				if (res.posts.error.code === 190) addError({ text: 'Password of current account changed. Try relinking account..' });
				else addError({ text: res.posts.error.message });
			} else setPosts(res.posts.data);
		});
	}, []);

	return (
		<StreamContainer
			stream={'Home Feed'}
			accountId={socialAccount.accountId}
			url={`/facebook/getPagePosts/${socialAccount.accountId}`}
			setCurrentStream={setPosts}
			setLoading={setLoading}
		>
			{loading ? <Loader /> : posts && posts.map((post: FixMeLater) => <Post post={post} togglePostLike={togglePostLike} />)}
		</StreamContainer>
	);
};

export default HomeFeed;
