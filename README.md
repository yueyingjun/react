React练习总结
======
准备工作
---
> ###包的下载  

  1. ####创建项目
  
  2. ####在项目下生成packjson文件
   `npm init`
   注意：生成的package包把文件中的name不能和包的名称一样，否则会认为当前的文件就是某个包，在npm下载该name包的时候会出错
   
   3. ####下载react、react-dom依赖 
   `npm install  react react-dom --save`
   
   4. ####下载babel
       * `npm install babel-standalone --save`
       * 也可以通过远程地址引入该包
       
       
-----
       
React特点
-------
1. JSX                —— 使用简单快速
2. 单向数据流          —— 绑定数据简单
3. 虚拟DOM            —— 加快运行效率
4. 组件化开发          —— 代码易复用
5. 能够引入外部插件     —— 使用起来灵活方便

----

注意事项
----
1. 类名首字母必须大写
2. 渲染的组件必须有且只有一个根元素