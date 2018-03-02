/**
 * 所有notification通讯数字长度为7位
 * 占位 AA BB CCC
 * AA位  1~99 设备号/渠道号 目前只有PC端
 *       99 - 模块间通讯
 1  -PC
 * BB位  01~99 模块
 01 - ACCOUNT   账户相关 (添加删除推荐好友)
 02 - CHAT      聊天相关
 03 - COMPANY   组织架构、公司相关 （招聘离职、权限变更、owner/builder更改、link to parent）
 04 - FOLDER    文件相关
 05 - WORKFLOW  工作流程相关
 06 - MISSION   任务相关
 07 - OTHER FUNCTION 其他功能
 99 - SYSTEM    其他（如站内信）

 * CCC位 001~999 行为号，不同用户行为身份操作排列组合为号
 * 如:
 *  1 01 001 代表IM通知PC端用户添加私人好友
 *  1 01 002 代表IM通知PC端用户接受私人好友
 *  1 01 003 代表IM通知PC端用户拒绝私人好友
 *  99 06 103 mission function track开启关闭
 * 所有参数定义见
 * {@see /src/app/shared/config/readme.md}
 *
 */

export const NotificationConfig = {
  ACTION_WINDOW_RESIZE: 50003,
  ACTION_GLOBAL_COMPONENT_SHOW: 50006,
  ACTION_GLOBAL_COMPONENT_CLOSE: 50008,

  /** ---模块间通讯 开始 --- **/
  // Socket连接报错
  ACT_COMPONENT_IM_CONNECT_ERROR: 9901000,
  // socket open时
  ACT_SYSTEM_IM_RE_LOGOUT: 9901001,

  // 切换公司
  ACT_COMPONENT_SWITCH_COMPANY: 9901001,
  // 重新读取contact list
  ACT_COMPONENT_CONTACT_LIST_RELOAD: 9901002,
  // contact search result
  ACT_COMPONENT_CONTACT_SEARCH_RESULT: 9901003,
  // 添加会议室
  ACT_COMPONENT_MEETING_ADD_ROOM: 9901004,
  // 修改会议室
  ACT_COMPONENT_MEETING_UPDATE_ROOM: 9901005,
  // 预定会议室
  ACT_COMPONENT_MEETING_ADD_BOOKING_ROOM: 9901006,
  ACT_COMPONENT_MEETING_UPDATE_BOOKING_ROOM: 9901007,
  ACT_COMPONENT_USER_HAS_LOGIN: 9901008,
  ACT_COMPONENT_USER_HAS_LOGOUT: 9901009,
  // 账户email修改
  ACT_COMPONENT_ACCOUNT_RESET_EMAIL: 9901010,

  // 通知occupation 刷新
  ACT_COMPONENT_OCCUPATION_REFRESH: 9901011,

  // 打开dialog
  ACT_COMPONENT_USER_ACCOUNT_RESET_PWD: 9901012,
  ACT_COMPONENT_USER_ACCOUNT_RESET_ACCOUNT: 9901013,

  // 展开全屏聊天
  ACT_COMPONENT_CHAT_OPEN_FULL_DIALOG: 9902001,
  // 收起全屏聊天
  ACT_COMPONENT_CHAT_CLOSE_FULL_DIALOG: 9902002,
  // 点击聊天菜单中 某个私人聊天/群组聊天/任务聊天/收藏/最近
  ACT_COMPONENT_CHAT_MENU_CLICK: 9902003,
  // 用户收藏/取消收藏组, 私人聊天
  ACT_COMPONENT_CHAT_ENSHRINE_OR_NOT: 9902004,
  // 具体某个人聊天
  ACT_COMPONENT_CHAT_SPECIFIC_PEOPLE: 9902005,
  // 打开创建群弹窗
  ACT_COMPONENT_CHAT_OPEN_CREATE_NEW_GROUP: 9902006,
  // CHAT POST设置Share to
  ACT_COMPONENT_CHAT_POST_SET_SHARETO: 9902007,
  // 聊天窗内展开某个用户详情
  ACT_COMPONENT_CHAT_SHOW_MEMBER_DETAIL: 9902008,
  // 点击过聊天菜单之后刷新读取的min,max时间
  ACT_COMPONENT_CHAT_MENU_UPDATE_TIME: 9902009,
  // CHAT content message input 点击加号后新建post
  ACT_COMPONENT_CHAT_CONTENT_MESSAGE_INPUT_NEW_POST: 9902010,
  // CHAT设置 chat post Share to 为空
  // 清除全局模式的post share to后再点击 有currentGroup后无法选中
  ACT_COMPONENT_CHAT_POST_SET_SHARETO_NULL: 9902011,
  // 刷新pin列表
  ACT_COMPONENT_CHAT_PIN_REFRESH: 9902012,

  // 个人聊天半屏聊天数据同步
  ACT_SYNCHRONIZATION_PERSONAL_MESSAGE: 9902013,

  // 新建tips
  ACT_COMPONENT_OTHER_TIPS: 9902014,

  ACT_SYNCHRONIZATION_PERSONAL_MESSAGE_MINI: 9902015,
  // post通知聊天模块转发
  ACT_COMPONENT_CHAT_FORWARD: 9902016,
  // 删除群成员
  // ACT_COMPONENT_CHAT_DELETE_PERSONAL: 9902017,
  // 修改tips
  ACT_COMPONENT_OTHER_UPDATE_TIPS: 9902018,
  // contact list加载完毕
  ACT_COMPONENT_OTHER_CONTACT_LOADED: 9902019,
  // 向聊天发送post
  ACT_COMPONENT_CHAT_POST_SEND_POST: 9902020,
  // 闹钟提示框 点击 向tips 传送当前tip的id
  ACT_COMPONENT_ALARM_SEND_TIPS: 9902021,
  // notification 通知到左侧
  // ACT_COMPONENT_UPDATE_COMPANY_OWNER: 9902022,

  // 获取用户首页设置最大弹出框个数
  ACT_COMPONENT_SETTING_SEND_DIALOG: 9902023,

  // 图片打PIN
  ACT_COMPONENT_IMAGE_PIN: 9902024,

  // content-message-post发送给post read的settings
  ACT_COMPONENT_CHAT_CONTENT_MESSAGE_POST_SEND_SETTINGS: 9902025,
  // 未读消息提示
  ACT_COMPONENT_CHAT_HAS_UNREAD_MESSAGE: 9902026,

  // 图片评论
  ACT_COMPONENT_IMAGE_COMMENT: 9902027,

  // 打开图片
  ACT_COMPONENT_OPEN_IMAGE_DIALOG: 9902028,

  ACT_COMPONENT_CLOSE_IMAGE_DIALOG: 9902029,

  // 同步图片like
  ACT_COMPONENT_IMAGE_LIKE: 9902030,

  ACT_COMPONENT_IMAGE_DIALOG_REMOVE_MESSAGE: 9902031,

  // chat message search
  ACT_COMPONENT_CHAT_MESSAGE_SEARCH: 9902032,
  // search
  ACT_COMPONENT_SEARCH_CLOSE: 9902033,

  // post评论
  ACT_COMPONENT_CHAT_POST_COMMENT: 9902034,

  // 确认共享文件
  ACT_COMPONENT_CHAT_SHARE_FILE: 9902035,
  // tips列表刷新
  ACT_COMPONENT_TIPS_RELOAD: 9902036,
  // chat菜单刷新
  ACT_COMPONENT_CHAT_MENU_RELOAD: 9902037,
  // @用户
  ACT_COMPONENT_CHAT_AT_USER: 9902038,

  // 点击打开聊天窗口
  ACT_COMPONENT_CHAT_SEARCH_OPEN_CHAT_GROUP: 9902039,
  ACT_COMPONENT_CHAT_PIN_OPEN_MESSAGE: 9902040,
  ACT_COMPONENT_NOTIFICATION_SELF_MESSAGE: 9902041,           // 通知自己消息
  ACT_COMPONENT_NOTIFICATION_UPDATE_SHARE_HOLDER: 9902042,     // 修改本地公司列表
  ACT_COMPONENT_NOTIFICATION_UPDATE_OWNER: 9902043,     // 接受owner修改本地公司列表

  ACT_COMPONENT_CHAT_POST_REVOKE: 9902044, // post 消息的删除
  ACT_COMPONENT_IMAGE_DIALOG_FORWARD_MESSAGE: 9902045,
  ACT_COMPONENT_IMPORT_BI_FILE: 9902046,
  ACT_COMPONENT_REMOVE_MESSAGE_FROM_PIN_LIST: 9902047,
  ACT_COMPONENT_CHAT_FILE_UPLOAD: 9902048,
  ACT_COMPONENT_IMPORT_FILE_TO_POST: 9902049,
  ACT_COMPONENT_SYNCHRONIZATION_GROUP_MESSAGE: 9902050,
  ACT_COMPONENT_HIDE_CHAT_COMPONENT: 9902051,
  // post file 刷新
  ACT_COMPONENT_CHAT_POST_FILE: 9902052,

  ACT_COMPONENT_CHAT_REFRESH_HEADER: 9902053, // 邀请人进群后 右侧侧边栏 通知头部 刷新人员列表

  // 离线Notification通知
  ACT_COMPONENT_NOTIFICATION_READ_OFFLINE: 9999001,
  ACT_COMPONENT_NOTIFICATION_PUSH_DATA: 9999002,              // 新的  notification 通知
  ACT_COMPONENT_NOTIFICATION_DELETE_FRIEND: 9999003,          // 删除好友 notification
  ACT_COMPONENT_NOTIFICATION_HANDLED_STATUS: 9999004,         // 更改Notification状态
  ACT_COMPONENT_NOTIFICATION_SELF_OFFLINE_STATUS: 9999005,    // 通知当前用户在线状态
  ACT_NOTIFICATION_ADD_FRIEND: 9999006,                        // 接受好友通知
  ACT_NOTIFICATION_AGREE_HIRE: 9999007,                        // 接受招聘
  ACT_NOTIFICATION_GROUP_NAME_MODIFY: 9999008,                 // 修改群信息
  ACT_NOTIFICATION_COMPANY_CEO_MODIFY: 9999009,                // 修改 company ceo
  ACT_COMPONENT_DIALOG_DEAL_BUTTON: 9999010,

  ACT_COMPONENT_DIALOG_BTN_DISABLE: 9999011,  // 通知dialog 按钮不可点

  // folder
  ACTION_NEW_FOLDER: 990401, // 新建文件夹
  ACTION_UPLOAD_FILE: 990402, // 文件上传
  ACTION_DELETE_FILE: 990403, // 删除文件
  ACTION_COPY_FILE: 990405, // 复制文件
  ACTION_RENAME_FILE: 990406, // 重命名文件
  ACTION_TRANSFER_FILE: 990407, // 转让文件
  ACTION_MOVE_FILE: 990408, // 移动文件
  ACTION_STARRED_FILE: 990409, // 标记文件
  ACTION_FILE_CHOOSE_CHANGE: 990410, // 选择的文件数量及类型发生变化
  ACTION_PASTE_FILE: 990411, // 粘贴文件
  ACTION_FILTE_FILE_IN_EXT: 990412, // 在根据文件ext 类型分类的情况下按照关键字页面内帅选

  // mission模块
  ACTION_MEETING_ATTENDEE_CHANGE: 990601, // 会议参与人
  ACTION_ASSIGNMENT_OPERATOR_CHANGE: 990602, // ASSIGNMENT OPERATOR的变化
  ACTION_TASk_OPERATOR_CHANGE: 990603, // TASK OPERATOR
  ACTION_TASK_APPROVER_CHANGE: 990604, // TASK APPROVER
  ACTION_TASK_BIDDER_CHANGE: 990605, // TASK BIDDING
  ACTION_TASK_PUBLISHER_IDENTITY_CHANGE: 990606, // TASK BIDDING
  ACTION_TASK_INIT_TARGET: 990607,
  ACTION_ASSIGNMENT_INIT_TARGET: 990608,
  // mission function 的开启关闭
  ACTION_MISSION_FUNCTION_PARTICIPANT: 990609, // 开启/关闭 participant function
  ACTION_MISSION_FUNCTION_RECORDER: 990610,  // 开启/关闭recorder function
  ACTION_MISSION_FUNCTION_IMPORTANCE: 990611, // 开启关闭importance function
  ACTION_MISSION_FUNCTION_TRACK: 990612, // 开启/关闭track function
  ACTION_MISSION_FUNCTION_TARGET: 990613, // 开启/关闭target function
  ACTION_MISSION_FUNCTION_BIDDING: 990614, // 开启/关闭bidding function
  ACTION_MISSION_FUNCTION_EXPENSE: 990615, // 开启/expense function
  // mission folder
  ACT_COMPONENT_MISSION_FOLDER_CREATE: 990620,
  ACT_COMPONENT_MISSION_FOLDER_DELETE: 990621,
  ACT_COMPONENT_MISSION_FILE_UPLOAD: 990622,
  ACT_COMPONENT_MISSION_IMPORT_FILE: 990623,
  // 日历添加pin
  ACT_COMPONENT_MISSION_CALENDAR_ADD_PIN: 990624,
  // 日历修改pin
  ACT_COMPONENT_MISSION_CALENDAR_UPDATE_PIN: 990625,
  // 更新vacation天数
  ACT_COMPONENT_VACATION_UPDATE_VACATION: 990701,
  // 更新国家法定假日
  ACT_COMPONENT_UPDATE_NATIONAL_HOLIDAY: 990702,

  // dialog 发送当前position
  ACT_DIALOG_SERVICE_POSITION: 9903001,
  // 组织架构 import
  ACT_COMPONENT_STRUCTURE_IMPORT: 9903002,
  // 将import的文件传送
  ACT_COMPONENT_STRUCTURE_IMPORT_FILE: 9903003,
  // import的文件加载完毕
  ACT_COMPONENT_STRUCTURE_IMPORT_FILE_COMPLETE: 9903004,

  ACT_COMPONENT_REFRESH_COMPANY: 9903005,

  ACT_COMPONENT_REFRESH_POSITION_NAME: 9903006,
  /** 模块间通讯 结束 **/

  /** IM间通讯 开始 **/
  // 保持IM心跳
  ACT_SYSTEM_IM_KEEP_ONLINE: -1,
  // 登陆IM
  ACT_SYSTEM_IM_LOGIN: 199001,
  // 退出IM
  ACT_SYSTEM_IM_LOGOUT: 199002,
  // 用户权限变更, 非静默通知，强制退出，解雇/辞职
  // 发送给uuid
  ACT_USER_PERMISSION_CHANGED: 199003,
  // 用户登录状态过期
  ACT_USER_SESSION_EXPIRED: 199004,
  // 用户权限冻结, psid变为pending
  ACT_USER_PERMISSION_FREEZE: 199005,
  // 静默权限变更。
  // pending变为psid, 权限新增, 后期psid平移
  ACT_USER_PERMISSION_CHANGED_IN_SILENCE: 199006,
  // 已经存在的导入变为psid
  ACT_USER_STRUCTURE_IMPORTED: 199007,

  // 站内信
  ACT_IN_MAIL: 199010,
  // 小闹钟
  ACT_SYSTEM_ALARM: 199020,

  ACT_SYSTEM_COMPANY_UPGRADE_SUCCESS: 199030,

  ACT_SYSTEM_COMPANY_UPGRADE_FAILED: 199031,

  // 联系人
  ACT_USER_REQUEST_ADD_FRIEND: 101001,                        // 申请添加好友
  ACT_USER_NOTICE_ACCEPT_ADD_FRIEND: 101002,                  // 接受添加好友
  ACT_USER_NOTICE_REFUSE_ADD_FRIEND: 101003,                  // 拒绝添加好友
  ACT_USER_NOTICE_USER_DELETE_FRIEND: 101004,                 // 删除好友
  ACT_USER_REQUEST_RECOMMEND_USER: 101005,                    // 推荐好友
  ACT_USER_REQUEST_RECOMMEND_ADD_FRIEND: 101006,              // 发起添加好友申请(给被推荐人)
  ACT_USER_NOTICE_RECOMMEND_ACCEPT_ADD_FRIEND: 101007,        // 被推荐人同意
  ACT_USER_NOTICE_RECOMMEND_REFUSE_ADD_FRIEND: 101008,        // 被推荐人拒绝
  ACT_USER_NOTICE_REFUSE_RECOMMEND_ADD_FRIEND: 101009,        // 拒绝推荐过来的好友

  // 群主邀请用户(被邀请用户收到)
  ACT_NOTICE_MASTER_GROUP_INVITE: 102002,                  // 群主邀请用户(被邀请用户收到)
  ACT_REQUEST_MEMBER_GROUP_INVITE_RECEIVER: 102003,        // 发送邀请通知(被邀请人收到)
  ACT_REQUEST_MEMBER_GROUP_INVITE: 102005,                 // 非群主邀请用户(群主收到)
  ACT_NOTICE_MEMBER_GROUP_INVITE_MASTER_ACCEPT: 102006,    // 群主同意邀请行为(邀请人收到)
  ACT_NOTICE_MEMBER_GROUP_INVITE_MASTER_REFUSE: 102007,    // 群主拒绝邀请行为(邀请人收到)
  ACT_NOTICE_MEMBER_GROUP_INVITE_ACCEPT: 102008,           // 被邀用户同意(邀请人收到)
  ACT_NOTICE_MEMBER_GROUP_INVITE_REFUSE: 102009,           // 被邀用户拒绝(邀请人收到)
  // 组织架构并行用户
  ACT_NOTICE_STRUCTURE_CONCURRENCY: 103001,
  // 工作流程并行用户
  ACT_NOTICE_WORKFLOW_CONCURRENCY: 103002,
  ACT_REQUEST_COMPANY_RELATIONSHIP: 103003,
  ACT_REQUEST_HIRE: 103004,                             // 雇用员工
  ACT_NOTICE_HIRE_ACCEPT: 103005,                       // 接受雇佣
  ACT_NOTICE_HIRE_REFUSE: 103006,                       // 拒绝雇佣
  // 切换公司
  ACT_NOTICE_SWITCH_COMPANY: 103007,
  ACT_NOTICE_COMPANY_RELATIONSHIP_ACCEPT: 103008,       // 同意公司关系申请
  ACT_NOTICE_COMPANY_RELATIONSHIP_REFUSE: 103009,       // 拒绝公司关系申请
  // 组织架构模块
  ACT_STRUCTURE_NOTICE_STRUCTURE_CHANGE: 103010,
  // 多人同时在线同步
  // structure
  ACT_STRUCTURE_CONCURRENCY_ADD: 103011,
  ACT_STRUCTURE_CONCURRENCY_DELETE: 103012,
  ACT_STRUCTURE_CONCURRENCY_HEARTBEAT: 103013,
  // workflow
  ACT_WORKFLOW_CONCURRENCY_ADD: 103014,
  ACT_WORKFLOW_CONCURRENCY_DELETE: 103015,
  ACT_WORKFLOW_CONCURRENCY_HEARTBEAT: 103016,

  ACT_REQUEST_SET_COMPANY_ADMIN: 103020,                              // 设置公司 owner/builder/shareholder
  ACT_REQUEST_SHAREHOLDER_APPROVE: 103022,                            // 股东同意公司admin
  ACT_REQUEST_SHAREHOLDER_DISAPPROVE: 103023,                         // 股东拒绝公司admin
  ACT_REQUEST_COMPANY_ADMIN_ACCEPT: 103026,                           // 公司admin接受
  ACT_REQUEST_COMPANY_ADMIN_REFUSE: 103027,                           // 公司admin拒绝

  ACT_REQUEST_SET_COMPANY_STRUCTURE_ADMIN: 103021,                    // 设置公司 structure-admin
  ACT_REQUEST_SHAREHOLDER_APPROVE_STRUCTURE_ADMIN: 103024,            // 股东同意公司structure_admin
  ACT_REQUEST_SHAREHOLDER_DISAPPROVE_STRUCTURE_ADMIN: 103025,         // 股东拒绝公司structure_admin
  ACT_REQUEST_COMPANY_STRUCTURE_ADMIN_ACCEPT: 103028,                 // 公司structure_admin接受
  ACT_REQUEST_COMPANY_STRUCTURE_ADMIN_REFUSE: 103029,                 // 公司structure_admin拒绝

  ACT_NOTICE_ADMIN_CHANGE: 103030,                                    // 股东变更

  ACT_REQUEST_OUT_OFFICE_APPLY: 103043,                               // 离开公司申请
  ACT_NOTICE_OUT_OFFICE_ACCEPT: 103044,                               // 同意离开公司申请
  ACT_NOTICE_OUT_OFFICE_REFUSE: 103045,                               // 驳回离开公司申请

  // 用户切换聊天状态
  ACT_NOTICE_CHAT_USER_ONLINE_STATUS: 102015,
  // 获取单个用户在线状态
  ACT_CHAT_USER_GET_STATUS: 102016,
  // 重命名群
  ACT_NOTICE_GROUP_NAME_MODIFY: 102010,
  // 发送聊天消息
  ACT_CHAT_SEND_MESSAGE: 102000,
  // 创建群
  ACT_CHAT_NOTICE_GROUP_CREATE: 102001,
  // 删除群
  ACT_NOTICE_GROUP_DELETE: 102014,
  // 退出群
  ACT_NOTICE_USER_EXIT_GROUP: 102011,
  // 删除群成员
  ACT_NOTICE_MASTER_DELETE_GROUP_USER: 102012,
  // 群组转让
  ACT_NOTICE_GROUP_TRANSFER: 102013,
  ACT_CHAT_MESSAGE_REVOKE: 102030,

  // mission
  ACT_MISSION_CREATED: 106001, // mission的创建
  ACT_MISSION_MODIFY: 106002,
  ACT_MISSION_RESET: 106003,
  ACT_MISSION_DOING: 106004,
  ACT_MISSION_PAUSE: 106005,
  ACT_MISSION_RESTART: 106006,
  ACT_MISSION_CANCEL: 106007,
  ACT_MISSION_DONE: 106008,
  ACT_MISSION_STORAGE: 106009,
  ACT_MISSION_DELETED: 106010,

  ACT_MISSION_AP_APPROVED: 106020,
  ACT_MISSION_AP_REFUSE: 106021,
  ACT_MISSION_AP_NEXT_STEP: 106022,

  ACT_MISSION_ACCEPTED: 106030,
  ACT_MISSION_REFUSE: 106031,
  ACT_MISSION_ALL_ACCEPTED: 106032,
  ACT_MISSION_OP_ACCEPTED: 106033,
  ACT_MISSION_OP_REFUSE: 106034,
  ACT_MISSION_OP_ALL_ACCEPTED: 106035,
  ACT_MISSION_OP_COMPLETE: 106036,
  ACT_MISSION_OP_ALL_COMPLETE: 106037,

  ACT_MISSION_BIDDING_PERIOD_START: 106040,
  ACT_MISSION_BIDDING_PERIOD_END: 106041,
  ACT_MISSION_VOTED: 106042,
  ACT_MISSION_ALL_VOTED: 106043,

  ACT_MISSION_ADD_MISSION_MEMBER: 106050,
  ACT_MISSION_DELETE_MISSION_MEMBER: 106051,
  // vacation 通知
  ACT_USER_VACATION_APPLY: 103040,
  ACT_USER_VACATION_APPLY_ACCEPT: 103041,
  ACT_USER_VACATION_APPLY_REFUSE: 103042,

  // 员工离职申请
  ACT_APPLICATION_REQUEST_APPLY_DISMISSION: 103046,
  // 通过离职申请 line manager
  ACT_APPLICATION_NOTICE_DISMISSION_ACCEPT: 103047,
  // 拒绝离职申请 line manager
  ACT_APPLICATION_NOTICE_DISMISSION_REFUSE: 103048,
  // hr admin | main admin | ceo  handle dismission
  ACT_APPLICATION_NOTICE_DISMISSION_ADMIN_HANDLED: 103049,

  // hr admin | main admin | ceo  handle dismission, sent to line manager
  ACT_APPLICATION_NOTICE_DISMISSION_ADMIN_HANDLED_SEND_TO_LINE_MANAGER: 103050,
};

