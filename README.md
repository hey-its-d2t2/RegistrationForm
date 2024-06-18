# RegistrationForm
### Technologies Used: Node.js, Express.js, MongoDB, Render

### Overview:
This project is a web-based registration form developed as part of my first internship task with Bharat Intern. The form captures user details such as name, email, and password, checks for the existence of the user in the database, and appropriately registers the user or returns an error. The application is built using Node.js and Express.js for the backend, MongoDB for the database, and deployed on Render for hosting.

**Key Features:**

- User Registration:

  - The form collects user details: name, email, and password.
  - It performs a check to ensure the email does not already exist in the database.
  - If the email is unique, the user is registered and redirected to a success page.
  - If the email already exists, the user is redirected to an error page indicating registration failure.
- Backend Technologies:

  - **Node.js:** Utilized for server-side JavaScript runtime environment.
  - **Express.js:** Used for building the web server and handling HTTP requests.
  - **MongoDB:** Chosen for the database to store user information securely.

- **Deployment:**
  - The application is deployed on Render, ensuring it is accessible online.
  - The deployment process involved configuring environment variables and ensuring secure connections to the MongoDB database.

### Landing Page:

- Users are presented with a registration form to enter their details.

    
- Form Submission:

  - On submission, the server receives the data and checks if the email already exists in the - MongoDB database.
- User Check:
  - If the user does not exist, their details are saved in the database, and they are redirected to a registration success page.
      
  - If the user already exists, they are redirected to an error page indicating the failure of registration.
      ![Uploading Registration Error - localhost.png…]()

Success/Error Handling:

Success Page: Confirms the successful registration of the user.
Error Page: Informs the user that the registration failed due to the email already being in use.
### Project Link:
- Deployed Application: https://registratin-form-te5j.onrender.com

### Conclusion:
This registration form project provided valuable hands-on experience with full-stack development, including backend development with Node.js and Express.js, database management with MongoDB, and deployment on a cloud platform. It highlights the practical application of web development skills acquired during my internship and serves as a foundational project for future endeavors in the tech industry.





