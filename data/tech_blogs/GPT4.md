## GPT4

### 1.挂一个梯子(VPN)
<a id="xx"></a>
1. 登录<a href='ikuuu.pw'>ikuuu.pw</a>. 登录页面最下方, 注册一个账号:
![](https://raw.githubusercontent.com/ClassPi/PicBed/master/images/20240410093209.png)

1. 登录后进入后台界面, 点击 **下载和教程**
![](https://raw.githubusercontent.com/ClassPi/PicBed/master/images/20240410093427.png)

1. 选择适合你的版本:
![](https://raw.githubusercontent.com/ClassPi/PicBed/master/images/20240410093856.png)

1. 以Windows举例, 下载其64位客户端压缩包文件并解压
   > <p style="color:red">解压或者后续的运行可能需要关闭360等安全软件</p>

![](https://raw.githubusercontent.com/ClassPi/PicBed/master/images/20240410094013.png)

5. 应用是绿色免安装的, 只需要在项目文件夹里点击小猫就可以运行它:
![](https://raw.githubusercontent.com/ClassPi/PicBed/master/images/20240410094525.png)

6. 首次运行等待的时间可能较长, 弹出黑框后黑框消失就代表初始化完成, 再次点击小猫就可以运行了.
   
7. 根据官方教程第二步, 下载配置文件到本地, 支持一键导入:
![](https://raw.githubusercontent.com/ClassPi/PicBed/master/images/20240410094902.png)
选择允许浏览器唤醒应用:
![](https://raw.githubusercontent.com/ClassPi/PicBed/master/images/20240410094919.png)

8. 此时小猫**左侧-配置** 栏中应该存在一个Ikuuu_V2.yaml, 这代表配置成功了, 确保你选中了该配置文件.
![](https://raw.githubusercontent.com/ClassPi/PicBed/master/images/20240410095200.png)

9. 此时小猫**左侧-代理** 栏中会出现许多的节点(当然**免费用户只有免费的日本节点**), 分为两种模式--**全局和规则**，我们选择全局就可以. 要想成功使用GPT, 需要选择<strong style="color:red">英国01</strong>和<strong style="color:red">美国02</strong>节点(每台设备可能不一样, 多尝试一下)
![](https://raw.githubusercontent.com/ClassPi/PicBed/master/images/20240410095722.png)

10. 此时小猫 **左侧-常规** 开启系统代理(倒数第二个), 一切顺利的话, VPN已经可以正常工作了


### 2.使用ChatGPT

1. 确保你已经在使用正确的vpn节点.
2. 进入<a href="https://openai.com/">Open AI </a> 官网, 点击右上角登录Log in, 输入账号密码
3. 如果足够幸运的话, 在通过了一大串烦人的真人验证后(或许不需要验证), 你会进入到如下界面:
![](https://raw.githubusercontent.com/ClassPi/PicBed/master/images/20240410100337.png)
4. 点击ChatGPT, 如果足够倒霉, 可能还需要再进行一遍 登录-验证 的操作. 之后你会看见如下界面:
![](https://raw.githubusercontent.com/ClassPi/PicBed/master/images/20240410100641.png)

5. 这时已经能够可以使用GPT了, 记得将ChatGPT 3.5 更换成ChatGPT 4.0 : )
![](https://raw.githubusercontent.com/ClassPi/PicBed/master/images/20240410100753.png)

6. 之后再使用的话, 可以直接访问<a href="https://chat.openai.com/">https://chat.openai.com/</a>网址
### 3. 你问我答

1. **节点突然不好使了**: 手动开关一轮系统代理, 在小猫 **左侧-代理** 中的测速按钮, 查看节点的状态, 显示毫秒代表可用；显示Timeout代表当前不可用. 若节点全部Timeout, 参考<a href="#xxx">[2]</a>
![](https://raw.githubusercontent.com/ClassPi/PicBed/master/images/20240410101320.png)
2. <a href="#xxx"></a>**节点全部Timeout**: 有可能是会员到期了有可能是节点被污染了. 手动开关一轮系统代理, 在小猫 **左侧-配置** 中刷新相应的配置, 重复[1]中的操作, 查看情况. 没有恢复的话, 回到<a href="#xx">1.挂一个梯子</a> , 重新下载一遍配置文件到本地, 将配置文件更换为最新的.
3. **再次启动电脑, 电脑上不了网了**: 关机的时候没关掉小猫的系统代理, 手动开关一轮系统代理就好了.
4. **节点里没有美国和英国**: 梯子需要充值VIP, 12rmb/月
5. **GPT出现oops！警告或者您的地区不可用**: 确保VPN能正常使用, 重试登录openai网站, 若不能正常登录, 需要清理掉浏览器的缓存和站点数据再重试.
![](https://raw.githubusercontent.com/ClassPi/PicBed/master/images/20240410103305.png)