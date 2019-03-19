# SnailAspNetCoreFramework
asp.net core快速开发框架
基本的权限控制功能，要思考是否该用DDD和CQRS
要实现的功能
DTO:QueryModel,ViewModel?
1、DDD
2、CQRS
# 关于几个问题
## 项目整体结构
采用DDD，但要根据项目的大小应用DDD的不同技术，总体是分如下几个项目
* DAL层：数据访问层，依赖于上层的接口，为上层（如服务层及应用层）提供数据服务。同时实现IDAL的通用数据访问接口。
* Application层：应用逻辑层，DDD模式，包含所有业务逻辑，不依赖于其它层
* Web层：负责接口参数的输入及输出的所有相关处理（如参数校验，输出格式预定等）、Application/DAL层的调用。

### WEB层
对于查询统计类型的数据操作，可直接调用DAL层
#### 参数校验
#### 输出约定
#### 异常处理


### Application层
#### 缓存
ICache接口，实现redis,memcached，memoryCache等
#### 
领域驱动，如果依赖其它层，依赖于对应层的接口，而不是实现
#### AOP
* 日志、缓存的AOP切入
#### 内存表
* 将不常变动的、数据量比较小的表存储在内存里（不是缓存，是对象），并用事件驱动的思想同步最新的数据
#### 事件
发布和订阅

### DAL层
封装通用的数据访问接口及实现，如用EF实现如下几个功能
* 单表的查询，分页
* 多表的简单关联查询，分页

## 事务的处理
用repository和unit of work模式

