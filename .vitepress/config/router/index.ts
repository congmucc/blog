const route = [
  {
    text: "项目笔记",
    collapsed: false,
    items: [
      { text: "闻讯头条", link: "/project/闻讯头条/闻讯头条" },
      {
        text: "uniapp电商项目",
        link: "/project/uniapp电商项目/uniapp电商项目",
      },
      { text: "苍穹外卖", link: "/project/苍穹外卖" },
      { text: "党务修改", link: "/project/党务修改" },
      { text: "构建项目", link: "/project/构建项目" },
      { text: "前端项目笔记", link: "/project/前端项目笔记" },
      { text: "vue3大事件项目总结", link: "project/vue3大事件项目总结" },
    ],
  },
  {
    text: "微服务框架",
    collapsed: false,
    items: [
      {text: "SpringCloud", link: "/微服务框架/SpringCloud/SpringCloud"},
      {text: "多级缓存", link: "/微服务框架/分布式/多级缓存/多级缓存"},
      {text: "分布式缓存", link: "/微服务框架/分布式/分布式缓存/分布式缓存"},
      {text: "分布式事务", link: "/微服务框架/分布式/分布式事务/分布式事务"},
      {text:"ElasticSearch", link: "/微服务框架/Elasticsearch/Elasticsearch导学"},
      {text: "RabbitMQ", link: "/微服务框架/MQ/MQ"}
    ]
  },
  {
    text:"SQL",
    collapsed: false,
    items:[
      {text: "Mysql", link: "/SQL/Mysql/Mysql"},
      {text: "Redis", link: "/SQL/Redis/Redis导学"}
    ]
  },
  {
    text:"CICD",
    collapsed: false,
    items: [
      { text: "Docker", link: "/CICD/Docker/Docker"},
      {text: "Jenkins", link: "/CICD/Jenkins/Jenkins"}
    ]
  },
  {
    text: "实用工具",
    collapsed: false,
    items: [
      { text: "Linux", link: "/tool/linux/linux" },
      { text: "Git", link: "/tool/git/git" },
    ],
  },
  {
    text: "区块链",
    collapsed: false,
    items: [
      { text: "Solidity", link: "/区块链/Basic/基础知识" },
      { text: "Golang", link: "/区块链/Go/Golang基础" },
    ],
  }
];

export default route;
