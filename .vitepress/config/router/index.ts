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
          { text: "前端项目笔记", link: "/project/前端项目笔记/前端项目笔记" },
          { text: "钱包项目", link: "/project/WEB3/钱包项目/钱包项目" },
        ],
      },
      {
        text: "WEB3",
        collapsed: false,
        items: [
          { text: "Solidity", link: "/WEB3/Solidity/Solidity" },
          { text: "Geth", link: "/WEB3/基础知识/Geth/Geth" },
          { text: "Mantle Network", link: "/WEB3/基础知识/Mantle Network/Mantle Network" },
          { text: "WEB3基础", link: "/WEB3/基础知识/WEB3基础/WEB3基础" },
        ],
      },
      {
        text: "go生态",
        collapsed: false,
        items: [
          { text: "Golang基础", link: "/Go/Golang基础/Golang基础" },
          { text: "Gin", link: "/Go/框架/Gin/Gin" },
          { text: "GoZero", link: "/Go/框架/GoZero/GoZero" },
          { text: "GRPC", link: "/Go/框架/GRPC/GRPC" }
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
          {text: "K8s", link: "/CICD/K8s/K8s"},
          {text: "Jenkins", link: "/CICD/Jenkins/Jenkins"}
        ]
      },
      {
        text: "实用工具",
        collapsed: false,
        items: [
          { text: "Linux", link: "/tool/Linux/Linux" },
          { text: "Git", link: "/tool/Git/Git" },
        ],
      }
];

export default route;
