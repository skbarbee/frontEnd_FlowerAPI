import apiUrl from '../apiConfig'
import axios from 'axios'

export const flowerCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/pets',
		data: {
			flower: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}