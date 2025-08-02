const express = require('express');
const mysql = require('mysql2/promise');
const multer = require('multer');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 3000;
const bcrypt = require('bcrypt'); // add this at the top of your file
//const hashedPassword = await bcrypt.hash('your_password_here', 10);

// Session config

const flash = require('connect-flash');
app.use(flash());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // set to true if using HTTPS
}));



// Configure storage



// DB pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Add this middleware to prevent directory listing
app.use('/image', (req, res, next) => {
  if (req.path.includes('..')) return res.status(403).send('Forbidden');
  next();
});
// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//app.get('/field2',(req,res)=>
//{
 // res.render('field2');
//})

// -------------------- Public Routes --------------------
let votingWindow = {
  start: null,
  end: null
};
module.exports.votingWindow = votingWindow;


// Home page
app.get('/', async (req, res) => {
  try {
    const [[result]] = await pool.query('SELECT is_result_out FROM result_status WHERE id = 1');
    res.render('HOME', { showResultButton: result.is_result_out });
  } catch (err) {
    console.error('Error checking result status:', err);
    res.render('HOME', { showResultButton: false }); // fail-safe: don't show button
  }
});


// Signup pages
app.get('/user', (req, res) => res.render('signupuser'));
app.get('/logina', (req, res) => res.render('signupcon'));
app.get('/login', (req, res) => res.render('loginuser'));
app.get('/submit', (req, res) => res.render('awards'));

app.get('/field1', async (req, res) => {
    try {
        // Check if user is logged in (optional - only if you need to restrict access)
         if (!req.session.user) {
           return res.redirect('/login');
        }

        const [creators] = await pool.query(
            `SELECT c.*, 
             (SELECT COUNT(*) FROM votes WHERE creator_id = c.creator_id) AS vote_count
             FROM creators c 
             WHERE field_id = 1 AND status = 'approved'`
        );

        res.render('field1', {
            creators,
            field_id: 1,
            user: req.session.user || null // Pass user data to template
        });

    } catch (error) {
        console.error('Error fetching creators:', error);
        res.status(500).send('Error loading field page');
    }
});

app.get('/field2', async (req, res) => {
  try {
      // Check if user is logged in (optional - only if you need to restrict access)
       if (!req.session.user) {
         return res.redirect('/login');
      }

      const [creators] = await pool.query(
          `SELECT c.*, 
           (SELECT COUNT(*) FROM votes WHERE creator_id = c.creator_id) AS vote_count
           FROM creators c 
           WHERE field_id = 2 AND status = 'approved'`
      );

      res.render('field2', {
          creators,
          field_id: 2,
          user: req.session.user || null // Pass user data to template
      });

  } catch (error) {
      console.error('Error fetching creators:', error);
      res.status(500).send('Error loading field page');
  }
});

app.get('/field3', async (req, res) => {
    try {
        // Check if user is logged in (optional - only if you need to restrict access)
         if (!req.session.user) {
           return res.redirect('/login');
        }

        const [creators] = await pool.query(
            `SELECT c.*, 
             (SELECT COUNT(*) FROM votes WHERE creator_id = c.creator_id) AS vote_count
             FROM creators c 
             WHERE field_id = 3 AND status = 'approved'`
        );

        res.render('field3', {
            creators,
            field_id: 3,
            user: req.session.user || null // Pass user data to template
        });

    } catch (error) {
        console.error('Error fetching creators:', error);
        res.status(500).send('Error loading field page');
    }
});
app.get('/field4', async (req, res) => {
  try {
      // Check if user is logged in (optional - only if you need to restrict access)
       if (!req.session.user) {
         return res.redirect('/login');
      }

      const [creators] = await pool.query(
          `SELECT c.*, 
           (SELECT COUNT(*) FROM votes WHERE creator_id = c.creator_id) AS vote_count
           FROM creators c 
           WHERE field_id = 4 AND status = 'approved'`
      );

      res.render('field4', {
          creators,
          field_id: 4,
          user: req.session.user || null // Pass user data to template
      });

  } catch (error) {
      console.error('Error fetching creators:', error);
      res.status(500).send('Error loading field page');
  }
});
app.get('/field7', async (req, res) => {
    try {
        // Check if user is logged in (optional - only if you need to restrict access)
         if (!req.session.user) {
           return res.redirect('/login');
        }

        const [creators] = await pool.query(
            `SELECT c.*, 
             (SELECT COUNT(*) FROM votes WHERE creator_id = c.creator_id) AS vote_count
             FROM creators c 
             WHERE field_id = 7 AND status = 'approved'`
        );

        res.render('field7', {
            creators,
            field_id: 7,
            user: req.session.user || null // Pass user data to template
        });

    } catch (error) {
        console.error('Error fetching creators:', error);
        res.status(500).send('Error loading field page');
    }
});
app.get('/field5', async (req, res) => {
    try {
        // Check if user is logged in (optional - only if you need to restrict access)
         if (!req.session.user) {
           return res.redirect('/login');
        }

        const [creators] = await pool.query(
            `SELECT c.*, 
             (SELECT COUNT(*) FROM votes WHERE creator_id = c.creator_id) AS vote_count
             FROM creators c 
             WHERE field_id = 5 AND status = 'approved'`
        );

        res.render('field5', {
            creators,
            field_id: 5,
            user: req.session.user || null // Pass user data to template
        });

    } catch (error) {
        console.error('Error fetching creators:', error);
        res.status(500).send('Error loading field page');
    }
});

app.get('/field6', async (req, res) => {
    try {
        // Check if user is logged in (optional - only if you need to restrict access)
         if (!req.session.user) {
           return res.redirect('/login');
        }

        const [creators] = await pool.query(
            `SELECT c.*, 
             (SELECT COUNT(*) FROM votes WHERE creator_id = c.creator_id) AS vote_count
             FROM creators c 
             WHERE field_id = 6 AND status = 'approved'`
        );

        res.render('field6', {
            creators,
            field_id: 6,
            user: req.session.user || null // Pass user data to template
        });

    } catch (error) {
        console.error('Error fetching creators:', error);
        res.status(500).send('Error loading field page');
    }
});
app.get('/field8', async (req, res) => {
    try {
        // Check if user is logged in (optional - only if you need to restrict access)
         if (!req.session.user) {
           return res.redirect('/login');
        }

        const [creators] = await pool.query(
            `SELECT c.*, 
             (SELECT COUNT(*) FROM votes WHERE creator_id = c.creator_id) AS vote_count
             FROM creators c 
             WHERE field_id = 8 AND status = 'approved'`
        );

        res.render('field8', {
            creators,
            field_id: 8,
            user: req.session.user || null // Pass user data to template
        });

    } catch (error) {
        console.error('Error fetching creators:', error);
        res.status(500).send('Error loading field page');
    }
});
app.get('/field9', async (req, res) => {
    try {
        // Check if user is logged in (optional - only if you need to restrict access)
         if (!req.session.user) {
           return res.redirect('/login');
        }

        const [creators] = await pool.query(
            `SELECT c.*, 
             (SELECT COUNT(*) FROM votes WHERE creator_id = c.creator_id) AS vote_count
             FROM creators c 
             WHERE field_id = 9 AND status = 'approved'`
        );

        res.render('field9', {
            creators,
            field_id: 9,
            user: req.session.user || null // Pass user data to template
        });

    } catch (error) {
        console.error('Error fetching creators:', error);
        res.status(500).send('Error loading field page');
    }
});
app.get('/field10', async (req, res) => {
    try {
        // Check if user is logged in (optional - only if you need to restrict access)
         if (!req.session.user) {
           return res.redirect('/login');
        }

        const [creators] = await pool.query(
            `SELECT c.*, 
             (SELECT COUNT(*) FROM votes WHERE creator_id = c.creator_id) AS vote_count
             FROM creators c 
             WHERE field_id = 10 AND status = 'approved'`
        );

        res.render('field10', {
            creators,
            field_id: 10,
            user: req.session.user || null // Pass user data to template
        });

    } catch (error) {
        console.error('Error fetching creators:', error);
        res.status(500).send('Error loading field page');
    }
});
app.get('/field11', async (req, res) => {
    try {
        // Check if user is logged in (optional - only if you need to restrict access)
         if (!req.session.user) {
           return res.redirect('/login');
        }

        const [creators] = await pool.query(
            `SELECT c.*, 
             (SELECT COUNT(*) FROM votes WHERE creator_id = c.creator_id) AS vote_count
             FROM creators c 
             WHERE field_id = 11 AND status = 'approved'`
        );

        res.render('field11', {
            creators,
            field_id: 11,
            user: req.session.user || null // Pass user data to template
        });

    } catch (error) {
        console.error('Error fetching creators:', error);
        res.status(500).send('Error loading field page');
    }
});
app.get('/field12', async (req, res) => {
    try {
        // Check if user is logged in (optional - only if you need to restrict access)
         if (!req.session.user) {
           return res.redirect('/login');
        }

        const [creators] = await pool.query(
            `SELECT c.*, 
             (SELECT COUNT(*) FROM votes WHERE creator_id = c.creator_id) AS vote_count
             FROM creators c 
             WHERE field_id = 12 AND status = 'approved'`
        );

        res.render('field12', {
            creators,
            field_id: 12,
            user: req.session.user || null // Pass user data to template
        });

    } catch (error) {
        console.error('Error fetching creators:', error);
        res.status(500).send('Error loading field page');
    }
});
app.get('/test-creators', async (req, res) => {
  try {
      const [creators] = await pool.query('SELECT * FROM creators LIMIT 5');
      res.json(creators);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// Awards main
app.get('/awards', (req, res) => {
  if (!req.session.user) {
      return res.redirect('/login');
  }
  const successMessage = req.flash('success');
  const errorMessage = req.flash('error');


  const userId = req.session.user.user_id;
  const userName = req.session.user.name;

  // Now you can use userId in DB queries, etc.
  res.render('awards', {
    user: req.session.user,
    successMessage,
    errorMessage
  });
});


// Voting fields
const renderField = async (req, res, fieldId, viewName = 'game') => {
  const userId = req.session.user_id;
  if (!userId) return res.redirect('/login');

  try {
    const [creators] = await pool.query('SELECT * FROM creators WHERE field_id = ?', [fieldId]);
    res.render(viewName, { creators, userId, voted: req.query.voted, alreadyVoted: req.query.alreadyVoted });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

//app.get('/field1', (req, res) => renderField(req, res, 1, 'field1'));

//app.get('/field1',(req,res)=>renderField(req,res,1))


const fs = require('fs');


// 1. Configure upload directories
const UPLOADS_BASE = path.join(__dirname, 'public', 'uploads');
const UPLOAD_DIRS = {
  image: path.join(UPLOADS_BASE, 'image'),
  pdf: path.join(UPLOADS_BASE, 'pdf')
};

// 2. Create directories if they don't exist
const createUploadDirs = () => {
  try {
    if (!fs.existsSync(UPLOADS_BASE)) fs.mkdirSync(UPLOADS_BASE, { recursive: true });
    Object.values(UPLOAD_DIRS).forEach(dir => {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    });
    console.log('Upload directories verified');
  } catch (err) {
    console.error('Failed to create upload directories:', err);
    process.exit(1);
  }
};
createUploadDirs();

// 3. Configure Multer upload middleware
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const dest = file.fieldname === 'image' ? UPLOAD_DIRS.image : UPLOAD_DIRS.pdf;
      cb(null, dest);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const filename = `${Date.now()}-${Math.round(Math.random() * 1E9)}${ext}`;
      cb(null, filename);
    }
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    if (file.fieldname === 'image') {
      if (!file.mimetype.match(/image\/(jpeg|png|jpg|gif)/)) {
        return cb(new Error('Only image files (JPEG, PNG, JPG, GIF) are allowed'), false);
      }
    } else if (file.fieldname === 'pdf') {
      if (!file.mimetype.match(/application\/pdf/)) {
        return cb(new Error('Only PDF files are allowed'), false);
      }
    }
    cb(null, true);
  }
});
app.get('/set-voting-time',(req,res)=>
{
  res.render('set-voting-time');
})
app.post('/set-voting-time', (req, res) => {
    const { start_time, end_time } = req.body;

  if (!start_time || !end_time) {
    return res.status(400).send("Start and end times are required.");
  }

  // Convert to Date objects
  votingWindow.start = new Date(start_time);
  votingWindow.end = new Date(end_time);

  console.log("🕒 Voting window set:", votingWindow);

  res.redirect('/'); // Or show success message

});


// 4. The /logina route handler
app.post('/logina', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'pdf', maxCount: 1 }
]), async (req, res) => {
  try {
    // Extract form data
    const {
      name,
      channel_name,
      email,
      password,
      subscriber_count,
      description,
      field_id
    } = req.body;

    // Validate required fields
    if (!name || !email || !password || !description || !field_id) {
      throw new Error('All required fields must be filled');
    }

    // Process file paths for database
    const photo_path = req.files?.image?.[0] 
      ? `/uploads/image/${req.files.image[0].filename}`
      : null;
    
    const pdf_path = req.files?.pdf?.[0]
      ? `/uploads/pdf/${req.files.pdf[0].filename}`
      : null;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into database
    await pool.query(`
      INSERT INTO creators (
        name, channel_name, email, password, 
        subscriber_count, description, photo_path, 
        file, field_id
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      name,
      channel_name || null,
      email,
      hashedPassword,
      subscriber_count || 0,
      description,
      photo_path,
      pdf_path,
      field_id
      // status is omitted and will use default 'approved'
    ]);    // Success - redirect with success message
    //return res.redirect('/signup?status=success');
    return res.redirect('/');

  } catch (err) {
    console.error('Error:', err);
    
    // Clean up uploaded files if error occurred
    if (req.files) {
      Object.values(req.files).forEach(fileArray => {
        fileArray.forEach(file => {
          fs.unlink(file.path, unlinkErr => {
            if (unlinkErr) console.error('Failed to delete file:', unlinkErr);
          });
        });
      });
    }

    // Handle specific errors
    if (err.code === 'ER_DUP_ENTRY') {
      return res.redirect('/signup?error=email_exists');
    }
    
    return res.redirect('/signup?error=server_error');
  }
});

app.get('/signup',(req,res)=>
{
  res.render('signupuser')
})

// Signup submission
app.post('/submit', (req, res) => {
  const { name, email, password } = req.body;
  pool.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
    (err, results) => {
      if (err) return res.status(500).send('Internal server error');
      req.session.user_id = results.insertId;
      res.redirect('/awards');
    }
  );
});

// Creator registration
// POST route for creator login and file upload



app.use((req, res, next) => {
  if (req.path.startsWith('/vote') && !req.session.user?.id) {
    return res.redirect('/login?error=session_expired');
  }
  next();
});



// POST route for user login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.redirect('/login?error=empty');
  }

  try {
    const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    
    if (users.length === 0) {
      return res.redirect('/login?error=invalid');
    }

    const user = users[0];
    
    // Password verification
    const passwordValid = user.password.startsWith("$2a$") || user.password.startsWith("$2b$")
      ? await bcrypt.compare(password, user.password)
      : password === user.password;

    if (!passwordValid) {
      return res.redirect('/login?error=invalid');
    }

    // Proper session setup
    req.session.user = {
      id: user.user_id,  // THIS IS CRUCIAL - must match your users table PK
      name: user.name,
      email: user.email
    };
    console.log(user.user_id);
    console.log(user.name);
    console.log(user.name);

    // Explicitly save session
    req.session.save(err => {
      if (err) {
        console.error("Session save error:", err);
        return res.redirect('/login?error=session_error');
      }
      return res.redirect(`/login-success?name=${encodeURIComponent(user.name)}`);
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.redirect('/login?error=server_error');
  }
});
app.get('/check-password', async (req, res) => {
  const testPassword = "test123"; // Change this to a known password
  const [users] = await pool.query('SELECT password FROM users LIMIT 1');
  
  if (users.length === 0) {
      return res.send("No users in database");
  }

  const storedHash = users[0].password;
  const isMatch = await bcrypt.compare(testPassword, storedHash);

  res.send(`
      <h2>Password Debug</h2>
      <p><strong>Stored Hash:</strong> ${storedHash}</p>
      <p><strong>Test Password:</strong> ${testPassword}</p>
      <p><strong>Match Result:</strong> ${isMatch ? "✅ MATCH" : "❌ NO MATCH"}</p>
  `);
});

// Login success page
app.get('/login-success', (req, res) => {
  const { name } = req.query;
  
  res.send(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Login Success</title>
          <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      </head>
      <body>
          <script>
              Swal.fire({
                  icon: 'success',
                  title: 'Welcome, ${name.replace(/</g, "&lt;").replace(/>/g, "&gt;")}!',
                  text: 'You have successfully logged in.',
                  confirmButtonText: 'OK'
              }).then(() => {
                  window.location.href = '/awards';
              });
          </script>
      </body>
      </html>
  `);
});




// -------------------- Admin Routes --------------------

// Admin login
app.get('/adminlogin', (req, res) => {
  res.render('adminlogin', { error: null });
});

app.post('/adminlogin', async (req, res) => {
  const { name, password } = req.body;
  const [admins] = await pool.query('SELECT * FROM admins WHERE name = ?', [name]);

  if (admins.length && password === admins[0].password) {
    req.session.admin_id = admins[0].admin_id;
    return res.redirect('/admindashboard');
  } else {
    return res.render('adminlogin', { error: 'Invalid username or password' });
  }
});

// Admin dashboard
app.get('/admindashboard', async (req, res) => {
  if (!req.session.admin_id) return res.redirect('/adminlogin');

  const fieldId = req.query.field_id;
  const [fields] = await pool.query('SELECT * FROM fields');
  const creatorsQuery = fieldId ? 'SELECT * FROM creators WHERE field_id = ?' : 'SELECT * FROM creators';
  const [creators] = await pool.query(creatorsQuery, fieldId ? [fieldId] : []);
  res.render('admindashboard', { creators, fields, selectedFieldId: fieldId || '' });
});

// Get creators by field (AJAX)
app.post('/get-creators', async (req, res) => {
  const { field_id } = req.body;
  try {
    const [creators] = await pool.query(
      'SELECT creator_id, name, email, photo_path, status FROM creators WHERE field_id = ?', [field_id]
    );
    creators.forEach(creator => {
      creator.photo = `/uploads/photos/${creator.photo_path}`;  // Adjust according to your folder structure
    });

    res.json(creators);
  } catch (err) {
    console.error('Error fetching creators:', err);
    res.status(500).json([]);
  }
});

// Update creator status
app.post('/update-status', async (req, res) => {
  const { creator_id, status } = req.body;
  if (status !== 'disapproved') {
    return res.json({ success: false, message: 'Only disapproval is allowed manually.' });
  }

  try {
    const [result] = await pool.query('UPDATE creators SET status = ? WHERE creator_id = ?', [status, creator_id]);
    if (result.affectedRows > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'No creator updated.' });
    }
  } catch (err) {
    console.error('DB Error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});


app.get('/awards',(req,res)=>
{
  res.render('awards');
});

app.get('/admin', async (req, res) => {
  const [fields] = await db.query('SELECT * FROM fields');
  res.render('admin_dashboard', { fields });  // or whatever your file is called
});

app.post('/vote', async (req, res) => {
  const { creator_id, field_id } = req.body;
  const user_id = req.session.user?.id;
  const now = new Date();

 if (votingWindow.start && votingWindow.end) {
    if (now < votingWindow.start || now > votingWindow.end) {
     return res.redirect('/awards?error=closed');
    }
  }
// else allow voting

  // Log incoming values
  console.log("🟡 POST /vote triggered");
  console.log("📥 Form Data - creator_id:", creator_id, "field_id:", field_id);
  console.log("🧑 Session User ID:", user_id);

  if (!user_id || !creator_id || !field_id) {
    console.log("❌ Missing data");
    return res.status(400).send('Missing required data.');
  }

  try {
    // Step 1: Check if user has already voted in this field
    const [existingVotes] = await pool.query(
      'SELECT * FROM votes WHERE user_id = ? AND field_id = ?',
      [user_id, field_id]
    );

    console.log("🔍 Existing votes:", existingVotes.length);

    if (existingVotes.length > 0) {
      console.log("⚠️ User has already voted in this field");
      //return res.redirect(`/vote-result?status=already_voted&field_id=${field_id}`);
      res.redirect('/awards');
    }

    // Step 2: Insert the vote
    const [insertResult] = await pool.query(
      'INSERT INTO votes (user_id, creator_id, field_id) VALUES (?, ?, ?)',
      [user_id, creator_id, field_id]
    );

    console.log("✅ Vote inserted with ID:", insertResult.insertId);

    return res.redirect(`/vote-result?status=success&field_id=${field_id}`);
  } catch (error) {
    console.error("❌ Vote error:", error);
    //return res.redirect(`/vote-result?status=error&field_id=${field_id}`);
    return res.redirect('/awards');
  }
});
app.post('/voting', async (req, res) => {
  const { creator_id, field_id } = req.body;
  const user_id = req.session.user?.id;

  // Log incoming values
  console.log("🟡 POST /vote triggered");
  console.log("📥 Form Data -creator_id:", creator_id, "field_id:", field_id);
  console.log("🧑 Session User ID:", user_id);

  if (!user_id || !creator_id || !field_id) {
    console.log("❌ Missing data");
    return res.status(400).send('Missing required data.');
  }

  try {
    // Step 1: Check if user has already voted in this field
    const [existingVotes] = await pool.query(
      'SELECT * FROM votes WHERE user_id = ? AND field_id = ?',
      [user_id, field_id]
    );

    console.log("🔍 Existing votes:", existingVotes.length);

    if (existingVotes.length > 0) {
      console.log("⚠️ User has already voted in this field");
      //return res.redirect(`/vote-result?status=already_voted&field_id=${field_id}`);
      res.redirect('/awards');
    }

    // Step 2: Insert the vote
    const [insertResult] = await pool.query(
      'INSERT INTO votes (user_id, creator_id, field_id) VALUES (?, ?, ?)',
      [user_id, creator_id, field_id]
    );

    console.log("✅ Vote inserted with ID:", insertResult.insertId);

    return res.redirect(`/vote-result?status=success&field_id=${field_id}`);
  } catch (error) {
    console.error("❌ Vote error:", error);
    //return res.redirect(`/vote-result?status=error&field_id=${field_id}`);
    res.redirect('/awards');
  }
});
app.get('/about',(req,res)=>{
  res.render('about')
})

app.get('/contact',(req,res)=>{
  res.render('contact')
})
app.get('/past-winners/:year', async (req, res) => {
  const year = parseInt(req.params.year);

  try {
    const [winners] = await pool.query('SELECT * FROM past_winners WHERE year = ?', [year]);

    if (!winners.length) {
      return res.status(404).send(`No winners found for year ${year}`);
    }

    // Render different EJS templates depending on the year
    if (year === 2023) {
      res.render('winners_2023', { winners });
    } else if (year === 2024) {
      res.render('winners_2024', { winners });
    } else {
      res.render('winners_generic', { winners, year }); // Optional: for future years
    }

  } catch (error) {
    console.error("❌ Error fetching past winners:", error);
    res.status(500).send("Internal Server Error");
  }
});


// Unified vote result handler
app.get('/vote-result', (req, res) => {
  const { status, field_id } = req.query;
  const userName = req.session.user?.name || 'User';

  const templates = {
      success: {
          icon: 'success',
          title: 'Vote Recorded!',
          html: `Thank you for voting in Field ${field_id}, <b>${escapeHtml(userName)}</b>!`,
          redirect: '/awards'
      },
      already_voted: {
          icon: 'warning',
          title: 'Already Voted',
          html: `You've already voted in Field ${field_id}.`,
          redirect: '/awards'
      }
  };

  const template = templates[status] || {
      icon: 'error',
      title: 'Error',
      text: 'An unexpected error occurred.',
      redirect: `/field${field_id}`
  };

  res.send(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Vote Status</title>
          <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      </head>
      <body>
          <script>
              Swal.fire({
                  icon: '${template.icon}',
                  title: '${template.title}',
                  html: '${template.html}',
                  confirmButtonText: 'OK',
                  allowOutsideClick: false
              }).then(() => {
                  window.location.href = '${template.redirect}';
              });
          </script>
      </body>
      </html>
  `);
});

app.post('/release-results', async (req, res) => {
  try {
    await pool.query('UPDATE result_status SET is_result_out = TRUE WHERE id = 1');
    res.redirect('/');
  } catch (err) {
    console.error('Error updating result status:', err);
    res.status(500).send('Server error');
  }
});
app.post('/hide-results', async (req, res) => {
  try {
    await pool.query('UPDATE result_status SET is_result_out = 0 WHERE id = 1');
    res.redirect('/');
  } catch (err) {
    console.error('Failed to hide result status:', err);
    res.status(500).send('Error hiding results');
  }
});



// Helper function to prevent XSS
function escapeHtml(unsafe) {
  return unsafe
       .replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;")
       .replace(/'/g, "&#039;");
}
app.post('/submit', (req, res) => {
  const { name, email, password } = req.body;
  console.log('POST /submit hit');
  console.log('Received data:', req.body);

  pool.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
    (err, results) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).send('Internal server error');
        
      }
      console.log('User inserted:', results);
      const newUserId = results.insertId; // Get the newly inserted user's ID

      // Save the user_id into session
      req.session.user_id = newUserId;
      res.redirect('/awards');
    }
  );
});

app.get('/result', async (req, res) => {
  try {
    const [winners] = await pool.query(`
      SELECT 
        c.creator_id,
        c.name,
        c.channel_name,
        c.photo_path,
        c.field_id,
        f.field_name,
        COUNT(v.vote_id) AS vote_count
      FROM creators c
      JOIN fields f ON c.field_id = f.field_id
      LEFT JOIN votes v ON c.creator_id = v.creator_id
      WHERE c.status = 'approved'
      GROUP BY c.creator_id, c.name, c.channel_name, c.photo_path, c.field_id, f.field_name
    `);

    // Group winners by field, and pick top-voted creator in each
    const fieldWinners = {};
    winners.forEach(creator => {
      const fid = creator.field_id;
      if (!fieldWinners[fid] || creator.vote_count > fieldWinners[fid].vote_count) {
        fieldWinners[fid] = creator;
      }
    });

    const finalWinners = Object.values(fieldWinners);

    res.render('result', { winners: finalWinners });
  } catch (err) {
    console.error('Error loading results:', err);
    res.status(500).send('Error loading results');
  }
});
app.get('/creator-login',(req,res)=>
{
  res.render('creator_login');
})




app.post('/creator-login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.redirect('/creator-login?error=empty');
  }

  try {
    const [creators] = await pool.query('SELECT * FROM creators WHERE email = ?', [email]);

    if (creators.length === 0) {
      return res.redirect('/creator-login?error=invalid');
    }

    const creator = creators[0];

    // Password verification
    const passwordValid = creator.password.startsWith("$2a$") || creator.password.startsWith("$2b$")
      ? await bcrypt.compare(password, creator.password)
      : password === creator.password;

    if (!passwordValid) {
      return res.redirect('/creator-login?error=invalid');
    }

    // Store session data
    req.session.creator = {
      id: creator.creator_id,
      name: creator.name,
      email: creator.email,
      field_id: creator.field_id
    };

    // Fetch all approved creators in same field with vote count
    const [fieldCreators] = await pool.query(`
      SELECT 
        c.creator_id, c.name, c.channel_name, c.subscriber_count, 
        c.photo_path, c.description, c.email, c.field_id,
        COUNT(v.vote_id) AS votes_count
      FROM creators c
      LEFT JOIN votes v ON c.creator_id = v.creator_id AND v.field_id = ?
      WHERE c.field_id = ? AND c.status = 'approved'
      GROUP BY c.creator_id
      ORDER BY votes_count DESC
    `, [creator.field_id, creator.field_id]);

    const leadingCreator = fieldCreators[0];

    req.session.save(err => {
      if (err) {
        console.error("Session save error:", err);
        return res.redirect('/creator-login?error=session_error');
      }

      return res.render('creator_dashboard', {
        creator,
        fieldCreators,
        leadingCreator
      });
    });

  } catch (error) {
    console.error("Creator login error:", error);
    return res.redirect('/creator-login?error=server_error');
  }
});



app.get('/creator-dashboard/:creator_id', (req, res) => {
  const creatorId = req.params.creator_id;
  console.log('Creator ID in dashboard route:', creatorId);

  const getCreatorSql = 'SELECT * FROM creators WHERE creator_id = ?';
  pool.query(getCreatorSql, [creatorId], (err, creatorResult) => {
    if (err) {
      console.error('Error fetching creator info:', err);
      return res.status(500).send('Server error');
    }

    if (creatorResult.length === 0) {
      return res.status(404).send('Creator not found');
    }

    const creator = creatorResult[0];
    const fieldId = creator.field_id;

    const getCreatorsSql = `
      SELECT 
        c.creator_id, c.name, c.channel_name, c.subscriber_count, 
        c.photo_path, c.description, c.field_id, COUNT(v.vote_id) AS votes_count
      FROM creators c
      LEFT JOIN votes v ON c.creator_id = v.creator_id AND v.field_id = ?
      WHERE c.field_id = ? AND c.status = 'approved'
      GROUP BY c.creator_id
      ORDER BY votes_count DESC
    `;

    pool.query(getCreatorsSql, [fieldId, fieldId], (err2, fieldCreators) => {
      if (err2) {
        console.error('Error fetching creators in field:', err2);
        return res.status(500).send('Server error');
      }

      const leadingCreator = fieldCreators[0]; // Top creator in the field

      res.render('creator_dashboard', {
        creator,
        fieldCreators,
        leadingCreator
      });
    });
  });
});




// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
