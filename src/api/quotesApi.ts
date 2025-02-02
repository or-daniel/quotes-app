import Quote from "../types/Quote";

const fetchQuotes = async (count: number, tag = ""): Promise<Quote[]> => {
  try {
    const response = await fetch(
      `http://localhost:3000/quotes/getQuotes?count=${count}&tag=${tag}`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data.quotes;
  } catch (error) {
    throw error instanceof Error ? error : new Error(String(error));
  }
};

export default fetchQuotes;
