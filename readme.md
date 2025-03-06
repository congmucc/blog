## blog备份



### 安装依赖

```
yarn install
```



### 打包

```
yarn build
```

> 打包目录为.vitpress/dist


> 这里注意，如果使用github pages的话需要添加相应的`blog/.vitepress/config.mts`的`base`属性为`/blog/`（这个看项目名称，是哪个改哪个），如果使用云服务器部署的话就不必要。
> 详情请看 `https://vitepress.dev/guide/deploy#setting-a-public-base-path`

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
        index index.html        

        ssl on;
        ssl_certificate /etc/nginx/cert/congmu.top_bundle.crt;
        ssl_certificate_key /etc/nginx/cert/congmu.top.key;
        ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
     
        location / {		
            root   /usr/local/dist/dist;
           
            try_files $uri $uri.html $uri/ =404;

            # non existent pages
            error_page 404 /404.html;

            # a folder without index.html raises 403 in this setup
            error_page 403 /404.html;
        
            # adjust caching headers
            # files in the assets folder have hashes filenames
            location ~* ^/assets/ {
            	expires 1y;
                add_header Cache-Control "public, immutable";
            }
        }
    }
server {
        listen 80;
        server_name www.congmu.top;
        rewrite ^(.*)$	https://$host$1	permanent;
    }
}



```





