import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MovieService from './service.js';
import { Column, Row } from 'simple-flexbox';

class MovieCard extends Component {
	render() {
    	return (
		  <Card>
		    <Row flexGrow={1}>
			    <Column flexGrow={0.3}>
				    <CardMedia>
				      <img height="50" src={MovieService.getImageUrl(this.props.poster)} alt="poster" />
				    </CardMedia>
			    </Column>
				<Column flexGrow={0.7}>
				    <CardTitle title={this.props.title} />
				    <CardText>
				      {this.props.description}
				    </CardText>
			    </Column>
			 </Row>
		  </Card>
    	);
	}
}

export default MovieCard;