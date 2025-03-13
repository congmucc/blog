# 开始
> [!TIP]
> 个人技术栈以及一些其他的信息请看[介绍](./introduce.md)<br>
博客只是作为一个简单的介绍，其他大部分如笔记，项目代码；观者还需到本人Github的仓库进行了解。

# 博客使用方法
::: tip
左侧边栏和导航栏是文章目录，可以进行互相跳转，
这里，
主页面的右边是该文章的目录。
:::


---

# 项目介绍：

## WEB3项目
- [基于Anchor的AMM做市商系统](https://github.com/congmucc/anchor-spl-amm)
> 该项目是基于Anchor框架实现了一个简易版的AMM市商系统，完成了基本的Swap，目前正在迭代。
> 技术栈: Anchor + SPL Token
> 项目职责：
> - 基于 Anchor 框架设计并开发 AMM 系统核心模块，包括流动性池创建、代币交换和流动性管理。
> - 实现池中资产比例自动调整机制，优化交易滑点和收益分配。
> - 开发基于 SPL Token 的代币交换逻辑，支持精准代币兑换。
> - 编写全面的单元测试和集成测试，覆盖流动性管理、代币交换及边界条件。


- [轮盘游戏foundry-lottery](https://github.com/congmucc/foundry-lottery)
> 该项目是基于Foundry框架的一个轮盘游戏，用户可以参与这个游戏进行投注，轮盘利用链上事件（Chainlink Automation+VRF）触发定时结算机制，其中用户可以使用USDT，USDC，ETH进行参与抽奖。
> 技术栈: Foundry + Openzeppelin + Golang
> 项目职责：
> - 使用 Foundry 框架开发链上轮盘游戏的智能合约，设计游戏逻辑，包括用户投注、轮盘转动及自动结算功能。
> - 集成 OpenZeppelin 合约库，实现代币支付支持（USDT、USDC、ETH），并确保智能合约符合 ERC-20标准。
> - 设计和开发智能合约的安全性机制，包括访问权限控制、防重入攻击和资金池安全管理。
> - 使用 Golang 实现智能合约的调用与交互。

- [SUI合约开发](https://github.com/congmucc/letsmove/tree/main/mover/congmucc)
> 该项目包括编写基本的共享型和非共享型Coin（NFT）合约，以及Coin型的Swap合约。
> 技术栈: SUI & Move
> 项目职责：
> - 编写基本的共享型和非共享型Coin（NFT）合约。
> - Coin型的Swap合约。
> - 使用TypeScript进行交互合约和监听。



- [钱包项目](../project/WEB3/钱包项目/钱包项目.md)
> 该项目是基于ERC20协议的一个仿MateMask的账户系统，用户在测试网如Sepolia的环境中，由本系统进行由管理员颁发的新币进行转账，查看信息等操作。


## 后端项目：
- [闻讯头条（微服务 + ES + Kafka）](../project/闻讯头条/闻讯头条.md)
> 该项目是一个头条类的项目，是仿中国的今日头条进行改造而来，具体职责的话简历应该有写，或者学习笔记上有应该。<br>
技术栈：Java + SpringBoot + SpringCloud + freemarker + Minio + ElasticSearch + kafka/Stream + xxl-job +Redis + Mysql + MongoDB<br>

> **项目职责**：

> - 对一些高并发的场景进行重构设计。
> - 在分布式检索场景中，使用Elasticsearch实现检索服务设计，对文章、用户索引、订单索引Mapping，并对关键字进行高亮处理。
> - 运用Kafka完成端到端的通信，作为中间件进行缓冲，以及使用Kafka Stream进行文章热度的实时计算。
> - 针对热点文章，使用Freemarker视图渲染模版引擎，实现页面静态化，将静态化资源部署到nginx服务器，降低对tomcat的压力，并使用Sentinel进行限流处理来应对基础高并发情况。
> - 设计并发查询接口时，针对热点数据、读多写少、字典数据均使用Redis进行缓存，优化查询性能，并针对性的设计过期时间，以及一些常规的缓存问题进行处理；
> - 运用Redis，结合分布式锁实现延时任务。
> - 使用MinIo搭建分布式文件存储集群，存储图像等项目资源。
> - 使用Mongo异步为每个用户存储搜索记录，以保证用户热数据高扩展和高性能指标。
> - 在定时业务场景中，如定时计算热点文章业务场景中，使用XXL-JOB实现分布式定时任务调度来解决多服务器下的任务冲突。
> - 对文章、表单等业务有深入的理解。
> - 使用DevOps自动化部署进行部署，结合Jenkins进行简单的自动化部署。
>

- [外卖（maven聚合的单体项目）](../project/外卖项目.md)
> 这个项目的亮点是具有aop切面思想和具有微信支付的业务，主要技术是Java



::: details
后端还有其他的笔记，只不过有的没必要写出来，因为有的是一些模块类型的笔记，不是完整的项目，所以说没什么必要，如果看的话可以去看我的其他笔记，例如ES、SpringCloud、RabbitMq等笔记.<br>
Github地址为：[note/02-Code/基础/后端 at main · congmucc/note (github.com)](https://github.com/congmucc/note/tree/main/02-Code/基础/后端)。
目前后端技术栈主要是Java和Go。
:::

## 前端项目
- [uniapp电商项目](../project/uniapp电商项目/uniapp电商项目.md)
> 项目基于uniapp做的一个微信小程序的app，主要是为了学习，技术栈为TypeScript

- [前端项目笔记（后台管理系统，包含数据大屏）](../project/前端项目笔记/前端项目笔记.md)
> 项目是Vue前端的一个后台管理模板的一个脚手架，着重项目的格式如Eslint，husky，commitlint，以及原生数据大屏的搭建。技术栈有Vue+TypeScripts+Echarts





::: info
前端的话，我这边主要是做的Vue的B端，所以说有很多B端项目，React我是在官网看的，笔记直记录了一部分，没放到博客上，可以去我的Github上的笔记进行查看。
- [note/02-Code/基础/前端 at main · congmucc/note (github.com)](https://github.com/congmucc/note/tree/main/02-Code/%E5%9F%BA%E7%A1%80/%E5%89%8D%E7%AB%AF)
> 该目录下是前端我的学习笔记，可以自行查看
:::


我个人的[github | 维护中](https://github.com/congmucc/note)看一下完整笔记，也可以去[gitbook | 不维护](https://congmu.gitbook.io/note/)阅读我的笔记。