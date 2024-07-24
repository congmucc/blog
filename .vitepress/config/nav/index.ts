export const navLinks = [
  { text: "主页", link: "/" },
  { text: "介绍", link: "/introduce/introduce" },

  {
    text: "项目笔记",
    items: [
      { text: "航天宏图", link: "/project/航天宏图/航天宏图" },
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
    items: [
      { 
        text: "基础知识",
        items: [
          { text: "WEB3基础", link: "/WEB3/基础知识/WEB3基础/WEB3基础"},
          { text: "Geth", link: "/WEB3/基础知识/Geth/Geth" },
          { text: "Mantle Network", link: "/WEB3/基础知识/Mantle Network/Mantle Network" },
          { text: "编译部署", link: "/WEB3/基础知识/编译部署/目录" },
          { text: "Ethereum", link: "/WEB3/基础知识/Ethereum/Ethereum" },
          { text: "Solana", link: "/WEB3/基础知识/Solana/Solana" },
        ]
      },
      { text: "Solidity", link: "/WEB3/Solidity/Solidity" },
      { text: "Move", link: "/WEB3/Move/Move"},
      { text: "Solana Rust", link: "/WEB3/Solana Rust/Solana Rust"},
      { text: "Rust", link: "/后端/Rust/Rust" },
      { text: "Ethersjs", link: "/WEB3/Ethersjs/Ethersjs" }
    ],
  },
  {
    text: "go生态",
    collapsed: false,
    items: [
      { text: "Golang基础", link: "/后端/Go/Golang基础/Golang基础" },
      { text: "Gin", link: "/后端/Go/框架/Gin/Gin" },
      { text: "GoZero", link: "/后端/Go/框架/GoZero/GoZero" },
      { text: "GRPC", link: "/后端/Go/框架/GRPC/GRPC" },
      { text: "GoMicro", link: "/后端/Go/框架/GoMicro/GoMicro" },
    ],
  },
  {
    text: "分布式",
    items: [
      {text: "SpringCloud", link: "/后端/Java/微服务框架/SpringCloud/SpringCloud"},
      {text: "多级缓存", link: "/后端/Java/微服务框架/分布式/多级缓存/多级缓存"},
      {text: "分布式缓存", link: "/后端/Java/微服务框架/分布式/分布式缓存/分布式缓存"},
      {text: "分布式事务", link: "/后端/Java/微服务框架/分布式/分布式事务/分布式事务"},
      {text:"ElasticSearch", link: "/后端/Java/微服务框架/Elasticsearch/Elasticsearch导学"},
      {text: "RabbitMQ", link: "/后端/Java/微服务框架/MQ/MQ"}
    ]
  },

  {
    text: "实用工具",
    items: [
      { text: "Linux", link: "/tool/Linux/Linux" },
      { text: "Git", link: "/tool/Git/Git" },
      {
        text:"SQL",
        items:[
          {text: "Mysql", link: "/后端/SQL/Mysql/Mysql"},
          {text: "Redis", link: "/后端/SQL/Redis/Redis导学"}
        ]
      },
      {
        text:"CICD",
        items: [
          { text: "Docker", link: "/CICD/Docker/Docker"},
          {text: "K8s", link: "/CICD/K8s/K8s"},
          {text: "Jenkins", link: "/CICD/Jenkins/Jenkins"}
        ]
      },
    ],
  },
];
