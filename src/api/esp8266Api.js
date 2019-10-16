import axios from 'axios';

class esp8266Api {
static updateEsp8266(brightness, ip) {
  console.warn(ip);
    return axios({
      method: 'post',
      url: `http://${ip}/body`,
      timeout: 5 * 2000,
      data: JSON.stringify(brightness),
    })
      .then(({data}) => data)
      .catch(error => error);
  }
}

export default (esp8266Api);
