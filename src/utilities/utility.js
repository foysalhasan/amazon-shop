const getDB = () => {
	let db = localStorage.getItem('shopping_cart')
	db = db ? JSON.parse(db) : {}
	return db
}

const addToDB = (item) => {
	const db = getDB()
	if (item in db) {
		db[item] = db[item] + 1
	} else {
		db[item] = 1
	}
	saveDB(db)
}

const saveDB = (db) => {
	const savedDB = JSON.stringify(db)
	localStorage.setItem('shopping_cart', savedDB)
}

const removeItem = (item) => {
	const db = getDB()
	delete db[item]
	saveDB(db)
}

const clearDB = () => {
	localStorage.removeItem('shopping_cart')
}

export { addToDB, removeItem, clearDB, getDB }
