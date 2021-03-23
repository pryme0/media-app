import React, { useEffect, useState } from 'react';
import { getFacebookPost } from '../../../../../services/facebookStream';
import { FixMeLater } from '../../../../../types';
import StreamContainer from '../../../StreamContainer';
import { likePost, unLikePost } from '../../../../../services/facebookStream';
import Loader from '../Loader';
import Post from './Post';

interface IProps {
	socialAccount: FixMeLater;
}

const HomeFeed = ({ socialAccount }: IProps) => {
	let [posts, setPosts] = useState<FixMeLater[]>([]);
	let [loading, setLoading] = React.useState<boolean>(true);
	const togglePostLike = (postId: string | number, hasLike: boolean) => {
		if (hasLike) {
			unLikePost(postId)
				.then((result) => {
					let newPostsObj = posts.map((post) =>
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
					setPosts(newPostsObj);
				})
				.catch((error) => {
					console.log(error.response);
				});
		} else {
			likePost(postId)
				.then((result) => {
					let newPostsObj = posts.map((post) =>
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
					setPosts(newPostsObj);
				})
				.catch((error) => {
					console.log(error.response);
				});
		}
	};

	useEffect(() => {
		getFacebookPost(socialAccount.accountId).then((res: FixMeLater) => {
			setLoading(false);
			if (res.error) {
				console.log('Code ', res.error.error_subcode, 'Message ', res.error.message, 'Type ', res.error.type);
			}
			setPosts(res.posts.data);
		});
	}, []);

	return (
		<StreamContainer>
			{loading ? <Loader /> : posts && posts.map((post: FixMeLater) => <Post post={post} togglePostLike={togglePostLike} />)}{' '}
		</StreamContainer>
	);
};

export default HomeFeed;
