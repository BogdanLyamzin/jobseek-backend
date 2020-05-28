module.exports = function queryCreator(data) {
	return Object.keys(data).reduce((queryObject, param) => {
		queryObject[param] = data[param];

		return queryObject;
	}, {});
};
