class NotesApplication {
	let list = [];
	/*
	* get the author
	* get the list
	 */
	constructor(author){
		this.authors = author;
		this.list = noteList;
	}

	/*
	* creating a function to take the note_cotent argument
	 */
	function create(note_content){
		this.list.push(note_content);
	}
}