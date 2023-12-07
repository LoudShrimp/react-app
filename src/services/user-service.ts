import apiClient from "./api-client";

//interface for defining the shape of our users for our "API" call
export interface User {
  id: number;
  name: string;
}

class userService {
  getAllUsers() {
    const controller = new AbortController();
    const request = apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      })
    return { request, cancel: () => controller.abort() }
  }

  deleteUser(id: number) {
    return apiClient.delete("/users/" + id)
  }

  createUser(user: User) {
    return apiClient.post("/users", user)
  }

  updateUser(user: User) {
    return apiClient.patch("/users/" + user.id, user);
  }
}

export default new userService();