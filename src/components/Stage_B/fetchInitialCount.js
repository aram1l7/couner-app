export const fetchInitialCount = async () => {
  try {
    // Simulate a delay for fetching the initial count (e.g., from an API)
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve({ data: 10 }), 1000) // Mocked API response with count 10
    );
    
    return response.data;
  } catch (error) {
    console.error('Error fetching initial count:', error);
    throw error;
  }
};
