import React , { Component } from 'react';
import '../styles/show.css'

class Shows extends Component {

	addToFavorites() {
		this.props.Favorites(this.props.serial);
	}

	render() {
		return(
			<article className={this.props.isFavorite ? 'is-favorite' : ''}>
				<h2>{this.props.serial.show.name}</h2>
				{(this.props.serial.show.image != null) ? <img alt = {this.props.serial.show.name} src = {this.props.serial.show.image.medium} /> : ''}
				<button onClick = {this.addToFavorites.bind(this)}>Favorite </button>
				</article>
		);
	}
}

export default Shows;