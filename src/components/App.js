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
			 .then((results) => this.setState({
			 	shows : results.results
			 }));
		}

		addShowToFavorites(show) {
			this.setState({
				favorite : this.state.shows.show.id,
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
					{this.state.shows.map((show) => (
						<Shows show = {show} isFavorite = {this.props.isShowFavorite(show)} Favorites = {this.addShowToFavorites.bind(this)} key = {show.show.id} />
						))}
				</section>
			</div>

		);
	}
}

export default App;