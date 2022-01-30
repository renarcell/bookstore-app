export default class BookstoreService {
    getBooks = () => {
		const books = [
            {
                id: 1,
                title: "Harry Potter and the Philosopher's Stone Deluxe Illustrated Slipcase Edition",
                author: "J. K. Rowling",
				price: 200,
				image: "https://www.britishbook.ua/upload/resize_cache/iblock/7ea/411_377_174b5ed2089e1946312e2a80dcd26f146/kniga_harry_potter_and_the_philosopher_s_stone_deluxe_illustrated_slipcase_edition.png",
                url: "https://www.britishbook.ua/detail/harry-potter-and-the-philosopher-s-stone-illustrated-edition_2/",
            },
            {
                id: 2,
                title: "Essential Grammar in Use Fourth Edition with answers",
                author: "Raymond Murphy",
				price: 20,
				image: "https://www.britishbook.ua/upload/resize_cache/iblock/a8e/481_648_174b5ed2089e1946312e2a80dcd26f146/kniga_essential_grammar_in_use_fourth_edition_with_answers.jpg",
                url: "https://www.britishbook.ua/detail/essential-grammar-in-use-fourth-edition-with-answers/",
            },
            {
                id: 3,
                title: "Insight",
                author: "Fiona Beddall",
				price: 20,
				image: "https://www.britishbook.ua/upload/resize_cache/iblock/7ff/353_500_174b5ed2089e1946312e2a80dcd26f146/uchebnik_insight_elementary_student_s_book.jpg",
                url: "https://www.britishbook.ua/detail/insight-elementary-student-s-book/",
            },
            {
                id: 4,
                title: "The Nightingale",
                author: "Kristin Hannah",
				price: 12,
				image: "https://www.britishbook.ua/upload/resize_cache/iblock/9f8/297_450_174b5ed2089e1946312e2a80dcd26f146/kniga_the_nightingale.jpeg",
                url: "https://www.britishbook.ua/detail/the-nightingale/",
            },
            {
                id: 5,
                title: "The Little Prince",
                author: "Antoine de Saint-Exupery",
				price: 5,
				image: "https://www.britishbook.ua/upload/resize_cache/iblock/b3b/269_448_174b5ed2089e1946312e2a80dcd26f146/kniga_the_little_prince.jpg",
                url: "https://www.britishbook.ua/detail/the-little-prince/",
            },
            {
                id: 6,
                title: "Sapiens. A Brief History of Humankind",
                author: "Yuval Noah Harari",
				price: 15,
				image: "https://www.britishbook.ua/upload/resize_cache/iblock/145/292_448_174b5ed2089e1946312e2a80dcd26f146/kniga_sapiens_a_brief_history_of_humankind.png",
                url: "https://www.britishbook.ua/detail/sapiens-a-brief-history-of-humankind/",
            },
        ];
		return new Promise((recive, reject) => {
			setTimeout(() => {
				const rnd = Math.random();
				if (rnd < 0.75) {
					recive(books);
				} else {
					reject(new Error('Error loading data!'));
				}
			}, 700);
		});
    } 
}