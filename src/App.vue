<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <el-menu>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">
                <router-link to="/a">选项1</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/">选项2</router-link>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">
                <router-link to="/todolist">选项3</router-link>
              </el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">
                <router-link to="/hello">选项4</router-link>
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">
                <router-link to="/goodList">商品列表</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/shoppingCart">购物车</router-link>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style>
  .el-menu-item a{
    display: block;
    text-decoration: none;
    color: #000;
  }
  .el-menu-item.is-active{
    background: #409EFF;
  }
</style>



