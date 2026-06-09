const AURORA_REMOTE_IMAGES = [
  "https://static.ladipage.net/6801c7e1fbbd4d001283dac2/z6910216787724_97482fb4db31ff3952732a341811c9de-20250815093633-0w3rv.jpg",
  "https://w.ladicdn.com/6801c7e1fbbd4d001283dac2/bec846f0-8a30-4d08-8e4d-584392aa0757-20250815093908-6yhjw.jpeg",
  "https://w.ladicdn.com/6801c7e1fbbd4d001283dac2/z6910216759675_a94bec4d9f4ee3636bd9e1f8cc5f5f29-20250815093544-ga1dq.jpg",
  "https://w.ladicdn.com/6801c7e1fbbd4d001283dac2/z6910216691030_70a9d8783d2f7511b04a032ae8b13b7a-20250815093544-xjgsv.jpg",
  "https://w.ladicdn.com/6801c7e1fbbd4d001283dac2/z6910216666052_b8ebebad5626b68d82e10c876e005cfe-20250815093544-ckzd3.jpg",
  "https://w.ladicdn.com/6801c7e1fbbd4d001283dac2/z6910216603270_8fed2604bd8c5aea8024027017150fa9-20250815093543-qibqy.jpg",
  "https://w.ladicdn.com/6801c7e1fbbd4d001283dac2/z6910213127283_d0d79c18ca415956489fb7da11e88960-20250815093543-nuxp_.jpg",
  "https://w.ladicdn.com/6801c7e1fbbd4d001283dac2/z6910216559163_579026cd082de9dc5dd3d90050997a9a-20250815093543-n0v0g.jpg",
  "https://w.ladicdn.com/6801c7e1fbbd4d001283dac2/z6910216855952_bc19577fcb9a68e820cb2417cc2dcc95-20250815093634-bnx62.jpg",
  "https://w.ladicdn.com/6801c7e1fbbd4d001283dac2/snapedit_1746863746379-20250813024156-iuwpw.jpg"
];
const curtainSwitch = document.getElementById('curtainSwitch');
const loader = document.getElementById('loader');
const openInvite = document.getElementById('openInvite');
const music = document.getElementById('weddingMusic');
const musicToggle = document.getElementById('musicToggle');
const floatingLayer = document.querySelector('.floating-layer');
const rsvpForm = document.getElementById('rsvpForm');
const thanks = document.getElementById('thanks');
const langButtons = document.querySelectorAll('.lang-btn');

const translations = {
  vi: {
    documentTitle: 'Tiến Anh & Ngọc Huyền | Thiệp Cưới Cổ Trang',
    loaderTag: '良缘天定 · 佳偶天成',
    loaderBrush: '红绸轻启，月下成礼',
    loaderTitle: 'Tiến Anh & Ngọc Huyền',
    loaderText: 'Mời bạn nhẹ mở rèm son để bước vào tấm thiệp cưới cổ phong, nơi ánh trăng, đèn lồng và nét mực ông đồ cùng chứng giám lương duyên của chúng tôi.',
    openInvite: 'Mở Rèm Hỷ Sự',
    openHint: 'Chạm để mở thiệp',
    heroEyebrow: '良缘天定 · Song Mã thành duyên',
    heroBrush: '花朝月夕 · 红绸成礼',
    heroTitle: 'Tiến Anh & Ngọc Huyền',
    heroText: 'Trong sắc son đèn lồng, ánh trăng thơ mộng và nét thư pháp cổ điển, chúng tôi hân hoan gửi đến bạn thiệp cưới online cho ngày vui thành đôi.',
    heroMetaDay: 'Thứ Bảy',
    btnInvitation: 'Xem thiệp mời',
    btnPortrait: 'Xem chân dung',
    heroZodiac: 'Cả hai đều tuổi Ngọ · Song Mã hòa duyên, đồng tâm kết tóc, trăm năm viên mãn.',
    photoTag: 'Uyên ương song mã',
    photoTitle: 'Tiến Anh & Ngọc Huyền',
    photoSub: '百年好合 · 永结同心',
    scrollTip: 'Cuộn xuống để tiếp tục',
    secInviteTag: 'Thiệp hỷ',
    secInviteTitle: 'Thư mời lễ thành hôn',
    secInviteText: 'Một tấm thiệp son đỏ, gửi trọn niềm vui và lời mời chân thành tới người thân, bạn bè và quý khách.',
    inviteHan: '百年好合 · 白首同心',
    inviteNames: 'Tiến Anh và Ngọc Huyền',
    inviteBody: 'Nhân ngày lương duyên giai ngẫu, chúng tôi trân trọng kính mời quý khách đến tham dự lễ thành hôn và cùng sẻ chia khoảnh khắc hạnh phúc trong ngày vui của hai gia đình.',
    familyGroom: 'Nhà trai', familyGroomName: 'Gia đình họ Trịnh', familyBride: 'Nhà gái', familyBrideName: 'Gia đình họ Nguyễn',
    detailTime: 'Giờ lành', detailDate: 'Ngày lành', detailVenue: 'Hỷ đường', venueHall: 'Trung Tâm Hội Nghị Quốc Gia',
    bless1Title: 'Long phụng thành tường', bless1Text: 'Rồng uốn mây, phượng nghinh vũ như lời chúc phúc cho một lễ hỷ viên mãn và rực rỡ.',
    bless2Title: 'Cầm sắt hòa minh', bless2Text: 'Sắc ngọc bích điểm nhẹ giữa son đỏ và vàng kim, tạo nên một tổng thể cổ điển, thanh nhã và sang trọng.',
    calliTag: 'Ông đồ đề chữ', calliTitle: 'Góc thư pháp hỷ sự', calliText: 'Những nét mực nồng ấm như lời chúc tốt đẹp dành cho đôi tân lang - tân nương.',
    calli1Title: 'Trăm năm giai lão', calli1Text: 'Một lời chúc cho đôi bạn nắm tay nhau đi trọn mọi mùa trăng gió.',
    calli2Title: 'Vĩnh kết đồng tâm', calli2Text: 'Nét ngọc bích cổ phong hòa cùng thư pháp, gợi sự đồng điệu và yên ấm.',
    calli3Title: 'Cầm sắt hòa minh', calli3Text: 'Một lời đề chữ ông đồ, thay cho ngàn vạn lời cầu chúc viên mãn.',
    portraitTag: 'Uyên ương', portraitTitle: 'Chân dung song mã', portraitText: 'Ảnh của hai bạn được đặt trong khung cổ điển, hòa cùng chất thơ và nghi lễ phương Đông.',
    portraitCopyTag: '缘起 · 同心', portraitCopyTitle: 'Tiến Anh & Ngọc Huyền', portraitCopyText: 'Một nụ cười dịu dàng, một ánh nhìn vững chãi — như hai cánh chim đồng điệu, cùng bước vào lễ đường dưới ánh đèn, hoa trắng và sắc hỷ đỏ thắm.',
    portraitQuote: '“Song Mã kề vai, duyên trời se kết — từ nay gió trăng có đôi, đường đời có bạn.”',
    timelineTag: 'Hành trình ngày vui', timelineTitle: 'Nghi thức hỷ lễ', time1Title: 'Nghênh khách', time1Text: 'Đón khách, thưởng trà và lưu lại những bức hình kỷ niệm đầu tiên.', time2Title: 'Nghi lễ thành hôn', time2Text: 'Bái đường, trao lời hẹn ước và đón nhận lời chúc phúc từ hai họ.', time3Title: 'Tiệc hỷ', time3Text: 'Nâng chén sum vầy, chung vui trọn vẹn và lưu giữ những phút giây đáng nhớ.',
    venueTag: 'Địa điểm', venueTitle: 'Trung Tâm Hội Nghị Quốc Gia', venueAddress: 'Mễ Trì, Nam Từ Liêm, Hà Nội', venueBtn: 'Mở bản đồ',
    countTag: 'Đếm ngày lành', countTitle: 'Hẹn gặp trong ngày hỷ', countDays: 'Ngày', countHours: 'Giờ', countMinutes: 'Phút', countSeconds: 'Giây',
    wishTag: 'Hồi âm', wishTitle: 'Gửi lời chúc phúc', nameLabel: 'Tên của bạn', messageLabel: 'Lời chúc', namePlaceholder: 'Ví dụ: Anh/Chị/Bạn...', messagePlaceholder: 'Gửi đôi lời chúc phúc cho Tiến Anh và Ngọc Huyền...', wishBtn: 'Gửi lời chúc', wishThanks: 'Chúng tôi đã nhận được lời chúc của bạn. Xin chân thành cảm ơn!',
    footerTitle: 'Tiến Anh & Ngọc Huyền', footerText: 'Thiệp cưới online phong cách cổ trang Trung Hoa · 2025',
    musicOn: 'Nhạc Hỷ: On', musicOff: 'Nhạc Hỷ: Off'
  },
  en: {
    documentTitle: 'Tien Anh & Ngoc Huyen | Traditional Wedding Invitation',
    loaderTag: 'A match made in heaven · blessed union',
    loaderBrush: 'Silk curtains open beneath the moon',
    loaderTitle: 'Tien Anh & Ngoc Huyen',
    loaderText: 'Gently open the crimson curtains and step into our classical wedding invitation, where moonlight, lanterns, and calligraphy bear witness to our union.',
    openInvite: 'Open the Wedding Curtain', openHint: 'Tap to open the invitation', heroEyebrow: 'Heaven-blessed union · a matching zodiac pair', heroBrush: 'Moonlit vows · scarlet wedding silk', heroTitle: 'Tien Anh & Ngoc Huyen', heroText: 'Amid crimson lanterns, poetic moonlight, and classical calligraphy, we are delighted to share our online wedding invitation with you.', heroMetaDay: 'Saturday', btnInvitation: 'View invitation', btnPortrait: 'View portrait', heroZodiac: 'Both of us were born in the Year of the Horse — a harmonious zodiac match, united in heart and destined for a full and joyful life together.', photoTag: 'A blessed zodiac pair', photoTitle: 'Tien Anh & Ngoc Huyen', photoSub: 'A perfect union · forever one heart', scrollTip: 'Scroll to continue', secInviteTag: 'Wedding invitation', secInviteTitle: 'Invitation to our wedding ceremony', secInviteText: 'A crimson invitation carrying our joy and a sincere welcome to family, friends, and honored guests.', inviteHan: 'A perfect union · one heart till old age', inviteNames: 'Tien Anh and Ngoc Huyen', inviteBody: 'On the occasion of our blessed union, we respectfully invite you to attend our wedding ceremony and share in the happiness of our special day.', familyGroom: 'Groom’s family', familyGroomName: 'The Trinh family', familyBride: 'Bride’s family', familyBrideName: 'The Nguyen family', detailTime: 'Auspicious time', detailDate: 'Auspicious date', detailVenue: 'Wedding hall', venueHall: 'National Convention Center', bless1Title: 'Dragon and phoenix auspiciousness', bless1Text: 'The dragon in the clouds and the phoenix in graceful flight symbolize blessings for a radiant and fulfilled wedding.', bless2Title: 'Harmony in melody', bless2Text: 'Touches of jade amid crimson and gold create a classical, elegant, and luxurious atmosphere.', calliTag: 'Calligrapher’s corner', calliTitle: 'Wedding calligraphy', calliText: 'Warm brush strokes carrying heartfelt blessings for the bride and groom.', calli1Title: 'Grow old together', calli1Text: 'A blessing for the couple to hold hands through every season of life.', calli2Title: 'United as one', calli2Text: 'Jade-toned classical styling and calligraphy evoke harmony and peace.', calli3Title: 'Perfect harmony', calli3Text: 'A calligrapher’s inscription in place of countless wishes for lasting joy.', portraitTag: 'The couple', portraitTitle: 'Portrait of the zodiac pair', portraitText: 'Your photo is framed in a classical setting infused with Eastern poetry and ceremony.', portraitCopyTag: 'The beginning of fate · one heart', portraitCopyTitle: 'Tien Anh & Ngoc Huyen', portraitCopyText: 'A gentle smile and a steadfast gaze — like two wings in harmony, walking into the ceremony beneath warm lights, white flowers, and auspicious crimson.', portraitQuote: '“Side by side, the zodiac pair walks on — from now on, moonlight has two shadows and life has a faithful companion.”', timelineTag: 'The wedding journey', timelineTitle: 'Ceremony schedule', time1Title: 'Guest reception', time1Text: 'Welcome guests, enjoy tea, and capture the first memorable photos.', time2Title: 'Wedding ceremony', time2Text: 'Traditional rites, vows, and blessings from both families.', time3Title: 'Wedding banquet', time3Text: 'Raise a toast, celebrate together, and keep these beautiful memories forever.', venueTag: 'Venue', venueTitle: 'National Convention Center', venueAddress: 'Me Tri, Nam Tu Liem, Hanoi', venueBtn: 'Open map', countTag: 'Countdown', countTitle: 'See you on our wedding day', countDays: 'Days', countHours: 'Hours', countMinutes: 'Minutes', countSeconds: 'Seconds', wishTag: 'Reply', wishTitle: 'Send your blessing', nameLabel: 'Your name', messageLabel: 'Your message', namePlaceholder: 'Example: Your name...', messagePlaceholder: 'Send your blessings to Tien Anh and Ngoc Huyen...', wishBtn: 'Send blessing', wishThanks: 'We have received your blessing. Thank you very much!', footerTitle: 'Tien Anh & Ngoc Huyen', footerText: 'Online wedding invitation in a traditional Chinese-inspired style · 2025', musicOn: 'Wedding Music: On', musicOff: 'Wedding Music: Off'
  },
  zhHans: {
    documentTitle: '晋发 & 红玉 | 中式古风婚礼请柬',
    loaderTag: '良缘天定 · 佳偶天成', loaderBrush: '红绸轻启，月下成礼', loaderTitle: '晋发 & 红玉', loaderText: '请轻轻开启喜帘，步入这封古风婚礼请柬。月光、灯笼与书法共同见证我们的良缘。', openInvite: '开启喜帘', openHint: '轻触开启请柬', heroEyebrow: '良缘天定 · 双马成缘', heroBrush: '花朝月夕 · 红绸成礼', heroTitle: '晋发 & 红玉', heroText: '在红灯笼、诗意月色与古典书法之间，我们满怀喜悦地向您送上这封线上婚礼请柬。', heroMetaDay: '星期日', btnInvitation: '查看请柬', btnPortrait: '查看合照', heroZodiac: '我们二人皆属马，双马和鸣，同心结发，愿得百年圆满。', photoTag: '双马良缘', photoTitle: '晋发 & 红玉', photoSub: '百年好合 · 永结同心', scrollTip: '向下滚动继续', secInviteTag: '喜帖', secInviteTitle: '婚礼邀请函', secInviteText: '一封朱红喜帖，承载着我们的欢喜，也真诚邀请亲友与贵宾共享喜悦。', inviteHan: '百年好合 · 白首同心', inviteNames: '晋发 与 红玉', inviteBody: '值此良缘佳偶之日，我们诚挚邀请您出席婚礼庆典，与我们共同见证并分享这一幸福时刻。', familyGroom: '男方家', familyGroomName: '郑氏家族', familyBride: '女方家', familyBrideName: '阮氏家族', detailTime: '吉时', detailDate: '吉日', detailVenue: '喜堂', venueHall: '万花喜堂', bless1Title: '龙凤呈祥', bless1Text: '云中祥龙与展翼瑞凤，象征这场婚礼圆满、华美而吉庆。', bless2Title: '琴瑟和鸣', bless2Text: '在朱红与金色之间点缀温润玉色，更显古典、雅致与华贵。', calliTag: '先生题字', calliTitle: '喜事书法角', calliText: '一笔一画，都是送给新郎新娘的温暖祝福。', calli1Title: '百年偕老', calli1Text: '愿二人执手走过四时风月，白首不离。', calli2Title: '永结同心', calli2Text: '古风玉色与书法相映，寓意和合安宁。', calli3Title: '琴瑟和鸣', calli3Text: '以题字代万语千言，愿新人一生圆满幸福。', portraitTag: '佳偶', portraitTitle: '双马合影', portraitText: '两位新人的照片置于古典画框之中，与东方诗意和礼制相互辉映。', portraitCopyTag: '缘起 · 同心', portraitCopyTitle: '晋发 & 红玉', portraitCopyText: '温柔的笑意、坚定的目光，如同和鸣双翼，一同步入礼堂，映着花影与喜红。', portraitQuote: '“双马并肩，天定良缘——从今以后，风月成双，人生有伴。”', timelineTag: '喜日流程', timelineTitle: '婚礼仪式', time1Title: '迎宾', time1Text: '迎接宾客、品茶小叙，并留下最初的纪念照片。', time2Title: '婚礼仪式', time2Text: '拜堂、许诺，并接受双方家人的祝福。', time3Title: '喜宴', time3Text: '举杯同庆，共度圆满而难忘的时刻。', venueTag: '地点', venueTitle: '万花喜堂', venueAddress: '胡志明市新平郡花灯路 88 号', venueBtn: '打开地图', countTag: '吉日倒计时', countTitle: '期待与您在喜日相见', countDays: '天', countHours: '时', countMinutes: '分', countSeconds: '秒', wishTag: '回函', wishTitle: '送上祝福', nameLabel: '您的姓名', messageLabel: '祝福留言', namePlaceholder: '例如：您的姓名...', messagePlaceholder: '请为晋发与红玉送上祝福...', wishBtn: '发送祝福', wishThanks: '我们已收到您的祝福，衷心感谢！', footerTitle: '晋发 & 红玉', footerText: '中式古风线上婚礼请柬 · 2025', musicOn: '婚礼音乐：开', musicOff: '婚礼音乐：关'
  },
  zhHant: {
    documentTitle: '晉發 & 紅玉 | 中式古風婚禮請柬',
    loaderTag: '良緣天定 · 佳偶天成', loaderBrush: '紅綢輕啟，月下成禮', loaderTitle: '晉發 & 紅玉', loaderText: '請輕輕開啟喜簾，步入這封古風婚禮請柬。月光、燈籠與書法共同見證我們的良緣。', openInvite: '開啟喜簾', openHint: '輕觸開啟請柬', heroEyebrow: '良緣天定 · 雙馬成緣', heroBrush: '花朝月夕 · 紅綢成禮', heroTitle: '晉發 & 紅玉', heroText: '在紅燈籠、詩意月色與古典書法之間，我們滿懷喜悅地向您送上這封線上婚禮請柬。', heroMetaDay: '星期日', btnInvitation: '查看請柬', btnPortrait: '查看合照', heroZodiac: '我們二人皆屬馬，雙馬和鳴，同心結髮，願得百年圓滿。', photoTag: '雙馬良緣', photoTitle: '晉發 & 紅玉', photoSub: '百年好合 · 永結同心', scrollTip: '向下滾動繼續', secInviteTag: '喜帖', secInviteTitle: '婚禮邀請函', secInviteText: '一封朱紅喜帖，承載著我們的歡喜，也真誠邀請親友與貴賓共享喜悅。', inviteHan: '百年好合 · 白首同心', inviteNames: '晉發 與 紅玉', inviteBody: '值此良緣佳偶之日，我們誠摯邀請您出席婚禮慶典，與我們共同見證並分享這一幸福時刻。', familyGroom: '男方家', familyGroomName: '鄭氏家族', familyBride: '女方家', familyBrideName: '阮氏家族', detailTime: '吉時', detailDate: '吉日', detailVenue: '喜堂', venueHall: '萬花喜堂', bless1Title: '龍鳳呈祥', bless1Text: '雲中祥龍與展翼瑞鳳，象徵這場婚禮圓滿、華美而吉慶。', bless2Title: '琴瑟和鳴', bless2Text: '在朱紅與金色之間點綴溫潤玉色，更顯古典、雅緻與華貴。', calliTag: '先生題字', calliTitle: '喜事書法角', calliText: '一筆一畫，都是送給新郎新娘的溫暖祝福。', calli1Title: '百年偕老', calli1Text: '願二人執手走過四時風月，白首不離。', calli2Title: '永結同心', calli2Text: '古風玉色與書法相映，寓意和合安寧。', calli3Title: '琴瑟和鳴', calli3Text: '以題字代萬語千言，願新人一生圓滿幸福。', portraitTag: '佳偶', portraitTitle: '雙馬合影', portraitText: '兩位新人的照片置於古典畫框之中，與東方詩意和禮制相互輝映。', portraitCopyTag: '緣起 · 同心', portraitCopyTitle: '晉發 & 紅玉', portraitCopyText: '溫柔的笑意、堅定的目光，如同和鳴雙翼，一同步入禮堂，映著花影與喜紅。', portraitQuote: '“雙馬並肩，天定良緣——從今以後，風月成雙，人生有伴。”', timelineTag: '喜日流程', timelineTitle: '婚禮儀式', time1Title: '迎賓', time1Text: '迎接賓客、品茶小敘，並留下最初的紀念照片。', time2Title: '婚禮儀式', time2Text: '拜堂、許諾，並接受雙方家人的祝福。', time3Title: '喜宴', time3Text: '舉杯同慶，共度圓滿而難忘的時刻。', venueTag: '地點', venueTitle: '萬花喜堂', venueAddress: '胡志明市新平郡花燈路 88 號', venueBtn: '打開地圖', countTag: '吉日倒數', countTitle: '期待與您在喜日相見', countDays: '天', countHours: '時', countMinutes: '分', countSeconds: '秒', wishTag: '回函', wishTitle: '送上祝福', nameLabel: '您的姓名', messageLabel: '祝福留言', namePlaceholder: '例如：您的姓名...', messagePlaceholder: '請為晉發與紅玉送上祝福...', wishBtn: '發送祝福', wishThanks: '我們已收到您的祝福，衷心感謝！', footerTitle: '晉發 & 紅玉', footerText: '中式古風線上婚禮請柬 · 2025', musicOn: '婚禮音樂：開', musicOff: '婚禮音樂：關'
  }
};

Object.assign(translations.vi, {
  storyTag:'Chuyện tình yêu', storyTitle:'Cuộn thư tình cổ phong', storyText:'Mình chọn kiểu cuộn giấy ngang vì rất hợp tinh thần cổ trang Trung Hoa, giống một bức thủ quyển từ từ mở ra, kể lại từng chương của chuyện tình yêu.',
  story1Title:'Khởi đầu dịu dàng', story1Text:'Từ một ánh nhìn đầu tiên, mọi thứ bắt đầu thật nhẹ nhàng như gió xuân lướt qua hiên ngọc.',
  story2Title:'Những ngày đồng hành', story2Text:'Càng đi cùng nhau, chúng mình càng hiểu rằng bình yên đẹp nhất chính là có nhau trong từng ngày bình thường.',
  story3Title:'Lời hẹn ước', story3Text:'Giữa ánh trăng và đèn hoa, lời hẹn ước được giữ trong tim như một nét son không phai.',
  story4Title:'Ngày thành đôi', story4Text:'Và rồi cuộn thư tình khép lại bằng ngày vui lớn nhất: ngày hai trái tim chính thức nên duyên phu phụ.',
  galleryTag:'Album', galleryTitle:'Album trân tàng', galleryText:'Mình bổ sung gallery phong cách cổ nhã để sau này bạn chỉ cần thay ảnh thật vào là website sẽ lung linh hơn nữa.',
  gallery1:'Khoảnh khắc đầu tiên', gallery2:'Nụ cười dịu dàng', gallery3:'Ánh nhìn đồng điệu', gallery4:'Lưu dấu thanh xuân',
  planTag:'Planning đề xuất', planTitle:'Lộ trình nâng cấp premium', planText:'Mình đã vừa đề xuất vừa làm thêm nhiều hạng mục. Bên dưới là các điểm nổi bật tiếp tục có thể mở rộng nếu bạn muốn nâng cấp tiếp.',
  plan1Title:'Story cuộn thư', plan1Text:'Đã làm và chọn kiểu cuộn ngang để kể chuyện tình yêu theo phong cách thủ quyển cổ trang.',
  plan2Title:'Gallery ảnh', plan2Text:'Đã thêm thư viện ảnh với lightbox, sẵn sàng thay ảnh thật sau này.',
  plan3Title:'RSVP + guestbook', plan3Text:'Đã nâng cấp form lời chúc và lưu cục bộ để hiện thành sổ lưu bút ngay trên web.',
  plan4Title:'Hiệu ứng cinematic', plan4Text:'Đã tăng glow, hoa đăng, cánh sen, bong bóng, parallax và nhiều lớp cảnh sắc huyền ảo.',
  guestbookTag:'Lưu bút hỷ sự', guestbookTitle:'Sổ lưu bút chúc phúc', guestbookEmpty:'Chưa có lời chúc nào, hãy là người đầu tiên để lại lời chúc nhé!'
});
Object.assign(translations.en, {
  storyTag:'Love story', storyTitle:'An ancient love scroll', storyText:'I chose a horizontal handscroll because it fits the classical Chinese style beautifully, slowly unfolding each chapter of your love story.',
  story1Title:'A gentle beginning', story1Text:'From the very first glance, everything began softly, like spring wind passing by a jade pavilion.',
  story2Title:'Days of togetherness', story2Text:'The more you walked together, the more you understood that true peace is simply having each other in ordinary days.',
  story3Title:'A sacred promise', story3Text:'Beneath moonlight and lantern glow, your promise was kept like an everlasting crimson seal.',
  story4Title:'The wedding day', story4Text:'And so the love scroll closes with its most beautiful chapter: the day two hearts officially become one.',
  galleryTag:'Gallery', galleryTitle:'Treasured album', galleryText:'I added a classical gallery so later you can simply replace the photos and the website will become even more beautiful.',
  gallery1:'The first moment', gallery2:'A gentle smile', gallery3:'A shared gaze', gallery4:'A memory of youth',
  planTag:'Planning', planTitle:'Premium upgrade roadmap', planText:'I both proposed and implemented more features. Below are the main highlights that can keep expanding if you want even more polish.',
  plan1Title:'Story scroll', plan1Text:'Implemented with a horizontal scroll format to tell the love story like a classical handscroll.',
  plan2Title:'Photo gallery', plan2Text:'A gallery with lightbox is already included and ready for your real photos later.',
  plan3Title:'RSVP + guestbook', plan3Text:'The blessing form is upgraded and saved locally to appear as a guestbook on the page.',
  plan4Title:'Cinematic effects', plan4Text:'Added glow, sky lanterns, lotus petals, bubbles, parallax, and multiple mystical scenery layers.',
  guestbookTag:'Wedding guestbook', guestbookTitle:'Blessing guestbook', guestbookEmpty:'No wishes yet — be the first one to leave a blessing!'
});
Object.assign(translations.zhHans, {
  storyTag:'爱情故事', storyTitle:'古风情书长卷', storyText:'我为你选择了横向卷轴，因为它最符合中式古风气质，就像一幅徐徐展开的手卷，讲述爱情的每一章节。',
  story1Title:'温柔初见', story1Text:'从最初的一次对视开始，一切都轻柔得像春风拂过玉阶。',
  story2Title:'相伴时光', story2Text:'一路同行，渐渐明白，最美的安稳，就是平凡日子里始终有彼此相伴。',
  story3Title:'心意誓约', story3Text:'在月色与灯火之间，那句誓言被珍藏在心中，如朱印一般永不褪色。',
  story4Title:'终成眷属', story4Text:'于是，这卷情书在最美的一页落笔：两个真心终于结为夫妻。',
  galleryTag:'相册', galleryTitle:'珍藏影集', galleryText:'我加入了古典风格的相册区，以后你只需要替换真实照片，网站就会更加惊艳。',
  gallery1:'初见时刻', gallery2:'温柔笑意', gallery3:'默契目光', gallery4:'青春留影',
  planTag:'升级规划', planTitle:'高级版升级路线', planText:'我已经一边提案一边实现了不少内容。下面这些亮点还可以继续扩展，让整体更完整。',
  plan1Title:'故事卷轴', plan1Text:'已完成，并选择横向手卷形式来讲述爱情故事，更具古风韵味。',
  plan2Title:'照片相册', plan2Text:'已加入带灯箱效果的相册，后续可直接替换成真实照片。',
  plan3Title:'回函与留言簿', plan3Text:'已升级祝福表单，并本地保存显示为网页留言簿。',
  plan4Title:'电影感特效', plan4Text:'已增强流光、天灯、莲瓣、泡泡、视差与多层梦幻场景。',
  guestbookTag:'喜事留笺', guestbookTitle:'祝福留言簿', guestbookEmpty:'暂时还没有留言，快来留下第一份祝福吧！'
});
Object.assign(translations.zhHant, {
  storyTag:'愛情故事', storyTitle:'古風情書長卷', storyText:'我為你選擇了橫向卷軸，因為它最符合中式古風氣質，就像一幅徐徐展開的手卷，講述愛情的每一章節。',
  story1Title:'溫柔初見', story1Text:'從最初的一次對視開始，一切都輕柔得像春風拂過玉階。',
  story2Title:'相伴時光', story2Text:'一路同行，漸漸明白，最美的安穩，就是平凡日子裡始終有彼此相伴。',
  story3Title:'心意誓約', story3Text:'在月色與燈火之間，那句誓言被珍藏在心中，如朱印一般永不褪色。',
  story4Title:'終成眷屬', story4Text:'於是，這卷情書在最美的一頁落筆：兩顆真心終於結為夫妻。',
  galleryTag:'相冊', galleryTitle:'珍藏影集', galleryText:'我加入了古典風格的相冊區，之後你只需要替換真實照片，網站就會更加驚艷。',
  gallery1:'初見時刻', gallery2:'溫柔笑意', gallery3:'默契目光', gallery4:'青春留影',
  planTag:'升級規劃', planTitle:'高級版升級路線', planText:'我已經一邊提案一邊實作了不少內容。下面這些亮點還可以繼續擴展，讓整體更完整。',
  plan1Title:'故事卷軸', plan1Text:'已完成，並選擇橫向手卷形式來講述愛情故事，更具古風韻味。',
  plan2Title:'照片相冊', plan2Text:'已加入帶燈箱效果的相冊，後續可直接替換成真實照片。',
  plan3Title:'回函與留言簿', plan3Text:'已升級祝福表單，並本地保存顯示為網頁留言簿。',
  plan4Title:'電影感特效', plan4Text:'已增強流光、天燈、蓮瓣、泡泡、視差與多層夢幻場景。',
  guestbookTag:'喜事留箋', guestbookTitle:'祝福留言簿', guestbookEmpty:'暫時還沒有留言，快來留下第一份祝福吧！'
});
translations.vi.openAnywhere = 'Hoặc chạm bất kỳ đâu trên màn mở rèm';
translations.en.openAnywhere = 'Or tap anywhere on the opening screen';
translations.zhHans.openAnywhere = '也可以轻触开场画面的任意位置';
translations.zhHant.openAnywhere = '也可以輕觸開場畫面的任意位置';

Object.assign(translations.vi, {
  reelTag:'Cuốn chiếu ảnh', reelTitle:'Thủ quyển ký ức 1–10', reelText:'Mình đã thêm sẵn thư mục <strong>image</strong>. Bạn chỉ cần bỏ ảnh vào với tên từ <strong>1</strong> đến <strong>10</strong>, website sẽ tự động lấy ra để chạy hiệu ứng cuốn chiếu cổ trang.', reelNote:'Hỗ trợ các đuôi phổ biến: jpg, jpeg, png, webp. Nếu thiếu ảnh, website sẽ tự dùng ảnh mặc định.'
});
Object.assign(translations.en, {
  reelTag:'Image scroll', reelTitle:'Memory handscroll 1–10', reelText:'I added an <strong>image</strong> folder for you. Just place your photos there and name them from <strong>1</strong> to <strong>10</strong>; the site will automatically use them for the classical scroll effect.', reelNote:'Supported extensions: jpg, jpeg, png, webp. If a photo is missing, the site will automatically use the default image.'
});
Object.assign(translations.zhHans, {
  reelTag:'画卷影像', reelTitle:'回忆长卷 1–10', reelText:'我已经为你新增了 <strong>image</strong> 文件夹。你只需要把照片放进去，并命名为 <strong>1</strong> 到 <strong>10</strong>，网站就会自动读取并做成古风卷轴效果。', reelNote:'支持常见格式：jpg、jpeg、png、webp。若缺少图片，网站会自动使用默认照片。'
});
Object.assign(translations.zhHant, {
  reelTag:'畫卷影像', reelTitle:'回憶長卷 1–10', reelText:'我已經為你新增了 <strong>image</strong> 資料夾。你只需要把照片放進去，並命名為 <strong>1</strong> 到 <strong>10</strong>，網站就會自動讀取並做成古風卷軸效果。', reelNote:'支援常見格式：jpg、jpeg、png、webp。若缺少圖片，網站會自動使用預設照片。'
});


Object.assign(translations.vi, {
  loaderTitle:'Tiến Anh & Ngọc Huyền', heroTitle:'Tiến Anh & Ngọc Huyền', photoTitle:'Tiến Anh & Ngọc Huyền', footerTitle:'Tiến Anh & Ngọc Huyền', portraitCopyTitle:'Tiến Anh & Ngọc Huyền',
  loaderText:'Trân trọng kính mời bạn mở tấm thiệp cưới của Tiến Anh và Ngọc Huyền, cùng chung vui trong ngày lành 07/12/2025.',
  heroText:'Cùng gia đình hai bên, Tiến Anh và Ngọc Huyền trân trọng kính mời bạn đến dự lễ thành hôn vào 17h30, thứ Bảy ngày 07/12/2025 tại Trung Tâm Hội Nghị Quốc Gia.',
  heroEyebrow:'TOGETHER WITH OUR FAMILIES!', heroBrush:'Tiến Anh & Ngọc Huyền', heroMetaDay:'Thứ Bảy',
  heroZodiac:'Tháng 12 · ngày 07 · năm 2025 · vào 17h30 tại Trung Tâm Hội Nghị Quốc Gia, Mễ Trì, Nam Từ Liêm, Hà Nội.',
  inviteNames:'Tiến Anh và Ngọc Huyền', inviteBody:'Tiến Anh và Ngọc Huyền trân trọng kính mời bạn và gia đình đến tham dự lễ cưới, cùng lưu giữ những khoảnh khắc hạnh phúc trong ngày đặc biệt này.',
  detailTime:'Vào 17h30', detailDate:'07/12/2025', detailVenue:'Địa điểm', venueHall:'Trung Tâm Hội Nghị Quốc Gia',
  venueTitle:'Trung Tâm Hội Nghị Quốc Gia', venueAddress:'Mễ Trì, Nam Từ Liêm, Hà Nội',
  portraitText:'Nội dung và hình ảnh được chuyển từ file HTML thiệp cưới Tiến Anh & Ngọc Huyền mà bạn đã gửi.',
  portraitCopyText:'Cô dâu Ngọc Huyền dịu dàng, ấm áp, tinh tế và biết quan tâm. Chú rể Tiến Anh chín chắn, mạnh mẽ, trách nhiệm và luôn che chở cho người mình yêu.',
  portraitQuote:'“Sau hành trình đầy yêu thương, hôm nay chúng ta chính thức gọi nhau là vợ chồng.”',
  time1Title:'Welcome Guest', time1Text:'16:00 - 16:30 · Đón khách',
  time2Title:'Outdoor Party', time2Text:'16:30 - 17:00 · Tiệc rượu cocktail và fingerfood',
  time3Title:'Ceremony', time3Text:'17:00 - 20:00 · Tiệc cưới. 20:30 - LATE · Tiễn khách',
  story1Title:'[20.01.2013] Ngày đầu gặp gỡ', story1Text:'Ngày ấy, giữa muôn vàn con người, chúng ta chạm mặt nhau như một sự sắp đặt của định mệnh. Ánh mắt đầu tiên đã mở ra câu chuyện dài đầy yêu thương.',
  story2Title:'[15.04.2025] Những tháng ngày yêu thương', story2Text:'Những buổi hẹn nhẹ nhàng, tiếng cười, những lần nắm tay… đã viết nên từng trang kỷ niệm. Tình yêu lớn dần theo năm tháng, và chúng ta biết rằng mình thuộc về nhau.',
  story3Title:'[07.12.2025] Ngày thành đôi', story3Text:'Sau hành trình đầy yêu thương, hôm nay chúng ta chính thức gọi nhau là vợ chồng. Ngày vui này là khởi đầu cho một chặng đường mới, cùng nhau xây đắp hạnh phúc.',
  story4Title:'Hộp mừng cưới', story4Text:'Chú rể Tiến Anh · 01234567 · Vietinbank. Cô dâu Ngọc Huyền · 01234567 · MB bank.',
  wishTitle:'Bạn sẽ đến chứ?', wishBtn:'Gửi đi', namePlaceholder:'Name of Quý Khách', messagePlaceholder:'Gửi những lời chúc tốt đẹp nhất', wishThanks:'Cảm ơn bạn đã gửi phản hồi và lời chúc tốt đẹp đến Tiến Anh & Ngọc Huyền.'
});
Object.assign(translations.en, {
  loaderTitle:'Tien Anh & Ngoc Huyen', heroTitle:'Tien Anh & Ngoc Huyen', photoTitle:'Tien Anh & Ngoc Huyen', footerTitle:'Tien Anh & Ngoc Huyen', portraitCopyTitle:'Tien Anh & Ngoc Huyen', heroMetaDay:'Saturday', venueTitle:'National Convention Center', venueAddress:'Me Tri, Nam Tu Liem, Hanoi'
});

let currentLang = localStorage.getItem('weddingLang') || 'vi';

function applyTranslations(lang) {
  const dict = translations[lang] || translations.vi;
  document.documentElement.lang = lang;
  document.title = dict.documentTitle;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) el.placeholder = dict[key];
  });
  const musicText = musicToggle.querySelector('.music-text');
  const isPlaying = !music.paused;
  musicText.textContent = isPlaying ? dict.musicOn : dict.musicOff;
  langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  localStorage.setItem('weddingLang', lang);
  currentLang = lang;
  try {
    if (typeof renderGuestbook === 'function') renderGuestbook();
  } catch (err) {
    console.warn('Guestbook render skipped until ready:', err);
  }
}

langButtons.forEach(btn => btn.addEventListener('click', () => applyTranslations(btn.dataset.lang)));
applyTranslations(currentLang);

function setMusicState(isPlaying) {
  musicToggle.classList.toggle('playing', isPlaying);
  const text = musicToggle.querySelector('.music-text');
  const dict = translations[currentLang] || translations.vi;
  text.textContent = isPlaying ? dict.musicOn : dict.musicOff;
}

async function tryPlayMusic() {
  try {
    await music.play();
    setMusicState(true);
    return true;
  } catch {
    setMusicState(false);
    return false;
  }
}

function playOpenChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    const notes = [523.25, 659.25, 783.99];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      osc.connect(gain);
      gain.connect(ctx.destination);
      const t = ctx.currentTime + i * 0.08;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.08, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
      osc.start(t);
      osc.stop(t + 0.6);
    });
  } catch {}
}

function createFirework(x = 50, y = 40) {
  const fw = document.createElement('span');
  fw.className = 'firework';
  fw.style.left = `${x}vw`;
  fw.style.top = `${y}vh`;
  floatingLayer.appendChild(fw);
  fw.addEventListener('animationend', () => fw.remove());
}

function openCurtain() {
  if (!loader || loader.classList.contains('opening') || loader.classList.contains('hidden')) return;
  if (curtainSwitch && !curtainSwitch.checked) curtainSwitch.checked = true;
  loader.classList.add('opening');
  playOpenChime();
  burstFallingItems(84);
  [22, 38, 62, 78].forEach((x, i) => setTimeout(() => createFirework(x, 26 + Math.random() * 18), i * 120));
  tryPlayMusic();
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.classList.add('invite-opened');
  }, 1750);
}
window.openWeddingCurtain = function openWeddingCurtain(event) {
  if (event) {
    event.preventDefault?.();
    event.stopPropagation?.();
  }
  openCurtain();
};


/* v14 fail-safe opener */
(function setupFailSafeCurtainOpen() {
  function safeOpen(e) {
    const activeLoader = document.getElementById('loader');
    if (!activeLoader || activeLoader.classList.contains('hidden') || activeLoader.classList.contains('opening')) return;
    const target = e && e.target;
    if (target && target.closest && (target.closest('.lang-switcher') || target.closest('#musicToggle') || target.closest('.music-toggle'))) return;
    if (typeof window.openWeddingCurtain === 'function') {
      window.openWeddingCurtain(e);
    } else {
      activeLoader.classList.add('opening');
      setTimeout(() => activeLoader.classList.add('hidden'), 1600);
    }
  }
  ['click','pointerdown','pointerup','touchstart','touchend'].forEach(type => {
    document.addEventListener(type, safeOpen, { capture: true, passive: false });
  });
})();
function shouldOpenFromEvent(event) {
  if (!loader || loader.classList.contains('hidden') || loader.classList.contains('opening')) return false;
  const path = event.composedPath ? event.composedPath() : [];
  if (path.includes(musicToggle)) return false;
  const target = event.target;
  if (target && target.closest && target.closest('.lang-switcher')) return false;
  return path.includes(loader) || (target && target.closest && target.closest('#loader'));
}

if (curtainSwitch) {
  curtainSwitch.addEventListener('change', e => {
    if (curtainSwitch.checked) window.openWeddingCurtain(e);
  }, { passive: false });
}

const openHitbox = document.querySelector('.open-hitbox');
if (openHitbox) {
  ['click', 'pointerup', 'touchend'].forEach(type => {
    openHitbox.addEventListener(type, window.openWeddingCurtain, { passive: false, capture: true });
  });
}

if (openInvite) {
  ['click', 'pointerup', 'touchend'].forEach(type => {
    openInvite.addEventListener(type, window.openWeddingCurtain, { passive: false });
  });
}

if (loader) {
  ['click', 'pointerup', 'touchend'].forEach(type => {
    loader.addEventListener(type, e => {
      if (shouldOpenFromEvent(e)) window.openWeddingCurtain(e);
    }, { passive: false, capture: true });
  });
}

document.addEventListener('pointerup', e => {
  if (shouldOpenFromEvent(e)) window.openWeddingCurtain(e);
}, { passive: false, capture: true });

document.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && loader && !loader.classList.contains('hidden') && !loader.classList.contains('opening')) {
    window.openWeddingCurtain(e);
  }
}, { capture: true });

musicToggle.addEventListener('click', async () => {
  if (music.paused) await tryPlayMusic();
  else {
    music.pause();
    setMusicState(false);
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function updateCountdown() {
  const box = document.querySelector('.countdown');
  if (!box) return;
  const target = new Date(box.dataset.date).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  document.getElementById('days').textContent = String(d).padStart(2, '0');
  document.getElementById('hours').textContent = String(h).padStart(2, '0');
  document.getElementById('minutes').textContent = String(m).padStart(2, '0');
  document.getElementById('seconds').textContent = String(s).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

function createFallingItem() {
  const item = document.createElement('span');
  const isPetal = Math.random() < 0.72;
  item.className = `fall-item ${isPetal ? 'petal' : 'bubble'}`;
  if (isPetal && Math.random() < 0.35) item.classList.add('alt');
  item.style.left = `${Math.random() * 100}vw`;
  item.style.opacity = `${0.38 + Math.random() * 0.42}`;
  item.style.setProperty('--dx', `${(Math.random() - 0.5) * 260}px`);
  item.style.setProperty('--rot', `${(Math.random() > 0.5 ? 1 : -1) * (320 + Math.random() * 220)}deg`);
  item.style.animationDuration = `${7 + Math.random() * 10}s`;
  if (isPetal) {
    const size = 18 + Math.random() * 28;
    item.style.width = `${size}px`;
    item.style.height = `${size * 1.1}px`;
  } else {
    const size = 10 + Math.random() * 22;
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;
  }
  floatingLayer.appendChild(item);
  item.addEventListener('animationend', () => item.remove());
}

function burstFallingItems(count = 12) {
  for (let i = 0; i < count; i++) setTimeout(createFallingItem, i * 36);
}
setInterval(() => burstFallingItems(5), 1200);

function createGlowItem() {
  const glow = document.createElement('span');
  const variants = ['', ' jade', ' blue'];
  glow.className = `glow-item${variants[Math.floor(Math.random() * variants.length)]}`;
  const size = 8 + Math.random() * 18;
  glow.style.width = `${size}px`;
  glow.style.height = `${size}px`;
  glow.style.left = `${8 + Math.random() * 84}vw`;
  glow.style.top = `${55 + Math.random() * 35}vh`;
  glow.style.opacity = `${0.28 + Math.random() * 0.34}`;
  glow.style.setProperty('--gx', `${(Math.random() - 0.5) * 120}px`);
  glow.style.animationDuration = `${4 + Math.random() * 4}s`;
  floatingLayer.appendChild(glow);
  glow.addEventListener('animationend', () => glow.remove());
}
setInterval(createGlowItem, 850);

const storyPanels = Array.from(document.querySelectorAll('.story-panel'));
const storyDots = Array.from(document.querySelectorAll('#storyDots .dot'));
const storyPrev = document.getElementById('storyPrev');
const storyNext = document.getElementById('storyNext');
let storyIndex = 0;

function setStory(index) {
  if (!storyPanels.length) return;
  storyIndex = (index + storyPanels.length) % storyPanels.length;
  storyPanels.forEach((panel, i) => panel.classList.toggle('active', i === storyIndex));
  storyDots.forEach((dot, i) => dot.classList.toggle('active', i === storyIndex));
}
if (storyPrev) storyPrev.addEventListener('click', () => setStory(storyIndex - 1));
if (storyNext) storyNext.addEventListener('click', () => setStory(storyIndex + 1));
storyDots.forEach(dot => dot.addEventListener('click', () => setStory(Number(dot.dataset.index))));
setInterval(() => setStory(storyIndex + 1), 6500);


const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];
const imageCache = new Map();

function testImage(path) {
  if (imageCache.has(path)) return imageCache.get(path);
  const promise = new Promise(resolve => {
    const probe = new Image();
    probe.onload = () => resolve(path);
    probe.onerror = () => resolve(null);
    probe.src = path;
  });
  imageCache.set(path, promise);
  return promise;
}

async function resolveImageForSlot(slot, fallback = 'assets/images/placeholder.svg') {
  const candidates = IMAGE_EXTENSIONS.map(ext => `image/${slot}.${ext}`);
  for (const candidate of candidates) {
    const ok = await testImage(candidate);
    if (ok) return ok;
  }
  const remote = Array.isArray(AURORA_REMOTE_IMAGES) ? AURORA_REMOTE_IMAGES[Number(slot) - 1] : null;
  if (remote) return remote;
  return fallback;
}

async function initDynamicPhotos() {
  const dynamicPhotos = Array.from(document.querySelectorAll('.dynamic-photo'));
  await Promise.all(dynamicPhotos.map(async img => {
    const slot = img.dataset.slot;
    const fallback = img.dataset.fallback || 'assets/images/placeholder.svg';
    const src = await resolveImageForSlot(slot, fallback);
    img.src = src;
    if (img.closest('.dynamic-gallery')) img.closest('.dynamic-gallery').dataset.full = src;
  }));
}

async function initFilmStrip() {
  const track = document.getElementById('filmStripTrack');
  if (!track) return;
  const items = [];
  for (let i = 1; i <= 10; i++) {
    const src = await resolveImageForSlot(i);
    items.push({ slot: i, src });
  }
  const renderItems = items.concat(items);
  track.innerHTML = renderItems.map((item, idx) => `
    <article class="film-frame${idx < 10 ? '' : ' clone'}">
      <div class="film-frame-inner">
        <img src="${item.src}" alt="Memory ${item.slot}">
        <span>0${item.slot}</span>
      </div>
    </article>
  `).join('');
}

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
function openLightbox(src) {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = src;
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
}
document.querySelectorAll('.gallery-card').forEach(card => {
  card.addEventListener('click', () => openLightbox(card.dataset.full || card.querySelector('img')?.src || 'assets/images/placeholder.svg'));
});
if (lightboxClose) lightboxClose.addEventListener('click', () => {
  lightbox.hidden = true;
  document.body.style.overflow = '';
});
if (lightbox) lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }
});

const GUESTBOOK_KEY = 'weddingGuestbookEntries';
function getGuestbookEntries() {
  try {
    return JSON.parse(localStorage.getItem(GUESTBOOK_KEY) || '[]');
  } catch {
    return [];
  }
}
function renderGuestbook() {
  const guestbookListEl = document.getElementById('guestbookList');
  if (!guestbookListEl) return;
  const dict = translations[currentLang] || translations.vi;
  const items = getGuestbookEntries();
  if (!items.length) {
    guestbookListEl.innerHTML = `<div class="guestbook-item"><p>${dict.guestbookEmpty}</p></div>`;
    return;
  }
  guestbookListEl.innerHTML = items.slice().reverse().map(item => `
    <div class="guestbook-item">
      <strong>${item.name}</strong>
      <p>${item.message}</p>
    </div>
  `).join('');
}
renderGuestbook();

if (rsvpForm) {
  rsvpForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('guestName').value.trim();
    const message = document.getElementById('guestWish').value.trim();
    if (!name || !message) return;
    const items = getGuestbookEntries();
    items.push({ name, message, ts: Date.now() });
    localStorage.setItem(GUESTBOOK_KEY, JSON.stringify(items.slice(-20)));
    thanks.hidden = false;
    renderGuestbook();
    rsvpForm.reset();
    burstFallingItems(18);
  });
}

function createSkyLantern() {
  const lantern = document.createElement('span');
  lantern.className = 'sky-lantern';
  lantern.style.left = `${8 + Math.random() * 84}vw`;
  lantern.style.opacity = `${0.2 + Math.random() * 0.28}`;
  lantern.style.setProperty('--lx', `${(Math.random() - 0.5) * 160}px`);
  lantern.style.setProperty('--lr', `${(Math.random() - 0.5) * 18}deg`);
  lantern.style.animationDuration = `${10 + Math.random() * 8}s`;
  floatingLayer.appendChild(lantern);
  lantern.addEventListener('animationend', () => lantern.remove());
}
setInterval(createSkyLantern, 2300);

function createButterfly() {
  const butterfly = document.createElement('span');
  butterfly.className = 'butterfly';
  butterfly.style.left = `${5 + Math.random() * 90}vw`;
  butterfly.style.top = `${80 + Math.random() * 20}vh`;
  butterfly.style.opacity = `${0.22 + Math.random() * 0.26}`;
  butterfly.style.setProperty('--bx', `${(Math.random() - 0.5) * 260}px`);
  butterfly.style.animationDuration = `${8 + Math.random() * 8}s`;
  floatingLayer.appendChild(butterfly);
  butterfly.addEventListener('animationend', () => butterfly.remove());
}
setInterval(createButterfly, 3600);

const hero = document.querySelector('.hero');
const parallaxEls = document.querySelectorAll('.hero-moon, .mythic, .hero-cloud, .hero-bokeh, .hero-lanterns');
if (hero) {
  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    parallaxEls.forEach((el, idx) => {
      const factor = (idx % 5 + 1) * 4;
      el.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
  });
  hero.addEventListener('mouseleave', () => {
    parallaxEls.forEach(el => el.style.transform = '');
  });
}

initDynamicPhotos().then(initFilmStrip).catch(console.warn);

document.addEventListener('click', e => {
  const frame = e.target.closest('.film-frame');
  if (frame) {
    const img = frame.querySelector('img');
    if (img) openLightbox(img.src);
  }
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightbox && !lightbox.hidden) {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }
  if (e.key === 'Enter' && document.activeElement === openInvite) openCurtain();
});
