class NotesApplication {
	let list = [];
	/**
	* get the author
	* get the list
	 */
	constructor(author) {
		this.authors = author;
		this.list = noteList;
	}

	/**
	 * creating a function to take the note_cotent argument
	 */
	function create(note_content) {
		this.list.push(note_content);
		return this.list;
	}

	/**
	 * function for listing out the notes in the list
	 */

	function listNotes() {

		for(let i = 0; i < this.list.length; i++) {
			return `Note ID: ${i}
			${this.list[i]}
			
			By Author ${author}`;
		}
	}

	/**
	 * function for get the note with the pass argument of note_id
	 */

	function get(note_id) {
		return this.list[note_id];
	}

	/** 
	 * searching the list by index to find related test
	 */

	function search(search_text) {
		return "Showing results for " + search_text;

		for(let i = 0; i<=this.list.length; i++) {
			if(this.list[i].search(search_text)) {
				return `Note ID: ${i}
				${this.list[i]}

				By Author ${author}`;
			}
		}
	}

	/**
	 *  deleting the list by using the note id
	 */

	 function delete(note_id) {
	 	let indexCheck = this.list[note_id];
	 	if(indexCheck > -1) {
	 		this.list.splice(indexCheck, 1);
	 	}
	 }

}