import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=sometimeseveryoneneedscorrecthorsebatterystaple';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_DETAIL = 'FETCH_DETAIL';
export const DELETE_POST = 'DELETE_POST';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
    type: FETCH_POSTS,
    payload: request
    };
}

export function createPost(props) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPostDetail(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type: FETCH_DETAIL,
        payload: request
    };
}

export function deletePost(id) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type: DELETE_POST,
        payload: request
    };
}