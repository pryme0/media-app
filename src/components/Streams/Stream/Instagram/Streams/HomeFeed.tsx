import React, { useEffect } from 'react';
import { FixMeLater } from '../../../../../types';
import StreamContainer from '../../../StreamContainer';
import { getInstagramFeeds } from '../../../../../services/instagramStream';
import { addError, addSuccess } from 'redux-flash-messages';
import Post from './Post';
import Loader from '../Loader';

interface IProps {
	socialAccount: FixMeLater;
}

const HomeFeed = ({ socialAccount }: IProps) => {
	let [loading, setLoading] = React.useState<boolean>(true);
	let [currentStream, setCurrentStream] = React.useState<FixMeLater>([]);

	useEffect(() => {
		getInstagramFeeds(socialAccount.accountId)
			.then(({ posts }: FixMeLater) => {
				if (posts) {
					if (posts.error) {
						if (posts.error.code === 190) addError({ text: 'Error getting data, hint try linking account' });
					} else setCurrentStream(posts.data);
					setLoading(false);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return <StreamContainer>{loading ? <Loader /> : currentStream.map((stream: FixMeLater) => <Post stream={stream} />)}</StreamContainer>;
};

export default HomeFeed;
