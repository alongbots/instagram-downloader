import axios from  "axios"
import {getInfo} from "next/dist/server/typescript/utils";

export default class Ig {
  public shortcode
  constructor(url: string) {
    this.shortcode = this.parseShortcodeFromUrl(url)
  }
  
  public getHeaders() {
    return {
      accept: "*/*",
      host: "www.instagram.com",
      referer: "https://www.instagram.com/",
      DNT: "1",
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/117.0",
    }
  }
  
  public getRequestBody(): string {
    const requestData = {
      av: "0",
      __d: "www",
      __user: "0",
      __a: "1",
      __req: "3",
      __hs: "19624.HYP:instagram_web_pkg.2.1..0.0",
      dpr: "3",
      __ccg: "UNKNOWN",
      __rev: "1008824440",
      __s: "xf44ne:zhh75g:xr51e7",
      __hsi: "7282217488877343271",
      __dyn:
        "7xeUmwlEnwn8K2WnFw9-2i5U4e0yoW3q32360CEbo1nEhw2nVE4W0om78b87C0yE5ufz81s8hwGwQwoEcE7O2l0Fwqo31w9a9x-0z8-U2zxe2GewGwso88cobEaU2eUlwhEe87q7-0iK2S3qazo7u1xwIw8O321LwTwKG1pg661pwr86C1mwraCg",
      __csr:
        "gZ3yFmJkillQvV6ybimnG8AmhqujGbLADgjyEOWz49z9XDlAXBJpC7Wy-vQTSvUGWGh5u8KibG44dBiigrgjDxGjU0150Q0848azk48N09C02IR0go4SaR70r8owyg9pU0V23hwiA0LQczA48S0f-x-27o05NG0fkw",
      __comet_req: "7",
      lsd: "AVqbxe3J_YA",
      jazoest: "2957",
      __spin_r: "1008824440",
      __spin_b: "trunk",
      __spin_t: "1695523385",
      fb_api_caller_class: "RelayModern",
      fb_api_req_friendly_name: "PolarisPostActionLoadPostQueryQuery",
      variables: JSON.stringify({
        shortcode: this.shortcode,
        fetch_comment_count: "null",
        fetch_related_profile_media_count: "null",
        parent_comment_count: "null",
        child_comment_count: "null",
        fetch_like_count: "null",
        fetch_tagged_user_count: "null",
        fetch_preview_comment_count: "null",
        has_threaded_comments: "false",
        hoisted_comment_id: "null",
        hoisted_reply_id: "null",
      }),
      server_timestamps: "true",
      doc_id: "10015901848480474",
    }
    const params = new URLSearchParams(requestData)
    return params.toString()
  }
  
  public async getData(): Promise<any> {
    try {
      const res = await axios.post('/api/graphql',{
        baseURL: 'https://wwww.instagram.com',
        headers: this.getHeaders(),
        data: this.getRequestBody()
      })
      return res.data
    } catch(e) {
      console.log('请求错误：', e)
    }
   
  }
  
  public async getInfo() {
    const data = await this.getData()
    return this.getVideoInfo(data)
  }
  
  private getVideoInfo(data: any) {
    return data
  }
  
  private parseShortcodeFromUrl(url: string) {
    return url
  }
}