/**
 * 注册公共组件
 *
 */

import Vue from 'vue'

import SnailTable from '@/components/Table/SnailTable'
import SnailEditTable from '@/components/Table/SnailEditTable'
import SnailPageTable from '@/components/Table/SnailPageTable'
import SnailSearchTable from '@/components/Table/SnailSearchTable'
import SnailSearchPageTable from '@/components/Table/SnailSearchPageTable'
import SnailForm from '@/components/Form/SnailForm'
import SnailSearchForm from '@/components/Form/SnailSearchForm'
import SnailSimpleCrud from '@/components/Crud/SnailSimpleCrud'
import SnailSimpleListCrud from '@/components/Crud/SnailSimpleListCrud'

Vue.component('SnailTable', SnailTable)
Vue.component('SnailPageTable', SnailPageTable)
Vue.component('SnailSearchPageTable', SnailSearchPageTable)
Vue.component('SnailSearchTable', SnailSearchTable)
Vue.component('SnailForm', SnailForm)
Vue.component('SnailSearchForm', SnailSearchForm)
Vue.component('SnailSimpleCrud', SnailSimpleCrud)
Vue.component('SnailEditTable', SnailEditTable)
Vue.component('SnailSimpleListCrud', SnailSimpleListCrud)
