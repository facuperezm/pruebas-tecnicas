import useBooks from '../hooks/books'
import books from '../books.json'

const MOCK_BOOK = books.library[0].book

test('getBooks', () => {
	const { booksArray } = useBooks()
	const firstBook = {
		...MOCK_BOOK,
		pages: 30
	}
	expect(firstBook.pages).toEqual(30)

	expect(booksArray.length).greaterThan(0)
})
