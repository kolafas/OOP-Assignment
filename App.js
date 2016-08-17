class NotesApplication {
	/**
	* get the author
	* get the list
	* @param author
	* @property noteList
	 */
	constructor(author) {
		this.list = [];
		this.author = author;
		let noteList = this.list;
	}

	/**
	 * creating a function to take the note_cotent argument
	 * @params note_content
	 */
	createIt(note_content) {
		this.list.push(note_content);
		return this.list;
	}

	/**
	 * function for listing out the notes in the list
	 */

	listNotes() {

		for(let i = 0; i < this.list.length; i++) {
			return `Note ID: ${i}
			${this.list[i]}
			
			By Author ${this.author}`;
		}
	}

	/**
	 * function for get the note with the pass argument of note_id
	 * @param note_id
	 */

	getIt(note_id) {
		return this.list[note_id];
	}

	/** 
	 * searching the list by index to find related test
	 * @param search_text
	 */

	search(search_text) {
		console.log("Showing results for " + search_text);

		for(let i = 0; i<=this.list.length; i++) {
			if(this.list[i].search(search_text)) {
				return `Note ID: ${i}
				${this.list[i]}

				By Author ${this.author}`;
			}
		}
	}

	/**
	 *  deleting the list by using the note id
	 * @param note_id
	 */

	 deleteIt(note_id) {
	 	let indexCheck = this.list[note_id];
	 	if(indexCheck > -1) {
	 		this.list.splice(indexCheck, 1);
	 	}
	 }

	 /**
	  * function to edit the note by searching for the index
	  * @param note_id
	  * @param new_content
	  */
	 edit(note_id, new_content) {
	 	if(note_id < this.list.length) {
	 		this.list[note_id] = new_content;
	 		console.log(this.list[note_id]);
	 	}else{
	 		console.log("This would not work unless you type the number from 0" + this.list.length);
	 	}
	 }

}
