package downloader

import (
	"fmt"
	"io"
	"mime"
	"net/http"
	"net/url"
	"path"
	"strings"
	"time"
)

func ProxyDownload(w http.ResponseWriter, fileURL string) error {
	//创建代理
	proxyURL, err := url.Parse("http://127.0.0.1:1087")
	if err != nil {
		return fmt.Errorf("failed to create proxy: %w", err)
	}
	transport := &http.Transport{
		Proxy: http.ProxyURL(proxyURL),
	}

	// 创建带超时的HTTP客户端
	client := &http.Client{
		Timeout:   60 * time.Second,
		Transport: transport,
	}

	// 创建请求
	// req, err := http.NewRequest(http.MethodGet, fileURL, nil)
	req, err := http.NewRequest(http.MethodGet, "https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/463345115_934290348748147_6898052195124540909_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=107&_nc_oc=Q6cZ2AEaKB1OznfjEVMlKJhdKdluPAdE1utbGtfT0fZ6IG1hqfXQ2LZnGC979vQDJtKge7Y&_nc_ohc=enMsVB2NE9oQ7kNvgGWtGgB&_nc_gid=a1b6c2d8eaff4f4f93784642289c93fb&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYFmWW7Yi3hBSmfmbBBW0Dcx5Naa2Iyv0KH0zCdqvIQj5g&oe=67D484BC&_nc_sid=10d13b", nil)
	if err != nil {
		// %w 错误包装
		return fmt.Errorf("failed to create request: %w", err)
	}

	// 设置请求头
	// req.Header.Set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36")
	// req.Header.Set("Accept", "*/*")
	// req.Header.Set("Accept-Language", "zh-CN,zh;q=0.9")
	req.Header.Set("User-Agent", "Apifox/1.0.0 (https://apifox.com)")
	req.Header.Set("Accept", "*/*")
	req.Header.Set("Host", "localhost:8080")
	req.Header.Set("Connection", "keep-alive")

	// 发送请求
	resp, err := client.Do(req)
	if err != nil {
		return fmt.Errorf("failed to send request: %w", err)
	}
	// resp.Body是一个流，需要手动关闭
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		// Status 类似于 “200 OK”
		return fmt.Errorf("remote server returned status code %s", resp.Status)
	}

	// 从响应中获取内容
	contentType := resp.Header.Get("Content-Type")
	if contentType == "" {
		ext := path.Ext(fileURL)
		if ext != "" {
			contentType = mime.TypeByExtension(ext)
		}

		// 使用二进制类型
		if contentType == "" {
			contentType = "application/octet-stream"
		}
	}

	// 获取文件名
	filename := getFilenameFromURL(fileURL)

	// 设置响应头
	w.Header().Set("Content-Type", contentType)
	// Content-Disposition 告诉浏览器内容应该如何处理，是网页的一部分还是作为附件下载
	// Sprintf 返回一个格式化后的字符串
	w.Header().Set("Content-Disposition", fmt.Sprintf("attachment;filename=%s", filename))
	w.Header().Set("Access-Control-Allow-Origin", "*")
	if resp.Header.Get("Content-Length") != "" {
		w.Header().Set("Content-Length", resp.Header.Get("Content-Length"))
	}

	// 将响应写入
	_, err = io.Copy(w, resp.Body)
	if err != nil {
		return fmt.Errorf("failed to write response to client: %w", err)
	}
	return nil
}

func getFilenameFromURL(fileURL string) string {
	// 最后一部分作为文件名
	urlPath := path.Base(fileURL)

	// 移除查询参数
	if idx := strings.IndexByte(urlPath, '?'); idx >= 0 {
		urlPath = urlPath[:idx]
	}

	if urlPath == "" || urlPath == "." {
		return "download"
	}

	return urlPath
}
