# Hero Hai App

## Overview

Hero Hai App is a community-powered donation platform designed to streamline the process of giving and receiving aid for various causes. Whether it's supporting refugees, disaster victims, or animals in need, Hero Hai App connects those who need help with those who can offer assistance—be it financial support or services.

### Key Features

- **Community-Driven Assistance**: Mobilize resources quickly during crises.
- **Real-Time Updates**: Keep all stakeholders informed about the status of ongoing efforts.
- **Transparency**: Ensure donations and services are used effectively through impact assessment.
- **Versatility**: Support both monetary donations and service offerings.
- **Targeted Notifications**: Inform potential donors and service providers immediately.
  

## Use Case Example: Kerala Flood Relief

In the event of a disaster like the Kerala floods, the Hero Hai App plays a crucial role in coordinating relief efforts:

1. **Incident Occurs**: A flood devastates Kerala, affecting people and animals.
2. **Help Request Creation**: NGOs or individuals create a help request specifying the type of assistance needed.
3. **Notification**: The app sends targeted notifications to potential donors and service providers.
4. **Donations and Services**: Users can donate funds or offer services directly through the platform.
5. **Real-Time Updates**: The app provides updates on the relief efforts.
6. **Impact Assessment**: The platform collects data to assess the effectiveness of the response.
   

## Installation

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your system.
- **MongoDB**: The app uses MongoDB as its database.

### Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/hero-hai-app.git
   cd hero-hai-app
2.  **Install Dependencies**:
    ```bash
    npm install
3. **Environment Variables: Create a .env.local file in the root directory and add the necessary environment variables**:
    ```bash
      MONGODB_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret
4. **Start the Application**:
    ```bash
    npm run dev
5. **Access the App**:
     Open your browser and navigate to http://localhost:3000.
   

## API Endpoints

### User Management

**Sign Up**: /api/auth/signup
**Login**: /api/auth/login
**Logout**: /api/auth/logout

### Help Requests
**Create Help Request**: /api/help-requests
**Get Help Requests**: /api/help-requests

### Payments
**Create Payment**: /api/payments
**Get Payments**: /api/payments


## Workflow Diagram

The workflow for responding to a crisis, such as the Kerala floods, involves several key steps:

1. **Help Request Creation**: Users create a help request detailing the assistance needed.
2. **Notifications Sent**: The app notifies potential donors and service providers.
3. **Donations and Services Provided**: Users contribute money or services.
4. **Real-Time Updates**: The platform keeps everyone informed on the progress.
5. **Impact Assessment**: Data is collected to evaluate the effectiveness of the relief efforts.
   
   
## Why Hero Hai App?
1. **Community-Driven**: Mobilize resources quickly and effectively.
2. **Transparency**: Track the impact of donations and services.
3. **Versatility**: Support for both financial and service-based contributions.
4. **User-Friendly**: Easy for anyone to create or respond to help requests.
5. **Targeted Notifications**: Ensures that the right people are informed at the right time.
   
   
## Contributing
We welcome contributions! Please read our Contributing Guidelines for more details.


## License
This project is licensed under the MIT License - see the LICENSE file for details.


## Contact
For any questions or suggestions, please contact us at support@herohai.com.

Feel free to adjust the content as needed for your project.
