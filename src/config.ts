import Logo from "./assets/logo.svg";

/**
 * 当前版本，发布新版本时需要更新
 */
export const CURRENT_VERSION:string = "0.1-beta"

/**
 * 网站信息
 */
export const SITE:{
    TITLE: string;
    ENGLISH_TITLE: string;
    DESCRIPTION: string;
    KEYWORDS: string;
    LOGO: typeof Logo;
    GITHUB_URL: string;
} ={
    TITLE: "中文独立博客创作契约",
    ENGLISH_TITLE: "Chinese Independent Bloggers' Guidelines",
    DESCRIPTION: "中文独立博客创作契约是一份面向中文独立博客创作者的公共倡议与参考规范指南，它旨在通过明确博客创作与发布的基本原则和最佳实践。通过践行契约，我们希望促进中文博客生态的健康发展，提升内容质量，增强读者信任，共同营造一个尊重原创、鼓励深度思考的写作环境。",
    KEYWORDS: "博客,独立博客,中文博客,博客契约,blog,blog guidelines,zhblogguidelines,zhblog,guidelines,guidelines",
    LOGO: Logo,
    GITHUB_URL: "https://github.com/zhblogorg/zhblog",
}

/**
 * 页眉导航链接
 */
export const HEADER_NAV_LINKS:{
    title: string;
    links: {
        text: string;
        href: string;
        external?: boolean;
    }[]
}[] = [
    {
        title: "归档",
        links: [
            { text: "版本归档", href: "/guidelines", },
            { text: "修订记录", href: "/guidelines/history" },
            { text: "网站更新日志", href: "/changelog" }
        ]
    },
    {
        title: "链接",
        links: [
            { text: "Github", href: SITE.GITHUB_URL, external: true },
            { text: "关于", href: "/about" }
        ]
    },
];

/**
 * 页脚链接
 */
export const FOOTER_LINKS:{
    text: string;
    href: string;
}[] = [
    { text: "隐私策略", href: "/privacy",},
    { text: "服务条款", href: "/terms" },
]