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



# 项目介绍：

## WEB3项目
- [钱包项目](../project/WEB3/钱包项目/钱包项目.md)
> 该项目是基于ERC20协议的一个仿MateMask的账户系统，用户在测试网如Sepolia的环境中，由本系统进行由管理员颁发的新币进行转账，查看信息等操作。

## 后端项目：
- [闻讯头条（微服务 + ES + Kafka）](../project/闻讯头条/闻讯头条.md)
> 该项目是一个头条类的项目，是仿中国的今日头条进行改造而来，具体职责的话简历应该有写，或者学习笔记上有应该。<br>
技术栈：Java + SpringBoot + SpringCloud + freemarker + Minio + ElasticSearch + kafka/Stream + xxl-job +Redis + Mysql + MongoDB

- [苍穹外卖（maven聚合的单体项目）](../project/苍穹外卖.md)
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

- [vue3大事件总结](https://github.com/congmucc/note/blob/main/02-Code/%E5%AE%9E%E6%88%98%E7%AC%94%E8%AE%B0/%E9%A1%B9%E7%9B%AE%E7%AC%94%E8%AE%B0/Java%2BVue/vue3%E5%A4%A7%E4%BA%8B%E4%BB%B6%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93.md)
> 这是一个Vue的文章项目，使用JavaScript编写，主要是练习语法和Element-plus的使用

- **党务修改**
> 这个是学校的项目，用于统计班内团员和积极分子等信息。<br>
> **技术栈**：<br>
> - 前端：Vue3 + JavaScript + pinia + vue-router
> - 后端：Spring Boot 2 + Spring Task + JWT + MyBatis<br>
**项目职责**：<br>
> - 基于动态sql实现学生信息的条件查询功能，并进行分表处理。
> - 对身份证、手机号等私密信息进行hash加密处理
> - 设计登录限制策略，如连续三次登录失败禁止登录、使用springtask定时任务对学生登录时间进行定时控制。

- **助业宝**
> 该项目是为解决大学生就业困难而设计的创新创业项目，包含高校端、政府企业端、学生端模块。本人负责机构端开发，以及h5端与后端联调。<br>
**技术栈**：<br>
> - UniApp + TypeScript（小程序端）
> - Vue3.2 + TypeScript + pinia + vue-router + pure admin（H5端）
> - Spring Boot 3 + JWT + MyBatis<br>
**项目职责**：<br>
> - 重构小程序端为 H5 端
> - 设计并实现uniapp端提交证明的多文件上传表单
> - 参与前后端联调，基于项目设计简化版动态路由和管理机构多角色登录。


::: info
前端的话，我这边主要是做的Vue的B端，所以说有很多B端项目，React我是在官网看的，笔记直记录了一部分，没放到博客上，可以去我的Github上的笔记进行查看。
- [note/02-Code/基础/前端 at main · congmucc/note (github.com)](https://github.com/congmucc/note/tree/main/02-Code/%E5%9F%BA%E7%A1%80/%E5%89%8D%E7%AB%AF)
> 该目录下是前端我的学习笔记，可以自行查看
:::


我个人的[github | 维护中](https://github.com/congmucc/note)看一下完整笔记，也可以去[gitbook | 不维护](https://congmu.gitbook.io/note/)阅读我的笔记。