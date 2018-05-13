var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		poster: 'http://1.fwcdn.pl/po/05/71/30571/7529392.6.jpg'
	},
	{
		id: 2,
		title: 'Król lew',
		desc: 'Film o lwie',
		poster: 'http://1.fwcdn.pl/po/68/78/6878/6927221.6.jpg'
	},
	{
		id: 3,
		title: 'Gniew oceanu',
		desc: 'Film o rybakach',
		poster: 'http://1.fwcdn.pl/po/09/54/954/7518080.6.jpg'
	},
	{
		id: 4,
		title: 'Siedem',
		desc: 'Film o seryjnym mordercy',
		poster: 'http://1.fwcdn.pl/po/07/02/702/6967799.3.jpg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.poster, alt: movie.desc})
	);
});

var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));