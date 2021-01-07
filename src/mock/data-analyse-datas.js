//总体分数计算
// changeGrade(){

// }
export function alarmDetail(alarm,name,num){
   let acstr=''
   for(let i=0;i<alarm.length;i++){
     if(alarm[i][num]>0){
       acstr=acstr+alarm[i][name]+','
     }
   }
   return acstr.slice(0,acstr.length-1)
 }

//总体分数
export const Gradenum1 = 60;
//台区分数
export const areaGrade = [
   {
      areaName: '南区-9#配电室-5#台区',
      gradeself: 20
   },
   {
      areaName: '南区-9#配电室-6#台区',
      gradeself: 95.3
   },
   {
      areaName: '南区-9#配电室-7#台区',
      gradeself: 80.5
   },
   {
      areaName: '南区-9#配电室-8#台区',
      gradeself: 78
   },
   {
      areaName: '南区-9#配电室-9#台区',
      gradeself: 58.2
   }
]
export const gradeself = [100, 95.3, 80.5, 78, 58.2];
//运行开始时间
export const daystart = "2019-2-20";
//台区运行概况
export const majorSum = [
   {
      majname: '总容量',
      majnum: 1250
   },
   {
      majname: '表箱数',
      majnum: 42
   }
   ,
   {
      majname: '表位数',
      majnum: 45
   },
   {
      majname: '户表数',
      majnum: 39
   },
   {
      majname: '今日警告',
      majnum: 0
   },
   {
      majname: '已派单',
      majnum: 0
   },
   {
      majname: '已归档',
      majnum: 0
   }
]
//告警分类
export const Alarmclass = [
   {
      aimg:require('../assets/images/过电压.png'),
      aclass: '过电压',
      anum: 4
   },
   {
      aimg:require('../assets/images/过电流.png'),
      aclass: '过电流',
      anum: 3
   }, {
      aimg:require('../assets/images/三相不平衡.png'),
      aclass: '三相不平衡',
      anum: 3
   }, {
      aimg:require('../assets/images/负载率.png'),
      aclass: '负载率',
      anum: 2
   }, {
      aimg:require('../assets/images/温度.png'),
      aclass: '温度',
      anum: 1
   }, {
      aimg:require('../assets/images/功率因数.png'),
      aclass: '功率因数',
      anum: 2
   }, {
      aimg:require('../assets/images/湿度.png'),
      aclass: '湿度',
      anum: 2
   }, {
      aimg:require('../assets/images/水浸.png'),
      aclass: '水浸',
      anum: 0
   },
]
//告警设备

export const Alarmequip=[
   {
      aeimg:require('../assets/images/电表.png'),
      aename:'电表',
      aenum:3
   },
   {
      aeimg:require('../assets/images/进线开关.png'),
      aename:'进线开关',
      aenum:0
   }
]
//检测项目明细
export const Details=[
   {
      dicon: require('../assets/images/压力.png'),
      dname:'运行环境健康度检测情况',
      dfen:10,
      ddatails:[
         {
            icon:require('../assets/images/湿度.png'),
            iconame:'湿度',
            iconum:0
         },
         {
            icon:require('../assets/images/温度.png'),
            iconame:'温度',
            iconum:0
         },
         {
            icon:require('../assets/images/水浸.png'),
            iconame:'水浸',
            iconum:0
         },
      ]
   },
   {
      dicon: require('../assets/images/压力.png'),
      dname:'高压柜健康度检测情况',
      dfen:10,
      ddatails:[
         {
            icon:require('../assets/images/温度.png'),
            iconame:'温度',
            iconum:0
         },
         {
            icon:require('../assets/images/过电压.png'),
            iconame:'过电压',
            iconum:0
         },
         {
            icon:require('../assets/images/过电压.png'),
            iconame:'低电压',
            iconum:0
         },
         {
            icon:require('../assets/images/功率因数.png'),
            iconame:'功率因数',
            iconum:0
         }
      ]
   },
   {
      dicon: require('../assets/images/水环境运营平台.png'),
      dname:'变压器健康度检测情况',
      dfen:30,
      ddatails:[
         {
            icon:require('../assets/images/负载率.png'),
            iconame:'负载率',
            iconum:0
         },
         {
            icon:require('../assets/images/过电压.png'),
            iconame:'过电压',
            iconum:0
         },
         {
            icon:require('../assets/images/过电压.png'),
            iconame:'低电压',
            iconum:0
         },
         {
            icon:require('../assets/images/三相不平衡.png'),
            iconame:'三相不平衡',
            iconum:0
         }
      ]
   },
   {
      dicon: require('../assets/images/水环境运营平台.png'),
      dname:'低压柜健康度检测情况',
      dfen:30,
      ddatails:[
         {
            icon:require('../assets/images/三相不平衡.png'),
            iconame:'三相不平衡',
            iconum:0
         },
         {
            icon:require('../assets/images/温度.png'),
            iconame:'温度',
            iconum:0
         },
         {
            icon:require('../assets/images/功率因数.png'),
            iconame:'功率因数',
            iconum:0
         },
         {
            icon:require('../assets/images/负载率.png'),
            iconame:'负载率',
            iconum:0
         },
      ]
   },
   {
      dicon: require('../assets/images/水环境运营平台.png'),
      dname:'表箱健康度检测情况',
      dfen:10,
      ddatails:[
         
         {
            icon:require('../assets/images/功率因数.png'),
            iconame:'功率因数',
            iconum:0
         },
         {
            icon:require('../assets/images/负载率.png'),
            iconame:'负载率',
            iconum:0
         },
      ]
   },
   {
      dicon: require('../assets/images/压力.png'),
      dname:'分支箱健康度检测情况',
      dfen:5,
      ddatails:[
         {
            icon:require('../assets/images/功率因数.png'),
            iconame:'功率因数',
            iconum:0
         },
         {
            icon:require('../assets/images/负载率.png'),
            iconame:'负载率',
            iconum:0
         }
      ]
   },
   {
      dicon: require('../assets/images/水环境运营平台.png'),
      dname:'户表健康度检测情况',
      dfen:5,
      ddatails:[
         {
            icon:require('../assets/images/负载率.png'),
            iconame:'负载率',
            iconum:0
         }
        
      ]
   }

]
