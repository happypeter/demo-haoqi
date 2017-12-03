### 关于 `_id` 和 `id` 的问题。

原则是，服务器端内部肯定用 `_id` ，客户端用 `id`

- 返回给客户端的数据中用 `_id`
- 客户端发送过来的数据中都用 `id` ，不用 `userId` 也不用发 `_id`


### 使用 Postman 调试 API

```
POST localhost:3008/user/signup
```

header 添加 `Content-Type: application/json` ，Body 一项选 raw 然后

```
{
    "username": "happypeter",
    "password": "111111"
}
```

点发送即可。

### 如何发布新的 release

到页面上直接操作即可。操作完如果又有代码改动，可以

```
git push --delete origin v1.0.0
```

然后回到网页界面再次 release 一下即可。
