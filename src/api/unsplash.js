import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID NI4zwqE5E6fKykzFftgtGApOS38i0eK9UBtoh4N6oIQ",
  },
});
