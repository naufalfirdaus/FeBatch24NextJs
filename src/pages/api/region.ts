import axios from "axios";
import config from "@/config/config";

const GetData = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/regions/paging`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const Create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/regions`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const upload = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/regions/upload`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  try {
    const result = await axios.put(
      `${config.domain}/regions` + payload.id,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};

const findData = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/regions` + id);
    return result.data;
  } catch (error) {
    return error;
  }
};

const imageData = async (name: any) => {
  try {
    const result = await axios.get(`${config.domain}/regions/photo/${name}`);
  } catch (error) {}
};
export default {
  GetData,
  Create,
  Update,
  findData,
  upload,
  imageData,
};
