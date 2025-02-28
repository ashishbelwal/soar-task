export class ApiError extends Error {
  constructor(message: string, public status?: number, public data?: any) {
    super(message);
    this.name = "ApiError";
  }
}

export const handleApiResponse = async (response: Response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new ApiError(data.message);
  }
  return data;
};

export const createApiRequest = async (
  url: string,
  options: RequestInit = {}
) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
    },
  });
  return handleApiResponse(response);
};
