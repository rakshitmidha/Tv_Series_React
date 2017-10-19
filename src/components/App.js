import React, { Component } from 'react';
import Shows from './show';
import '../styles/app.css';

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
			console.log(serial);
			this.setState({
				favorite : this.state.favorite.concat(serial.show.id),
			});
		}

		isShowFavorite(serial) {
			return this.state.favorite.includes(serial.show.id);
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