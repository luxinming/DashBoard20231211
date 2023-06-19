
import { get, post } from 'packages/js/utils/http'

// 仪表盘详情
export function getScreenInfo (code) {
  return get(`/dashboard/design/info/code/${code}`)
}

// 保存更新仪表盘
export function saveScreen (data) {
  return post('/dashboard/design/update', data)
}

// 根据数据集获取数据集详情
export function getDataSetDetails (id) {
  return get('/dashboard/ds/getDataSetDetails', {
    id
  })
}
// 模拟后端返回自定义主题配置
export function getThemeConfig () {
  return get('https://mock.mengxuegu.com/mock/64239ff6e24b4b4cfeaca5ea/example/theme')
}

// 根据数据集id获取数据
export function getDataByDataSetId (dataSetId) {
  return post('/dashboard/ds/getDataByDataSetId', {
    dataSetId,
    params: []
  })
}

// 得到图表详情
export function getChatInfo (params) {
  return post('/dashboard/chart/data/list', params)
}
// 得到图表的更新数据
export function getUpdateChartInfo (params) {
  return post('/dashboard/chart/data/chart', params)
}

// 业务组件列表
export function getBizComponentPage (params) {
  return get('/dashboard/bizComponent/page', params)
}

// 根据code获得业务组件的信息
export function getBizComponentInfo (code) {
  return get(`/dashboard/bizComponent/info/${code}`)
}

// 更新业务组件
export function updateBizComponent (params) {
  return post('/dashboard/bizComponent/update', params)
}