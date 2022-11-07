import apiUrl from '../apiConfig'
import axios from 'axios'

export const flowerCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/flowers',
		data: {
			flower: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const flowerIndex = ( user ) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/flowers',
		
	})
}
export const flowerShow = ( user, id ) => {
	return axios({
		method: 'GET',
		url: apiUrl + `/flowers/${id}`,
		headers: {
			Authorization: `Token token=${user.token}`,
		}
	})
}

export const flowerUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/flowers/' + id,
		data: {
			flower: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		}
	})
}
export const flowerDelete = (user, id) => {
	return axios({
		url: apiUrl + '/flowers/' + id ,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}