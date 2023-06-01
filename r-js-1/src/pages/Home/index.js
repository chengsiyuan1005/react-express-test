import React from 'react'
import demo from './demo'
import './index.scss'
import { Anchor } from 'antd'
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

export default function index () {
  // 自定义高亮锚点
  const getCurrentAnchor = () => '#components-anchor-demo-static';
  // anchor list
  const anchorList = [{
    key: '1',
    href: '#header',
    title: '头部信息',
  },
  {
    key: '2',
    href: '#center',
    title: '中部信息',
  },
  {
    key: '3',
    href: '#end',
    title: '尾部信息',
    children: [
      {
        key: '4',
        href: '#end-1',
        title: '附录1',
      },
      {
        key: '5',
        href: '#end-2',
        title: '附录2',
      },
    ],
  },
  ]

  return (
    <div className='home'>
      <div className='left'>
        <Anchor
          affix={true}
          getCurrentAnchor={getCurrentAnchor}
          items={anchorList}
        />
      </div>
      <div className='right'>

        <div cla></div>
      </div>
    </div>
  )
}
