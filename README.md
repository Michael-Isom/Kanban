Kanban

Introduction

This Kanban Board app allows you to view and manage tasks in a simple, interactive interface. Built using modern web technologies, it offers a clean, intuitive user experience for managing tasks efficiently.

You can visit the online version of this site by clicking here (if available).

Table of Contents

	•	Required Technologies
	•	Installation
	•	Usage
	•	Code Snippet
	•	License
	•	Technologies Used
	•	Credits
	•	Contact Me

Required Technologies

This project requires the following technologies:
	•	Node.js: The JavaScript runtime for building and running the app.
	•	npm: Node.js package manager for managing dependencies.

You can download Node.js and npm from the official website. Follow the installation instructions provided on the site.

Installation

	1.	Clone the repository to your machine:
		2.	Navigate to the /develop directory:

		cd develop

			3.	Install the necessary dependencies by running:

			npm install

		4.	In the /develop/server directory, locate the .env.EXAMPLE file. Copy it and rename the copy to .env.
	5.	Add your personal access token and other necessary credentials (if required) to the .env file. Ensure sensitive information like your database or API keys are stored here.
	6.	Start the Kanban Board by running:

	npm run start:dev		

	Usage

Once the server is running, you can access the Kanban Board app in your browser at http://localhost:3000. From there, you can view and interact with the board.

Code Snippet

Example of how to initialize and display the board:

import { createBoard } from './kanban.js';

const board = createBoard();
board.addTask('New Task', 'To Do');

License

This project is licensed under the MIT License.

Technologies Used

	•	Node.js: For installing packages and building the app.
	•	Vite: For running the local server and development environment.
	•	Visual Studio Code: For writing and editing code.
	•	Mozilla Developer Network (MDN): For reference on JavaScript features and best practices.
	•	W3Schools: For tutorials and examples.
<img width="1728" alt="Screenshot 2024-12-20 at 11 19 21 AM" src="https://github.com/user-attachments/assets/2cb1bdfb-9104-4476-9676-b1b856b51a21" />
<img width="1728" alt="Screenshot 2024-12-20 at 11 24 14 AM" src="https://github.com/user-attachments/assets/5c5c4a39-2ef2-4661-b0e0-890839354171" />

	
