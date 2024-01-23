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

// 删除
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
      <div class="list-item">
        <div class="list-item__left-icon">
          <svg class="icon handle" aria-hidden="true">
              <use xlink:href="#icon-drag-processing"></use>
          </svg>
        </div>

        <div class="list-item__main">
          <div class="list-item__main-content">{{ element.content }}</div>
          <div class="list-item__main-datetime">{{ element.datetime }}</div>
        </div>

        <!-- <input type="text" class="form-control" v-model="element.text" /> -->

        <div class="list-item__right-icon">
          <svg class="icon" aria-hidden="true" @click="delTodo(element)">
              <use xlink:href="#icon-guanbi"></use>
          </svg>
        </div>
      </div>
    </template>
  </draggable>
  <div class="add-box">
    <button @click="add">
      <svg class="icon btn-add" aria-hidden="true">
        <use xlink:href="#icon-tianjia"></use>
      </svg>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.text {
  margin: 20px;
}

.list {
  text-align: left;
  .list-item {
    margin-bottom: 0.2rem;
    display: flex;
    .list-item__left-icon,.list-item__right-icon {
      font-size: 0.3rem;
      padding: 0 0.1rem;
    }
    .list-item__main {
      flex: 1;
      min-width: 0;
      .list-item__main-content,.list-item__main-datetime {
        line-height: 0.3rem;
        font-size: 0.2rem;
      }
    }
  }
}
.add-box {
  font-size: 0.3rem;
  button {
    padding: 0.2em;
    width: 100%;
    .btn-add {
      cursor: pointer;
    }
  }
}
</style>