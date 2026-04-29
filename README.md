# SmartParking

### Main Technologies
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)


## 1. Description
SmartParking is a university project designed to simulate a comprehensive parking management system. The primary goal of this application is to provide an interactive dashboard that allows users to monitor parking availability, occupy, and release parking spots in real-time. This project serves as a practical implementation of a full-stack web application for handling reservation logistics and state management.

## 2. Views
Below are the key screens of the application illustrating the user interface and core functionalities:

| Login Page | Registration Page |
|:---:|:---:|
| ![Login](/Front/public/Login.png) | ![Register](/Front/public/Register.png) |

| User Dashboard | Admin Panel |
|:---:|:---:|
| ![Dashboard](/Front/public/Dashboard.png) | ![Admin](/Front/public/Admin.png) |

| Occupancy Trends (Busy) | Available Spots (Free) |
|:---:|:---:|
| ![BusySlots](/Front/public/BusySlots.png) | ![FreeSlots](/Front/public/FreeSlots.png) |

## 3. Tech Stack

> ### Frontend Stack
> | Technology | Version |
> | :--- | :--- |
> | Node.js | v24.15.0 |
> | React | v18.3.1 |
> | Vite | v5.4.9 |
> | Sass | v1.99.0 |
>
> ### Backend Stack
> | Technology | Version |
> | :--- | :--- |
> | Java | 17 |
> | Spring Boot | 3.3.4 |
> | Spring Security | 3.3.4 |
> | Data JPA | 3.3.4 |
> | JJWT | 0.11.5 |
> | Lombok | 1.18.x |

## 4. Project Features

### General
* **Authentication**: Implements JSON Web Token (JWT) based authentication for secure API communication.
    * *Security Note*: For the purpose of this university project, authentication tokens and user data are stored in `localStorage`. While we acknowledge that HttpOnly cookies are the industry standard for secure token storage to mitigate XSS risks, `localStorage` was chosen for its implementation simplicity within this non-commercial, academic context.

### User Capabilities
* **Access**: Secure user registration and login functionality.
* **Parking Management**: 
    * Real-time overview of available parking spaces.
    * Ability to occupy a selected parking spot.
    * Ability to release currently occupied spots.

### Admin Capabilities
* **User Management**: Includes all standard user features, with extended privileges to manage the user base.
* **Account Control**: Ability to deactivate user accounts when necessary.


## 5. Setup and Installation

Follow the steps below to set up and run the project locally. Ensure you have Node.js, Java 17, and MySQL installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/SekjuRiczard/smart-parking.git
cd SmartParking
```
### 2. Backend Setup

Navigate to the backend directory:

#### Linux 

```bash
cd Back
```
Configure your MySQL database settings in ```src/main/resources/application.properties```

Run the application:
***Make sure that file have right permission ```chmod +x mvnw```***
```bash
./mvnw spring-boot:run
```
 #### Windows
 ```bash
cd Back
```
Configure your MySQL database settings in ```src/main/resources/application.properties```

Run the application:
***Make sure that file have right permission ```chmod +x mvnw```***
```bash
./mvnw spring-boot:run
```

### 3. Frontend Setup
Navigate to the frontend directory:
```bash
cd Front
```
Run ```npm install``` and ```npm run dev```


