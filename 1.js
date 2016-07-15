error_info:"OK"
result:{currentPage: 1, number: 25, totalCount: 0, offset: 0, orderby: null, desc: 0, userId: 189,…}
accessibility:"[1,1,1,1,1]"
accountType:1
agentConfig:null
agents:[]
assignLimit:null
assignScope:null
city:0
company:""
createTime:1439439943000
currentPage:1
desc:0
description:""
email:"gulishi@uniscrm.com"
fansTags:""
gender:0
invitationCode:"SWpT9g3"
isActive:1
isDeleted:0
level:0
location:""
mobilephone:-1439439943190
number:25
offset:0
onlineStatus:1
orderby:null
parentId:0
passwd:""
profileImageUrl:"/res/upload/head/MTQ2NDg1NDc0NjIwMDE4OQ==.JPEG"
province:0
realName:""
startTime:null
stopTime:null
telephone:0
totalCount:0
updateTime:null
userId:189
userName:"鼓励师"
weiboName:""
weixin:""
status:0


@RequestMapping(value = "/login", method = RequestMethod.POST, produces = ContentType.JSON)
@ResponseBody
    public Object login(String emailOrMobile, String passwd, Integer isRememberMe, HttpSession session, HttpServletResponse response) {