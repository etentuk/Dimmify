import axios from 'axios';

class esp8266Api {
  static updateEsp8266(brightness, ip) {
    return axios({
      method: 'post',
      url: `http://${ip.ip}/body`,
      timeout: 5 * 2000,
      data: JSON.stringify(brightness),
    })
      .then(({ data }) => data)
      .catch(error => console.log(error));
  }
}

export default esp8266Api;
