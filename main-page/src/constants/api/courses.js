import axios from 'src/configs/axios';
export default {
    all: () => axios.get(`/courses`).then((response) => response.data),
    details: (id) => axios.get(`/courses/${id}`).then((response) => response.data),
};
