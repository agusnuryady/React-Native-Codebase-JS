import {
  get,
  post,
  patch,
  put,
  postForm,
  postWithProgress,
} from './networking';

export const endpoint = {
  //please short from a to z or by category if adding new api service
  getAllCity: async () => get('sholat/format/json/kota'),
  getCityId: async (city) => get(`sholat/format/json/kota/nama/${city}`),
  getJadwalSholat: async (id, date) =>
    get(`sholat/format/json/jadwal/kota/${id}/tanggal/${date}`),
};

export default endpoint;
