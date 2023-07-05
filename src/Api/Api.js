const axios = require('axios');

class API {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get(path) {
        const url = `${this.baseUrl}${path}`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {

            console.error(`Error fetching data from ${url}:`, error);
            throw error;
        }
    }

    async post(path, body) {
        const url = `${this.baseUrl}${path}`;
        try {
            const response = await axios.post(url, body);
            return response.data;
        } catch (error) {
            console.error(`Error posting data to ${url}:`, error);
            throw error;
        }
    }

    async put(path, body) {
        const url = `${this.baseUrl}${path}`;
        try {
            const response = await axios.put(url, body);
            return response.data;
        } catch (error) {
            console.error(`Error updating data at ${url}:`, error);
            throw error;
        }
    }

    async delete(path) {
        const url = `${this.baseUrl}${path}`;
        try {
            const response = await axios.delete(url);
            return response.data;
        } catch (error) {
            console.error(`Error deleting data at ${url}:`, error);
            throw error;
        }
    }
}

module.exports = API;
