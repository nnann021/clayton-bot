function a2_0x35cd(){const _0x23c688=['start','claim','getTask','https://tonclayton.fun','/api/game/start-game','Farming\x20Already\x20Started','task_type','status','/api/user/claim','error','playStackGame','/api/stack/end','Task\x20Bot\x20Completed,\x20and\x20Claimed\x20Successfully','Successfully\x20Get\x20Daily\x20Task','/api/stack/start','getUserStats','comleteTaskBot','/api/users/uncompleted-tasks/','Starting\x20Partner\x20Task...','partner','Start\x20Playing\x20Stack\x20Game...','41787WCIhCk','Failed\x20:\x20','Something\x20wrong\x20with\x20daily\x20tasks,\x20skipping.','Successfully\x20Start\x20Task\x20','4131127kIZrxX','Completing\x20Partner\x20Task...','hasOwnProperty','comleteTaskTwitter','Failed\x20To\x20Login','Stack\x20Game\x20Started\x20','Getting\x20Daily\x20Task...','Successfully\x20Claim\x20Daily','Task\x20Twitter\x20Completed\x20And\x20Claimed','/api/user/stats','score','/api/user/daily-tasks','filter','334684HlHPYy','Try\x20To\x20Completing\x20Task\x20Bot','getPartner','Successfully\x20Get\x20Partner\x20Task','5DXkzJa','Error\x20:\x20','\x20to\x20','task','playTileGame','startPartnerTask','task_id','user','comletePartnerTask','Try\x20to\x20Login...','Start\x20Playing\x20Tile\x20Game...','290YYtQnB','queryObj','completeTask','xp_earned','1413736xxcDNS','...','startTask','Successfully\x20Get\x20User\x20Stats','/api/user/task-bot','116xxESgX','delay','account','dailyClaimToday','/api/stack/update','bot','claimFarming','4713pUrCpF','/api/user/partner/complete/','login','\x20EXP','Farming\x20Started','/api/game/save-tile-game','/api/user/start','POST','/complete','32429DmtJtf','14mVkjTr','Getting\x20User\x20Stats...','496578fMQSWp','Game\x20finished\x20got\x20','/api/user/login','\x20CL\x20and\x20','fetch','Starting\x20Farming...','Try\x20To\x20Start\x20Task\x20','Updating\x20Stack\x20Game\x20score\x20to\x20','message'];a2_0x35cd=function(){return _0x23c688;};return a2_0x35cd();}const a2_0x2e0561=a2_0x58e4;(function(_0x10d8da,_0x15a39c){const _0x26ad55=a2_0x58e4,_0x529201=_0x10d8da();while(!![]){try{const _0x4b4456=parseInt(_0x26ad55(0x1cf))/0x1+-parseInt(_0x26ad55(0x1bf))/0x2*(-parseInt(_0x26ad55(0x1c6))/0x3)+-parseInt(_0x26ad55(0x1a7))/0x4*(-parseInt(_0x26ad55(0x1ab))/0x5)+parseInt(_0x26ad55(0x1d2))/0x6*(-parseInt(_0x26ad55(0x1d0))/0x7)+-parseInt(_0x26ad55(0x1ba))/0x8+parseInt(_0x26ad55(0x196))/0x9*(-parseInt(_0x26ad55(0x1b6))/0xa)+parseInt(_0x26ad55(0x19a))/0xb;if(_0x4b4456===_0x15a39c)break;else _0x529201['push'](_0x529201['shift']());}catch(_0x2a051e){_0x529201['push'](_0x529201['shift']());}}}(a2_0x35cd,0x19d9d));import{API}from'../api/api.js';import{Helper}from'../utils/helper.js';import a2_0x4e183d from'../utils/logger.js';function a2_0x58e4(_0x2287df,_0x12ea42){const _0x35cd20=a2_0x35cd();return a2_0x58e4=function(_0x58e458,_0x4488c0){_0x58e458=_0x58e458-0x18d;let _0xd61e2=_0x35cd20[_0x58e458];return _0xd61e2;},a2_0x58e4(_0x2287df,_0x12ea42);}export class Core extends API{constructor(_0x59f7aa,_0x59cc1f,_0x4fae7d,_0x64fcb){const _0x469689=a2_0x58e4;super(_0x59cc1f,_0x469689(0x1de),_0x64fcb),this[_0x469689(0x1c1)]=_0x59f7aa,this['query']=_0x59cc1f,this[_0x469689(0x1b7)]=_0x4fae7d;}async[a2_0x2e0561(0x1c8)](_0x139e44=![]){const _0x4280c4=a2_0x2e0561;try{if(_0x139e44)await Helper[_0x4280c4(0x1c0)](0x1f4,this[_0x4280c4(0x1c1)],_0x4280c4(0x1b4),this);const _0x2c3d18=await this[_0x4280c4(0x1d6)](_0x4280c4(0x1d4),'POST',undefined);if(_0x2c3d18[_0x4280c4(0x1e2)]==0xc8){if(_0x139e44)await Helper['delay'](0x1f4,this[_0x4280c4(0x1c1)],'Successfully\x20Login',this);this[_0x4280c4(0x1b2)]=_0x2c3d18[_0x4280c4(0x1b2)],this[_0x4280c4(0x1c2)]=_0x2c3d18['dailyClaimToday'];}else{if(_0x139e44)await Helper[_0x4280c4(0x1c0)](0x1f4,this[_0x4280c4(0x1c1)],_0x4280c4(0x19e),this);}}catch(_0x2d380c){throw _0x2d380c;}}async[a2_0x2e0561(0x1db)](_0x5c1094=![]){const _0x2d9007=a2_0x2e0561;try{if(_0x5c1094)await Helper[_0x2d9007(0x1c0)](0x1f4,this['account'],'Try\x20to\x20Claim\x20Daily\x20Reward...',this);const _0x265423=await this[_0x2d9007(0x1d6)]('/api/user/daily-claim',_0x2d9007(0x1cd),undefined);if(_0x265423[_0x2d9007(0x1e2)]==0xc8){if(_0x5c1094)await Helper[_0x2d9007(0x1c0)](0x1f4,this[_0x2d9007(0x1c1)],_0x2d9007(0x1a1),this);}else{if(_0x5c1094)await Helper['delay'](0x1f4,this[_0x2d9007(0x1c1)],_0x2d9007(0x197)+_0x265423[_0x2d9007(0x1e4)],this);}}catch(_0x5b163e){throw _0x5b163e;}}async[a2_0x2e0561(0x190)](_0x13e82f=![]){const _0x29cc77=a2_0x2e0561;try{if(_0x13e82f)await Helper['delay'](0x1f4,this[_0x29cc77(0x1c1)],_0x29cc77(0x1d1),this);const _0x2db587=await this[_0x29cc77(0x1d6)](_0x29cc77(0x1a3),_0x29cc77(0x1cd),undefined);if(_0x2db587[_0x29cc77(0x1e2)]==0xc8){if(_0x13e82f)await Helper['delay'](0x1f4,this[_0x29cc77(0x1c1)],_0x29cc77(0x1bd),this);this['stats']=_0x2db587;}else await Helper['delay'](0x1f4,this[_0x29cc77(0x1c1)],'Failed\x20to\x20get\x20user\x20stats',this);}catch(_0x3946f3){throw _0x3946f3;}}async[a2_0x2e0561(0x1dd)](_0x16dfc=![]){const _0x31e37f=a2_0x2e0561;try{if(_0x16dfc)await Helper[_0x31e37f(0x1c0)](0x1f4,this[_0x31e37f(0x1c1)],_0x31e37f(0x1a0),this);const _0x43134c=await this[_0x31e37f(0x1d6)](_0x31e37f(0x1a5),'POST',undefined);if(_0x43134c[_0x31e37f(0x1e2)]==0xc8){this['task']=_0x43134c[_0x31e37f(0x1a6)](_0x291a1e=>_0x291a1e[_0x31e37f(0x19c)]('id'));if(_0x16dfc)await Helper[_0x31e37f(0x1c0)](0x1f4,this['account'],_0x31e37f(0x18e),this);}}catch(_0x2163a3){this[_0x31e37f(0x1ae)]=[],await Helper[_0x31e37f(0x1c0)](0x3e8,this[_0x31e37f(0x1c1)],_0x31e37f(0x198),this);}}async[a2_0x2e0561(0x1a9)](_0x11e24c=![]){const _0x34c4e6=a2_0x2e0561;try{if(_0x11e24c)await Helper[_0x34c4e6(0x1c0)](0x1f4,this[_0x34c4e6(0x1c1)],'Getting\x20Partner\x20Task...',this);const _0x3100c8=await this[_0x34c4e6(0x1d6)]('/api/user/partner/get',_0x34c4e6(0x1cd),undefined);if(_0x3100c8[_0x34c4e6(0x1e2)]==0xc8){this[_0x34c4e6(0x194)]=_0x3100c8[_0x34c4e6(0x1a6)](_0x21429c=>_0x21429c[_0x34c4e6(0x19c)](_0x34c4e6(0x1b1)));if(_0x11e24c)await Helper[_0x34c4e6(0x1c0)](0x1f4,this[_0x34c4e6(0x1c1)],_0x34c4e6(0x1aa),this);}}catch(_0x9b9360){throw _0x9b9360;}}async[a2_0x2e0561(0x1b0)](_0x3d211d){const _0x2a0f7f=a2_0x2e0561;try{await Helper[_0x2a0f7f(0x1c0)](0x1f4,this[_0x2a0f7f(0x1c1)],_0x2a0f7f(0x193),this);const _0x26eca7=await this[_0x2a0f7f(0x1d6)](_0x2a0f7f(0x1c7)+_0x3d211d['task_id'],'POST',undefined);_0x26eca7[_0x2a0f7f(0x1e2)]==0xc8&&(await Helper[_0x2a0f7f(0x1c0)](0x1f4,this[_0x2a0f7f(0x1c1)],_0x26eca7[_0x2a0f7f(0x1da)],this),await this[_0x2a0f7f(0x1b3)](_0x3d211d));}catch(_0x5c9f95){throw _0x5c9f95;}}async['comletePartnerTask'](_0x1e90b9){const _0x3619e5=a2_0x2e0561;try{await Helper[_0x3619e5(0x1c0)](0x1f4,this[_0x3619e5(0x1c1)],_0x3619e5(0x19b),this);const _0x41f1e5=await this[_0x3619e5(0x1d6)]('/api/user/partner/reward/'+_0x1e90b9['task_id'],_0x3619e5(0x1cd),undefined);_0x41f1e5[_0x3619e5(0x1e2)]==0xc8&&(await this[_0x3619e5(0x1a9)](),await this[_0x3619e5(0x1c8)](),await this[_0x3619e5(0x190)](),await Helper['delay'](0x1f4,this['account'],_0x41f1e5[_0x3619e5(0x1da)],this));}catch(_0x2b48c7){throw _0x2b48c7;}}async[a2_0x2e0561(0x191)](){const _0x2f7f8d=a2_0x2e0561;try{const _0x9ff96e=await this[_0x2f7f8d(0x1d6)](_0x2f7f8d(0x1be),_0x2f7f8d(0x1cd),undefined);_0x9ff96e[_0x2f7f8d(0x1e2)]==0xc8&&(_0x9ff96e[_0x2f7f8d(0x1c4)]==!![]&&_0x9ff96e[_0x2f7f8d(0x1dc)]==![]&&(await Helper[_0x2f7f8d(0x1c0)](0x1f4,this['account'],_0x2f7f8d(0x1a8),this),await this[_0x2f7f8d(0x1d6)]('/api/user/task-bot-claim',_0x2f7f8d(0x1cd),undefined),await this['login'](),await Helper[_0x2f7f8d(0x1c0)](0x1f4,this[_0x2f7f8d(0x1c1)],_0x2f7f8d(0x18d),this)));}catch(_0x2aa021){throw _0x2aa021;}}async[a2_0x2e0561(0x19d)](){const _0x3219ab=a2_0x2e0561;try{const _0x5e922d=await this[_0x3219ab(0x1d6)]('/api/user/task-twitter-claim',_0x3219ab(0x1cd),undefined);if(_0x5e922d[_0x3219ab(0x1e2)]==0xc8){await Helper[_0x3219ab(0x1c0)](0x1f4,this[_0x3219ab(0x1c1)],_0x5e922d[_0x3219ab(0x1da)],this);const _0x4f1641=await this['fetch']('/api/user/task-twitter','POST',undefined);await this['login'](),await Helper[_0x3219ab(0x1c0)](0x1f4,this['account'],_0x3219ab(0x1a2),this);}}catch(_0x5d4ceb){throw _0x5d4ceb;}}async[a2_0x2e0561(0x1bc)](_0x58eb7b){const _0x3e3853=a2_0x2e0561;try{await Helper[_0x3e3853(0x1c0)](0x1f4,this['account'],_0x3e3853(0x1d8)+_0x58eb7b[_0x3e3853(0x1e1)]+_0x3e3853(0x1bb),this);const _0x1a33c9=await this['fetch']('/api/user/daily-task/'+_0x58eb7b['id']+_0x3e3853(0x1ce),_0x3e3853(0x1cd),undefined);_0x1a33c9[_0x3e3853(0x1e2)]==0xc8?(await this['task'](),await Helper[_0x3e3853(0x1c0)](0x1f4,this[_0x3e3853(0x1c1)],_0x3e3853(0x199)+_0x58eb7b[_0x3e3853(0x1e1)],this),await this[_0x3e3853(0x1b8)](_0x58eb7b)):await Helper[_0x3e3853(0x1c0)](0x1f4,this[_0x3e3853(0x1c1)],_0x1a33c9[_0x3e3853(0x1e4)],this);}catch(_0x3ef796){throw _0x3ef796;}}async['completeTask'](_0x113ea4){const _0x977028=a2_0x2e0561;try{await Helper[_0x977028(0x1c0)](0x1f4,this[_0x977028(0x1c1)],'Try\x20To\x20Completing\x20Task\x20'+_0x113ea4[_0x977028(0x1e1)]+_0x977028(0x1bb),this);const _0x577b14=await this[_0x977028(0x1d6)](_0x977028(0x192)+_0x113ea4['id'],'POST',undefined);_0x577b14['status']==0xc8&&(await this[_0x977028(0x1c8)](),await this['getUserStats'](),await this['getTask'](),await Helper[_0x977028(0x1c0)](0x1f4,this[_0x977028(0x1c1)],'Successfully\x20Complete\x20Task\x20'+_0x113ea4['task_type'],this));}catch(_0x2a7a41){throw _0x2a7a41;}}async['startFarming'](){const _0x362b13=a2_0x2e0561;try{await Helper['delay'](0x1f4,this[_0x362b13(0x1c1)],_0x362b13(0x1d7),this);const _0x5ecd32=await this[_0x362b13(0x1d6)](_0x362b13(0x1cc),_0x362b13(0x1cd),undefined);_0x5ecd32[_0x362b13(0x1e2)]==0xc8?await Helper[_0x362b13(0x1c0)](0x1f4,this['account'],_0x362b13(0x1ca),this):await Helper['delay'](0x1f4,this['account'],_0x362b13(0x1e0),this);}catch(_0x492756){throw _0x492756;}}async[a2_0x2e0561(0x1c5)](){const _0x35344b=a2_0x2e0561;try{await Helper['delay'](0x1f4,this[_0x35344b(0x1c1)],'Claiming\x20Farming\x20Reward...',this);const _0x1ecc1c=await this['fetch'](_0x35344b(0x1e3),_0x35344b(0x1cd),undefined);_0x1ecc1c[_0x35344b(0x1e2)]==0xc8?(await Helper[_0x35344b(0x1c0)](0x1f4,this[_0x35344b(0x1c1)],'Successfully\x20Claim\x20Farming\x20Reward',this),await this[_0x35344b(0x1c8)](),await this[_0x35344b(0x190)]()):await Helper[_0x35344b(0x1c0)](0x7d0,this[_0x35344b(0x1c1)],_0x35344b(0x1ac)+_0x1ecc1c[_0x35344b(0x1e4)],this);}catch(_0x2b791c){throw _0x2b791c;}}async[a2_0x2e0561(0x1af)](){const _0x19cecf=a2_0x2e0561;try{await Helper[_0x19cecf(0x1c0)](0x1f4,this[_0x19cecf(0x1c1)],_0x19cecf(0x1b5),this);const _0x3fb8c7=await this[_0x19cecf(0x1d6)](_0x19cecf(0x1df),_0x19cecf(0x1cd),undefined);if(_0x3fb8c7['status']==0xc8){await Helper[_0x19cecf(0x1c0)](0x1f4,this[_0x19cecf(0x1c1)],_0x3fb8c7[_0x19cecf(0x1da)],this);const _0x580b9e={'maxTile':0x400*0x2},_0x641f0e=await this[_0x19cecf(0x1d6)](_0x19cecf(0x1cb),_0x19cecf(0x1cd),undefined,_0x580b9e);await Helper['delay'](0x1f4,this['account'],_0x641f0e[_0x19cecf(0x1da)],this),await Helper[_0x19cecf(0x1c0)](0xea60,this[_0x19cecf(0x1c1)],'Delaying\x20for\x2060\x20Second\x20Before\x20game\x20end\x20with\x20max\x20tile\x20score\x20is\x20'+_0x580b9e['maxTile'],this);const _0x40690a=await this[_0x19cecf(0x1d6)]('/api/game/over-game',_0x19cecf(0x1cd),undefined);await Helper[_0x19cecf(0x1c0)](0x1388,this['account'],_0x19cecf(0x1d3)+_0x40690a['earn']+_0x19cecf(0x1d5)+_0x40690a[_0x19cecf(0x1b9)]+'\x20EXP',this),await this[_0x19cecf(0x1c8)](),await this[_0x19cecf(0x190)]();}else await Helper[_0x19cecf(0x1c0)](0x7d0,this[_0x19cecf(0x1c1)],'Error\x20:\x20'+_0x3fb8c7[_0x19cecf(0x1e4)],this);}catch(_0x11a685){throw _0x11a685;}}async[a2_0x2e0561(0x1e5)](){const _0x2d8dcc=a2_0x2e0561;try{await Helper[_0x2d8dcc(0x1c0)](0x1f4,this[_0x2d8dcc(0x1c1)],_0x2d8dcc(0x195),this);const _0x4e28a6=await this[_0x2d8dcc(0x1d6)](_0x2d8dcc(0x18f),'POST',undefined);if(_0x4e28a6[_0x2d8dcc(0x1e2)]==0xc8){await Helper[_0x2d8dcc(0x1c0)](0x1f4,this[_0x2d8dcc(0x1c1)],_0x2d8dcc(0x19f),this);const _0x3d6e82={'score':0x0};for(const _0x3a0e83 of Array(0xc)){_0x3d6e82[_0x2d8dcc(0x1a4)]+=0xa,await Helper[_0x2d8dcc(0x1c0)](0x2328,this[_0x2d8dcc(0x1c1)],_0x2d8dcc(0x1d9)+_0x3d6e82[_0x2d8dcc(0x1a4)],this);const _0x5b325a=await this[_0x2d8dcc(0x1d6)](_0x2d8dcc(0x1c3),'POST',undefined,_0x3d6e82);await Helper[_0x2d8dcc(0x1c0)](0x1f4,this[_0x2d8dcc(0x1c1)],'Stack\x20Game\x20'+_0x5b325a[_0x2d8dcc(0x1da)]+_0x2d8dcc(0x1ad)+_0x3d6e82[_0x2d8dcc(0x1a4)],this);}_0x3d6e82[_0x2d8dcc(0x1a4)]+=0x1;const _0x142ecb=await this[_0x2d8dcc(0x1d6)](_0x2d8dcc(0x1e6),_0x2d8dcc(0x1cd),undefined,_0x3d6e82);await Helper['delay'](0x1388,this['account'],_0x2d8dcc(0x1d3)+_0x142ecb['earn']+_0x2d8dcc(0x1d5)+_0x142ecb['xp_earned']+_0x2d8dcc(0x1c9),this),await this['login']();}else await Helper[_0x2d8dcc(0x1c0)](0x7d0,this[_0x2d8dcc(0x1c1)],_0x2d8dcc(0x1ac)+_0x4e28a6[_0x2d8dcc(0x1e4)],this);}catch(_0x599d14){throw _0x599d14;}}}