/**
 * Create a customable closure for fetching data based on the CRUD methods. 
 * @param {String} method
 * @returns { Function }
 * @example const get = requester("get");
 */
const requester = method => {
    const getAuthHeader = () => {
        // const token = window.localStorage.getItem("auth_token");
        const token = '';
        return (token && token.length) 
                ? { "Authorization": `Bearer ${token}` }
                : {}
    };

    return async (url, data, options) => {
        const authHeader = getAuthHeader();

        const response = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                // ...authHeader
            },
            body: JSON.stringify(data),
            ...options,
        });
        return response.json();
    };
};

/**
 * get data at url
 * @param {String} url
 * @param {Object} options
 * @returns {Promise} with the data from the api at this url
 */
export const get = requester("get");

/**
 * post data at url
 * @param {String} url
 * @param {Object} data
 * @param {Object} options
 * @returns {Promise} with the data from the api at this url

 */
export const post = requester("post");

/**
 * put data at url
 * @param {String} url
 * @param {Object} data
 * @param {Object} options
 * @returns {Promise} with the data from the api at this url
 */
export const put = requester("put");

/**
 * delete data at url
 * @param {String} url
 * @param {Object} options
 * @returns {Promise} with the data from the api at this url
 */
export const remove = requester("delete");
