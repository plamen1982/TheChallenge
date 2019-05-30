/**
 * Create a customable closure for fetching data based on the CRUD methods. 
 * @param {String} method
 * @returns { Function }
 * @example const get = requester("get");
 */
const requester = method => {
    const getAuthHeader = () => {
        const token = window.localStorage.getItem("auth_token");
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
                ...authHeader
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
 * @example get('http://localhost:5000/device/all');
 */
export const get = requester("get");

/**
 * post data at url
 * @param {String} url
 * @param {Object} data
 * @param {Object} options
 * @returns {Promise} with the data from the api at this url
 * @example post('http://localhost:5000/device/all', {  model: "Samsung galaxy S8",
                                                        typeDevice: "phone",
                                                        description: "PoweredTest by the Exynos 8890 SoC, this phone can blaze through absolutely anything you throw at it, with power to spare. The camera is absolutely amazing, especially in low light.",
                                                        price: 300,
                                                        image: "https://via.placeholder.com/150" });
 */
export const post = requester("post");

/**
 * put data at url
 * @param {String} url
 * @param {Object} data
 * @param {Object} options
 * @returns {Promise} with the data from the api at this url
 * @example put('http://localhost:5000/device/edit/:id', { image: "https://via.placeholder.com/300" });
 */
export const put = requester("put");

/**
 * delete data at url
 * @param {String} url
 * @param {Object} options
 * @returns {Promise} with the data from the api at this url
 * @example remove('http://localhost:5000/device/delete/:id');
 */
export const remove = requester("delete");
