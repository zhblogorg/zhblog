import Logo from "./assets/logo.svg";

export const CURRENT_VERSION = "0.1-beta"

export const SITE:{
    TITLE: string;
    DESCRIPTION: string;
    KEYWORDS: string;
    LOGO: typeof Logo;
    GITHUB_URL: string;
    ALLOWE_IDS: string[]
} ={
    TITLE: "中文博客契约",
    DESCRIPTION: "中文博客契约是一份面向中文独立博客创作者的公共倡议与参考规范，它旨在通过明确博客创作与发布的基本原则和最佳实践。通过践行契约，我们希望促进中文博客生态的健康发展，提升内容质量，增强读者信任，共同营造一个尊重原创、鼓励深度思考的写作环境。",
    KEYWORDS: "博客,独立博客,中文博客,博客契约,blog,blog covenant,zhblogcovenant,zhblog,covenant,covenant",
    LOGO: Logo,
    GITHUB_URL: "https://github.com/zhblogorg/zhblog",
    ALLOWE_IDS: ['about', 'privacy', 'terms'],
}

export const NavLinks:{
    HREF: string;
    NAME: string;
}[] = [
    {
        HREF: "/about",
        NAME: "关于我们"
    },
    {
        HREF: "/privacy",
        NAME: "隐私策略"
    },
    {
        HREF: "/terms",
        NAME: "服务条款"
    },
]