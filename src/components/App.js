import React, { Component } from 'react';
import Shows from './show';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			favorite : [],
			shows : [],
		};
	}

		findShows(query) {
			fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
			 .then(response => response.json())
			 .then((results) => this.setState({ shows: results }));
		}

		addShowToFavorites(serial) {
			this.setState({
				favorite : this.state.favorite.conact(serial.show.id),
			});
		}

		isShowFavorite(show) {
			return this.state.favorite.includes(show.id);
		}

		onQueryChange(event) {
			this.findShows(event.target.value);
		}

	render() {
		return(
			<div className = "container">
				<h1>TV Jungle</h1>
				<input type = "search" onChange = {this.onQueryChange.bind(this)}/>

				<section>
					{this.state.shows.map((serial) => (
						<Shows serial = {serial} isFavorite = {this.isShowFavorite(serial)} Favorites = {this.addShowToFavorites.bind(this)} key = {serial.show.id} />
						))}
				</section>
			</div>

		);
	}
}

export default App;