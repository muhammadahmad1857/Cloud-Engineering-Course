# Class 10: Introduction to Git and GitHub

Welcome to the Class 10 session on Git and GitHub! In this course, you will learn essential concepts and practical skills related to version control using Git and collaboration through GitHub.

## Table of Contents

1. [What is Git?](#what-is-git)
2. [Why Use Git?](#why-use-git)
3. [What is GitHub?](#what-is-github)
4. [Why Use GitHub?](#why-use-github)
5. [Benefits of Using Git and GitHub](#benefits-of-using-git-and-github)
6. [How to Create an Account on GitHub](#how-to-create-an-account-on-github)
7. [How to Create a Repository on GitHub](#how-to-create-a-repository-on-github)
8. [Pushing Code Using Command Line](#pushing-code-using-command-line)
   - [Windows](#windows)
   - [Mac/Linux](#maclinux)
9. [Git Config Commands](#git-config-commands)
10. [Link GitHub with VS Code](#link-github-with-vs-code)
11. [Push Code Using VS Code](#push-code-using-vs-code)
12. [How to Install GitHub Desktop](#how-to-install-github-desktop)
13. [Initializing GitHub Desktop](#initializing-github-desktop)
14. [Pushing Code Using GitHub Desktop](#pushing-code-using-github-desktop)
15. [Pulling Code Using Command Line](#pulling-code-using-command-line)
    - [Windows](#windows-1)
    - [Mac/Linux](#maclinux-1)
16. [Pulling Code Using GitHub Desktop](#pulling-code-using-github-desktop)
17. [Cloning a Repository Using Command Line](#cloning-a-repository-using-command-line)
    - [Windows](#windows-2)
    - [Mac/Linux](#maclinux-2)
18. [Cloning Repository Using VS Code](#cloning-repository-using-vs-code)
19. [Cloning Repository Using GitHub Desktop](#cloning-repository-using-github-desktop)

---

## What is Git?

Git is a distributed version control system that enables you to track changes to files in a project over time. It allows multiple developers to collaborate on the same codebase efficiently.

### Key Concepts:

- **Repository:** A repository, or repo, is a collection of files and their revision history.
- **Commit:** A commit is a snapshot of changes made to the repository at a specific point in time.
- **Branch:** Branches are used to work on different versions of a repository simultaneously.
- **Merge:** Merging combines changes from different branches into one.

## Why Use Git?

Git provides several benefits for software development and collaboration:

- **Version Control:** Keeps a detailed history of changes, making it easy to revert to previous versions if needed.
- **Collaboration:** Facilitates teamwork by allowing multiple developers to work on the same project concurrently.
- **Branching and Merging:** Enables developers to experiment with new features without affecting the main codebase until changes are ready.
- **Open Source:** Supports the open-source community by providing a platform for sharing and contributing to projects.

## What is GitHub?

GitHub is a web-based platform built around Git that provides hosting for software development version control using Git. It offers additional features like bug tracking, task management, and wikis for every project.

### Key Features:

- **Repositories:** Host your Git repositories and collaborate with others.
- **Pull Requests:** Propose changes to a repository and initiate code review discussions.
- **Issues:** Track bugs, tasks, and enhancements with integrated issue tracking.
- **Actions:** Automate workflows for testing, building, and deploying your code.

## Why Use GitHub?

GitHub enhances Git with collaboration and community features, making it easier for teams and individuals to manage projects and contribute to open-source software.

### Benefits:

- **Visibility:** Showcase your projects and contributions to potential employers, collaborators, and users.
- **Community Engagement:** Join a global community of developers to learn, share, and build together.
- **Integration:** Connect with a wide range of tools and services that integrate seamlessly with GitHub.
- **Security:** Built-in security features like two-factor authentication and automated security alerts.

## Benefits of Using Git and GitHub

Combining Git and GitHub offers numerous advantages for software development:

- **Backup and Restore:** Safeguard your code with remote backups and restore previous versions as needed.
- **Team Collaboration:** Coordinate work on projects with team members, track contributions, and manage conflicts.
- **Project Visibility:** Make your projects accessible to the public or share them privately with collaborators.
- **Continuous Integration:** Automate testing and deployment processes to maintain code quality and reliability.

## How to Create an Account on GitHub

Creating a GitHub account is simple and free:

1. Visit [GitHub's signup page](https://github.com/join).
2. Enter your desired username, email address, and password.
3. Complete the CAPTCHA challenge (if prompted) and click "Create an account."
4. Follow the instructions to verify your email address.

## How to Create a Repository on GitHub

Creating a new repository on GitHub allows you to start a new project or bring an existing project to GitHub for collaboration:

1. Log in to your GitHub account.
2. Click on the "+" sign in the top right corner of any GitHub page.
3. Select "New repository" from the dropdown menu.
4. Name your repository, provide an optional description, choose between public and private repository settings, and click "Create repository."

## Pushing Code Using Command Line

To push your local code to a remote repository on GitHub using the command line, follow these steps:

### Windows

1. **Open Git Bash or Command Prompt:**

   - Git Bash is recommended for a consistent experience with Unix commands on Windows.

2. **Navigate to Your Project Directory:**

   ```bash
   cd /path/to/your/project
   ```

3. **Initialize a Git Repository (if not already initialized):**

   ```bash
   git init
   ```

4. **Add Files to the Staging Area:**

   ```bash
   git add .
   ```

5. **Commit Changes:**

   ```bash
   git commit -m "Initial commit"
   ```

6. **Add Remote Repository URL:**

   ```bash
   git remote add origin <repository_url>
   ```

7. **Push Changes to GitHub:**
   ```bash
   git push -u origin main
   ```

### Mac/Linux

Follow similar steps as Windows, using Terminal for Git commands:

1. Open Terminal and navigate to your project directory.
2. Initialize Git, add files, commit changes, add remote repository, and push changes using the same commands as outlined for Windows.

## Git Config Commands

Git config commands need to be run only once during initialization to set global configuration options like user name and email. These commands configure your identity for commits.

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Link GitHub with VS Code

Integrating GitHub with VS Code allows you to manage repositories and perform Git operations directly from your code editor.

1. **Open VS Code:**

   - Ensure you have VS Code installed. If not, download it from [Visual Studio Code website](https://code.visualstudio.com/).

2. **Install the "GitHub Pull Requests and Issues" Extension:**

   - Open the Extensions view in VS Code (`Ctrl+Shift+X` or `Cmd+Shift+X`).
   - Search for "GitHub Pull Requests and Issues" and click "Install."

3. **Authenticate with GitHub:**
   - Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) in VS Code.
   - Type "GitHub: Sign In" and follow the prompts to authenticate with your GitHub account.

## Push Code Using VS Code

Using VS Code for pushing code simplifies the process of staging, committing, and pushing changes to GitHub:

1. **Make Changes in VS Code:**

   - Open your project in VS Code.
   - Modify files as needed.

2. **Stage Changes:**

   - Click the "+" next to changed files in the Source Control view to stage them.

3. **Commit Changes:**

   - Enter a commit message and press `Ctrl+Enter` to commit changes.

4. **Push Changes to GitHub:**
   - Click the ... menu in the Source Control view and select "Push" to push changes to the remote repository.

## How to Install GitHub Desktop

GitHub Desktop provides a graphical interface for managing repositories and Git operations:

1. Download GitHub Desktop from the [GitHub Desktop website](https://desktop.github.com/).
2. Install GitHub Desktop by following the installation instructions specific to your operating system.

## Initializing GitHub Desktop

After installing GitHub Desktop, set it up to start managing your Git repositories:

1. **Open GitHub Desktop:**

   - Launch GitHub Desktop after installation.

2. **Sign In to Your GitHub Account:**

   - If prompted, sign in to your GitHub account.

3. **Configure Git:**
   - If Git is not already installed, GitHub Desktop will prompt you to install it.
   - Configure Git settings as needed in GitHub Desktop under `File -> Options -> Git`.

## Pushing Code Using GitHub Desktop

GitHub Desktop simplifies the process of committing and pushing changes to GitHub:

1. **Open GitHub Desktop:**

   - Select the repository you want to work with.

2. **Make Changes:**

   - Make changes to your project files.

3. **Commit Changes:**
   - Write a summary of the changes
   
## Contact

Muhammad Ahmad

- **LinkedIn**: https://www.linkedin.com/in/muhammad-ahmad-jawad-a780512bb/
- **Github**: https://github.com/ahmedjawad1857
- **Email Me At**: <a href="mailto:ahmedjawad1857@gmail.com">ahmedjawad1857@gmail.com</a><br>

**project-link**: https://github.com/ahmedjawad1857/simple-calculator