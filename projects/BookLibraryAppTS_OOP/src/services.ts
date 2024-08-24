// https://freetestapi.com/api/v1/books // internet page: https://freetestapi.com/apis/books

export async function getAllBooks(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Unable to get Data");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Some Error Occured:", error);
  }
}
