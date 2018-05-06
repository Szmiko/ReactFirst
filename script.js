var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		poster: 'http://www.filmweb.pl/Harry.Potter.I.Kamien.Filozoficzny'
	},
	{
		id: 2,
		title: 'Król lew',
		desc: 'Film o lwie',
		poster: 'http://www.filmweb.pl/Krol.Lew'
	},
	{
		id: 3,
		title: 'Gniew oceanu',
		desc: 'Film o rybakach',
		poster: 'http://www.filmweb.pl/film/Gniew+oceanu-2000-954'
	},
	{
		id: 4,
		title: 'Siedem',
		desc: 'Film o seryjnym mordercy',
		poster: 'http://www.filmweb.pl/Siedem'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {}, movie.poster)
	);
});

var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));