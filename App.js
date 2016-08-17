class NotesApplication {
	let list = [];
	/*
	* get the author
	* get the list
	 */
	constructor(author) {
		this.authors = author;
		this.list = noteList;
	}

	/*
	* creating a function to take the note_cotent argument
	 */
	function create(note_content) {
		this.list.push(note_content);
		return this.list;
	}

	function listNotes() {

		for(let i = 0; i < this.list.length; i++) {
			return `Note ID ${i}
			${this.list(i)}
			
			By Author ${author}`;
		}
	}
}