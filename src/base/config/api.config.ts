export const APIErrorCode = {
  SUCCESS: 1,
  ERROR_CODE_INVAILD_FORMAT: 99001,
  ERROR_CODE_MISS_STATUS: 99002,
  ERROR_CODE_MISS_DATA: 99003,
  ERROR_CODE_MISS_MSG: 99004,
  ERROR_CODE_COMMON: 0,
  ERROR_CODE_NO_LOGIN: -10001,
  ERROR_CODE_NO_ACCESS: 400,
  ERROR_CODE_SESSION_EXPIRED: 501
};


export const APIConfig = {
  // 上传
  upload: 'file-save',
  // 用户
  // 用户登录
  userLoginCheck: 'user/login-check',
  // 用户退出
  userLogout: 'user/logout',
  // 用户注册
  userRegister: 'user/register',
  // 公司切换
  userSwitchCompany: 'user/switch-company',
  // 联系我们
  userContactUs: 'user/contact-us',
  // 重置密码
  userResetPwdByToken: 'user/reset-pwd-by-token',
  // 个人中心中修改密码
  userResetPwd: 'user/reset-pwd',
  // 登录页面忘记密码
  userFindPassword: 'user/find-password',
  // 发送邮箱 或手机号
  userApplyResetPwd: 'user/apply-reset-pwd',
  // 发送邮箱 或手机号
  userCheckRPToken: 'user/check-rp-token',
  // TODO: 暂时兼容接口, 后期需要修改, 更改用户状态, 重新设置权限
  userResetPermission: 'user/reset-permission',

  // 个人信息
  userInformations: 'user/informations',                                   // 用户
  userSaveBaseInfo: 'user/save-base-info',	                               // 个人保存
  userBanksList: 'user/banks-list',	                                           // 银行列表
  userAreaCountry: 'user/area-country',	                                       // 国家列表
  userSaveEducations: 'user/save-educations',	                                 // 保存教育
  userLanguageLevels: 'user/language-levels',	                                 // 语言等级
  userSaveSkill: 'user/save-skill',                                            // 保存个人技能
  userSkillPoint: 'user/skill-point',                                          // 技能点赞
  userPersonalPermission: 'user/personal-permission',
  viewContact: 'user/dynamic-info',
  genderList: 'user/gender-list',
  languageList: 'user/language-list',                                      // 语言分类
  contactsPermission: 'user/personal-permission',	                         // 权限获取
  modifyProfile: 'user/modify-profile',                                    // 头像保存
  getRegisterCode: 'user/get-register-code',                               // 获取手机注册验证码

  // 查看好友信息
  fetchFriendInfo: 'user/fetch-friend-informations',                       // 查看好友信息
  getInCommon: 'contact/in-common',	                                       // 共同好友
  userInfo: 'contact/get-user-info',	                                     // 好友信息
  saveOccupation: 'contact/occupation-save',	                             // 招聘保存
  fetchOccupation: 'contact/fetch-occupation',                             // 查看招聘信息
  authorizationAccessInfo: 'user/authorization-access-info',               // 查看好友信息权限
  checkRelation: 'chat/check-relation',                                    // 检查两个人之间是否是好友
  contactDisplay: 'contact/display',
  contactSearch: 'contact/search',
  checkIsOccupation: 'contact/check-is-occupation',                        // 检测是否已被招聘
  fetchUserCompany: 'contact/fetch-user-company',                          // 用户所有公司列表
  // examineContact:'user/examine-contact',

  userAllocatedPrivilege: 'user/allocated-privilege',                      // 查看权限
  userGrantPrivilege: 'user/grant-privilege',                              // 分配权限
  testAuthCode: 'user/verify-identification-code',                         // account 验证手机验证码
  applyUpdateEmail: 'user/apply-update-email',                             // 申请更换邮箱 发送验证码
  updateEmail: 'user/update-email',                                        // 申请更换邮箱
  updatePhone: 'user/update-phone',                                        // 申请更换手机号
  verifyRegisterCode: 'user/verify-register-code',                         // 验证注册手机验证码
  getAccountPhoneCode: 'user/get-identification-code',                     // account 里获取手机验证码
  getGrantList: 'user/get-grant-list',                                     // 获取用户权限
  flushSession: 'user/flush-session',                                      // 用户刷新session
  userSetting: 'user/user-setting',                                        // 用户设置
  setPermission: 'user/set-permission',                                    // 设置用户权限
  getPermission: 'user/get-permission',                                    // 获取用户权限
  defaultSetPermission: 'user/default-set-permission',                     // 获取用户权限


  // 公司操作
  companyGeneral: 'company/profile-display',                               // 公司信息
  upDateCompanyGeneral: 'company/profile-update',                          // 保存公司
  companyIndustry: 'company/industries',                                   // 公司行业
  companyRegister: 'company/register',                                     // 公司注册
  generalSave: 'company/general-save',                                     // 保存公司信息
  permissionSave: 'company/permission-save',                               // 保存权限
  permission: 'company/permission',                                        // 公司权限
  companySearch: 'company/search',	                                       // 搜索公司
  companyAccount: 'company/account',                                       // 公司Account
  companyAnalysis: 'company/analysis',                                     // 公司
  updateCompanyCeo: 'company/update-company-ceo',                          // 保存公司CEO
  searchCeoCandidates: 'company/search_ceo_candidates',                    // CEO查询
  getCurrentCeo: 'company/get_current_ceo',                                // 获取当前CEO
  searchAdminCandidates: 'company/search-admin-candidates',                // 搜索
  getAllCompany: 'company/get-all-company',                                // 获取所有公司
  getAllStaff: 'company/get-all-staff',                                    // 获取所有招聘列表
  getRecruitment: 'company/get-recruitment',                               // 获取待招聘人员列表
  getUnverifiedCompany: 'company/get-unverified-company',                  // 获取未审核公司列表
  isHireUsers: 'contact/is-hire-user',                                     // 判断用户是否可以hire
  showVacationUsage: 'company/show-vacation-usage',                        // 假期
  updateVacation: 'company/update-vacation',                               // 更新假期天数
  getVacationSetting: 'company/show-vacation-setting',                     // 获取假期设置
  updateVacationSetting: 'company/update-vacation-setting',                // 更新假期设置
  showStaffVacation: 'company/show-staff-vacation-usage',                  // 显示员工请假列表
  studioUpgrade: 'company/studio-upgrade-company',                         // studio 升级为 company
  dismissEmployeeNoStructure: 'company/remove-staffs',                     // 解雇填过招聘信息但是未入组织架构的员工
  dismissNotEntry: 'company/remove-recruits',                              // 解雇未填过招聘信息的员工

  // 组织架构
  groupStructure: 'structure/group-structure', // 集团组织架构
  companyStructure: 'structure/company-structure', // 集团组织架构
  deptStructure: 'structure/department-structure', // 集团组织架构
  structurePosition: 'structure/search-position', // 获取职位
  structurePositionTitle: 'structure/search-position-title', // 获取职位
  structureStaff: 'structure/search-staff',		// 获取员工
  structureCompany: 'structure/search-company',	// 获取公司
  structureDept: 'structure/search-department',		// 获取部门
  allStructure: 'structure/all-structure',
  mainStructure: 'structure/all-structure',
  getPending: 'structure/pending',
  compareUploadStructure: 'structure/compare', // 比较保存组织架构信息
  uploadStructure: 'structure/upload-structure',   // 保存组织架构信息
  uploadStructureNew: 'structure/upload-structure-new',   // 保存组织架构信息
  checkPosition: 'structure/check-position',       // 判断职位是否可以被删除
  dismissEmployee: 'structure/dismiss', // 解雇员工


  // 聊天
  groupList: 'chat/get-group-list',	// 聊天左侧列表
  checkRecommendRelation: 'chat/check-recommend-friend-relation', // 检测推荐的好友能被添加成什么好友
  fileImageSave: 'file-image-save', // 文件图片上传
  fetchGroupInfo: 'chat/fetch-group-info',		// 群基本信息
  groupChat: 'chat/group-chat',		// 群聊天
  groupCreate: 'chat/group-create',	// 创建群
  groupRename: 'chat/group-rename-topic', // 群重命名
  groupAddFriend: 'chat/group-add-friend', // 群添加好友
  groupRemoveFriend: 'chat/group-remove-friend',	// 删除群好友
  groupDrop: 'chat/group-drop',	// 删除群
  removeFriends: 'chat/remove-friends', // 删除好友
  enshrineInfo: 'chat/enshrine', // 收藏
  cancelEnshrine: 'chat/enshrine-drop', // 取消收藏
  insertMsgPin: 'chat/insert-msg-pin', // 消息加pin
  deleteMsgPin: 'chat/delete-msg-pin', // 删除加pin消息
  getMsgPinList: 'chat/get-msgpin-list', // 获取pin消息
  // 用户在线状态
  getOnlineStatus: 'chat/check-is-online',
  // 对公司用户
  initCompanyUserDialog: 'chat/init-dialog',

  getFrontAndBackMessage: 'chat/msg-transmit', // 获取消息的前后一条消息
  getSingleMessage: 'chat/get-single-msg', // 获取一条消息的详情

  // 开发机
  chatImgcomments: 'chat/image-comments', // 图片评论
  fetchImageComments: 'chat/fetch-image-comments', // 图片评论
  searchChatRecords: 'chat/search-chat-records', // 聊天内容搜索

  // notification
  offlineNotification: 'fetch-offLine-notification',
  offlinePersonalMessage: 'fetch-offLine-notification',                     // 'get-user-offLine-msg', 个人离线messgae
  offlineGroupMessage: 'fetch-offLine-notification',                        // 'get-group-offLine-msg',  群组离线message
  notificationFetchSummary: 'notification/fetch-general-summary',           // 所有弹窗消息需要二次处理数据
  fetchNotice: 'notification/fetch-notice',                                 // notification notice
  fetchRequest: 'notification/fetch-request',                               // notification request
  fetchOffLineMessage: 'notification/fetch-offline-message',                               // all notification
  notificationUpdatedRequest: 'notification/update-request',   // mission notification  request处理

  // 用户消息
  userMessage: 'chat/get-user-msg',
  // 群组聊天消息
  userGroupMessage: 'chat/get-group-msg',
  // 获取整个离线消息包
  getPackageMsg: 'chat/get-package-msg',
  getOfflineCount: 'chat/get-offLine-count',

  // 收藏
  imagePoint: 'chat/image-point',
  // 收藏个数
  imageEnshrine: 'chat/image-enshrine',
  // 聊天图片打tag
  chatImgTag: 'chat/image-diagram-add',
  // 获取图片tag
  fetchChatImgTags: 'chat/image-diagram-show',
  // 删除图片的tag
  deleteImgTag: 'chat/image-diagram-remove',
  // 编辑图片的tag
  updateImgTag: 'chat/image-diagram-update',
  // 获取图片的评论列表
  fetchImageComment: 'chat/image-comment-show',
  // 发送图片评论
  // image-comment-add
  addImageComment: 'chat/image-comment-add',
  // 删除评论
  removeImageComment: 'chat/image-comment-remove',
  // 查看图片点赞数量
  fetchImageLike: 'chat/image-like-show',
  // 图片点赞  image-like-update
  imageLikeUpdate: 'chat/image-like-update',
  // 查看post的信息
  postDetails: 'chat/post-details',
  // 新建存取信息到draft
  addPostDraft: 'chat/post-add',
  // 查看模式的post
  getDetailPostContent: 'chat/post-show',
  // 请求draft-list
  fetchDraftList: 'chat/post-draft-fetch-list',
  // 更新draft
  updateDraftDetail: 'chat/post-update',
  // upload chatPost 直接上传
  uploadChatPostMsg: 'chat/post-direct-upload',
  // upload chatPost 草稿箱上传
  uploadChatPostMsgByDraft: 'chat/post-upload',
  // delete draft
  removeDraft: 'chat/post-delete',
  // delete draft
  appendChatComment: 'chat/post-comment-add',
  // show comments list
  displayComments: 'chat/post-comment-show',
  // draftAttachmentInfo
  draftAttachmentInfo: 'chat/draft-attachment-info',
  // delete post comment
  deletePostComment: 'chat/post-comment-remove',
  // search chat message
  chatSearchInfo: 'chat/search-chat-records',
  // 查询 图片前后5条图片
  queryBeforeAndAfterImg: 'chat/before-and-after-five-image',
  // 查询 图片前或者后10条图片
  findBeforeOrAfterImg: 'chat/before-or-after-ten-image',
  // 查询post列表
  fetchPostByChatGroup: 'chat/fetch-posts-by-chat-group',

  // 文件管理器

  // 初始化文件目录
  folderInit: 'folder/init',
  // 获取文件列表
  folderLists: 'folder/lists',
  // 创建文件夹
  folderCreate: 'folder/create',
  // 删除文件或者文件夹
  deleteFolder: 'folder/delete',
  // 移动文件或者文件夹
  modifyFolder: 'folder/modify',
  // 下载文件
  downloadFile: 'folder/download-file',
  // 上传文件
  uploadFile: 'folder/file-upload',
  // 获取全部文件夹列表
  folderDirList: 'folder/dir-list',
  // 获取上层文件列表
  folderTopLists: 'folder/top-lists',
  // 复制文件
  folderCopy: 'folder/copy',
  // 文件加标记/删除标记
  folderStarred: 'folder/starred',
  // 文件或者文件夹重命名
  folderRename: 'folder/rename',
  // 文件转让
  folderTransfer: 'folder/transfer',
  // 文件下载
  folderDownloadFile: 'folder/download-file',
  // 文件分享
  folderShare: 'folder/share',
  // 文件上传
  fileUpload: 'folder/file-upload',
  // 文件搜索
  fileSearch: 'folder/search',
  // 文件转发
  fileForward: 'folder/forward',
  // 文件下载
  fileDownLoad: 'folder/download-file',
  // 获取share列表
  fileShareList: 'folder/share-list',
  // file-import
  fileImport: 'folder/import',
  // 获取文件空间
  folderDisk: 'folder/disk',
  // 员工空间  /api/folder/staff-space
  staffSpace: 'folder/staff-space',
  // 分享文件列表
  shareFolderList: 'folder/share-files',
  // 查看搜索文件的全路径
  folderFullPath: 'folder/full-path',
  // 空间管理
  drawPipe: 'folder/draw-pie',


  // workflow工作流
  // 申请人列表
  workflowApplicantList: 'workflow/applicantList',
  // 审批人列表
  workflowApproverList: 'workflow/approverList',
  // 新建&更新
  workflowUpload: 'workflow/upload',
  // 删除
  workflowDelete: 'workflow/delete',
  // 所有工作流列表
  workflowLists: 'workflow/list',
  // 工作流详情
  workflowDetail: 'workflow/details',
  // 已经存在workflow的列表
  workflowExistList: 'workflow/exist-list',
  // workflow 通过连接人查询公司列表
  workflowCooperatorCompany: 'workflow/get-cooperator-company',
  // 通过连接的workflow查询内部可选的连接人 （简称连接外部人员）
  workflowExternalCooperator: 'workflow/get-internal-cooperator',
  // workflow 查询当前公司所有部门
  workflowDepartmentList: 'workflow/department-list',


  // mission
  missionList: 'mission/list',
  // mission分页列表
  missionPagerList: 'mission/list-pager',
  // mission详情
  missionDetail: 'mission/showDetails',
  // 	新建Mission
  missionUpload: 'mission/upload',
  // 获取 下拉列表人员
  missionUserInfoList: 'mission/user-info-list',
  // 获取
  // mission/fetch-subordinate
  missionFetchSubordinate: 'mission/fetch-subordinate',
  // 获取支付的Mission列表
  missionExpenseList: 'mission/expense-list',
  // 获取mission的token
  missionGetToken: 'mission/get-token',
  // 删除project的子 mission
  removeProjectChild: 'mission/remove-project-child',
  // 加link /api/mission/fetch-link-list
  fetchLinkList: 'mission/fetch-link-list',
  // 地图加ping
  missionMapPin: 'mission/map-pin',
  missionMapPinList: 'mission/map-pin-list',
  // 地图删除ping
  removeMapPin: 'mission/remove-map-pin',
  // mission下的workflow
  applicationWorkflowList: 'workflow/application-workflow-list',
  // mission日历pin修改
  missionCalendarPinAdd: 'mission/mission-pin-add',
  missionCalendarPinDelete: 'mission/mission-pin-remove',
  missionCalendarPinUpdate: 'mission/mission-pin-update',

  // mission的普通操作
  // api/mission/common/operation (accept/refuse/approve)
  missionCommonOperation: 'mission/common/operation',
  // application/approve
  missionApplicationApprove: 'mission/application/approve',
  // complete
  missionComplete: 'mission/complete',
  // 删除mission
  missionDelete: 'mission/delete',
  // 转让这个mission
  missionTransfer: 'mission/transfer',
  // mission 状态变化
  missionStatusChange: 'mission/status/change',
  // target_upload
  targetUpload: 'mission/target/upload',
  // 会议记录者更新记录内容
  // /api/mission/+meeting-record
  meetingRecord: 'mission/meeting-record',
  // check这个mission
  missionCheck: 'mission/check',
  // bidding vote
  // mission/bidding/vote
  biddingVote: 'mission/bidding/vote',
  // projectScheduleDetail
  projectScheduleDetail: 'mission/get-schedule',

  // mission搜索框搜索mission
  missionSearch: 'mission/search',

  // mission聊天组
  missionGetChatGroup: 'chat/get-mission-group',

  // 添加meeting room
  meetingRoom: 'other/conference-room-upload',
  // 得到meeting room 列表
  getMeetingRoomList: 'other/conference-room-list',
  // 修改meeting room
  updateMeetingRoom: 'other/conference-room-upload',
  // 删除meeting room
  deleteMeetingRoom: 'other/conference-room-delete',
  // 预定会议室添加，列表，修改
  addMeetingPresere: 'other/conference-room-booking',
  meetingPresere: 'other/conference-room-booking-list',
  updateMeetingPresere: 'other/conference-room-booking',
  // 会议室搜索
  searchMeeting: 'other/search-meeting-list',
  // http:// devapi-debug.blockbi.com/?url=/api/other/in-mail-send
  inMailSend: 'other/in-mail-send',
  // other/fetch-in-mail-channel
  fetchInMailChannel: 'other/fetch-in-mail-channel',
  // tips
  getHomeDashboard: 'other/promoted-show',
  // 闹钟添加
  alarmAdd: 'other/alarm-add',
  // 闹钟删除
  alarmDelete: 'other/alarm-delete',
  // 闹钟修改
  alarmUpdate: 'other/alarm-update',
  // new tips
  createTips: 'other/tips-add',
  // update tips
  modificationTips: 'other/tips-update',
  // removeTips
  removeTips: 'other/tips-delete',
  // showTipsDetailApi
  showTipsDetailApi: 'other/tips-detail',
  // 首页删除mission
  deletePromoted: 'other/promoted-remove',
  // 聊天生成shareid
  generateShareId: 'chat/share-add',
  userGetSettingNote: 'user/get-setting-note',
  userSetSettingNote: 'user/set-setting-note',
  importStructure: 'structure/import-initialization',
  achieveTimeLine: 'homepage/timeline-show', // 获取timeLine
  spaceManage: 'folder/staff-space',

  // 全局搜索 /api/homepage/search-general
  searchGeneral: 'homepage/search-general',

  // invite people
  invitePeople: 'other/invite',
  // help
  helpRecorder: 'other/helper',
  // help update
  updateHelper: 'other/update-helper',
  applicationVacationUsage: 'company/vacation-usage',
  // /api/company/attention
  companyAttention: 'company/attention',
  // company/attention-attendance-list
  attentionList: 'company/attention-attendance-list',      // 离开公司记录列表
  // company/out-office
  outOffice: 'company/out-office',  // 离开公司申请
  // vacation list
  getVacationList: 'company/attention-vacation-list',

  // 考勤记录编辑
  attendanceStatusEdit: '/api/company/attendance-status-edit',

  remainingVacationDays: 'company/remaining-vacation-days',
  containNationalHoliday: 'company/contain-national-holiday',
  createNationalHoliday: 'company/create-national-holiday', // 添加国家法定假日
  showNationalHoliday: 'company/show-national-holiday', // 查看国家法定假日列表
  deleteNationalHoliday: 'company/delete-national-holiday', // 删除国家法定假日
  updateNationalHoliday: 'company/update-national-holiday', // 编辑国家法定假日
  showWorKTime: 'company/show-work-time',     // 查看工作时间设置
  createWorKTime: 'company/create-work-time',      // 查看工作时间设置
  updateWorKTime: 'company/update-work-time',      // 查看工作时间设置
  showAttendance: 'company/show-attendance',   // 显示考勤列表
  showAttendanceDetail: 'company/show-staff-attendance-detail',  // 显示员工考勤详情

  getThirdAccountInfo: 'partner/fetch-info',  // 获取第三方账户信息

  getAuthorizedAddress: 'partner/get-authorized-address', // 获取第三方地址
  getAuthorizedPartner: 'partner/get-authorized-partner', // 获取账户绑定的第三方账户  登录情况下
  unbindAuthorizedPartner: 'partner/unbind-authorized-partner', // 解除第三方绑定 登录情况下
  bindAuthorizedPartner: 'partner/bind-authorized-partner', // 绑定第三方 登录情况下
};
