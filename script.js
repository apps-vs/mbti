/**
 * ============================================================
 *  اختبارات الشخصية – المنطق الرئيسي
 *  الإصدار: 1.0
 *  الوصف: SPA كامل لاختبار الشخصية مع نتائج مفصلة
 * ============================================================
 */

/* ─── بيانات الشخصيات ─────────────────────────────────── */
const PERSONALITIES = {
  leader: {
    id: 'leader',
    name: 'القائد',
    emoji: '🦁',
    color: '#6c63ff',
    tagline: 'ولدت لتقود',
    description: 'أنت شخصية قيادية طبيعية تتمتع بثقة عالية في النفس وقدرة فائقة على اتخاذ القرارات الصعبة. تستمتع بتحمّل المسؤولية وتحفيز من حولك لتحقيق أهداف أكبر. تتميز بالحزم والوضوح في الرؤية، وقدرتك على إلهام الفريق تجعلك أصلاً ثميناً في أي مكان.',
    strengths: ['القيادة وتحفيز الآخرين', 'اتخاذ القرارات بسرعة وحزم', 'التفكير الاستراتيجي', 'الثقة بالنفس', 'إدارة المشاريع الكبرى'],
    weaknesses: ['صعوبة في التفويض', 'قد يبدو سلطوياً أحياناً', 'الميل للكمالية', 'صعوبة قبول النقد'],
    careers: ['مدير تنفيذي', 'رائد أعمال', 'مدير مشروع', 'ضابط عسكري', 'محامٍ', 'سياسي'],
  },
  creative: {
    id: 'creative',
    name: 'المبدع',
    emoji: '🎨',
    color: '#f59e0b',
    tagline: 'تصنع الجمال من لا شيء',
    description: 'عقلك الإبداعي يرى الأشياء من زوايا مختلفة تماماً عن بقية الناس. تجد في الفن والابتكار والتعبير الحر ملجأك ومتنفسك. تمتلك مخيلة خصبة وقدرة على تحويل الأفكار المجردة إلى أشياء ملموسة ومذهلة. تزدهر في البيئات التي تمنحك الحرية للتجريب.',
    strengths: ['الإبداع والابتكار', 'التفكير خارج الصندوق', 'الحساسية العالية', 'التعبير عن المشاعر', 'حل المشكلات بطرق غير تقليدية'],
    weaknesses: ['صعوبة الالتزام بالروتين', 'قد يفقد التركيز بسرعة', 'الحساسية الزائدة', 'صعوبة التعامل مع القواعد الصارمة'],
    careers: ['مصمم جرافيك', 'فنان', 'كاتب', 'منتج أفلام', 'مصمم أزياء', 'معماري', 'مطور ألعاب'],
  },
  analyst: {
    id: 'analyst',
    name: 'المحلل',
    emoji: '🔬',
    color: '#10b981',
    tagline: 'الأرقام لا تكذب',
    description: 'عقلك التحليلي هو أقوى أسلحتك. تحب التعمق في التفاصيل واستخراج الأنماط الخفية من الأرقام والبيانات. تتخذ قراراتك بناءً على الأدلة والمنطق لا على العاطفة. تتميز بدقتك الشديدة وقدرتك على رؤية الصورة الكاملة والتفاصيل الدقيقة في آنٍ واحد.',
    strengths: ['التحليل المعمق للبيانات', 'التفكير المنطقي والنقدي', 'الدقة والانتباه للتفاصيل', 'حل المشكلات المعقدة', 'الموضوعية في الحكم'],
    weaknesses: ['قد يبدو بارداً عاطفياً', 'الإفراط في التحليل والتردد', 'صعوبة العمل بمعلومات ناقصة', 'التواصل الاجتماعي يستنزفه'],
    careers: ['عالم بيانات', 'محلل مالي', 'دكتور/باحث', 'مبرمج', 'مهندس', 'محاسب', 'اقتصادي'],
  },
  social: {
    id: 'social',
    name: 'الاجتماعي',
    emoji: '🤝',
    color: '#ef4444',
    tagline: 'قلبك منفتح على الجميع',
    description: 'أنت تمتلك موهبة نادرة في بناء العلاقات الإنسانية وجعل الناس يشعرون بالراحة والتقدير. طاقتك الاجتماعية لا تنضب، وتجد في التواصل مع الآخرين مصدراً للسعادة والإلهام. تتميز بالتعاطف والقدرة على قراءة مشاعر الناس، مما يجعلك محبوباً في كل مكان.',
    strengths: ['بناء العلاقات بسهولة', 'التعاطف والذكاء العاطفي', 'التواصل والإقناع', 'العمل الجماعي', 'تحفيز الآخرين'],
    weaknesses: ['صعوبة قول "لا"', 'تأثر شديد بآراء الآخرين', 'إهمال الذات أحياناً', 'صعوبة البقاء وحيداً لفترة طويلة'],
    careers: ['معالج نفسي', 'مدرّس', 'مدير موارد بشرية', 'ممثل مبيعات', 'طبيب', 'عامل اجتماعي', 'مقدم برامج'],
  },
  organizer: {
    id: 'organizer',
    name: 'المنظّم',
    emoji: '📋',
    color: '#3b82f6',
    tagline: 'النظام هو قوتك',
    description: 'تمتلك موهبة استثنائية في تنظيم الفوضى وتحويلها إلى نظام محكم. تؤمن بأن كل شيء له مكانه وكل عمل له وقته. تخطط بعناية فائقة وتلتزم بالمواعيد والخطط المرسومة. قدرتك على إدارة المهام المتعددة وإيجاد أنظمة فعّالة تجعلك العمود الفقري لأي فريق.',
    strengths: ['التخطيط والتنظيم المحكم', 'الالتزام بالمواعيد', 'إدارة الوقت والموارد', 'الموثوقية والدقة', 'بناء الأنظمة والإجراءات'],
    weaknesses: ['صعوبة التكيف مع التغييرات المفاجئة', 'الانزعاج من الفوضى', 'صعوبة التلقائية', 'الانتقادية الزائدة'],
    careers: ['مدير عمليات', 'محاسب', 'مخطط مشاريع', 'مدير مكتب', 'لوجستي', 'محامٍ', 'مدير جودة'],
  }
};

/* ─── بيانات الأسئلة ──────────────────────────────────── */
const QUESTIONS = [
  {
    id: 1,
    icon: '🌅',
    category: 'طاقة اجتماعية',
    text: 'في عطلة نهاية الأسبوع، ما الذي تفضله أكثر؟',
    options: [
      { text: 'تنظيم مجموعة وقيادة نشاط جماعي', scores: { leader: 3, social: 1 } },
      { text: 'حضور حفلة أو تجمع اجتماعي كبير', scores: { social: 3, creative: 1 } },
      { text: 'قراءة كتاب أو تعلم شيء جديد', scores: { analyst: 3, organizer: 1 } },
      { text: 'العمل على مشروع إبداعي شخصي', scores: { creative: 3, analyst: 1 } },
      { text: 'التخطيط لأهداف الأسبوع القادم', scores: { organizer: 3, leader: 1 } },
    ]
  },
  {
    id: 2,
    icon: '💬',
    category: 'أسلوب التواصل',
    text: 'عندما تواجه مشكلة صعبة، ما هو أول شيء تفعله؟',
    options: [
      { text: 'أتخذ قراراً فورياً وأتصرف', scores: { leader: 3, organizer: 1 } },
      { text: 'أجمع البيانات وأحلل الوضع بعمق', scores: { analyst: 3, organizer: 1 } },
      { text: 'أتحدث مع أصدقائي للحصول على آراء', scores: { social: 3, creative: 1 } },
      { text: 'أبحث عن حل إبداعي غير تقليدي', scores: { creative: 3, analyst: 1 } },
      { text: 'أضع خطة منظمة خطوة بخطوة', scores: { organizer: 3, leader: 1 } },
    ]
  },
  {
    id: 3,
    icon: '🏆',
    category: 'الدوافع',
    text: 'ما الذي يحفزك أكثر للعمل بجد؟',
    options: [
      { text: 'تحقيق نجاح كبير والوصول للقمة', scores: { leader: 3, organizer: 1 } },
      { text: 'خلق شيء جميل ومميز وجديد', scores: { creative: 3, social: 1 } },
      { text: 'فهم كيف تعمل الأشياء وحل الألغاز', scores: { analyst: 3, creative: 1 } },
      { text: 'مساعدة الناس وإسعادهم', scores: { social: 3, analyst: 1 } },
      { text: 'إنجاز كل شيء بالكمال وبشكل صحيح', scores: { organizer: 3, analyst: 1 } },
    ]
  },
  {
    id: 4,
    icon: '🎭',
    category: 'العلاقات',
    text: 'يصفك أصدقاؤك المقربون بأنك...',
    options: [
      { text: 'قوي الشخصية ومثير للإعجاب', scores: { leader: 3, social: 1 } },
      { text: 'مبدع وممتع ومفاجئ دائماً', scores: { creative: 3, social: 1 } },
      { text: 'ذكي وعميق ومثير للتفكير', scores: { analyst: 3, creative: 1 } },
      { text: 'دافئ ومتعاطف وداعم', scores: { social: 3, organizer: 1 } },
      { text: 'موثوق ومنظم وملتزم', scores: { organizer: 3, leader: 1 } },
    ]
  },
  {
    id: 5,
    icon: '💼',
    category: 'بيئة العمل',
    text: 'ما بيئة العمل المثالية بالنسبة لك؟',
    options: [
      { text: 'بيئة تنافسية حيث أنا المسؤول عن الفريق', scores: { leader: 3, organizer: 1 } },
      { text: 'استديو إبداعي حر بدون قيود كثيرة', scores: { creative: 3, social: 1 } },
      { text: 'مختبر بحثي هادئ للتعمق في التفاصيل', scores: { analyst: 3, organizer: 1 } },
      { text: 'فريق متناغم يعمل سوياً نحو هدف مشترك', scores: { social: 3, leader: 1 } },
      { text: 'مكتب منظم بعمليات وإجراءات واضحة', scores: { organizer: 3, analyst: 1 } },
    ]
  },
  {
    id: 6,
    icon: '😤',
    category: 'ردود الأفعال',
    text: 'عندما يختلف معك أحد في الرأي، كيف تتصرف؟',
    options: [
      { text: 'أدافع عن موقفي بقوة وثقة', scores: { leader: 3, analyst: 1 } },
      { text: 'أبحث عن طريقة إبداعية للتوفيق بين الرأيين', scores: { creative: 3, social: 1 } },
      { text: 'أقدم حججاً منطقية وأدلة تدعم وجهتي', scores: { analyst: 3, leader: 1 } },
      { text: 'أستمع باهتمام وأحاول فهم وجهة نظره', scores: { social: 3, organizer: 1 } },
      { text: 'أرجع للقواعد والأنظمة المتفق عليها', scores: { organizer: 3, analyst: 1 } },
    ]
  },
  {
    id: 7,
    icon: '📚',
    category: 'التعلم',
    text: 'ما الكتاب الذي تفضل قراءته؟',
    options: [
      { text: 'كتاب عن قصص نجاح قادة ورجال أعمال عظماء', scores: { leader: 3, organizer: 1 } },
      { text: 'رواية خيالية أو كتاب فن وإبداع', scores: { creative: 3, social: 1 } },
      { text: 'كتاب علمي أو تقني يوسع المعرفة', scores: { analyst: 3, creative: 1 } },
      { text: 'كتاب عن التنمية البشرية والعلاقات الإنسانية', scores: { social: 3, analyst: 1 } },
      { text: 'دليل عملي وشامل عن الإنتاجية والتنظيم', scores: { organizer: 3, leader: 1 } },
    ]
  },
  {
    id: 8,
    icon: '⏰',
    category: 'إدارة الوقت',
    text: 'كيف تتعامل مع المواعيد النهائية للمشاريع؟',
    options: [
      { text: 'أنجزها مبكراً وبشكل كامل لا تنقصه شيء', scores: { organizer: 3, leader: 1 } },
      { text: 'أبدع في اللحظة الأخيرة تحت الضغط', scores: { creative: 3, leader: 1 } },
      { text: 'أحلل الوقت اللازم وأقسّم العمل بدقة', scores: { analyst: 3, organizer: 1 } },
      { text: 'أتعاون مع الفريق لإنجازها معاً', scores: { social: 3, organizer: 1 } },
      { text: 'أضع خطة واضحة وأقود الفريق نحو الهدف', scores: { leader: 3, analyst: 1 } },
    ]
  },
  {
    id: 9,
    icon: '🌍',
    category: 'القيم',
    text: 'ما الذي تعتقد أنه الأهم في الحياة؟',
    options: [
      { text: 'التأثير في الآخرين وترك إرث يبقى', scores: { leader: 3, social: 1 } },
      { text: 'التعبير الحر عن الذات والإبداع', scores: { creative: 3, analyst: 1 } },
      { text: 'فهم الحقيقة واكتشاف المعرفة', scores: { analyst: 3, creative: 1 } },
      { text: 'بناء علاقات عميقة ومعنوية مع الآخرين', scores: { social: 3, leader: 1 } },
      { text: 'العيش بنظام وانضباط وتحقيق الأهداف بخطوات ثابتة', scores: { organizer: 3, analyst: 1 } },
    ]
  },
  {
    id: 10,
    icon: '😰',
    category: 'ردود الأفعال',
    text: 'ما الذي يسبب لك القلق والتوتر الأكبر؟',
    options: [
      { text: 'فقدان السيطرة وعدم القدرة على التأثير', scores: { leader: 3, organizer: 1 } },
      { text: 'الرتابة والملل وغياب التجديد', scores: { creative: 3, social: 1 } },
      { text: 'اتخاذ قرار بمعلومات غير كافية', scores: { analyst: 3, organizer: 1 } },
      { text: 'الخلاف مع الناس ورفض من أحبهم', scores: { social: 3, creative: 1 } },
      { text: 'الفوضى وعدم الوضوح في الأدوار والمسؤوليات', scores: { organizer: 3, leader: 1 } },
    ]
  },
  {
    id: 11,
    icon: '🎉',
    category: 'الاجتماعيات',
    text: 'كيف تشعر بعد يوم حافل بالتفاعل الاجتماعي؟',
    options: [
      { text: 'متحمس ومشحون بطاقة إيجابية', scores: { social: 3, leader: 1 } },
      { text: 'بحاجة لبعض الوقت وحدي لإعادة الشحن', scores: { analyst: 2, organizer: 2 } },
      { text: 'مُلهَم بأفكار جديدة من تنوع الناس', scores: { creative: 3, social: 1 } },
      { text: 'راضٍ لأنني أسهمت في إسعاد من حولي', scores: { social: 3, analyst: 1 } },
      { text: 'متعب قليلاً لكنني مُنجزت ما أردت', scores: { leader: 3, organizer: 1 } },
    ]
  },
  {
    id: 12,
    icon: '💡',
    category: 'التفكير',
    text: 'عندما تحل مشكلة، أيّ المقاربات تناسبك؟',
    options: [
      { text: 'أتخذ قراراً سريعاً وأعدّل حسب النتائج', scores: { leader: 3, creative: 1 } },
      { text: 'أُجرّب طرقاً مختلفة وغير تقليدية', scores: { creative: 3, leader: 1 } },
      { text: 'أدرس كل المعطيات قبل أي خطوة', scores: { analyst: 3, organizer: 1 } },
      { text: 'أستشير الآخرين وأبني على آرائهم', scores: { social: 3, organizer: 1 } },
      { text: 'أتبع منهجاً منظماً ومُثبتاً يعمل', scores: { organizer: 3, analyst: 1 } },
    ]
  },
  {
    id: 13,
    icon: '🎯',
    category: 'الأهداف',
    text: 'ما الهدف الذي تتمنى تحقيقه خلال السنوات الخمس القادمة؟',
    options: [
      { text: 'أن أقود فريقاً أو أُؤسس مشروعاً ناجحاً', scores: { leader: 3, organizer: 1 } },
      { text: 'أن أصنع عملاً إبداعياً يلفت الأنظار', scores: { creative: 3, social: 1 } },
      { text: 'أن أتخصص وأُصبح خبيراً في مجالي', scores: { analyst: 3, organizer: 1 } },
      { text: 'أن أكون محاطاً بمجتمع داعم وأُحدث أثراً إيجابياً', scores: { social: 3, leader: 1 } },
      { text: 'أن أبني حياة مستقرة ومُنظمة بشكل مثالي', scores: { organizer: 3, analyst: 1 } },
    ]
  },
  {
    id: 14,
    icon: '😌',
    category: 'أسلوب الحياة',
    text: 'كيف تفضل قضاء إجازتك المثالية؟',
    options: [
      { text: 'رحلة مغامرة مليئة بالتحديات والاكتشاف', scores: { leader: 3, creative: 1 } },
      { text: 'جولة فنية وثقافية في مدن مجهولة', scores: { creative: 3, analyst: 1 } },
      { text: 'زيارة متاحف وقراءة وتوسيع المعرفة', scores: { analyst: 3, creative: 1 } },
      { text: 'التجمع مع العائلة والأصدقاء الأعزاء', scores: { social: 3, organizer: 1 } },
      { text: 'الراحة بجدول مُخطط مسبقاً وبدون مفاجآت', scores: { organizer: 3, analyst: 1 } },
    ]
  },
  {
    id: 15,
    icon: '⭐',
    category: 'القيادة',
    text: 'في مشروع جماعي، ما دورك الطبيعي الذي تجد نفسك فيه؟',
    options: [
      { text: 'قائد الفريق الذي يحدد الاتجاه ويتخذ القرارات', scores: { leader: 3, organizer: 1 } },
      { text: 'المبدع الذي يطرح أفكاراً جديدة وغير متوقعة', scores: { creative: 3, leader: 1 } },
      { text: 'المحلل الذي يُقيّم الخيارات ويتجنب الأخطاء', scores: { analyst: 3, organizer: 1 } },
      { text: 'منسق الفريق الذي يحافظ على التناغم بين الأعضاء', scores: { social: 3, analyst: 1 } },
      { text: 'المُنظّم الذي يضع الخطة ويتابع التنفيذ', scores: { organizer: 3, leader: 1 } },
    ]
  },
];

/* ─── حالة التطبيق ────────────────────────────────────── */
const state = {
  currentQuestion: 0,
  answers: {},          // { questionIndex: optionIndex }
  scores: {},           // { personalityId: score }
  soundEnabled: true,
  darkMode: false,
  result: null,
};

/* ─── مراجع DOM ──────────────────────────────────────── */
const $ = id => document.getElementById(id);
const DOM = {
  loadingScreen:     $('loading-screen'),
  loadingBar:        $('loading-bar'),
  homeSection:       $('home-section'),
  quizSection:       $('quiz-section'),
  resultSection:     $('result-section'),
  startBtn:          $('start-btn'),
  prevBtn:           $('prev-btn'),
  nextBtn:           $('next-btn'),
  progressBar:       $('progress-bar'),
  progressFraction:  $('progress-fraction'),
  qNumber:           $('q-number'),
  qCategory:         $('q-category'),
  qIcon:             $('q-icon'),
  questionText:      $('question-text'),
  optionsContainer:  $('options-container'),
  questionCard:      $('question-card'),
  themeToggle:       $('theme-toggle'),
  soundToggle:       $('sound-toggle'),
  restartBtn:        $('restart-btn'),
  shareBtn:          $('share-btn'),
  copyLinkBtn:       $('copy-link-btn'),
  shareModal:        $('share-modal'),
  closeModal:        $('close-modal'),
  shareWhatsapp:     $('share-whatsapp'),
  shareTwitter:      $('share-twitter'),
  shareTelegram:     $('share-telegram'),
  shareTextPreview:  $('share-text-preview'),
  copyTextBtn:       $('copy-text-btn'),
  savedResultBanner: $('saved-result-banner'),
  savedResultText:   $('saved-result-text'),
  viewSavedBtn:      $('view-saved-btn'),
  toastContainer:    $('toast-container'),
  resultEmoji:       $('result-emoji'),
  resultTypeBadge:   $('result-type-badge'),
  resultTitle:       $('result-title'),
  resultSubtitle:    $('result-subtitle'),
  resultDescription: $('result-description'),
  resultStrengths:   $('result-strengths'),
  resultWeaknesses:  $('result-weaknesses'),
  resultCareers:     $('result-careers'),
  scoresChart:       $('scores-chart'),
  otherPersonalities:$('other-personalities'),
  historySection:    $('history-section'),
  historyList:       $('history-list'),
};

/* ─── مؤثرات صوتية ────────────────────────────────────── */
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) audioCtx = new AudioCtx();
  return audioCtx;
}

function playTone(frequency = 440, duration = 0.1, type = 'sine', volume = 0.15) {
  if (!state.soundEnabled) return;
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = type;
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {}
}

const Sound = {
  select:   () => playTone(600, 0.08, 'sine', 0.1),
  next:     () => playTone(700, 0.1, 'triangle', 0.12),
  prev:     () => playTone(500, 0.08, 'sine', 0.08),
  complete: () => {
    [440, 554, 659, 880].forEach((f, i) =>
      setTimeout(() => playTone(f, 0.18, 'sine', 0.12), i * 120)
    );
  },
};

/* ─── شاشة التحميل ────────────────────────────────────── */
function runLoadingScreen() {
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 18;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(hideLoading, 400);
    }
    DOM.loadingBar.style.width = progress + '%';
  }, 80);
}

function hideLoading() {
  DOM.loadingScreen.classList.add('hidden');
}

/* ─── التنقل بين الأقسام ──────────────────────────────── */
function showSection(id) {
  ['home-section', 'quiz-section', 'result-section'].forEach(sid => {
    const el = $(sid);
    el.classList.remove('active');
    el.style.display = 'none';
  });
  const target = $(id);
  target.style.display = 'block';
  // re-trigger animation
  target.classList.remove('active');
  void target.offsetWidth;
  target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ─── الأسئلة ────────────────────────────────────────── */
function startQuiz() {
  state.currentQuestion = 0;
  state.answers = {};
  state.scores = Object.fromEntries(Object.keys(PERSONALITIES).map(k => [k, 0]));
  showSection('quiz-section');
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[state.currentQuestion];
  const total = QUESTIONS.length;
  const current = state.currentQuestion + 1;

  // تحديث شريط التقدم
  DOM.progressBar.style.width = ((current - 1) / total * 100) + '%';
  DOM.progressFraction.textContent = current + ' / ' + total;
  DOM.qNumber.innerHTML = 'السؤال <b>' + current + '</b>';
  DOM.qCategory.textContent = q.category;
  DOM.qIcon.textContent = q.icon;
  DOM.questionText.textContent = q.text;

  // تأثير ظهور البطاقة
  DOM.questionCard.style.opacity = '0';
  DOM.questionCard.style.transform = 'translateY(16px)';
  setTimeout(() => {
    DOM.questionCard.style.transition = 'all 0.35s ease';
    DOM.questionCard.style.opacity = '1';
    DOM.questionCard.style.transform = 'translateY(0)';
  }, 20);

  // رسم الخيارات
  DOM.optionsContainer.innerHTML = '';
  const letters = ['أ', 'ب', 'ج', 'د', 'هـ'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (state.answers[state.currentQuestion] === i ? ' selected' : '');
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span class="opt-text">${opt.text}</span>`;
    btn.addEventListener('click', () => selectOption(i));
    DOM.optionsContainer.appendChild(btn);
  });

  // أزرار التنقل
  DOM.prevBtn.disabled = (state.currentQuestion === 0);
  const answered = state.answers[state.currentQuestion] !== undefined;
  DOM.nextBtn.disabled = !answered;
  const isLast = state.currentQuestion === total - 1;
  DOM.nextBtn.innerHTML = isLast
    ? '<i class="fas fa-check-circle"></i> عرض النتيجة'
    : 'التالي <i class="fas fa-arrow-left"></i>';
}

function selectOption(optionIndex) {
  Sound.select();
  state.answers[state.currentQuestion] = optionIndex;
  // تحديث واجهة الخيارات
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === optionIndex);
  });
  DOM.nextBtn.disabled = false;
}

function goNext() {
  if (state.answers[state.currentQuestion] === undefined) return;
  Sound.next();
  if (state.currentQuestion < QUESTIONS.length - 1) {
    state.currentQuestion++;
    renderQuestion();
  } else {
    finalizeQuiz();
  }
}

function goPrev() {
  if (state.currentQuestion > 0) {
    Sound.prev();
    state.currentQuestion--;
    renderQuestion();
  }
}

/* ─── تحليل النتائج ──────────────────────────────────── */
function finalizeQuiz() {
  // حساب النقاط
  state.scores = Object.fromEntries(Object.keys(PERSONALITIES).map(k => [k, 0]));
  QUESTIONS.forEach((q, qi) => {
    const ans = state.answers[qi];
    if (ans === undefined) return;
    const optScores = q.options[ans].scores;
    Object.entries(optScores).forEach(([pid, pts]) => {
      state.scores[pid] = (state.scores[pid] || 0) + pts;
    });
  });

  // تحديد الشخصية الفائزة
  const winner = Object.entries(state.scores).sort((a, b) => b[1] - a[1])[0][0];
  state.result = PERSONALITIES[winner];
  Sound.complete();

  // حفظ في التاريخ المحلي
  saveResultToHistory(state.result, state.scores);

  // عرض صفحة النتائج
  showSection('result-section');
  renderResult(state.result, state.scores);
}

/* ─── عرض النتائج ────────────────────────────────────── */
function renderResult(p, scores) {
  DOM.resultEmoji.textContent = p.emoji;
  DOM.resultTypeBadge.textContent = 'شخصية ' + p.name;
  DOM.resultTitle.textContent = p.name + ' ' + p.emoji;
  DOM.resultSubtitle.textContent = p.tagline;
  DOM.resultDescription.textContent = p.description;

  // نقاط القوة
  DOM.resultStrengths.innerHTML = p.strengths.map(s => `<li>${s}</li>`).join('');

  // نقاط الضعف
  DOM.resultWeaknesses.innerHTML = p.weaknesses.map(w => `<li>${w}</li>`).join('');

  // الوظائف
  DOM.resultCareers.innerHTML = p.careers
    .map(c => `<span class="career-tag"><i class="fas fa-check"></i>${c}</span>`)
    .join('');

  // مخطط النقاط
  renderScoresChart(scores);

  // الشخصيات الأخرى
  renderOtherPersonalities(p.id);

  // التاريخ
  renderHistory();
}

function renderScoresChart(scores) {
  const total = Math.max(...Object.values(scores), 1);
  const colors = {
    leader: '#6c63ff', creative: '#f59e0b',
    analyst: '#10b981', social: '#ef4444', organizer: '#3b82f6'
  };
  const names = {
    leader: 'القائد', creative: 'المبدع',
    analyst: 'المحلل', social: 'الاجتماعي', organizer: 'المنظم'
  };

  DOM.scoresChart.innerHTML = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([id, score]) => {
      const pct = Math.round((score / total) * 100);
      return `
        <div class="score-row">
          <span class="score-label">${names[id]}</span>
          <div class="score-bar-track">
            <div class="score-bar-fill" data-width="${pct}" style="background:${colors[id]};width:0%"></div>
          </div>
          <span class="score-value">${score}</span>
        </div>`;
    })
    .join('');

  // تحريك الأشرطة بعد الرسم
  setTimeout(() => {
    document.querySelectorAll('.score-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
  }, 200);
}

function renderOtherPersonalities(currentId) {
  DOM.otherPersonalities.innerHTML = Object.values(PERSONALITIES)
    .filter(p => p.id !== currentId)
    .map(p => `
      <div class="other-personality-card" onclick="showPersonalityInfo('${p.id}')">
        <span class="op-emoji">${p.emoji}</span>
        <div class="op-name">${p.name}</div>
      </div>
    `)
    .join('');
}

function showPersonalityInfo(pid) {
  const p = PERSONALITIES[pid];
  showToast(`${p.emoji} ${p.name}: ${p.tagline}`, 'default', 3500);
}

/* ─── التاريخ المحلي ─────────────────────────────────── */
const STORAGE_KEY = 'personality_quiz_history';

function saveResultToHistory(p, scores) {
  const history = getHistory();
  const entry = {
    id: p.id,
    name: p.name,
    emoji: p.emoji,
    scores,
    date: new Date().toLocaleDateString('ar-SA'),
    timestamp: Date.now(),
  };
  history.unshift(entry);
  // احتفظ بآخر 5 نتائج فقط
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 5)));
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch { return []; }
}

function renderHistory() {
  const history = getHistory();
  if (history.length < 2) {
    DOM.historySection.classList.add('hidden');
    return;
  }
  DOM.historySection.classList.remove('hidden');
  DOM.historyList.innerHTML = history
    .map(h => `
      <div class="history-item">
        <span class="h-emoji">${h.emoji}</span>
        <div class="h-info">
          <div class="h-name">${h.name}</div>
          <div class="h-date">${h.date}</div>
        </div>
      </div>
    `)
    .join('');
}

function checkSavedResult() {
  const history = getHistory();
  if (history.length > 0) {
    const last = history[0];
    DOM.savedResultBanner.classList.remove('hidden');
    DOM.savedResultText.textContent = `آخر نتيجة: ${last.emoji} ${last.name}`;
  }
}

/* ─── الوضع الليلي ────────────────────────────────────── */
function toggleTheme() {
  state.darkMode = !state.darkMode;
  document.body.classList.toggle('dark-mode', state.darkMode);
  const icon = DOM.themeToggle.querySelector('i');
  icon.className = state.darkMode ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('dark_mode', state.darkMode ? '1' : '0');
  showToast(state.darkMode ? '🌙 الوضع الليلي مُفعَّل' : '☀️ الوضع النهاري مُفعَّل');
}

function loadThemePreference() {
  state.darkMode = localStorage.getItem('dark_mode') === '1';
  document.body.classList.toggle('dark-mode', state.darkMode);
  const icon = DOM.themeToggle.querySelector('i');
  icon.className = state.darkMode ? 'fas fa-sun' : 'fas fa-moon';
}

/* ─── الصوت ──────────────────────────────────────────── */
function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  const icon = DOM.soundToggle.querySelector('i');
  icon.className = state.soundEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
  showToast(state.soundEnabled ? '🔊 الصوت مُفعَّل' : '🔇 الصوت مُوقف');
  if (state.soundEnabled) Sound.select();
}

/* ─── المشاركة ────────────────────────────────────────── */
function openShareModal() {
  const p = state.result;
  if (!p) return;
  const text = `اكتشفت أن شخصيتي هي "${p.name}" ${p.emoji}\n"${p.tagline}"\n\nاكتشف شخصيتك أنت أيضاً! 🧠`;
  DOM.shareTextPreview.textContent = text;

  const encoded = encodeURIComponent(text);
  const url = encodeURIComponent(window.location.href);
  DOM.shareWhatsapp.href = `https://wa.me/?text=${encoded}`;
  DOM.shareTwitter.href  = `https://twitter.com/intent/tweet?text=${encoded}&url=${url}`;
  DOM.shareTelegram.href = `https://t.me/share/url?url=${url}&text=${encoded}`;

  DOM.shareModal.classList.remove('hidden');
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href)
    .then(() => showToast('✅ تم نسخ الرابط', 'success'))
    .catch(() => showToast('❌ تعذّر النسخ', 'error'));
}

function copyShareText() {
  const text = DOM.shareTextPreview.textContent;
  navigator.clipboard.writeText(text)
    .then(() => { showToast('✅ تم نسخ النص', 'success'); closeShareModal(); })
    .catch(() => showToast('❌ تعذّر النسخ', 'error'));
}

function closeShareModal() {
  DOM.shareModal.classList.add('hidden');
}

/* ─── Toast ──────────────────────────────────────────── */
function showToast(msg, type = 'default', duration = 2500) {
  const el = document.createElement('div');
  el.className = `toast${type !== 'default' ? ' ' + type : ''}`;
  el.innerHTML = msg;
  DOM.toastContainer.appendChild(el);
  setTimeout(() => {
    el.classList.add('removing');
    el.addEventListener('animationend', () => el.remove());
  }, duration);
}

/* ─── ربط الأحداث ────────────────────────────────────── */
function bindEvents() {
  DOM.startBtn.addEventListener('click', startQuiz);
  DOM.nextBtn.addEventListener('click', goNext);
  DOM.prevBtn.addEventListener('click', goPrev);
  DOM.themeToggle.addEventListener('click', toggleTheme);
  DOM.soundToggle.addEventListener('click', toggleSound);
  DOM.restartBtn.addEventListener('click', () => showSection('home-section'));
  DOM.shareBtn.addEventListener('click', openShareModal);
  DOM.copyLinkBtn.addEventListener('click', copyLink);
  DOM.closeModal.addEventListener('click', closeShareModal);
  DOM.shareModal.addEventListener('click', e => { if (e.target === DOM.shareModal) closeShareModal(); });
  DOM.copyTextBtn.addEventListener('click', copyShareText);
  DOM.viewSavedBtn?.addEventListener('click', () => {
    const history = getHistory();
    if (history.length > 0) {
      const last = history[0];
      state.result = PERSONALITIES[last.id];
      state.scores = last.scores || {};
      showSection('result-section');
      renderResult(state.result, state.scores);
    }
  });

  // لوحة المفاتيح
  document.addEventListener('keydown', e => {
    if (DOM.quizSection.classList.contains('active')) {
      const num = parseInt(e.key);
      if (num >= 1 && num <= 5 && QUESTIONS[state.currentQuestion]?.options[num - 1]) {
        selectOption(num - 1);
      }
      if (e.key === 'ArrowLeft' || e.key === 'Enter') {
        if (!DOM.nextBtn.disabled) goNext();
      }
      if (e.key === 'ArrowRight') {
        if (!DOM.prevBtn.disabled) goPrev();
      }
    }
  });
}

/* ─── نقطة الدخول ────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  loadThemePreference();
  checkSavedResult();
  bindEvents();
  runLoadingScreen();
});

/* ============================================================
   CHECKLIST – ما تم تنفيذه:
   ✅ تصميم RTL عربي كامل
   ✅ Mobile First متجاوب مع الهاتف
   ✅ SPA – بدون إعادة تحميل
   ✅ 15 سؤال متعدد الخيارات
   ✅ 5 أنواع شخصية مع وصف كامل
   ✅ شريط تقدم Progress Bar
   ✅ نقاط القوة والضعف لكل شخصية
   ✅ أفضل الوظائف المناسبة
   ✅ مخطط النقاط بالأشرطة
   ✅ عرض الشخصيات الأخرى للمقارنة
   ✅ Dark Mode نظام كامل
   ✅ مؤثرات صوتية خفيفة
   ✅ شاشة تحميل بسيطة
   ✅ حفظ النتائج في localStorage
   ✅ تاريخ الاختبارات السابقة
   ✅ مشاركة النتائج (واتساب / تويتر / تيليجرام)
   ✅ نسخ الرابط والنص
   ✅ Toast الإشعارات
   ✅ دعم لوحة المفاتيح
   ✅ SEO أساسي في HTML
   ✅ كود منظم ومعلّق
   ✅ تصميم Glassmorphism
   ✅ انتقالات وتأثيرات سلسة

   ما يمكن إضافته مستقبلاً:
   ☐ تصدير النتيجة كصورة PNG
   ☐ مقارنة شخصيتين بالتفصيل
   ☐ أسئلة إضافية وتصنيفات أعمق
   ☐ دعم متعدد اللغات
   ☐ تسجيل الدخول وحفظ سحابي
   ☐ نظام شارات ومستويات
============================================================ */
