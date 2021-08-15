// 饼形图1
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie1 .chart"));
    // 2.指定配置
    var option = {
      color: ["#0682ab", "#0696ab", "#fff"],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
  
      legend: {
        bottom: "0%",
        // 修改小图标的大小
        itemWidth: 10,
        itemHeight: 10,
        // 修改图例组件的文字为 12px
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
      },
      series: [
        {
          name: "合格率",
          type: "pie",
          // 这个radius可以修改饼形图的大小
          // radius 第一个值是内圆的半径 第二个值是外圆的半径
          radius: ["40%", "60%"],
          center: ["50%", "45%"],
          avoidLabelOverlap: false,
          // 图形上的文字
          label: {
            show: false,
            position: "center"
          },
          // 链接文字和图形的线是否显示
          labelLine: {
            show: false
          },
          data: [
            
            { value: 2, name: "" },
            { value: 2, name: "" },
            { value: 1, name: "" }
          ]
        }
      ]
    };
  
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  (function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie2 .chart"));
    // 2.指定配置
    var option = {
      color: ["#0682ab", "#0696ab", "#fff"],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
  
      legend: {
        bottom: "0%",
        // 修改小图标的大小
        itemWidth: 10,
        itemHeight: 10,
        // 修改图例组件的文字为 12px
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
      },
      series: [
        {
          name: "达成率",
          type: "pie",
          // 这个radius可以修改饼形图的大小
          // radius 第一个值是内圆的半径 第二个值是外圆的半径
          radius: ["40%", "60%"],
          center: ["50%", "45%"],
          avoidLabelOverlap: false,
          // 图形上的文字
          label: {
            show: false,
            position: "center"
          },
          // 链接文字和图形的线是否显示
          labelLine: {
            show: false
          },
          data: [
            
            { value: 2, name: "" },
            { value: 2, name: "" },
            { value: 1, name: "" }
          ]
        }
      ]
    };
  
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  (function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie3 .chart"));
    // 2.指定配置
    var option = {
      color: ["#0682ab", "#0696ab", "#fff"],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
  
      legend: {
        bottom: "0%",
        // 修改小图标的大小
        itemWidth: 10,
        itemHeight: 10,
        // 修改图例组件的文字为 12px
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
      },
      series: [
        {
          name: "利用率",
          type: "pie",
          // 这个radius可以修改饼形图的大小
          // radius 第一个值是内圆的半径 第二个值是外圆的半径
          radius: ["40%", "60%"],
          center: ["50%", "45%"],
          avoidLabelOverlap: false,
          // 图形上的文字
          label: {
            show: false,
            position: "center"
          },
          // 链接文字和图形的线是否显示
          labelLine: {
            show: false
          },
          data: [
            
            { value: 2, name: "" },
            { value: 2, name: "" },
            { value: 1, name: "" }
          ]
        }
      ]
    };
  
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  (function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".barPr .chart"));
    // 2.指定配置
    var option = {
        title: {
            text: '产品生产量',
            textStyle:{
                color:'white'
            }
            // subtext: '纯属虚构'
        },
     
        tooltip: {
            trigger: 'axis'
        },
        legend: {
          
            data: ['产量', '计划产量'],
            textStyle:{
                color:'white'
            }
        },
        toolbox: {
            show: true,
            iconStyle:{
              color:'white'
            },
            feature: {
                // restore:{
                //     iconStyle:{
                //         color:'white'
                //     }
                // },
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
              axisLabel:{
                  textStyle:{
                    color:'white'
                  }
               
              },
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }
        ],
        yAxis: [
            {
                type: 'value',
                max:44000,
                min:0,
                splitNumber:4,
                axisLabel:{
                    textStyle:{
                      color:'white'
                    }
                 
                },
            }
        ],
        series: [
            {
                itemStyle:{
                    normal:{
                        color:'rgb(0, 102, 255)'
                    }
                },
                name: '产量',
                type: 'bar',
                data: [35000, 43000, 33270, 41223, 42225, 37776, 41135, 42162, 38832, 42220, 39666, 43343],
            },
            {
                itemStyle:{
                    normal:{
                        color:'rgb(51, 204, 255)'
                    }
                },
                name: '计划产量',
                type: 'bar',
                data: [42000, 41000, 34270, 42223, 36225, 35776, 37135, 36162, 41832, 38520, 37666, 42343],
            }
        ]
    };
    
        // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  (function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".linePr .chart"));
    // 2.指定配置
    var option = {
      color:'rgb(25,153,255)',
        title: {
            text: '订单交付及时率',
            textStyle:{
                color:'white'
            }
        },
        xAxis: {
            type: 'category',
            data: ['公司A', '公司B', '公司C', '公司D', '公司E', '公司F', '公司G'],
            axisLabel:{
              textStyle:{
                color:'white'
              }
            },
           
        },
        yAxis: {
            type: 'value',
            max:0.885,
            min:0.81,
            axisLabel:{
              textStyle:{
                color:'white'
              }
            }
        },
        series: [{
            data: [0.82, 0.86, 0.85, 0.88, 0.86, 0.87, 0.88],
            type: 'line'
        }]
    };
    
         // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  (function() {
    var myChart = echarts.init(document.querySelector(".line1Pr .chart"));
    var option = {
      title: {
        text: '产量趋势',
        textStyle:{
            color:'white'
        }
    },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        top: "0%",
        data: ["当月产量", "同期产量"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
      },
  
      grid: {
        left: "10",
        top: "30",
        right: "10",
        bottom: "10",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          // x轴更换数据
          data: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12"
          ],
          // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12
            }
          },
          // x轴线的颜色为   rgba(255,255,255,.2)
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.2)"
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          max:2000,
          min:0,
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12
            }
          },
          // 修改分割线的颜色
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }
      ],
      series: [
        {
          name: "当月产量",
          type: "line",
          smooth: true,
          // 单独修改当前线条的样式
          lineStyle: {
            color: "#0184d5",
            width: "2"
          },
          // 填充颜色设置
          areaStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          },
          // 设置拐点
          symbol: "circle",
          // 拐点大小
          symbolSize: 8,
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          },
          data: [
            715,
            374,
            573,
            975,
            869,
            1000,
            1200,
            2000,
            1869,
            1000,
            1300,
            600
          ]
        },
        {
          name: "同期产量",
          type: "line",
          smooth: true,
          lineStyle: {
            normal: {
              color: "#00d887",
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(0, 216, 135, 0.4)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0, 216, 135, 0.1)"
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            }
          },
          // 设置拐点 小圆点
          symbol: "circle",
          // 拐点大小
          symbolSize: 5,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          },
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false,
          data: [
            515,
            174,
            273,
            475,
            669,
            500,
            1000,
            1500,
            1669,
            800,
            1000,
            400
          ]
        }
      ]
    };
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  (function() {
    var myChart = echarts.init(document.querySelector(".linebarPr .chart"));
    var colors = ['#5793f3',  '#d14a61'];
    var option = {
      title: {
        text: '生产成本/单位生产成本',
        textStyle:{
            color:'white'
        }
    },
      color: colors,
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross'
          }
      },
      grid: {
          right: '20%'
      },
      legend: {
          data: ['生产成本',  '单位生产成本'],
          textStyle: {
            color: 'white',
            fontSize: "8"
          }

      },
      xAxis: [
          {
              type: 'category',
              axisLabel:{
                textStyle:{
                  color:'white'
                }
              },
              axisTick: {
                  alignWithLabel: true
              },
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
      ],
      yAxis: [
          {
              type: 'value',
              name: '生产成本',
              min: 4.5,
              max: 7.5,
              position: 'right',
              axisLine: {
                  lineStyle: {
                      color: colors[0]
                  }
              },
              axisLabel: {
                  formatter: '{value} '
              }
          },
          {
              show:false,
              type: 'value',
              name: '降水量',
              min: 0,
              max: 250,
              position: 'right',
              offset: 80,
              axisLine: {
                  lineStyle: {
                      color: colors[1]
                  }
              },
              axisLabel: {
                  formatter: '{value} ml'
              }
          },
          {
              type: 'value',
              name: '单位生产成本',
              min: 0,
              max: 25,
              position: 'left',
              axisLine: {
                  lineStyle: {
                      color: colors[2]
                  }
              },
              axisLabel: {
                  formatter: '{value} °C'
              }
          }
      ],
      series: [
          {
              name: '生产成本',
              type: 'bar',
              data: [7.5, 4.9, 7.0, 4.6, 5.6, 6.7, 5.6, 4.7, 4.6, 4.8, 4.6, 4.5]
          },
  
          {
              name: '单位生产成本',
              type: 'line',
              yAxisIndex: 2,
              data: [2.0, 2.2, 3.3, 4.5, 6.3, 1.2, 2.3, 2.4, 2.0, 6.5, .0, 6.2]
          }
      ]
  };
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  (function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".line2Pr .chart"));
    // 2.指定配置
    var option = {
      color:['#2db7f5','#ff6600','#808bc6','#0696ab'], 
      title: {
        text: '',
        textStyle:{
            color:'white'
        }
      },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
        icon: 'rectangle',
          data: ['废品率', '成品抽检合格率', '产品返工率', '批量退货率'],
          textStyle: {
            color: 'white',
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
 
      xAxis: {
          type: 'category',
          axisLabel:{
            textStyle:{
              color:'white'
            }
          },
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
          type: 'value',
          min:0.15,
          interval:0.2,
          // splitNumber:4,
          axisLabel:{
            textStyle:{
              color:'white'
            }
          },
      },
      series: [
          {
              name: '废品率',
              type: 'line',
              
      
              data: [0.31, 0.23, 0.32, 0.26, 0.28, 0.25, 0.29]
          },
          {
              name: '成品抽检合格率',
              type: 'line',
            
              data: [0.85, 0.83, 0.78, 0.82, 0.87, 0.84, 0.76]
          },
          {
              name: '产品返工率',
              type: 'line',
             
              data: [0.24, 0.21, 0.31, 0.27, 0.28, 0.24, 0.32]
          },
          {
              name: '批量退货率',
              type: 'line',
            
              data: [0.28, 0.32, 0.28, 0.32, 0.24, 0.29, 0.31]
          }
      ]
  };
  
       // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  (function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar2Pr .chart"));
    // 2.指定配置
    var option = {
      title: {
        text: '在制品库存数量',
        textStyle:{
            color:'white'
        }
    },
      color: ['#3398DB'],
      tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: [
          {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisLabel:{
                textStyle:{
                  color:'white'
                }
              },
              axisTick: {
                  alignWithLabel: true
              }
          }
      ],
      yAxis: [
          {
              type: 'value',
              max:36000,
              min:0,
              splitNumber:4,
              axisLabel:{
                textStyle:{
                  color:'white'
                }
              }
          },
         
      ],
      series: [
          {
              name: '库存',
              type: 'bar',
              barWidth: '60%',
              data: [28710, 31252, 35200, 31334, 28390, 33330, 29220]
          }
      ]
  };
  
       // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  (function() {
    var myChart = echarts.init(document.querySelector(".chartA"));
    
    var option = {
      title: {
        text: '生产线产能利用率',
        textStyle:{
            color:'white'
        }
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              crossStyle: {
                  color: '#999'
              }
          }
      },
     
      legend: {
          data: ['产线计划产量', '产线产量', '产线利用率'],
          textStyle:{
            color:'white'
          }
      },
      xAxis: [
          {
              type: 'category',
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
              axisPointer: {
                  type: 'shadow'
              },
              axisLabel:{
                textStyle:{
                  color:'white'
                }
              }
          }
      ],
      yAxis: [
          {
              type: 'value',
              name: '产量',
              nameTextStyle:{
                color:'white',
              },
              min: 0,
              max: 80000,
             splitNumber:4,
              axisLabel: {
                  formatter: '{value} ',
                  textStyle:{
                    color:'white'
                  }
              }
          },
          {
              type: 'value',
              name: '利用率',
              nameTextStyle:{
                color:'white',
              },
              
              min: 0.6,
              max: 0.85,
        splitNumber:4,
              axisLabel: {
                  formatter: '{value} ',
                  textStyle:{
                    color:'white'
                  }
              }
          }
      ],
      series: [
          {
              name: '产线计划产量',
              type: 'bar',
              itemStyle:{
                normal:{
                    color:'rgb(0, 102, 255)'
                }
            },
              data: [62000, 40900, 70000, 50002, 56000, 76347, 35346, 62342, 32236, 70004, 64434, 32343]
          },
          {
              name: '产线产量',
              type: 'bar',
              itemStyle:{
                normal:{
                    color:'rgb(51, 204, 255)'
                }
            },
              data: [52000, 30900, 60000, 40002, 36000, 66347, 30346, 52342, 30236, 60004, 54434, 30343]
          },
          {
              name: '产线利用率',
              type: 'line',
              yAxisIndex: 1,
              data: [0.76, 0.82, 0.73, 0.75, 0.73, 0.82, 0.73, 0.74, 0.83, 0.75, 0.78, 0.72]
          }
      ]
  };
  
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();