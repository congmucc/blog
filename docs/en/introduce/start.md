# Getting Started

> [!TIP]
> For information on my personal tech stack and other details, please see the [Introduction](./introduce.md).<br>
This blog serves as a simple introduction. For most of my notes and project code, viewers need to check out my repositories on GitHub.

# How to Use This Blog
::: tip
The sidebar on the left and the navigation bar provide the article directory, allowing for easy navigation. 
Here, the right side of the main page displays the table of contents for the current article.
:::

# Project Introduction:

## WEB3 Projects
- [Wallet Project](../../project/WEB3/钱包项目/钱包项目.md)
> This project is a MetaMask-like account system based on the ERC20 protocol. In the test network environment such as Sepolia, users can perform operations like transferring new tokens issued by the administrator and viewing information through this system.

## Backend Projects:
- [Wenxun Headlines (Microservices + ES + Kafka)](../../project/闻讯头条/闻讯头条.md)
> This is a headline project modeled after China's Jinri Toutiao, modified for specific duties. Detailed responsibilities can be found in my resume or study notes.<br>
Tech Stack: Java + SpringBoot + SpringCloud + Freemarker + Minio + ElasticSearch + Kafka/Stream + XXL-job + Redis + MySQL + MongoDB

> **Project Responsibilities**:

> - Refactoring some high-concurrency scenarios.
> - In a distributed retrieval scenario, use Elasticsearch to design the retrieval service, map articles, user indexes, and order indexes, and highlight keywords.
> - Use Kafka for end-to-end communication, as middleware for buffering, and Kafka Stream for real-time computation of article popularity.
> - For hot articles, use the Freemarker view rendering template engine to implement page staticization, deploy static resources to nginx servers to reduce the pressure on tomcat, and use Sentinel to throttle to cope with the basic high concurrency.
> - When designing concurrent query APIs, Redis is used for caching hot data, multiple reads and low writes, and dictionary data to optimize query performance, and design expiration time and some general caching problems to deal with them.
> - Use Redis to implement delayed tasks with distributed locks.
> - Use MinIo to build a distributed file storage cluster to store project resources such as images.
> - Use Mongo to asynchronously store search records for each user to guarantee high scalability and high-performance metrics for user hot data.
> - In scheduled business scenarios, such as the scheduled computing hot article scenario, XXL-JOB is used to implement distributed scheduled task scheduling to resolve task conflicts on multiple servers.
> - In-depth understanding of the business of articles, forms, etc.
> - Deploy with DevOps automated deployments, combined with Jenkins for simple automated deployments.
>

- [Cangqiong Takeaway (Maven Aggregation Monolithic Project)](../../project/苍穹外卖.md)
> The highlight of this project is the AOP aspect-oriented programming and WeChat payment integration. The main technology used is Java.

::: details
There are other backend notes as well, but some are not necessary to list here because they are module-type notes rather than complete projects. If you're interested, you can check my other notes, such as those on ES, SpringCloud, and RabbitMQ.<br>
GitHub link: [note/02-Code/基础/后端 at main · congmucc/note (github.com)](https://github.com/congmucc/note/tree/main/02-Code/基础/后端).
Currently, my backend tech stack mainly includes Java and Go.
:::

## Frontend Projects
- [Uniapp E-commerce Project](../../project/uniapp电商项目/uniapp电商项目.md)
> This project is a WeChat mini-program app based on Uniapp, mainly for learning purposes. The tech stack includes TypeScript.

- [Frontend Project Notes (Admin System, Including Data Dashboard)](../../project/前端项目笔记/前端项目笔记.md)
> This project is a Vue frontend scaffold for an admin template, focusing on project formatting such as Eslint, Husky, Commitlint, and native data dashboard construction. The tech stack includes Vue + TypeScript + Echarts.

- [Vue3 Major Events Summary](https://github.com/congmucc/note/blob/main/02-Code/%E5%AE%9E%E6%88%98%E7%AC%94%E8%AE%B0/%E9%A1%B9%E7%9B%AE%E7%AC%94%E8%AE%B0/Java%2BVue/vue3%E5%A4%A7%E4%BA%8B%E4%BB%B6%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93.md)
> This is a Vue article project written in JavaScript, mainly for practicing syntax and using Element-plus.

- **Party Affairs Modification**
> This is a school project for statistical information on class members and activists.<br>
> **Tech Stack**:<br>
> - Frontend: Vue3 + JavaScript + Pinia + Vue-router
> - Backend: Spring Boot 2 + Spring Task + JWT + MyBatis<br>
**Project Responsibilities**:<br>
> - Implemented conditional query functionality for student information based on dynamic SQL and performed table splitting.
> - Performed hash encryption for confidential information such as ID cards and phone numbers.
> - Designed login restriction strategies, such as prohibiting login after three consecutive failed attempts and using Spring Task to control student login times.

- **Zhuyebao**
> This project is an innovation and entrepreneurship project designed to solve the employment difficulties of college students, including modules for universities, government enterprises, and students. I was responsible for developing the organization module and coordinating the H5 end with the backend.<br>
**Tech Stack**:<br>
> - UniApp + TypeScript (Mini Program)
> - Vue3.2 + TypeScript + Pinia + Vue-router + Pure Admin (H5)
> - Spring Boot 3 + JWT + MyBatis<br>
**Project Responsibilities**:<br>
> - Refactored the Mini Program end to the H5 end.
> - Designed and implemented a multi-file upload form for submitting proof on the UniApp end.
> - Participated in frontend-backend integration, simplifying dynamic routing and managing multi-role login for organizations.

::: info
For frontend projects, I mainly work on B-end projects using Vue. While I have studied React from the official website, only some of my notes are recorded and not posted on the blog. You can view these notes on my GitHub.
- [note/02-Code/基础/前端 at main · congmucc/note (github.com)](https://github.com/congmucc/note/tree/main/02-Code/%E5%9F%BA%E7%A1%80/%E5%89%8D%E7%AB%AF)
> This directory contains my frontend study notes for your reference.
:::

Feel free to check my complete notes on my [GitHub | Under Maintenance](https://github.com/congmucc/note) or read them on [GitBook | Not Maintained](https://congmu.gitbook.io/note/).
