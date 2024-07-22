# Talk the talk

## Project Description
Talk the talk is  a cutting-edge fullstack application designed to revolutionize podcast creation. Leveraging the power of OpenAI, users can effortlessly generate high-quality podcasts and custom thumbnails. This app also features seamless user authentication and real-time content management, providing an all-in-one solution for podcast enthusiasts and creators.

## Features
- **AI-Powered Podcast Generation:** Create engaging podcasts with the help of OpenAI's advanced natural language processing capabilities.
- **Custom Thumbnail Creation:** Generate visually appealing thumbnails tailored to your podcasts using OpenAI.
- **User Authentication:** Secure and intuitive user sign-up and login powered by Clerk.
- **Real-Time Content Management:** Efficiently manage your podcasts and associated data with real-time updates using Convex.
- **Responsive Design:** Enjoy a seamless user experience across all devices with the beautifully designed Shadcn UI components.
- **Easy Deployment:** Utilize Next.js for efficient server-side rendering and static site generation.

## Demo
Check out our [live demo](#) or take a look at the screenshots below to see the app in action!

![Screenshot 1](#)
![Screenshot 2](#)

## Installation
To set up the Podcast Generator App locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nhier17/talk-the-talk.git
   cd talk-the-talk
### Install the dependencies:
npm install

### Set up environment variables:
Create a .env.local file in the root directory and add your environment variables:

   NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
   CLERK_API_KEY=<your-clerk-api-key>
   OPENAI_API_KEY=<your-openai-api-key>
   CONVEX_API_KEY=<your-convex-api-key>
   Run the development server:

npm run dev

## Dependencies
This project relies on several key technologies to deliver a powerful and efficient user experience:

Convex: For real-time database and state management.
Clerk/Next.js: For secure and user-friendly authentication.
Shadcn: For modern and responsive UI components.
OpenAI: For AI-driven podcast and thumbnail generation.
Next.js: For robust server-side rendering and static site generation.

## Usage
### Generating a Podcast
Sign up / Sign in: Create an account or log in using the Clerk-powered authentication system.
Create a Podcast: Enter the necessary details and let OpenAI generate the podcast content for you.
Generate Thumbnails: Create custom thumbnails for your podcasts using OpenAI's capabilities.
Manage Content: View, edit, and manage your podcasts through your user dashboard.

## API
### Authentication
Clerk handles all authentication processes. Make sure your Clerk API keys are correctly set up in your .env.local file.

### Podcast Generation
Endpoints for generating podcasts and thumbnails are powered by OpenAI. Ensure your OpenAI API key is configured in your .env.local file.

### Real-time Database
Real-time content management is facilitated by Convex. Ensure your Convex API key is included in your .env.local file.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Author: Abraham Nhier

## Contact Information;
      Email: abrahamnhier97@gmail.com
      Phone: +254716903151

## Technology Used 
      1. Typescript
      2. Nextjs
      3. Convex
      4. Tailwind css
      5. OpenAI

 ## Framework used
       Git
       
 ## LICENSE: [MIT License](link-to-license-file).
