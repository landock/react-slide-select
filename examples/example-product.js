//productList is defined in ./example-product-data.js

ReactDOM.render(
	React.createElement(
		SlideSelect,
		{
			type: 'product',
			items: productList,
			showDots: false,
			showArrows: true
		}
	),
	document.getElementById('example-product')
);
