import React from 'react';
import { FixMeLater } from '../../../../../types';
import StreamContainer from '../../../StreamContainer';

const Schedule = () => {
	let [currentStream, setCurrentStream] = React.useState<FixMeLater>([]);
	let [loading, setLoading] = React.useState<boolean>(true);

	return (
		<StreamContainer stream={'Schedule'} accountId={'id'} url={'schedule'} setCurrentStream={setCurrentStream} setLoading={setLoading}>
			<h1>Schedule for instagram</h1>
		</StreamContainer>
	);
};

export default Schedule;
