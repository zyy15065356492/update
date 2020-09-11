import InfoItem from "@/interfaces/info-item"
export const generalList: Array<InfoItem> = [{
    icon: "icon-biaoqiankuozhan_xiangmu-292",
    name: "项目",
    value: 158,
    unit: "个"
}, {
    icon: "icon-shebei",
    name: "监测设备",
    value: 12523,
    unit: "个"
}, {
    icon: "icon-zhuangjirongliang",
    name: "总容量",
    value: '1560k',
    unit: "kVA"
}, {
    icon: "icon-peidianshi",
    name: "配电室",
    value: 847,
    unit: '个'
}, {
    icon: "icon-bianyaqi",
    name: "台区",
    value: 945,
    unit: "个"
}, {
    icon: "icon-yonghu",
    name: "服务用户",
    value: 15451,
    unit: "户"
}, {
    icon: "icon-renci",
    name: "派单",
    value: 158,
    unit: "人次"
}, {
    icon: "icon-yujing",
    name: "预警",
    value: 160,
    unit: "条"
}]
export const healthEvaluationList: Array<InfoItem> = [
    {
        name: "配电室",
        value: 82
    }, {
        name: "小区",
        value: 76
    }, {
        name: "综合体",
        value: 92
    }, {
        name: "校园",
        value: 89
    }, {
        name: "工业",
        value: 99,
    }, {
        name: "农业",
        value: 65
    }, {
        name: "连锁商业",
        value: 95
    }, {
        name: "家庭",
        value: 78
    }, {
        name: "中央空调智慧能效",
        value: 78
    }
];
export const operatedDays: InfoItem = {
    name: "系统运行天数",
    value: 1212
}
export const applicationFields: Array<InfoItem> = [
    {
        icon: "icon-peidianshi",
        name: "智慧配电室",
        value: 25,
        unit: "个"
    }, {
        icon: "icon-xiaoqu-xianxing",
        name: "小区能效",
        value: 15,
        unit: "个"
    }, {
        icon: "icon-zhihuiyuanqu",
        name: "综合体能效",
        value: 102,
        unit: "个"
    }, {
        icon: 'icon-xuexiao1',
        name: "智慧校园",
        value: 10,
        unit: "个"
    }, {
        icon: "icon-gongye",
        name: "工业企业",
        value: 25,
        unit: "个"
    }, {
        icon: "icon-nongyejishu",
        name: "农业智慧能效",
        value: 12,
        unit: "个"
    }, {
        icon: "icon-liansuojiameng",
        name: "连锁商业",
        value: 25,
        unit: "个"
    }, {
        icon: "icon-3jiatingdizhi",
        name: "家庭能效",
        value: 25,
        unit: "个"
    }, {
        icon: "icon-zhongyangkongdiao",
        name: "中央空调能效",
        value: 12,
        unit: "个"
    }
];
export const applicationList = [{
    name: "智慧配电室",
    list: [{
        name: "智能配电台区运行监控系统",
        site: "山东·临沂",
        value: "http://ly.dianliangliang.com/#/home-container/OTVCREZENjRCMkYzRDMxMQ/home-body"
    }, {
        name: "能源智慧互联台区管理系统",
        site: "山东·齐河",
        value: "http://qh.dianliangliang.com/#/home-container/home/home-body/MDgxNTJENjU1MzQ4MTBBMA/齐河绿城"
    }, {
        name: "国网青岛供电公司崂山供电中心",
        site: "中国·青岛",
        value: "http://ls.dianliangliang.com/#//home-container/home/home-body/MDgxNTJENjU1MzQ4MTBBMA/崂山供电"
    }]
}, {
    name: "小区能效",
    list: [{
        name: "智能配电台区运行监控系统",
        site: "浙江·乐清",
        value: "http://yq.dianliangliang.com/#/home-container/chint-home"
    }, {
        name: "国网陵城区供电公司智能台区监控系统",
        site: "山东·陵城",
        value: "http://lingcheng.dianliangliang.com/#/home-container/home/home-body/MjQwNUY1QkEwNTI3RENFNA/%E8%96%9B%E5%BA%84%E7%A4%BE%E5%8C%BA"
    }]
}, {
    name: "综合体能效",
    list: [{
        name: "银座·好望角能源综合管理系统",
        site: "山东·济南",
        value: "http://yzhwj.dianliangliang.com/#/home-container/OTVCREZENjRCMkYzRDMxMQ/room-home/NjYwMjA0OTk5NkQzQzM4NA/%E9%93%B6%E5%BA%A7%E5%A5%BD%E6%9C%9B%E8%A7%92/room-index"
    }]
}, {
    name: "智慧校园",
    list: []
}, {
    name: "工业企业",
    list: [{
        name: "智慧代维中心",
        site: "山东·夏津",
        value: "http://xj.dianliangliang.com/#/home-container/OTVCREZENjRCMkYzRDMxMQ/home-body"
    }]
}, {
    name: "农业智慧能效",
    list: [{
        name: "能源智慧互联台区管理系统",
        site: "山东·武城",
        value: "http://wc.dianliangliang.com/#/home-container/OTVCREZENjRCMkYzRDMxMQ/home-body"
    }, {
        name: "智能配电台区运行监控系统",
        site: "山东·禹城",
        value: "http://yc.dianliangliang.com/#/home-container/OTVCREZENjRCMkYzRDMxMQ/home-body"
    }]

}, {
    name: "连锁商业",
    list: []
}, {
    name: "家庭能效",
    list: []
}, {
    name: "中央空调能效",
    list: []
}];
export const photovoltaicInfo: Array<InfoItem> = [
    {
        icon: "icon-fadiandanyuan",
        name: "光伏个数",
        value: 20,
        unit: "个"
    }, {
        icon: "icon-zhuangjirongliang",
        name: "总容量",
        value: 553,
        unit: "kVA"
    }, {
        icon: "icon-leijifadianliang",
        name: "累计发电量",
        value: 255.3,
        unit: 'kWh'
    }, {
        icon: "icon-leijishouyi",
        name: "累积收益",
        value: 1.2,
        unit: "万"
    }, {
        icon: "icon-qian",
        name: "平均收益",
        value: 96.1,
        unit: "元/户/天"
    }, {
        icon: "icon-fadianxiaolv",
        name: "平均发电效率",
        value: 5.31,
        unit: "kW"
    }
]
export const chargingPiles: Array<InfoItem> = [
    {
        name: "光伏个数",
        value: 1180,
        unit: "个"
    }, {
        name: "总容量",
        value: 582,
        unit: "kVA"
    }, {
        name: "累积发电量",
        value: 12553.2,
        unit: "kWh"
    }, {
        name: "累计收益",
        value: 19.23,
        unit: "万元"
    }, {
        name: "平均发电效率",
        value: 78,
        unit: "%"
    }, {
        name: "平均收益",
        value: 283.2,
        unit: "元"
    }
];