import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authHeader, handleResponseWithLoginCheck } from "./base.service";

const API_URL = BASE_API_URL + "/api/device";

class DeviceService {
  saveDevice(device) {
    const req = axios.post(API_URL, device, { headers: authHeader() });
    return handleResponseWithLoginCheck(req);
  }

  deleteDevice(device) {
    const req = axios.delete(API_URL + "/" + device.id, {
      headers: authHeader(),
    });
    return handleResponseWithLoginCheck(req);
  }

  getAllDevice() {
    return axios.get(API_URL);
  }
}

export default new DeviceService();
