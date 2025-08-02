📺 YouTube Awards Voting Platform
The YouTube Awards Website is a full-stack web platform where YouTube content creators can register for various award categories, and users can vote for their favorite creators. Admins manage creator approvals and control when voting results go live. It's built for online talent recognition through transparent public voting.

🌟 Features
🎥 For Creators:
Register by uploading personal details, profile image, and award category

Each creator can apply for one category only

Status managed by admin: approved / disapproved

🧑‍💻 For Users:
Sign up and log in to vote

Vote for one creator per category

View voting results (once admin activates)

🛠️ For Admin:
Login to access admin dashboard

View and approve/disapprove creators by category

Set voting time range

Activate result visibility for users

View top voted creators per category

🧰 Tech Stack
Layer	Technology
Frontend	HTML, CSS, EJS Templates
Backend	Node.js + Express.js
Database	MySQL
Auth	Express Sessions (for user/admin login)
File Uploads	multer for image/PDF upload

📁 Folder Structure
csharp
Copy
Edit
youtube_awards_website/
├── public/              # Static files (CSS, images, winner photos)
├── routes/              # Express route handlers
├── views/               # EJS templates (game.ejs, health.ejs, awards.ejs, result.ejs, etc.)
├── models/              # DB query files (optional separation)
├── app.js               # Main server file
├── theawards.sql         # MySQL schema
└── README.md
🗳️ Voting Workflow
Admin sets voting start & end time.

Users log in and vote per category.

Each vote is stored with user_id, creator_id, and field_id.

Admin clicks "Results Out" to make winners public.

Winner is determined based on highest vote count per category.

⚙️ Setup Instructions
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/Chanchala9876/youtube_awards_website.git
cd youtube_awards_website
2. Install dependencies
bash
Copy
Edit
npm install
3. Create MySQL database
Import the provided database.sql file in your MySQL to set up necessary tables.

4. Configure .env
Create a .env file in the root:

ini
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database
PORT=5000
5. Run the application
bash
Copy
Edit
node app.js
Visit: http://localhost:5000

🏆 Awards Categories (Example)
Gaming

Health & Fitness

Tech Reviews

Comedy

Education

Beauty

Travel

Food

Fashion

Music

DIY

News

Each category has its own voting page (game.ejs, health.ejs, etc.)

📸 Past Winners
Stored in public/past/ directory. Displayed on the results page, grouped by year and category.

🔒 Security & Validations
Duplicate voting prevention per user per field

Admin-only access to backend routes

Image and PDF validation during creator registration

🙌 Credits
Built by Chanchala Kumari
MCA @ JNU | Full Stack Developer

