<!-- PROJECT SHIELDS -->

<!-- PROJECT LOGO -->

<br />
<div align="center">

<h3 align="center">Members Only</h3>

<p align="center">
A full-stack membership-based message board built with Node.js, Express, PostgreSQL, Passport.js, and EJS following the MVC architecture.
<br />
<br />
<!-- <a href="https://github.com/abrahamjust/REPOSITORY_NAME"><strong>Explore the Project »</strong></a> -->
<br />
<br />
<!-- <a href="LIVE_DEMO_LINK">View Demo</a> -->
</p>

</div>

---

<details>
<summary>Table of Contents</summary>

1. [About The Project](#about-the-project)
2. [Built With](#built-with)
3. [Getting Started](#getting-started)
4. [Usage](#usage)
5. [Roadmap](#roadmap)
6. [License](#license)
7. [Contact](#contact)

</details>

---

# About The Project

Members Only is a full-stack web application where users can create anonymous messages for the community. Authentication is handled using Passport.js, and role-based authorization determines which information each user can access.

Guests can browse messages anonymously, registered users can create posts, members can reveal message authors, and administrators have permission to delete messages.

The project demonstrates authentication, authorization, session management, relational database design, and the MVC architecture using Express and PostgreSQL.

## Features

* User registration with encrypted passwords using **bcrypt**
* User authentication with **Passport Local Strategy**
* Persistent login sessions using **express-session**
* Anonymous message board for visitors
* Authenticated users can create new messages
* Members can reveal message authors
* Guests only see messages posted by **Anonymous**
* Join Club page with a secret invitation code
* Role-based authorization (User, Member, Admin)
* Administrators can delete messages
* Parameterized SQL queries to prevent SQL injection

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

# Built With

* Node.js
* Express.js
* PostgreSQL
* Passport.js
* express-session
* bcryptjs
* EJS
* HTML5
* CSS3
* JavaScript (ES6)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

# Getting Started

Follow these steps to run the project locally.

## Prerequisites

* Node.js
* npm
* PostgreSQL

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/abrahamjust/REPOSITORY_NAME.git
```

### 2. Move into the project directory

```bash
cd REPOSITORY_NAME
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
SERVER_PORT=3000

HOST=localhost
USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DATABASE=membersonly
DB_PORT=5432

SESSION_SECRET=your_session_secret
ADMIN_PASSWORD=your_admin_password
CLUB_PASSWORD=your_secret_club_code
```

### 5. Create the PostgreSQL database

```sql
CREATE DATABASE membersonly;
```

### 6. Seed the database

```bash
node db/populatedb.js
```

### 7. Start the application

```bash
npm start
```

### 8. Open your browser

```text
http://localhost:3000
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

# Usage

## Guest

* View all messages
* Message authors remain anonymous
* Register a new account
* Log in to an existing account

## Registered User

* Create new messages
* View all community posts
* Join the club using the secret code

## Member

* View the real author of every message
* Continue creating new messages

## Administrator

* All member privileges
* Delete any message from the message board

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

# Roadmap

* [x] User registration
* [x] Password hashing with bcrypt
* [x] Passport.js authentication
* [x] Session management
* [x] Anonymous message board
* [x] Create new messages
* [x] Member-only author visibility
* [x] Secret club membership
* [x] Administrator role
* [x] Delete messages
* [ ] Flash messages for authentication errors
* [ ] User profile page
* [ ] Edit messages
* [ ] Search messages
* [ ] Pagination

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

# License

This project is intended for educational and portfolio purposes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

# Contact

**Abraham Justin**

GitHub: https://github.com/abrahamjust

Email: [abrahamjust@gmail.com](mailto:abrahamjust@gmail.com)

<!-- Project Link: https://github.com/abrahamjust/REPOSITORY_NAME -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>
