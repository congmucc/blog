# Start
> [!TIP]
> For my personal tech stack and some other information, please see the [Introduction](./introduce.md)<br>
This blog serves as a simple introduction; most of the content, such as notes and project code, can be found in my GitHub repository.

# How to Use the Blog
::: tip
The left sidebar and navigation bar serve as the article directory, allowing for mutual navigation. Here, the right side of the main page shows the directory of the article.
:::

---

# Project Introduction:

## WEB3 Projects
- [AMM Market Maker System Based on Anchor](https://github.com/congmucc/anchor-spl-amm)
> This project is a simplified version of an AMM market maker system based on the Anchor framework, completing basic swaps and currently in iteration.
> Tech Stack: Anchor + SPL Token
> Project Responsibilities:
> - Design and develop the core modules of the AMM system based on the Anchor framework, including liquidity pool creation, token swapping, and liquidity management.
> - Implement an automatic adjustment mechanism for asset ratios in the pool to optimize trading slippage and profit distribution.
> - Develop token swapping logic based on SPL Token to support precise token exchanges.
> - Write comprehensive unit tests and integration tests covering liquidity management, token swapping, and edge cases.

- [Roulette Game Foundry Lottery](https://github.com/congmucc/foundry-lottery)
> This project is a roulette game based on the Foundry framework, where users can participate in betting. The roulette uses on-chain events (Chainlink Automation + VRF) to trigger a timed settlement mechanism, allowing users to participate in the lottery using USDT, USDC, and ETH.
> Tech Stack: Foundry + Openzeppelin + Golang
> Project Responsibilities:
> - Develop the smart contracts for the on-chain roulette game using the Foundry framework, designing game logic including user betting, roulette spinning, and automatic settlement functions.
> - Integrate the OpenZeppelin contract library to support token payments (USDT, USDC, ETH) and ensure the smart contracts comply with ERC-20 standards.
> - Design and develop security mechanisms for the smart contracts, including access control, reentrancy protection, and fund pool security management.
> - Use Golang to implement interactions with the smart contracts.

- [SUI Contract Development](https://github.com/congmucc/letsmove/tree/main/mover/congmucc)
> This project includes writing basic shared and non-shared Coin (NFT) contracts, as well as Coin-type swap contracts.
> Tech Stack: SUI & Move
> Project Responsibilities:
> - Write basic shared and non-shared Coin (NFT) contracts.
> - Coin-type swap contracts.
> - Use TypeScript for interacting with contracts and listening.

- [Wallet Project](../project/WEB3/钱包项目/钱包项目.md)
> This project is a Mask-like account system based on the ERC20 protocol, allowing users to transfer newly issued coins by the administrator and view information in a test network like Sepolia.

## Backend Projects:
- [News Headline (Microservices + ES + Kafka)](../project/闻讯头条/闻讯头条.md)
> This project is a headline-like project modeled after China's Toutiao. Specific responsibilities should be detailed in the resume or study notes.<br>
Tech Stack: Java + SpringBoot + SpringCloud + Freemarker + Minio + ElasticSearch + Kafka/Stream + XXL-JOB + Redis + MySQL + MongoDB<br>

> **Project Responsibilities**:
> - Refactor design for high-concurrency scenarios.
> - In distributed search scenarios, use Elasticsearch to design search services, mapping articles, user indexes, and order indexes, and highlight keywords.
> - Use Kafka for end-to-end communication, serving as middleware for buffering, and use Kafka Stream for real-time calculation of article popularity.
> - For hot articles, use Freemarker view rendering template engine to achieve static page generation, deploy static resources to the Nginx server to reduce pressure on Tomcat, and use Sentinel for flow control to handle basic high-concurrency situations.
> - When designing concurrent query interfaces, use Redis for caching hot data, read-heavy and write-light data, and dictionary data to optimize query performance, and design expiration times and handle common caching issues.
> - Use Redis in conjunction with distributed locks to implement delayed tasks.
> - Use MinIO to build a distributed file storage cluster for storing images and other project resources.
> - Use MongoDB to asynchronously store search records for each user to ensure high scalability and performance metrics for hot user data.
> - In scheduled business scenarios, such as calculating hot articles, use XXL-JOB to implement distributed scheduled task scheduling to resolve task conflicts across multiple servers.
> - Have a deep understanding of articles, forms, and other business aspects.
> - Use DevOps for automated deployment, combined with Jenkins for simple automated deployment.

- [Takeout (Maven Aggregated Monolithic Project)](../project/外卖项目.md)
> The highlight of this project is its AOP aspect-oriented programming and WeChat payment functionality, with Java as the main technology.

::: details
There are other notes in the backend, but some are not necessary to write down, as they are module-type notes rather than complete projects. If you want to see them, you can check my other notes, such as those on ES, SpringCloud, RabbitMQ, etc.<br>
GitHub address: [note/02-Code/基础/后端 at main · congmucc/note (github.com)](https://github.com/congmucc/note/tree/main/02-Code/基础/后端).
Currently, the backend tech stack mainly consists of Java and Go.
:::

## Frontend Projects
- [Uniapp E-commerce Project](../project/uniapp电商项目/uniapp电商项目.md)
> This project is an app based on uniapp for WeChat Mini Programs, mainly for learning purposes, with a tech stack of TypeScript.

- [Frontend Project Notes (Backend Management System, Including Data Dashboard)](../project/前端项目笔记/前端项目笔记.md)
> This project is a scaffolding for a Vue frontend backend management template, focusing on project formats such as Eslint, husky, commitlint, and the construction of a native data dashboard. The tech stack includes Vue + TypeScript + Echarts.

::: info
In the frontend, I mainly work on B-end projects using Vue, so there are many B-end projects. I have also looked at React on the official website, and I have recorded some notes that are not included in the blog. You can check my notes on GitHub.
- [note/02-Code/基础/前端 at main · congmucc/note (github.com)](https://github.com/congmucc/note/tree/main/02-Code/%E5%9F%BA%E7%A1%80/%E5%89%8D%E7%AB%AF)
> This directory contains my learning notes for the frontend, which you can view.
:::

I personally maintain my [GitHub](https://github.com/congmucc/note) for complete notes, and you can also read my notes on [GitBook](https://congmu.gitbook.io/note/) (not maintained).