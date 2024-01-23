<script lang="ts" setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { apiQueryList, apiCreate, apiDel } from '@/request/modules/todolistApi'
import dayjs from 'dayjs'

let id = 0

interface IList {
  _id: string
  content: string
  datetime: string
  author: string
  priority: string
  [propName: string]: any
}

const list = ref<IList[]>([])

// 查询列表
const queryList = async () => {
  const { code, data } = await apiQueryList()
  if (!code) {
    list.value = (data as IList[]).map((item: any) => {
      return {
        ...item,
        datetime: dayjs(item.datetime).format('YYYY-MM-DD HH:mm:ss')
      }
    })
  }
}
queryList()

// 添加
const createTodo = async () => {
  const { code, message } = await apiCreate({
    content: '测试张三' + id,
    datetime: new Date(),
    priority: '1'
  })
  alert(message)
  if (!code) {
    queryList()
  }
}

// 删除1
const delTodo = async (data: IList) => {
  const { code, message } = await apiDel({ id: data._id})

  alert(message)
  if (!code) {
    queryList()
  }
}

const add = () => {
  id++
  createTodo()
}
</script>

<template>
  <draggable v-model="list" handle=".handle" item-key="id" class="list">
    <template #item="{element}">
      <div>
        <svg class="icon handle" aria-hidden="true">
            <use xlink:href="#icon-tuozhuai"></use>
        </svg>

        <span class="text">{{ element.content }} {{ element.datetime }}</span>

        <!-- <input type="text" class="form-control" v-model="element.text" /> -->

        <svg class="icon" aria-hidden="true" @click="delTodo(element)">
            <use xlink:href="#icon-guanbi"></use>
        </svg>
      </div>
    </template>
  </draggable>
  <svg class="icon btn-add" aria-hidden="true" @click="add">
    <use xlink:href="#icon-tianjia"></use>
  </svg>
</template>

<style lang="scss" scoped>
.button {
  margin-top: 35px;
}

input {
  display: inline-block;
  width: 50%;
}

.text {
  margin: 20px;
}

.list {
  text-align: left;
}

.btn-add {
  cursor: pointer;
}
</style>