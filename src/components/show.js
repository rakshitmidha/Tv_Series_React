import React , { Component } from 'react';
import '../styles/show.css'

class Show extends Component {

	addToFavorites(show) {
		this.props.Favorites(this.props.show);
	}

	render() {
		return(
			<article className={this.props.isFavorite ? 'is-favorite' : ''}>
				<h2>{this.props.show.show.name}</h2>
				<img alt = {this.props.show.show.name} src = {this.props.show.image.orignal} />
				<button onClick = {this.addToFavorites.bind(this)}>Favorite </button>
				</article>
		);
	}
}