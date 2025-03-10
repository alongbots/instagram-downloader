package handlers

import (
	"encoding/json"
	"instagram-downloader/server-learn/pkg/downloader"
	"net/http"
	"net/url"
)

func HealthCheckHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	response := map[string]string{
		"status":  "ok",
		"message": "Server is running",
	}

	json.NewEncoder(w).Encode(response)
}

func DownloadHandler(w http.ResponseWriter, r *http.Request) {
	// 只允许GET请求
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// 获取Url参数
	urlParam := r.URL.Query().Get("url")
	if urlParam == "" {
		http.Error(w, "URL parameter is required", http.StatusBadRequest)
		return
	}

	// 验证URL是否有效
	_, err := url.ParseRequestURI(urlParam)
	if err != nil {
		http.Error(w, "Invalid URL", http.StatusBadRequest)
		return
	}

	err = downloader.ProxyDownload(w, urlParam)
	if err != nil {
		http.Error(w, "Failed to download "+err.Error(), http.StatusInternalServerError)
		return
	}
}
