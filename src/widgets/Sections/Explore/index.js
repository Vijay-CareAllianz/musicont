import React from 'react';
import { StyleSheet } from 'react-native';

import Container from '../Container';
import * as Card from '../../../components/Cards';

const Index = ({ style = {} }) => {
	return (
		<Container style={style} title="For you">
			<Card.Explore card={1} style={{ marginLeft: 20 }} />
			<Card.Explore card={2} />
			<Card.Explore />
		</Container>
	);
};

export default Index;

const styles = StyleSheet.create({});
