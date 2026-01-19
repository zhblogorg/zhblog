import Logo from "./assets/logo.svg";

export const SITE:{
    TITLE: string;
    DESCRIPTION: string;
    KEYWORDS: string;
    LOGO: typeof Logo;
} ={
    TITLE: "中文博客契约",
    DESCRIPTION: "中文博客契约是一份面向中文独立博客创作者的公共倡议与参考规范。本网站提供契约文本、解读说明与使用指引，供博客作者参考、自愿遵守或引用。",
    KEYWORDS: "博客,独立博客,中文博客,博客契约,blog,blog covenant,zhblogcovenant,zhblog,covenant,deed",
    LOGO: Logo,
}

export const NavLinks:{
    HREF: string;
    NAME: string;
}[] = [
    {
        HREF: "/about",
        NAME: "关于"
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