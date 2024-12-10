import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    // Check if the response is okay (status 200-299)
    if (!response.ok) {
      // Handle different HTTP status codes more gracefully
      const errorText = await response.text(); // Get the response body (could be HTML or JSON)
      console.error('Error from server:', errorText); // Log the response body for debugging
      throw new Error(`Failed to login. Status: ${response.status}. ${errorText}`);
    }

    // Parse the response as JSON if it's okay
    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Error from user login:', err);
    return Promise.reject('Could not fetch the user info.');
  }
};

export { login };
