# GitFind - GitHub Profile Viewer

A simple front-end application built to fetch and display information about GitHub users using the GitHub API.
This is an exercise from [DIO](https://www.dio.me/)'s React Formation course.


## 🚀 Features

- Search GitHub users by username.
- Display essential user information:
    - Profile picture
    - Name & bio
    - List of repositories
- Clean, responsive, and lightweight design.


## 🛠️ Technologies Used

- HTML5
- CSS3
- React.js
- GitHub REST API

## 📦 Getting Started

### Prerequisites

- Node.js (>=22.14.0)
- npm (>=10.9.2) or pnpm (>=10.6.5)


### Installation
```bash
git clone https://github.com/lnabesima/dio-react-gitfind.git
cd dio-react-gitfind

# using npm
npm install
npm start

# OR using pnpm
pnpm install
pnpm start

```
## Usage
1. Open [http://localhost:5173](http://localhost:5173) in your browser.
2. Type a GitHub username into the input field.
3. Click "Search" to view detailed profile information.


### 📸 Example
![screenshot](https://i.imgur.com/ED4Ourj.png)

## ❗ Notes
This app uses the public GitHub API without authentication, so it may be subject to [rate limits](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting).

## 🙌 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

## 👉 Next steps 
- [ ] Add pagination of repositories list for better navigation.
- [ ] Implement a loading indicator for improved UX during fetch operations.
- [ ] Include usage instructions within the app interface to enhance usability.
- [ ] Investigate GitHub API limitations concerning private repositories.


## 📄 License
MIT