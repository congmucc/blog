## blog备份



### 安装依赖

```
pnpm install
```



### 打包

```
pnpm build
```

> 打包目录为.vitpress/dist



nginx配置目录，记得需要先下载nginx容器

```dockerfile
docker run --name nginx --restart=always -p 443:443 -p 80:80 -d -v /usr/local/nginx/nginx.conf:/etc/nginx/nginx.conf -v /usr/local/nginx/cert:/etc/nginx/cert -v /usr/local/dist:/usr/local/dist --privileged=true nginx
```



nginx.conf

```nginx

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    
    	gzip on;
	    gzip_static on;
    	gzip_min_length  5k;
    	gzip_buffers     4 16k;
    	gzip_http_version 1.0;
    	gzip_comp_level 7;
	    gzip_types       text/plain application/javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    	gzip_vary on;

server {
        listen       443 ssl;
        server_name  www.congmu.top congmu.top;
        
        ssl on;
        ssl_certificate /etc/nginx/cert/congmu.top_bundle.crt;
        ssl_certificate_key /etc/nginx/cert/congmu.top.key;
        ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
     
        location / {		
            root   /usr/local/dist/dist;
            index  index.html index.htm;
            try_files $uri $uri/ $uri.html /404.html;

            expires 1h;
        }
    }
server {
        listen 80;
        server_name www.congmu.top;
        rewrite ^(.*)$	https://$host$1	permanent;
    }
}

```





