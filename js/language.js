//对于语言切换功能，目前了解到vue中有i18n可以转换，此时不会，强行转换！
//或者写多个HTMl相互跳转
//其实除了暴力打表的方式，我也想到了更简单的。就是把一个部分的更替文字放在一个数组里，通过循环赋值。但我手头没有这类文件！
//语言切换按钮 0简 1繁 2en
let lan = document.querySelectorAll('.language>a');
let lanSma = document.querySelectorAll('.languageSmall>a');
// 改变语言函数
let wing_news_nav_m_head = document.querySelectorAll('.wing_news_nav_m>li>a');//导航栏头部
let wing_news_nav_m_content = document.querySelectorAll('.wing_news_nav_m>li>ul>li>a');//导航栏下拉菜单
let wing_nav_fitSmall = document.querySelectorAll('.wing_nav_fitSmall>ul a');//小屏幕导航栏
let wing_news_text_h2 = document.querySelector('.wing_news_text h2');//banner大标题
let wing_news_text_h5 = document.querySelector('.wing_news_text h5');//banner内容
let wing_latestnews = document.querySelector('.wing_latestnews h4');//最新动态标题
let wing_latestnews_h3 = document.querySelectorAll('.wing_latestnews h3');//最新板块h3标题
let wing_latestnews_p = document.querySelectorAll('.wing_latestnews p');//最新板块p正文
let wing_company = document.querySelectorAll('.wing_company i');//公司板块文字
let wing_connect_container_nav_h2 = document.querySelectorAll('.wing_connect_container_nav h2');//连接板块的导航栏h2
let wing_connect_container_nav_p = document.querySelectorAll('.wing_connect_container_nav p');//连接板块的导航栏p
let wing_connect_container_fitSmall_h4 = document.querySelectorAll('.wing_connect_container_fitSmall h4');//适应小屏的连接板块导航栏h4
let wing_connect_container_fitSmall_p = document.querySelectorAll('.wing_connect_container_fitSmall p');//适应小屏的连接板块导航栏p
let wing_connect_container_content_h3 = document.querySelectorAll('.wing_connect_container_content h3');//连接板块内容标题h3
let wing_connect_container_content_p = document.querySelectorAll('.wing_connect_container_content p');//连接板块内容p
let wing_connectPlus_img_h4 = document.querySelectorAll('.wing_connectPlus_img h4');//连接plus板块图片部分标题
let wing_connectPlus_img_p = document.querySelectorAll('.wing_connectPlus_img p');//连接plus板块图片部分文字
let wing_connectPlus_text_h3 = document.querySelector('.wing_connectPlus_text h3');//连接plus板块文字标题
let wing_connectPlus_text_p = document.querySelector('.wing_connectPlus_text p');//连接plus板块文字
let wing_join_text_h2 = document.querySelector('.wing_join_text h2');//join板块大标题
let wing_join_text_h5 = document.querySelector('.wing_join_text h5');//join板块文字
let wing_join_top_h2 = document.querySelector('.wing_join_top h2');//join小屏适配下的h2
let wing_join_top_h5 = document.querySelector('.wing_join_top h5');//join小屏适配下的h5
let wing_footer_focus = document.querySelector('.wing_footer_focus dt');//footer板块首行
let wing_footer_second = document.querySelectorAll('.wing_footer_second>div>a');//footer标题部分
let wing_footer_second_content = document.querySelectorAll('.wing_footer_second ul a');//footer内容
//为什么监听函数会默认执行一次，比如设置lanSma[i].addEventListener('click', lan_change(i));，每次刷新页面会执行一次lan_change()
// function lan_change(target) {
//     //清空按钮样式
//     for (let i = 0; i < lan.length; i++) {
//         lan[i].classList.remove('language_active');
//         lanSma[i].classList.remove('language_active');
//     }
//     lan[target].classList.add('language_active');
//     lanSma[target].classList.add('language_active');
//     console.log('1');
// }
//初始化
for (let i = 0; i < lan.length; i++) {
    lan[i].classList.remove('language_active');
    lanSma[i].classList.remove('language_active');
}
lan[0].classList.add('language_active');
lanSma[0].classList.add('language_active');
//监听
for (let i = 0; i < lan.length; i++) {
    lan[i].addEventListener('click', function () {
        lan_record = i;
        for (let i = 0; i < lan.length; i++) {
            lan[i].classList.remove('language_active');
            lanSma[i].classList.remove('language_active');
        }
        lan[i].classList.add('language_active');
        lanSma[i].classList.add('language_active');
        if (i == 0) {//简体
            for (let j = 0; j < wing_news_nav_m_head.length; j++) {
                switch (j) {
                    case 0:
                        wing_news_nav_m_head[j].innerHTML = '简介';
                        wing_nav_fitSmall[j].innerHTML = '简介';
                        break;
                    case 1:
                        wing_news_nav_m_head[j].innerHTML = '业务';
                        wing_nav_fitSmall[j].innerHTML = '业务';
                        break;
                    case 2:
                        wing_news_nav_m_head[j].innerHTML = '员工';
                        wing_nav_fitSmall[j].innerHTML = '员工';
                        break;
                    case 3:
                        wing_news_nav_m_head[j].innerHTML = 'ESG';
                        wing_nav_fitSmall[j].innerHTML = 'ESG';
                        break;
                    case 4:
                        wing_news_nav_m_head[j].innerHTML = '投资者';
                        wing_nav_fitSmall[j].innerHTML = '投资者';
                        break;
                    case 5:
                        wing_news_nav_m_head[j].innerHTML = '媒体';
                        wing_nav_fitSmall[j].innerHTML = '媒体';
                        break;
                }
            }
            for (let j = 0; j < wing_news_nav_m_content.length; j++) {
                switch (j) {
                    case 0:
                        wing_news_nav_m_content[j].innerHTML = '公司简介';
                        break;
                    case 1:
                        wing_news_nav_m_content[j].innerHTML = '愿景及使命';
                        break;
                    case 2:
                        wing_news_nav_m_content[j].innerHTML = '发展历程';
                        break;
                    case 3:
                        wing_news_nav_m_content[j].innerHTML = '业务架构';
                        break;
                    case 4:
                        wing_news_nav_m_content[j].innerHTML = '管理团队';
                        break;
                    case 5:
                        wing_news_nav_m_content[j].innerHTML = '董事会成员';
                        break;
                    case 6:
                        wing_news_nav_m_content[j].innerHTML = '企业文化';
                        break;
                    case 7:
                        wing_news_nav_m_content[j].innerHTML = '办公地点';
                        break;
                    case 8:
                        wing_news_nav_m_content[j].innerHTML = '面向用户';
                        break;
                    case 9:
                        wing_news_nav_m_content[j].innerHTML = '面向企业';
                        break;
                    case 10:
                        wing_news_nav_m_content[j].innerHTML = '创新科技';
                        break;
                    case 11:
                        wing_news_nav_m_content[j].innerHTML = '人才发展';
                        break;
                    case 12:
                        wing_news_nav_m_content[j].innerHTML = '腾讯学堂';
                        break;
                    case 13:
                        wing_news_nav_m_content[j].innerHTML = '工作环境';
                        break;
                    case 14:
                        wing_news_nav_m_content[j].innerHTML = '员工活动';
                        break;
                    case 15:
                        wing_news_nav_m_content[j].innerHTML = '环境';
                        break;
                    case 16:
                        wing_news_nav_m_content[j].innerHTML = '社会';
                        break;
                    case 17:
                        wing_news_nav_m_content[j].innerHTML = '治理';
                        break;
                    case 18:
                        wing_news_nav_m_content[j].innerHTML = 'ESG评级';
                        break;
                    case 19:
                        wing_news_nav_m_content[j].innerHTML = '报告';
                        break;
                    case 20:
                        wing_news_nav_m_content[j].innerHTML = '季度业绩及投资者新闻';
                        break;
                    case 21:
                        wing_news_nav_m_content[j].innerHTML = '公告及财务报告';
                        break;
                    case 22:
                        wing_news_nav_m_content[j].innerHTML = '业绩电话会及投资者日历';
                        break;
                    case 23:
                        wing_news_nav_m_content[j].innerHTML = '投资者工具包';
                        break;
                    case 24:
                        wing_news_nav_m_content[j].innerHTML = '证券及债券信息';
                        break;
                    case 25:
                        wing_news_nav_m_content[j].innerHTML = '环境、社会及管治';
                        break;
                    case 26:
                        wing_news_nav_m_content[j].innerHTML = '股东资讯';
                        break;
                    case 27:
                        wing_news_nav_m_content[j].innerHTML = '企业动态';
                        break;
                    case 28:
                        wing_news_nav_m_content[j].innerHTML = '财务新闻';
                        break;
                    case 29:
                        wing_news_nav_m_content[j].innerHTML = '腾讯视角';
                        break;
                    case 30:
                        wing_news_nav_m_content[j].innerHTML = '媒体资料库';
                        break;
                }
            }
            switch (new_current) {
                case 0:
                    wing_news_text_h2.innerHTML = '腾讯公布二零二三年全年及第四季业绩';
                    wing_news_text_h5.innerHTML = '';
                case 1:
                    wing_news_text_h2.innerHTML = '三步打造世界级数字经济中心';
                    wing_news_text_h5.innerHTML = '多元化、数字化产业是驱动经济增长的重要引擎。';
                case 2:
                    wing_news_text_h2.innerHTML = '2024年十大科技和应用趋势';
                    wing_news_text_h5.innerHTML = '腾讯研究院邀请科学家、工程师、学者和其他专家对2024年科技发展趋势作出预测。';
            }
            wing_latestnews.innerHTML = "最新动态";
            for (let j = 0; j < wing_latestnews_h3.length; j++) {
                switch (j) {
                    case 0:
                        wing_latestnews_h3[j].innerHTML = '#腾讯科技录：照护长者，保护鸟类，减少碳排，增强视频会议效果';
                        wing_latestnews_p[j].innerHTML = "在“腾讯科技录”第三期中,我们重点关注7个创新项目,涉及照护老人、保护野生动物和环境等领域。";
                        break;
                    case 1:
                        wing_latestnews_h3[j].innerHTML = '货币流动方式的转变：全球跨境汇款创新';
                        wing_latestnews_p[j].innerHTML = "跨境汇款行业正在经历一场重大变革，为人们提供了传统银行系统以外的其他选择。";
                        break;
                    case 2:
                        wing_latestnews_h3[j].innerHTML = '机器人如何照护失能老人';
                        wing_latestnews_p[j].innerHTML = "腾讯银发科技实验室希望能够利用科技提高老年人养护水平。";
                        break;
                    case 3:
                        wing_latestnews_h3[j].innerHTML = '腾讯女性人员谈职业与生活';
                        wing_latestnews_p[j].innerHTML = "时值2024年国际妇女节,我们采访了来自美国、荷兰、韩国和新加坡的四位员工,她们畅所欲言在腾讯的生活。";
                        break;
                    case 4:
                        wing_latestnews_h3[j].innerHTML = '小小银龄卡守护独居老人生活';
                        wing_latestnews_p[j].innerHTML = "腾讯SSV银发科技实验室致力于帮助老年人过上更健康和更长寿的生活。";
                        break;
                    case 5:
                        wing_latestnews_h3[j].innerHTML = '微信刷掌支付: 轻松挥手完成支付';
                        wing_latestnews_p[j].innerHTML = "微信推出了开创性的刷掌支付系统，大大提高了日常生活的便利性和安全性。";
                        break;
                    case 6:
                        wing_latestnews_h3[j].innerHTML = '街边小店和小修小补入驻数字地图';
                        wing_latestnews_p[j].innerHTML = "曾经无处不在的便民商铺和小修小补店正慢慢从中国的城市生活中“消失”。";
                        break;
                }
            }
            for (let j = 0; j < wing_company.length; j++) {
                switch (j) {
                    case 0:
                        wing_company[j].innerHTML = '公司简介';
                        break;
                    case 1:
                        wing_company[j].innerHTML = '企业文化';
                        break;
                    case 2:
                        wing_company[j].innerHTML = '办公地点';
                        break;
                }
            }
            for (let j = 0; j < wing_connect_container_nav_h2.length; j++) {
                wing_connect_container_nav_h2[j].style.fontSize = '32px';
                wing_connect_container_nav_p[j].style.fontSize = '16px';
                switch (j) {
                    case 0:
                        wing_connect_container_nav_h2[j].innerHTML = '连接用户与生活';
                        wing_connect_container_nav_p[j].innerHTML = '让生活更便捷更多彩';
                        wing_connect_container_fitSmall_h4[j].innerHTML = '连接用户与生活';
                        wing_connect_container_fitSmall_p[j].innerHTML = '让生活更便捷更多彩';
                        break;
                    case 1:
                        wing_connect_container_nav_h2[j].innerHTML = '连接企业与科技';
                        wing_connect_container_nav_p[j].innerHTML = '数字化助手，助力产业升级';
                        wing_connect_container_fitSmall_h4[j].innerHTML = '连接企业与科技';
                        wing_connect_container_fitSmall_p[j].innerHTML = '数字化助手，助力产业升级';
                        break;
                    case 2:
                        wing_connect_container_nav_h2[j].innerHTML = '连接现在和未来';
                        wing_connect_container_nav_p[j].innerHTML = '探索面向未来的创新科技';
                        wing_connect_container_fitSmall_h4[j].innerHTML = '连接现在和未来';
                        wing_connect_container_fitSmall_p[j].innerHTML = '探索面向未来的创新科技';
                        break;
                }
            }
            for (let j = 0; j < wing_connect_container_content_h3.length; j++) {
                switch (j) {
                    case 0:
                        wing_connect_container_content_h3[j].innerHTML = '通信与社交';
                        wing_connect_container_content_p[j].innerHTML = '连接人与人，提供功能丰富的即时通信和社交平台，让沟通更便捷。';
                        break;
                    case 1:
                        wing_connect_container_content_h3[j].innerHTML = '数字内容';
                        wing_connect_container_content_p[j].innerHTML = '基于优质内容，以技术为驱动引擎，探索社交和内容融合的下一代形态。';
                        break;
                    case 2:
                        wing_connect_container_content_h3[j].innerHTML = '金融科技服务';
                        wing_connect_container_content_p[j].innerHTML = '连接用户、商户和金融机构，提供安全、专业、便捷的金融产品与服务。';
                        break;
                    case 3:
                        wing_connect_container_content_h3[j].innerHTML = '工具';
                        wing_connect_container_content_p[j].innerHTML = '提供多种工具性软件，帮助用户快速直接解决各项具体需求。';
                        break;
                    case 4:
                        wing_connect_container_content_h3[j].innerHTML = '腾讯广告营销';
                        wing_connect_container_content_p[j].innerHTML = '大数据营销平台，汇聚腾讯全量应用场景，提供一体化数字化营销方案。';
                        break;
                    case 5:
                        wing_connect_container_content_h3[j].innerHTML = '腾讯云';
                        wing_connect_container_content_p[j].innerHTML = '提供领先的云产品与云服务，辅助企业走向数字化和全球化。';
                        break;
                    case 6:
                        wing_connect_container_content_h3[j].innerHTML = '智慧产业';
                        wing_connect_container_content_p[j].innerHTML = '通过云、AI、大数据分析、安全、支付、小程序、LBS等互联网前沿技术和产品，<br>打造智慧产业方案，助力产业数字化升级。';
                        break;
                    case 7:
                        wing_connect_container_content_h3[j].innerHTML = '人工智能';
                        wing_connect_container_content_p[j].innerHTML = '运用多种技术资产，提升人工智能实力，惠及人类和世界。';
                        break;
                    case 8:
                        wing_connect_container_content_h3[j].innerHTML = '物联网';
                        wing_connect_container_content_p[j].innerHTML = '通过腾讯云物联网，致力提供IoT全栈产品和解决方案。';
                        break;
                    case 9:
                        wing_connect_container_content_h3[j].innerHTML = '多媒体';
                        wing_connect_container_content_p[j].innerHTML = '腾讯多媒体实验室专注音视频通信技术的前瞻性研究。';
                        break;
                    case 10:
                        wing_connect_container_content_h3[j].innerHTML = '腾讯探索';
                        wing_connect_container_content_p[j].innerHTML = '携手合作伙伴探索未来和相关技术，帮助解决全球在食物、能源和水源方面的挑战。';
                        break;
                }
            }
            for (let j = 0; j < wing_connectPlus_img_h4.length; j++) {
                switch (j) {
                    case 0:
                        wing_connectPlus_img_h4[j].innerHTML = '99公益日 ';
                        wing_connectPlus_img_p[j].innerHTML = '每年一度于9月举行的全民公益活动，透过网上平台将大众在活动期间网上作出的捐款进行匹配。';
                        break;
                    case 1:
                        wing_connectPlus_img_h4[j].innerHTML = '腾讯长城保护项目';
                        wing_connectPlus_img_p[j].innerHTML = '腾讯公益慈善基金会与中国文物保护基金会共同合作，吸引公众关注和参与长城保护的文化遗产类公益项目。';
                        break;
                    case 2:
                        wing_connectPlus_img_h4[j].innerHTML = '腾讯为村';
                        wing_connectPlus_img_p[j].innerHTML = '根据乡村使用场景定制微信公众号，形成由村、乡镇、区县、州市组成的公众号集群服务村民，打造手机上的“为村服务中心”。';
                        break;
                }
            }
            wing_connectPlus_text_h3.innerHTML = '连接<br>责任与信任';
            wing_connectPlus_text_p.innerHTML = '聚合微小善行，以科技让世界更美好';
            wing_join_text_h2.innerHTML = '连接<br>人才与发展';
            wing_join_text_h5.innerHTML = '激发活力，助力成长';
            wing_join_top_h2.innerHTML = '连接<br>人才与发展';
            wing_join_top_h5.innerHTML = '激发活力，助力成长';
            wing_footer_focus.innerHTML = '关注我们';
            for (let j = 0; j < wing_footer_second.length; j++) {
                switch (j) {
                    case 0:
                        wing_footer_second[j].innerHTML = '加入我们';
                        break;
                    case 1:
                        wing_footer_second[j].innerHTML = '联系我们';
                        break;
                    case 2:
                        wing_footer_second[j].innerHTML = '法律信息';
                        break;
                }
            }
            for (let j = 0; j < wing_footer_second_content.length; j++) {
                switch (j) {
                    case 0:
                        wing_footer_second_content[j].innerHTML = '社会招聘';
                        break;
                    case 1:
                        wing_footer_second_content[j].innerHTML = '校园招聘';
                        break;
                    case 2:
                        wing_footer_second_content[j].innerHTML = '国际招聘';
                        break;
                    case 3:
                        wing_footer_second_content[j].innerHTML = '客户服务';
                        break;
                    case 4:
                        wing_footer_second_content[j].innerHTML = '合作洽谈';
                        break;
                    case 5:
                        wing_footer_second_content[j].innerHTML = '腾讯采购';
                        break;
                    case 6:
                        wing_footer_second_content[j].innerHTML = '诚信合规';
                        break;
                    case 7:
                        wing_footer_second_content[j].innerHTML = '媒体及投资者';
                        break;
                    case 8:
                        wing_footer_second_content[j].innerHTML = '服务协议';
                        break;
                    case 9:
                        wing_footer_second_content[j].innerHTML = '隐私政策';
                        break;
                    case 10:
                        wing_footer_second_content[j].innerHTML = '知识产权';
                        break;
                }
            }
        }
        if (i == 1) {//EN
            for (let j = 0; j < wing_news_nav_m_head.length; j++) {
                switch (j) {
                    case 0:
                        wing_news_nav_m_head[j].innerHTML = 'About';
                        wing_nav_fitSmall[j].innerHTML = 'About';
                        break;
                    case 1:
                        wing_news_nav_m_head[j].innerHTML = 'Business';
                        wing_nav_fitSmall[j].innerHTML = 'Business';
                        break;
                    case 2:
                        wing_news_nav_m_head[j].innerHTML = 'Employees';
                        wing_nav_fitSmall[j].innerHTML = 'Employees';
                        break;
                    case 3:
                        wing_news_nav_m_head[j].innerHTML = 'ESG';
                        wing_nav_fitSmall[j].innerHTML = 'ESG';
                        break;
                    case 4:
                        wing_news_nav_m_head[j].innerHTML = 'Investors';
                        wing_nav_fitSmall[j].innerHTML = 'Investors';
                        break;
                    case 5:
                        wing_news_nav_m_head[j].innerHTML = 'Media';
                        wing_nav_fitSmall[j].innerHTML = 'Media';
                        break;
                }
            }
            for (let j = 0; j < wing_news_nav_m_content.length; j++) {
                switch (j) {
                    case 0:
                        wing_news_nav_m_content[j].innerHTML = 'About Us';
                        break;
                    case 1:
                        wing_news_nav_m_content[j].innerHTML = 'Vision & Mission';
                        break;
                    case 2:
                        wing_news_nav_m_content[j].innerHTML = 'Milestones';
                        break;
                    case 3:
                        wing_news_nav_m_content[j].innerHTML = 'Company Structure';
                        break;
                    case 4:
                        wing_news_nav_m_content[j].innerHTML = 'Management Team';
                        break;
                    case 5:
                        wing_news_nav_m_content[j].innerHTML = 'Board Members';
                        break;
                    case 6:
                        wing_news_nav_m_content[j].innerHTML = 'Our Culture';
                        break;
                    case 7:
                        wing_news_nav_m_content[j].innerHTML = 'Our Offices';
                        break;
                    case 8:
                        wing_news_nav_m_content[j].innerHTML = 'Consumers';
                        break;
                    case 9:
                        wing_news_nav_m_content[j].innerHTML = 'Enterprises';
                        break;
                    case 10:
                        wing_news_nav_m_content[j].innerHTML = 'Innovation';
                        break;
                    case 11:
                        wing_news_nav_m_content[j].innerHTML = 'Talent Development';
                        break;
                    case 12:
                        wing_news_nav_m_content[j].innerHTML = 'Tencent Academy';
                        break;
                    case 13:
                        wing_news_nav_m_content[j].innerHTML = 'Work Environment';
                        break;
                    case 14:
                        wing_news_nav_m_content[j].innerHTML = 'Employee Activities';
                        break;
                    case 15:
                        wing_news_nav_m_content[j].innerHTML = 'Environment';
                        break;
                    case 16:
                        wing_news_nav_m_content[j].innerHTML = 'Social';
                        break;
                    case 17:
                        wing_news_nav_m_content[j].innerHTML = 'Governance';
                        break;
                    case 18:
                        wing_news_nav_m_content[j].innerHTML = 'ESG Rating';
                        break;
                    case 19:
                        wing_news_nav_m_content[j].innerHTML = 'Reports';
                        break;
                    case 20:
                        wing_news_nav_m_content[j].innerHTML = 'Quarterly Results & Investor News';
                        break;
                    case 21:
                        wing_news_nav_m_content[j].innerHTML = 'Announcement & Financial Reports';
                        break;
                    case 22:
                        wing_news_nav_m_content[j].innerHTML = 'Conference Calls & Investor Calendar';
                        break;
                    case 23:
                        wing_news_nav_m_content[j].innerHTML = 'Investor Kit';
                        break;
                    case 24:
                        wing_news_nav_m_content[j].innerHTML = 'Equity & Bond Information';
                        break;
                    case 25:
                        wing_news_nav_m_content[j].innerHTML = 'Environment,Social and Governance';
                        break;
                    case 26:
                        wing_news_nav_m_content[j].innerHTML = 'Shareholder Information';
                        break;
                    case 27:
                        wing_news_nav_m_content[j].innerHTML = 'Corporate News';
                        break;
                    case 28:
                        wing_news_nav_m_content[j].innerHTML = 'Financial Releases';
                        break;
                    case 29:
                        wing_news_nav_m_content[j].innerHTML = 'Tencent Perspectives';
                        break;
                    case 30:
                        wing_news_nav_m_content[j].innerHTML = 'Media Library';
                        break;
                }
            }
            switch (new_current) {
                case 0:
                    wing_news_text_h2.innerHTML = 'Tencent Announces 2023 Annual and Fourth Quarter Results';
                    wing_news_text_h5.innerHTML = '';
                case 1:
                    wing_news_text_h2.innerHTML = 'Three Steps to a World-Class Digital Economic Hub';
                    wing_news_text_h5.innerHTML = 'Diversified, digital-forward industries are key drivers for economic growth. ';
                case 2:
                    wing_news_text_h2.innerHTML = 'The Top 10 Technology Trends in 2024';
                    wing_news_text_h5.innerHTML = 'Tencent Research Institute has consulted with leading scientists and other experts to compile our annual list of top tech trends. ';
            }
            wing_latestnews.innerHTML = "What's New";
            for (let j = 0; j < wing_latestnews_h3.length; j++) {
                switch (j) {
                    case 0:
                        wing_latestnews_h3[j].innerHTML = '#TencentInnovates to Support Senior Citizens, Keep Birds from Crashing, Reduce Carbon, and Enhance Video Calls';
                        wing_latestnews_p[j].innerHTML = "We're constantly working to creatively apply our tech know-how to make life, work, and society better.";
                        break;
                    case 1:
                        wing_latestnews_h3[j].innerHTML = 'How Money Moves Is Changing: Innovations in Global Remittance';
                        wing_latestnews_p[j].innerHTML = "With the advent of new technology-driven channels, the remittance industry has undergone significant transformation.";
                        break;
                    case 2:
                        wing_latestnews_h3[j].innerHTML = 'How Robots Are Helping to Care for the Elderly and DisabledHow Robots Are Helping to Care for the Elderly and Disabled';
                        wing_latestnews_p[j].innerHTML = "Enter Tencent’s Elderly Care Technology Lab, dedicated to advancing elderly care.";
                        break;
                    case 3:
                        wing_latestnews_h3[j].innerHTML = 'Insights on Career and Life From the Women at Tencent';
                        wing_latestnews_p[j].innerHTML = "This International Women’s Day 2024, we chat with four amazing women from Tencent's international offices.";
                        break;
                    case 4:
                        wing_latestnews_h3[j].innerHTML = 'With Wearable Tech, the Elderly Get a Tool for Independence';
                        wing_latestnews_p[j].innerHTML = "At Tencent SSV Elderly Care Technology Laboratory, we're committed to helping seniors live healthier lives for longer.";
                        break;
                    case 5:
                        wing_latestnews_h3[j].innerHTML = 'Weixin’s Palm Scan Payments Is Like Waving at a Friend';
                        wing_latestnews_p[j].innerHTML = "The introduction of Weixin’s pioneering Palm Scan Payments system offers incredible convenience and security to daily life.";
                        break;
                    case 6:
                        wing_latestnews_h3[j].innerHTML = 'Corner shops and small repairs are added to the digital map';
                        wing_latestnews_p[j].innerHTML = "The once-ubiquitous convenience shops and tinkering shops are slowly disappearing from urban life in China.";
                        break;
                }
            }
            for (let j = 0; j < wing_company.length; j++) {
                switch (j) {
                    case 0:
                        wing_company[j].innerHTML = 'About Us';
                        break;
                    case 1:
                        wing_company[j].innerHTML = 'Our Culture';
                        break;
                    case 2:
                        wing_company[j].innerHTML = 'Our Offices';
                        break;
                }
            }
            for (let j = 0; j < wing_connect_container_nav_h2.length; j++) {
                wing_connect_container_nav_h2[j].style.fontSize = '24px';
                wing_connect_container_nav_p[j].style.fontSize = '14px';
                switch (j) {
                    case 0:
                        wing_connect_container_nav_h2[j].innerHTML = 'Connecting users in everyday life';
                        wing_connect_container_nav_p[j].innerHTML = 'Connecting people to make life more fun';
                        wing_connect_container_fitSmall_h4[j].innerHTML = 'Connecting users in everyday life';
                        wing_connect_container_fitSmall_p[j].innerHTML = 'Connecting people to make life more fun';
                        break;
                    case 1:
                        wing_connect_container_nav_h2[j].innerHTML = 'Connecting enterprises to digital upgrade';
                        wing_connect_container_nav_p[j].innerHTML = 'Acting as a digital assistant to facilitate the digital upgrade of industries';
                        wing_connect_container_fitSmall_h4[j].innerHTML = 'Connecting enterprises to digital upgrade';
                        wing_connect_container_fitSmall_p[j].innerHTML = 'Acting as a digital assistant to facilitate the digital upgrade of industries';
                        break;
                    case 2:
                        wing_connect_container_nav_h2[j].innerHTML = 'Connecting the now and the future';
                        wing_connect_container_nav_p[j].innerHTML = 'Pioneering technological innovations to bring the future to the present';
                        wing_connect_container_fitSmall_h4[j].innerHTML = 'Connecting the now and the future';
                        wing_connect_container_fitSmall_p[j].innerHTML = 'Pioneering technological innovations to bring the future to the present';
                        break;
                }
            }
            for (let j = 0; j < wing_connect_container_content_h3.length; j++) {
                switch (j) {
                    case 0:
                        wing_connect_container_content_h3[j].innerHTML = 'Communications and Social';
                        wing_connect_container_content_p[j].innerHTML = 'Offering a comprehensive suite of communications and social services that connect people to make communication easy and intuitive.';
                        break;
                    case 1:
                        wing_connect_container_content_h3[j].innerHTML = 'Digital Content';
                        wing_connect_container_content_p[j].innerHTML = 'Delivering high-quality content through industry-leading technologies, to shape our next-generation social and content offering.';
                        break;
                    case 2:
                        wing_connect_container_content_h3[j].innerHTML = 'FinTech Services';
                        wing_connect_container_content_p[j].innerHTML = 'Connecting users to merchants via fast and secure payment service, and to financial institutions via innovative consumer finance products.';
                        break;
                    case 3:
                        wing_connect_container_content_h3[j].innerHTML = 'Tools';
                        wing_connect_container_content_p[j].innerHTML = 'Developing a range of powerful software tools to meet the evolving needs of users.';
                        break;
                    case 4:
                        wing_connect_container_content_h3[j].innerHTML = 'Tencent Marketing Solution';
                        wing_connect_container_content_p[j].innerHTML = 'A leading big data marketing platform.';
                        break;
                    case 5:
                        wing_connect_container_content_h3[j].innerHTML = 'Tencent Cloud';
                        wing_connect_container_content_p[j].innerHTML = 'Building industry-leading cloud-based products and services to support enterprises to go digital and go global.';
                        break;
                    case 6:
                        wing_connect_container_content_h3[j].innerHTML = 'Smart Industries';
                        wing_connect_container_content_p[j].innerHTML = 'Leveraging cutting-edge Internet technologies and products, including cloud, AI, big data analytics, security, payments, Mini Programs, location-based services and more, to assist industries to digital upgrade with our smart industry solutions.';
                        break;
                    case 7:
                        wing_connect_container_content_h3[j].innerHTML = 'Artificial Intelligence';
                        wing_connect_container_content_p[j].innerHTML = 'Enhancing the research and application of artificial intelligence to benefit mankind.';
                        break;
                    case 8:
                        wing_connect_container_content_h3[j].innerHTML = 'Internet of Things';
                        wing_connect_container_content_p[j].innerHTML = 'Providing a full-stack of IoT products and solutions across a broad range of devices and applications.';
                        break;
                    case 9:
                        wing_connect_container_content_h3[j].innerHTML = 'Tencent Media Lab';
                        wing_connect_container_content_p[j].innerHTML = 'Focus on audio and video communications technologies.';
                        break;
                    case 10:
                        wing_connect_container_content_h3[j].innerHTML = 'Tencent Exploration';
                        wing_connect_container_content_p[j].innerHTML = 'Collaborating with partners to explore new frontiers and develop technologies.';
                        break;
                }
            }
            for (let j = 0; j < wing_connectPlus_img_h4.length; j++) {
                switch (j) {
                    case 0:
                        wing_connectPlus_img_h4[j].innerHTML = '99 Giving Day ';
                        wing_connectPlus_img_p[j].innerHTML = 'Organizing an online donation event in September every year to promote community contribution to meaningful causes.';
                        break;
                    case 1:
                        wing_connectPlus_img_h4[j].innerHTML = 'Tencent Great Wall Protection Project';
                        wing_connectPlus_img_p[j].innerHTML = 'Collaborating with the China Foundation for Cultural Heritage Conservation to promote public awareness and protect cultural heritage sites.';
                        break;
                    case 2:
                        wing_connectPlus_img_h4[j].innerHTML = 'WeCounty';
                        wing_connectPlus_img_p[j].innerHTML = 'Accelerating rural development through Weixin Official Accounts that helps rural communities tap into the possibilities of digital economy.';
                        break;
                }
            }
            wing_connectPlus_text_h3.innerHTML = 'Connecting<br>responsibility with trust';
            wing_connectPlus_text_p.innerHTML = 'Using technology to make every good deed more impactful';
            wing_join_text_h2.innerHTML = 'Connecting <br> talent with <br> development';
            wing_join_text_h5.innerHTML = 'Stimulating vitality,  <br> supporting growth';
            wing_join_top_h2.innerHTML = 'Connecting <br> talent with <br> development';
            wing_join_top_h5.innerHTML = 'Stimulating vitality,  <br> supporting growth';
            wing_footer_focus.innerHTML = 'Follow Us';
            for (let j = 0; j < wing_footer_second.length; j++) {
                switch (j) {
                    case 0:
                        wing_footer_second[j].innerHTML = 'Join Us';
                        break;
                    case 1:
                        wing_footer_second[j].innerHTML = 'Contact Us';
                        break;
                    case 2:
                        wing_footer_second[j].innerHTML = 'Legal Information';
                        break;
                }
            }
            for (let j = 0; j < wing_footer_second_content.length; j++) {
                switch (j) {
                    case 0:
                        wing_footer_second_content[j].innerHTML = 'Tencent Careers';
                        break;
                    case 1:
                        wing_footer_second_content[j].innerHTML = 'Campus Recruitment';
                        break;
                    case 2:
                        wing_footer_second_content[j].innerHTML = 'Global Recruitment';
                        break;
                    case 3:
                        wing_footer_second_content[j].innerHTML = 'Customer Services';
                        break;
                    case 4:
                        wing_footer_second_content[j].innerHTML = 'Partnership';
                        break;
                    case 5:
                        wing_footer_second_content[j].innerHTML = 'Procurement';
                        break;
                    case 6:
                        wing_footer_second_content[j].innerHTML = 'Compliance';
                        break;
                    case 7:
                        wing_footer_second_content[j].innerHTML = 'Media & Investors';
                        break;
                    case 8:
                        wing_footer_second_content[j].innerHTML = 'Service Agreement';
                        break;
                    case 9:
                        wing_footer_second_content[j].innerHTML = 'Privacy Policy';
                        break;
                    case 10:
                        wing_footer_second_content[j].innerHTML = 'Interllectual Property Rights';
                        break;
                }
            }
        }
    });
    // lanSma[i].addEventListener('click', lan_change(i));
    lanSma[i].addEventListener('click', function () {
        lan_record = i;
        for (let i = 0; i < lan.length; i++) {
            lan[i].classList.remove('language_active');
            lanSma[i].classList.remove('language_active');
        }
        lan[i].classList.add('language_active');
        lanSma[i].classList.add('language_active');
        if (i == 0) {//简体
            for (let j = 0; j < wing_news_nav_m_head.length; j++) {
                switch (j) {
                    case 0:
                        wing_news_nav_m_head[j].innerHTML = '简介';
                        wing_nav_fitSmall[j].innerHTML = '简介';
                        break;
                    case 1:
                        wing_news_nav_m_head[j].innerHTML = '业务';
                        wing_nav_fitSmall[j].innerHTML = '业务';
                        break;
                    case 2:
                        wing_news_nav_m_head[j].innerHTML = '员工';
                        wing_nav_fitSmall[j].innerHTML = '员工';
                        break;
                    case 3:
                        wing_news_nav_m_head[j].innerHTML = 'ESG';
                        wing_nav_fitSmall[j].innerHTML = 'ESG';
                        break;
                    case 4:
                        wing_news_nav_m_head[j].innerHTML = '投资者';
                        wing_nav_fitSmall[j].innerHTML = '投资者';
                        break;
                    case 5:
                        wing_news_nav_m_head[j].innerHTML = '媒体';
                        wing_nav_fitSmall[j].innerHTML = '媒体';
                        break;
                }
            }
            for (let j = 0; j < wing_news_nav_m_content.length; j++) {
                switch (j) {
                    case 0:
                        wing_news_nav_m_content[j].innerHTML = '公司简介';
                        break;
                    case 1:
                        wing_news_nav_m_content[j].innerHTML = '愿景及使命';
                        break;
                    case 2:
                        wing_news_nav_m_content[j].innerHTML = '发展历程';
                        break;
                    case 3:
                        wing_news_nav_m_content[j].innerHTML = '业务架构';
                        break;
                    case 4:
                        wing_news_nav_m_content[j].innerHTML = '管理团队';
                        break;
                    case 5:
                        wing_news_nav_m_content[j].innerHTML = '董事会成员';
                        break;
                    case 6:
                        wing_news_nav_m_content[j].innerHTML = '企业文化';
                        break;
                    case 7:
                        wing_news_nav_m_content[j].innerHTML = '办公地点';
                        break;
                    case 8:
                        wing_news_nav_m_content[j].innerHTML = '面向用户';
                        break;
                    case 9:
                        wing_news_nav_m_content[j].innerHTML = '面向企业';
                        break;
                    case 10:
                        wing_news_nav_m_content[j].innerHTML = '创新科技';
                        break;
                    case 11:
                        wing_news_nav_m_content[j].innerHTML = '人才发展';
                        break;
                    case 12:
                        wing_news_nav_m_content[j].innerHTML = '腾讯学堂';
                        break;
                    case 13:
                        wing_news_nav_m_content[j].innerHTML = '工作环境';
                        break;
                    case 14:
                        wing_news_nav_m_content[j].innerHTML = '员工活动';
                        break;
                    case 15:
                        wing_news_nav_m_content[j].innerHTML = '环境';
                        break;
                    case 16:
                        wing_news_nav_m_content[j].innerHTML = '社会';
                        break;
                    case 17:
                        wing_news_nav_m_content[j].innerHTML = '治理';
                        break;
                    case 18:
                        wing_news_nav_m_content[j].innerHTML = 'ESG评级';
                        break;
                    case 19:
                        wing_news_nav_m_content[j].innerHTML = '报告';
                        break;
                    case 20:
                        wing_news_nav_m_content[j].innerHTML = '季度业绩及投资者新闻';
                        break;
                    case 21:
                        wing_news_nav_m_content[j].innerHTML = '公告及财务报告';
                        break;
                    case 22:
                        wing_news_nav_m_content[j].innerHTML = '业绩电话会及投资者日历';
                        break;
                    case 23:
                        wing_news_nav_m_content[j].innerHTML = '投资者工具包';
                        break;
                    case 24:
                        wing_news_nav_m_content[j].innerHTML = '证券及债券信息';
                        break;
                    case 25:
                        wing_news_nav_m_content[j].innerHTML = '环境、社会及管治';
                        break;
                    case 26:
                        wing_news_nav_m_content[j].innerHTML = '股东资讯';
                        break;
                    case 27:
                        wing_news_nav_m_content[j].innerHTML = '企业动态';
                        break;
                    case 28:
                        wing_news_nav_m_content[j].innerHTML = '财务新闻';
                        break;
                    case 29:
                        wing_news_nav_m_content[j].innerHTML = '腾讯视角';
                        break;
                    case 30:
                        wing_news_nav_m_content[j].innerHTML = '媒体资料库';
                        break;
                }
            }
            switch (new_current) {
                case 0:
                    wing_news_text_h2.innerHTML = '腾讯公布二零二三年全年及第四季业绩';
                    wing_news_text_h5.innerHTML = '';
                case 1:
                    wing_news_text_h2.innerHTML = '三步打造世界级数字经济中心';
                    wing_news_text_h5.innerHTML = '多元化、数字化产业是驱动经济增长的重要引擎。';
                case 2:
                    wing_news_text_h2.innerHTML = '2024年十大科技和应用趋势';
                    wing_news_text_h5.innerHTML = '腾讯研究院邀请科学家、工程师、学者和其他专家对2024年科技发展趋势作出预测。';
            }
            wing_latestnews.innerHTML = "最新动态";
            for (let j = 0; j < wing_latestnews_h3.length; j++) {
                switch (j) {
                    case 0:
                        wing_latestnews_h3[j].innerHTML = '#腾讯科技录：照护长者，保护鸟类，减少碳排，增强视频会议效果';
                        wing_latestnews_p[j].innerHTML = "在“腾讯科技录”第三期中,我们重点关注7个创新项目,涉及照护老人、保护野生动物和环境等领域。";
                        break;
                    case 1:
                        wing_latestnews_h3[j].innerHTML = '货币流动方式的转变：全球跨境汇款创新';
                        wing_latestnews_p[j].innerHTML = "跨境汇款行业正在经历一场重大变革，为人们提供了传统银行系统以外的其他选择。";
                        break;
                    case 2:
                        wing_latestnews_h3[j].innerHTML = '机器人如何照护失能老人';
                        wing_latestnews_p[j].innerHTML = "腾讯银发科技实验室希望能够利用科技提高老年人养护水平。";
                        break;
                    case 3:
                        wing_latestnews_h3[j].innerHTML = '腾讯女性人员谈职业与生活';
                        wing_latestnews_p[j].innerHTML = "时值2024年国际妇女节,我们采访了来自美国、荷兰、韩国和新加坡的四位员工,她们畅所欲言在腾讯的生活。";
                        break;
                    case 4:
                        wing_latestnews_h3[j].innerHTML = '小小银龄卡守护独居老人生活';
                        wing_latestnews_p[j].innerHTML = "腾讯SSV银发科技实验室致力于帮助老年人过上更健康和更长寿的生活。";
                        break;
                    case 5:
                        wing_latestnews_h3[j].innerHTML = '微信刷掌支付: 轻松挥手完成支付';
                        wing_latestnews_p[j].innerHTML = "微信推出了开创性的刷掌支付系统，大大提高了日常生活的便利性和安全性。";
                        break;
                    case 6:
                        wing_latestnews_h3[j].innerHTML = '街边小店和小修小补入驻数字地图';
                        wing_latestnews_p[j].innerHTML = "曾经无处不在的便民商铺和小修小补店正慢慢从中国的城市生活中“消失”。";
                        break;
                }
            }
            for (let j = 0; j < wing_company.length; j++) {
                switch (j) {
                    case 0:
                        wing_company[j].innerHTML = '公司简介';
                        break;
                    case 1:
                        wing_company[j].innerHTML = '企业文化';
                        break;
                    case 2:
                        wing_company[j].innerHTML = '办公地点';
                        break;
                }
            }
            for (let j = 0; j < wing_connect_container_nav_h2.length; j++) {
                wing_connect_container_nav_h2[j].style.fontSize = '32px';
                wing_connect_container_nav_p[j].style.fontSize = '16px';
                switch (j) {
                    case 0:
                        wing_connect_container_nav_h2[j].innerHTML = '连接用户与生活';
                        wing_connect_container_nav_p[j].innerHTML = '让生活更便捷更多彩';
                        wing_connect_container_fitSmall_h4[j].innerHTML = '连接用户与生活';
                        wing_connect_container_fitSmall_p[j].innerHTML = '让生活更便捷更多彩';
                        break;
                    case 1:
                        wing_connect_container_nav_h2[j].innerHTML = '连接企业与科技';
                        wing_connect_container_nav_p[j].innerHTML = '数字化助手，助力产业升级';
                        wing_connect_container_fitSmall_h4[j].innerHTML = '连接企业与科技';
                        wing_connect_container_fitSmall_p[j].innerHTML = '数字化助手，助力产业升级';
                        break;
                    case 2:
                        wing_connect_container_nav_h2[j].innerHTML = '连接现在和未来';
                        wing_connect_container_nav_p[j].innerHTML = '探索面向未来的创新科技';
                        wing_connect_container_fitSmall_h4[j].innerHTML = '连接现在和未来';
                        wing_connect_container_fitSmall_p[j].innerHTML = '探索面向未来的创新科技';
                        break;
                }
            }
            for (let j = 0; j < wing_connect_container_content_h3.length; j++) {
                switch (j) {
                    case 0:
                        wing_connect_container_content_h3[j].innerHTML = '通信与社交';
                        wing_connect_container_content_p[j].innerHTML = '连接人与人，提供功能丰富的即时通信和社交平台，让沟通更便捷。';
                        break;
                    case 1:
                        wing_connect_container_content_h3[j].innerHTML = '数字内容';
                        wing_connect_container_content_p[j].innerHTML = '基于优质内容，以技术为驱动引擎，探索社交和内容融合的下一代形态。';
                        break;
                    case 2:
                        wing_connect_container_content_h3[j].innerHTML = '金融科技服务';
                        wing_connect_container_content_p[j].innerHTML = '连接用户、商户和金融机构，提供安全、专业、便捷的金融产品与服务。';
                        break;
                    case 3:
                        wing_connect_container_content_h3[j].innerHTML = '工具';
                        wing_connect_container_content_p[j].innerHTML = '提供多种工具性软件，帮助用户快速直接解决各项具体需求。';
                        break;
                    case 4:
                        wing_connect_container_content_h3[j].innerHTML = '腾讯广告营销';
                        wing_connect_container_content_p[j].innerHTML = '大数据营销平台，汇聚腾讯全量应用场景，提供一体化数字化营销方案。';
                        break;
                    case 5:
                        wing_connect_container_content_h3[j].innerHTML = '腾讯云';
                        wing_connect_container_content_p[j].innerHTML = '提供领先的云产品与云服务，辅助企业走向数字化和全球化。';
                        break;
                    case 6:
                        wing_connect_container_content_h3[j].innerHTML = '智慧产业';
                        wing_connect_container_content_p[j].innerHTML = '通过云、AI、大数据分析、安全、支付、小程序、LBS等互联网前沿技术和产品，<br>打造智慧产业方案，助力产业数字化升级。';
                        break;
                    case 7:
                        wing_connect_container_content_h3[j].innerHTML = '人工智能';
                        wing_connect_container_content_p[j].innerHTML = '运用多种技术资产，提升人工智能实力，惠及人类和世界。';
                        break;
                    case 8:
                        wing_connect_container_content_h3[j].innerHTML = '物联网';
                        wing_connect_container_content_p[j].innerHTML = '通过腾讯云物联网，致力提供IoT全栈产品和解决方案。';
                        break;
                    case 9:
                        wing_connect_container_content_h3[j].innerHTML = '多媒体';
                        wing_connect_container_content_p[j].innerHTML = '腾讯多媒体实验室专注音视频通信技术的前瞻性研究。';
                        break;
                    case 10:
                        wing_connect_container_content_h3[j].innerHTML = '腾讯探索';
                        wing_connect_container_content_p[j].innerHTML = '携手合作伙伴探索未来和相关技术，帮助解决全球在食物、能源和水源方面的挑战。';
                        break;
                }
            }
            for (let j = 0; j < wing_connectPlus_img_h4.length; j++) {
                switch (j) {
                    case 0:
                        wing_connectPlus_img_h4[j].innerHTML = '99公益日 ';
                        wing_connectPlus_img_p[j].innerHTML = '每年一度于9月举行的全民公益活动，透过网上平台将大众在活动期间网上作出的捐款进行匹配。';
                        break;
                    case 1:
                        wing_connectPlus_img_h4[j].innerHTML = '腾讯长城保护项目';
                        wing_connectPlus_img_p[j].innerHTML = '腾讯公益慈善基金会与中国文物保护基金会共同合作，吸引公众关注和参与长城保护的文化遗产类公益项目。';
                        break;
                    case 2:
                        wing_connectPlus_img_h4[j].innerHTML = '腾讯为村';
                        wing_connectPlus_img_p[j].innerHTML = '根据乡村使用场景定制微信公众号，形成由村、乡镇、区县、州市组成的公众号集群服务村民，打造手机上的“为村服务中心”。';
                        break;
                }
            }
            wing_connectPlus_text_h3.innerHTML = '连接<br>责任与信任';
            wing_connectPlus_text_p.innerHTML = '聚合微小善行，以科技让世界更美好';
            wing_join_text_h2.innerHTML = '连接<br>人才与发展';
            wing_join_text_h5.innerHTML = '激发活力，助力成长';
            wing_join_top_h2.innerHTML = '连接<br>人才与发展';
            wing_join_top_h5.innerHTML = '激发活力，助力成长';
            wing_footer_focus.innerHTML = '关注我们';
            for (let j = 0; j < wing_footer_second.length; j++) {
                switch (j) {
                    case 0:
                        wing_footer_second[j].innerHTML = '加入我们';
                        break;
                    case 1:
                        wing_footer_second[j].innerHTML = '联系我们';
                        break;
                    case 2:
                        wing_footer_second[j].innerHTML = '法律信息';
                        break;
                }
            }
            for (let j = 0; j < wing_footer_second_content.length; j++) {
                switch (j) {
                    case 0:
                        wing_footer_second_content[j].innerHTML = '社会招聘';
                        break;
                    case 1:
                        wing_footer_second_content[j].innerHTML = '校园招聘';
                        break;
                    case 2:
                        wing_footer_second_content[j].innerHTML = '国际招聘';
                        break;
                    case 3:
                        wing_footer_second_content[j].innerHTML = '客户服务';
                        break;
                    case 4:
                        wing_footer_second_content[j].innerHTML = '合作洽谈';
                        break;
                    case 5:
                        wing_footer_second_content[j].innerHTML = '腾讯采购';
                        break;
                    case 6:
                        wing_footer_second_content[j].innerHTML = '诚信合规';
                        break;
                    case 7:
                        wing_footer_second_content[j].innerHTML = '媒体及投资者';
                        break;
                    case 8:
                        wing_footer_second_content[j].innerHTML = '服务协议';
                        break;
                    case 9:
                        wing_footer_second_content[j].innerHTML = '隐私政策';
                        break;
                    case 10:
                        wing_footer_second_content[j].innerHTML = '知识产权';
                        break;
                }
            }
        }
        if (i == 1) {//EN
            for (let j = 0; j < wing_news_nav_m_head.length; j++) {
                switch (j) {
                    case 0:
                        wing_news_nav_m_head[j].innerHTML = 'About';
                        wing_nav_fitSmall[j].innerHTML = 'About';
                        break;
                    case 1:
                        wing_news_nav_m_head[j].innerHTML = 'Business';
                        wing_nav_fitSmall[j].innerHTML = 'Business';
                        break;
                    case 2:
                        wing_news_nav_m_head[j].innerHTML = 'Employees';
                        wing_nav_fitSmall[j].innerHTML = 'Employees';
                        break;
                    case 3:
                        wing_news_nav_m_head[j].innerHTML = 'ESG';
                        wing_nav_fitSmall[j].innerHTML = 'ESG';
                        break;
                    case 4:
                        wing_news_nav_m_head[j].innerHTML = 'Investors';
                        wing_nav_fitSmall[j].innerHTML = 'Investors';
                        break;
                    case 5:
                        wing_news_nav_m_head[j].innerHTML = 'Media';
                        wing_nav_fitSmall[j].innerHTML = 'Media';
                        break;
                }
            }
            for (let j = 0; j < wing_news_nav_m_content.length; j++) {
                switch (j) {
                    case 0:
                        wing_news_nav_m_content[j].innerHTML = 'About Us';
                        break;
                    case 1:
                        wing_news_nav_m_content[j].innerHTML = 'Vision & Mission';
                        break;
                    case 2:
                        wing_news_nav_m_content[j].innerHTML = 'Milestones';
                        break;
                    case 3:
                        wing_news_nav_m_content[j].innerHTML = 'Company Structure';
                        break;
                    case 4:
                        wing_news_nav_m_content[j].innerHTML = 'Management Team';
                        break;
                    case 5:
                        wing_news_nav_m_content[j].innerHTML = 'Board Members';
                        break;
                    case 6:
                        wing_news_nav_m_content[j].innerHTML = 'Our Culture';
                        break;
                    case 7:
                        wing_news_nav_m_content[j].innerHTML = 'Our Offices';
                        break;
                    case 8:
                        wing_news_nav_m_content[j].innerHTML = 'Consumers';
                        break;
                    case 9:
                        wing_news_nav_m_content[j].innerHTML = 'Enterprises';
                        break;
                    case 10:
                        wing_news_nav_m_content[j].innerHTML = 'Innovation';
                        break;
                    case 11:
                        wing_news_nav_m_content[j].innerHTML = 'Talent Development';
                        break;
                    case 12:
                        wing_news_nav_m_content[j].innerHTML = 'Tencent Academy';
                        break;
                    case 13:
                        wing_news_nav_m_content[j].innerHTML = 'Work Environment';
                        break;
                    case 14:
                        wing_news_nav_m_content[j].innerHTML = 'Employee Activities';
                        break;
                    case 15:
                        wing_news_nav_m_content[j].innerHTML = 'Environment';
                        break;
                    case 16:
                        wing_news_nav_m_content[j].innerHTML = 'Social';
                        break;
                    case 17:
                        wing_news_nav_m_content[j].innerHTML = 'Governance';
                        break;
                    case 18:
                        wing_news_nav_m_content[j].innerHTML = 'ESG Rating';
                        break;
                    case 19:
                        wing_news_nav_m_content[j].innerHTML = 'Reports';
                        break;
                    case 20:
                        wing_news_nav_m_content[j].innerHTML = 'Quarterly Results & Investor News';
                        break;
                    case 21:
                        wing_news_nav_m_content[j].innerHTML = 'Announcement & Financial Reports';
                        break;
                    case 22:
                        wing_news_nav_m_content[j].innerHTML = 'Conference Calls & Investor Calendar';
                        break;
                    case 23:
                        wing_news_nav_m_content[j].innerHTML = 'Investor Kit';
                        break;
                    case 24:
                        wing_news_nav_m_content[j].innerHTML = 'Equity & Bond Information';
                        break;
                    case 25:
                        wing_news_nav_m_content[j].innerHTML = 'Environment,Social and Governance';
                        break;
                    case 26:
                        wing_news_nav_m_content[j].innerHTML = 'Shareholder Information';
                        break;
                    case 27:
                        wing_news_nav_m_content[j].innerHTML = 'Corporate News';
                        break;
                    case 28:
                        wing_news_nav_m_content[j].innerHTML = 'Financial Releases';
                        break;
                    case 29:
                        wing_news_nav_m_content[j].innerHTML = 'Tencent Perspectives';
                        break;
                    case 30:
                        wing_news_nav_m_content[j].innerHTML = 'Media Library';
                        break;
                }
            }
            switch (new_current) {
                case 0:
                    wing_news_text_h2.innerHTML = 'Tencent Announces 2023 Annual and Fourth Quarter Results';
                    wing_news_text_h5.innerHTML = '';
                case 1:
                    wing_news_text_h2.innerHTML = 'Three Steps to a World-Class Digital Economic Hub';
                    wing_news_text_h5.innerHTML = 'Diversified, digital-forward industries are key drivers for economic growth. ';
                case 2:
                    wing_news_text_h2.innerHTML = 'The Top 10 Technology Trends in 2024';
                    wing_news_text_h5.innerHTML = 'Tencent Research Institute has consulted with leading scientists and other experts to compile our annual list of top tech trends. ';
            }
            wing_latestnews.innerHTML = "What's New";
            for (let j = 0; j < wing_latestnews_h3.length; j++) {
                switch (j) {
                    case 0:
                        wing_latestnews_h3[j].innerHTML = '#TencentInnovates to Support Senior Citizens, Keep Birds from Crashing, Reduce Carbon, and Enhance Video Calls';
                        wing_latestnews_p[j].innerHTML = "We're constantly working to creatively apply our tech know-how to make life, work, and society better.";
                        break;
                    case 1:
                        wing_latestnews_h3[j].innerHTML = 'How Money Moves Is Changing: Innovations in Global Remittance';
                        wing_latestnews_p[j].innerHTML = "With the advent of new technology-driven channels, the remittance industry has undergone significant transformation.";
                        break;
                    case 2:
                        wing_latestnews_h3[j].innerHTML = 'How Robots Are Helping to Care for the Elderly and DisabledHow Robots Are Helping to Care for the Elderly and Disabled';
                        wing_latestnews_p[j].innerHTML = "Enter Tencent’s Elderly Care Technology Lab, dedicated to advancing elderly care.";
                        break;
                    case 3:
                        wing_latestnews_h3[j].innerHTML = 'Insights on Career and Life From the Women at Tencent';
                        wing_latestnews_p[j].innerHTML = "This International Women’s Day 2024, we chat with four amazing women from Tencent's international offices.";
                        break;
                    case 4:
                        wing_latestnews_h3[j].innerHTML = 'With Wearable Tech, the Elderly Get a Tool for Independence';
                        wing_latestnews_p[j].innerHTML = "At Tencent SSV Elderly Care Technology Laboratory, we're committed to helping seniors live healthier lives for longer.";
                        break;
                    case 5:
                        wing_latestnews_h3[j].innerHTML = 'Weixin’s Palm Scan Payments Is Like Waving at a Friend';
                        wing_latestnews_p[j].innerHTML = "The introduction of Weixin’s pioneering Palm Scan Payments system offers incredible convenience and security to daily life.";
                        break;
                    case 6:
                        wing_latestnews_h3[j].innerHTML = 'Corner shops and small repairs are added to the digital map';
                        wing_latestnews_p[j].innerHTML = "The once-ubiquitous convenience shops and tinkering shops are slowly disappearing from urban life in China.";
                        break;
                }
            }
            for (let j = 0; j < wing_company.length; j++) {
                switch (j) {
                    case 0:
                        wing_company[j].innerHTML = 'About Us';
                        break;
                    case 1:
                        wing_company[j].innerHTML = 'Our Culture';
                        break;
                    case 2:
                        wing_company[j].innerHTML = 'Our Offices';
                        break;
                }
            }
            for (let j = 0; j < wing_connect_container_nav_h2.length; j++) {
                wing_connect_container_nav_h2[j].style.fontSize = '24px';
                wing_connect_container_nav_p[j].style.fontSize = '14px';
                switch (j) {
                    case 0:
                        wing_connect_container_nav_h2[j].innerHTML = 'Connecting users in everyday life';
                        wing_connect_container_nav_p[j].innerHTML = 'Connecting people to make life more fun';
                        wing_connect_container_fitSmall_h4[j].innerHTML = 'Connecting users in everyday life';
                        wing_connect_container_fitSmall_p[j].innerHTML = 'Connecting people to make life more fun';
                        break;
                    case 1:
                        wing_connect_container_nav_h2[j].innerHTML = 'Connecting enterprises to digital upgrade';
                        wing_connect_container_nav_p[j].innerHTML = 'Acting as a digital assistant to facilitate the digital upgrade of industries';
                        wing_connect_container_fitSmall_h4[j].innerHTML = 'Connecting enterprises to digital upgrade';
                        wing_connect_container_fitSmall_p[j].innerHTML = 'Acting as a digital assistant to facilitate the digital upgrade of industries';
                        break;
                    case 2:
                        wing_connect_container_nav_h2[j].innerHTML = 'Connecting the now and the future';
                        wing_connect_container_nav_p[j].innerHTML = 'Pioneering technological innovations to bring the future to the present';
                        wing_connect_container_fitSmall_h4[j].innerHTML = 'Connecting the now and the future';
                        wing_connect_container_fitSmall_p[j].innerHTML = 'Pioneering technological innovations to bring the future to the present';
                        break;
                }
            }
            for (let j = 0; j < wing_connect_container_content_h3.length; j++) {
                switch (j) {
                    case 0:
                        wing_connect_container_content_h3[j].innerHTML = 'Communications and Social';
                        wing_connect_container_content_p[j].innerHTML = 'Offering a comprehensive suite of communications and social services that connect people to make communication easy and intuitive.';
                        break;
                    case 1:
                        wing_connect_container_content_h3[j].innerHTML = 'Digital Content';
                        wing_connect_container_content_p[j].innerHTML = 'Delivering high-quality content through industry-leading technologies, to shape our next-generation social and content offering.';
                        break;
                    case 2:
                        wing_connect_container_content_h3[j].innerHTML = 'FinTech Services';
                        wing_connect_container_content_p[j].innerHTML = 'Connecting users to merchants via fast and secure payment service, and to financial institutions via innovative consumer finance products.';
                        break;
                    case 3:
                        wing_connect_container_content_h3[j].innerHTML = 'Tools';
                        wing_connect_container_content_p[j].innerHTML = 'Developing a range of powerful software tools to meet the evolving needs of users.';
                        break;
                    case 4:
                        wing_connect_container_content_h3[j].innerHTML = 'Tencent Marketing Solution';
                        wing_connect_container_content_p[j].innerHTML = 'A leading big data marketing platform.';
                        break;
                    case 5:
                        wing_connect_container_content_h3[j].innerHTML = 'Tencent Cloud';
                        wing_connect_container_content_p[j].innerHTML = 'Building industry-leading cloud-based products and services to support enterprises to go digital and go global.';
                        break;
                    case 6:
                        wing_connect_container_content_h3[j].innerHTML = 'Smart Industries';
                        wing_connect_container_content_p[j].innerHTML = 'Leveraging cutting-edge Internet technologies and products, including cloud, AI, big data analytics, security, payments, Mini Programs, location-based services and more, to assist industries to digital upgrade with our smart industry solutions.';
                        break;
                    case 7:
                        wing_connect_container_content_h3[j].innerHTML = 'Artificial Intelligence';
                        wing_connect_container_content_p[j].innerHTML = 'Enhancing the research and application of artificial intelligence to benefit mankind.';
                        break;
                    case 8:
                        wing_connect_container_content_h3[j].innerHTML = 'Internet of Things';
                        wing_connect_container_content_p[j].innerHTML = 'Providing a full-stack of IoT products and solutions across a broad range of devices and applications.';
                        break;
                    case 9:
                        wing_connect_container_content_h3[j].innerHTML = 'Tencent Media Lab';
                        wing_connect_container_content_p[j].innerHTML = 'Focus on audio and video communications technologies.';
                        break;
                    case 10:
                        wing_connect_container_content_h3[j].innerHTML = 'Tencent Exploration';
                        wing_connect_container_content_p[j].innerHTML = 'Collaborating with partners to explore new frontiers and develop technologies.';
                        break;
                }
            }
            for (let j = 0; j < wing_connectPlus_img_h4.length; j++) {
                switch (j) {
                    case 0:
                        wing_connectPlus_img_h4[j].innerHTML = '99 Giving Day ';
                        wing_connectPlus_img_p[j].innerHTML = 'Organizing an online donation event in September every year to promote community contribution to meaningful causes.';
                        break;
                    case 1:
                        wing_connectPlus_img_h4[j].innerHTML = 'Tencent Great Wall Protection Project';
                        wing_connectPlus_img_p[j].innerHTML = 'Collaborating with the China Foundation for Cultural Heritage Conservation to promote public awareness and protect cultural heritage sites.';
                        break;
                    case 2:
                        wing_connectPlus_img_h4[j].innerHTML = 'WeCounty';
                        wing_connectPlus_img_p[j].innerHTML = 'Accelerating rural development through Weixin Official Accounts that helps rural communities tap into the possibilities of digital economy.';
                        break;
                }
            }
            wing_connectPlus_text_h3.innerHTML = 'Connecting<br>responsibility with trust';
            wing_connectPlus_text_p.innerHTML = 'Using technology to make every good deed more impactful';
            wing_join_text_h2.innerHTML = 'Connecting <br> talent with <br> development';
            wing_join_text_h5.innerHTML = 'Stimulating vitality,  <br> supporting growth';
            wing_join_top_h2.innerHTML = 'Connecting <br> talent with <br> development';
            wing_join_top_h5.innerHTML = 'Stimulating vitality,  <br> supporting growth';
            wing_footer_focus.innerHTML = 'Follow Us';
            for (let j = 0; j < wing_footer_second.length; j++) {
                switch (j) {
                    case 0:
                        wing_footer_second[j].innerHTML = 'Join Us';
                        break;
                    case 1:
                        wing_footer_second[j].innerHTML = 'Contact Us';
                        break;
                    case 2:
                        wing_footer_second[j].innerHTML = 'Legal Information';
                        break;
                }
            }
            for (let j = 0; j < wing_footer_second_content.length; j++) {
                switch (j) {
                    case 0:
                        wing_footer_second_content[j].innerHTML = 'Tencent Careers';
                        break;
                    case 1:
                        wing_footer_second_content[j].innerHTML = 'Campus Recruitment';
                        break;
                    case 2:
                        wing_footer_second_content[j].innerHTML = 'Global Recruitment';
                        break;
                    case 3:
                        wing_footer_second_content[j].innerHTML = 'Customer Services';
                        break;
                    case 4:
                        wing_footer_second_content[j].innerHTML = 'Partnership';
                        break;
                    case 5:
                        wing_footer_second_content[j].innerHTML = 'Procurement';
                        break;
                    case 6:
                        wing_footer_second_content[j].innerHTML = 'Compliance';
                        break;
                    case 7:
                        wing_footer_second_content[j].innerHTML = 'Media & Investors';
                        break;
                    case 8:
                        wing_footer_second_content[j].innerHTML = 'Service Agreement';
                        break;
                    case 9:
                        wing_footer_second_content[j].innerHTML = 'Privacy Policy';
                        break;
                    case 10:
                        wing_footer_second_content[j].innerHTML = 'Interllectual Property Rights';
                        break;
                }
            }
        }
    });
}
