export default {
  'script-name': '«Удобные дискуссии»',
  'script-name-genitive': '«Удобных дискуссий»',
  'script-name-prepositional': '«Удобных дискуссиях»',
  'script-name-short': 'CD',

  'loading-ellipsis': 'Загрузка…',

  // Fill only if the phrase "reply to <Username>" sounds silly in your language (usually, because
  // the username lacks inflection), and "reply to user <Username>" is needed.
  'user-male-dative': 'участнику',
  'user-female-dative': 'участнице',
  'user-unknown-dative': 'участнику',

  'user-male-genitive': 'участника',
  'user-female-genitive': 'участницы',
  'user-unknown-genitive': 'участника',

  // Settings dialog
  'sd-title': 'Настройки {{int:convenientdiscussions-script-name-genitive}}',
  'sd-save': 'Сохранить',
  'sd-reload': 'Обновить',
  'sd-fieldset-notifications': 'Уведомления',
  'sd-fieldset-commentform': 'Форма ответа',
  'sd-alloweditotherscomments': 'Показывать ссылку на редактирование чужих сообщений',
  'sd-alwaysexpandsettings': 'Сразу раскрывать настройки при ответе',
  'sd-autopreview': 'Предпросматривать сообщение по мере набора',
  'sd-notifications': 'Обычные уведомления',
  'sd-notifications-radio-all': 'Об ответах на мои сообщения и о сообщениях в разделах, за которыми я слежу',
  'sd-notifications-radio-tome': 'Только об ответах на мои сообщения',
  'sd-notifications-radio-none': 'Никаких',
  'sd-notifications-help': 'Уведомления — маленькие окошки в правом верхнем углу страницы.',
  'sd-browsernotifications': 'Браузерные уведомления',
  'sd-browsernotifications-radio-all': 'Об ответах на мои сообщения и о сообщениях в разделах, за которыми я слежу',
  'sd-browsernotifications-radio-tome': 'Только об ответах на мои сообщения',
  'sd-browsernotifications-radio-none': 'Никаких',
  // $1 is a domain.
  'sd-browsernotifications-help': 'Браузерные уведомления сообщают о событиях на открытых, но скрытых из виду страницах. Чтобы их получать, вы должны разрешить отправку уведомлений для $1.',
  'sd-highlightowncomments': 'Подсвечивать мои сообщения',
  'sd-insertbuttons': 'Кнопки для панели быстрой вставки',
  'sd-insertbuttons-multiselect-placeholder': 'Добавить кнопку',
  'sd-insertbuttons-help': 'Используйте <code>+</code> для указания места, в которое должен быть помещён курсор после вставки текста, например <code>&#123;&#123;+&#125;&#125;</code>. Используйте <code>;</code>, чтобы указать отображаемый текст, отличный от вставляемого, например <code>&lt;code&gt;+&lt;/code&gt;;&lt;code /&gt;</code>. Используйте <code>&#92;</code> перед указанными символами, чтобы они вставлялись как есть, например <code>2&#92;+2</code>.',
  'sd-notificationsblacklist': 'Не уведомлять о сообщениях участников из списка',
  'sd-notificationsblacklist-multiselect-placeholder': 'Добавить участника',
  'sd-mysignature': 'Код подписи',
  'sd-mysignature-help': 'Должен содержать <code>~~'.concat('~~</code>. Обычно используется для добавления знаков перед подписью. Саму подпись следует редактировать в <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B8#mw-prefsection-personal" target="_blank">настройках сайта</a>.'),
  'sd-showtoolbar': 'Показывать панель инструментов',
  'sd-defaultcommentlinktype': 'Тип ссылки для копирования при нажатии «{{int:convenientdiscussions-cm-copylink}}» у сообщения по умолчанию',
  'sd-defaultcommentlinktype-radio-diff': 'Ссылка на дифф',
  'sd-defaultcommentlinktype-radio-wikilink': 'Вики-ссылка',
  'sd-defaultcommentlinktype-radio-link': 'Обычная ссылка',
  'sd-defaultcommentlinktype-help': 'Чтобы получить ссылку другого типа, нажмите «{{int:convenientdiscussions-cm-copylink}}» с зажатым Shift.',
  'sd-defaultcommentlinktype-help-notdifflinks': 'Ссылки не на дифф будут работать только у тех, у кого подключёны «Удобные дискуссии».',
  'sd-defaultsectionlinktype': 'Тип ссылки для копирования при нажатии «{{int:convenientdiscussions-sm-copylink}}» у раздела по умолчанию',
  'sd-defaultsectionlinktype-radio-wikilink': 'Вики-ссылка',
  'sd-defaultsectionlinktype-radio-link': 'Обычная ссылка',
  'sd-defaultsectionlinktype-help': 'Чтобы получить ссылку другого типа, нажмите «{{int:convenientdiscussions-sm-copylink}}» с зажатым Shift.',
  'sd-watchsectiononreply': 'Следить за разделами, в которых я отвечаю',
  'sd-close-confirm': 'Настройки не были сохранены. Закрыть?',
  'sd-close-confirm-yes': 'Закрыть',
  'sd-close-confirm-no': 'Отмена',
  'sd-saved': 'Настройки успешно сохранены. Обновите страницу, чтобы их применить.',
  'sd-reset': 'Сбросить настройки',
  'sd-reset-confirm': 'Вы действительно хотите сбросить настройки? (После сброса нажмите «{{int:convenientdiscussions-sd-save}}».)',
  'sd-removedata': 'Удалить все данные скрипта',
  'sd-removedata-confirm': 'Это приведёт к необратимому удалению ваших настроек, данных о последних посещениях страниц обсуждения, списка отслеживаемых разделов, а также черновиков неотправленных сообщений. Продолжить?',
  'sd-removedata-confirm-yes': 'Да',
  'sd-removedata-confirm-no': 'Нет',
  'sd-dataremoved': 'Ваши данные успешно удалены.',
  'sd-error-load': 'Не удалось загрузить настройки с сервера: $1/$2',
  'sd-error-save': 'Не удалось сохранить настройки на сервер: $1/$2',
  'sd-error-removedata': 'Не удалось удалить данные на сервере: $1/$2',

  // Browser notifications dialogs
  'confirm-browsernotifications': 'Хотите ли вы, чтобы «Удобные дискуссии» отправляли вам браузерные уведомления о новых сообщениях на открытых в данный момент страницах, адресованных вам и написанных в темах, за которыми вы следите? Вы можете отключить эту функцию в настройках.',
  'confirm-browsernotifications-yes': 'Да',
  'confirm-browsernotifications-no': 'Нет',
  'alert-grantpermission': 'Разрешите сайту отправку уведомлений.',
  'alert-grantpermission-again': 'У вас включены браузерные уведомления, но сайту не разрешено их посылать. Разрешите сайту отправку уведомлений, чтобы их получать, или запретите, чтобы это сообщение не появлялось снова.',

  // Comment menu
  'cm-gotoparent': '▲',
  'cm-gotoparent-tooltip': 'Перейти к родительскому сообщению',
  'cm-gotochild': '▼',
  'cm-gotochild-tooltip': 'Вернуться к дочернему сообщению',
  'cm-copylink': '#',
  'cm-copylink-tooltip': 'Скопировать $1. Нажмите с зажатым Shift, чтобы выбрать другой вид ссылки',
  'cm-copylink-tooltip-diff': 'ссылку на дифф',
  'cm-copylink-tooltip-wikilink': 'вики-ссылку',
  'cm-copylink-tooltip-link': 'ссылку',
  'cm-thank': 'Поблагодарить',
  'cm-thank-tooltip': 'Отправить благодарность за правку, которой было добавлено это сообщение',
  'cm-thank-disabled-tooltip': 'Вы уже поблагодарили за это сообщение',
  'cm-edit': 'Редактировать',
  'cm-reply': 'Ответить',

  // Section buttons
  'section-reply': 'Ответить',
  'section-addsubsection': 'Добавить подраздел',
  'section-addsubsection-to': 'Добавить подраздел в тему «$1»',
  'section-newcomments': 'В разделе появились новые сообщения',

  // Copy link dialog
  'cld-diff': 'Ссылка на дифф',
  'cld-diff-error': 'Не удалось найти',
  'cld-diff-error-network': 'Не удалось найти (сетевая ошибка)',
  'cld-diff-error-unknown': 'Не удалось найти (неизвестная ошибка)',
  'cld-wikilink': 'Вики-ссылка',
  'cld-wikilink-help-comment': 'Эта ссылка и ссылки ниже будут работать только у тех, у кого подключёны «Удобные дискуссии».',
  'cld-currentpagewikilink': 'Вики-ссылка с этой же страницы',
  'cld-link': 'Обычная ссылка',
  'cld-close': 'Закрыть',
  'cld-copy': 'Скопировать',

  // Copy link
  'copylink-copied': 'Ссылка скопирована в буфер обмена.',
  'copylink-copied-url': '<a href="$1" target="_blank">Ссылка</a> скопирована в буфер обмена.',
  'copylink-error': 'Не удалось скопировать ссылку.',
  'copylink-error-diffnotfound': 'Не удалось найти правку, которой было добавлено это сообщение. Вы можете посмотреть <a href="$1" target="_blank">историю страницы</a> и найти её самостоятельно.',
  'copylink-error-diffnotfound-network': 'Не удалось найти правку, которой было добавлено это сообщение (сетевая ошибка).',
  'copylink-error-diffnotfound-unknown': 'Не удалось найти правку, которой было добавлено это сообщение (неизвестная ошибка).',

  // Thank
  'thank-confirm': 'Поблагодарить {{gender:$2|участника|участницу}} $1 за <a href="$3" target="_blank">эту правку</a>?',
  'thank-error': 'Не удалось отправить благодарность.',
  'thank-error-multipletimestamps': 'Похоже, <a href="$1" target="_blank">правка</a>, которой было добавлено это сообщение, содержит более одного сообщения. Пожалуйста, решите сами, будете ли вы благодарить за неё.',
  'thank-error-diffnotfound': 'Не удалось найти правку, которой было добавлено это сообщение. Вы можете посмотреть <a href="$1" target="_blank">историю страницы</a> и найти её самостоятельно.',
  'thank-error-network': 'Не удалось отправить благодарность (сетевая ошибка).',
  'thank-success': 'Благодарность отправлена.',

  // Section menu
  'sm-editopeningcomment': 'править описание',
  'sm-editopeningcomment-tooltip': 'Редактировать первое сообщение темы',
  'sm-addsubsection': 'добавить подраздел',
  'sm-addsubsection-tooltip': 'Добавить подраздел в этот раздел',
  'sm-move': 'перенести',
  'sm-move-tooltip': 'Перенести тему на другую страницу',
  'sm-watch': 'следить',
  'sm-watch-tooltip': 'Добавить раздел в список наблюдения. Это влияет на уведомления и выделение жирным ссылки в списке наблюдения',
  'sm-unwatch': 'не следить',
  'sm-unwatch-tooltip': 'Удалить раздел из списка наблюдения',
  'sm-copylink': '#',
  'sm-copylink-tooltip': 'Скопировать $1. Нажмите с зажатым Shift, чтобы выбрать другой вид ссылки',
  'sm-copylink-tooltip-wikilink': 'вики-ссылку',
  'sm-copylink-tooltip-link': 'ссылку',

  'section-watch-success': 'Раздел «$1» добавлен в список наблюдения.',
  'section-unwatch-success': 'Раздел «$1» удалён из списка наблюдения.',
  'section-unwatch-stillwatched': '<strong>Внимание:</strong> вы всё ещё следите за этим разделом, так как он входит в раздел «$1», за которым вы следите.',
  'section-watch-pagenotwatched': '<strong>Внимание:</strong> вы следите за разделом, но не за страницей. Чтобы новые сообщения в разделе выделялись на странице списка наблюдения, вы должны добавить страницу в список наблюдения.',
  'section-watch-error-load': 'Не удалось загрузить настройки.',
  'section-watch-error-save': 'Не удалось обновить настройки.',
  'section-watch-error-maxsize': 'Не удалось обновить настройки: размер списка отслеживаемых тем превышает максимально допустимый. <a class="cd-notification-editWatchedSections">Отредактируйте список тем</a>, чтобы это исправить.',

  // Edit watched sections (topics) dialog
  'ewsd-title': 'Править список разделов',
  'ewsd-save': 'Сохранить',
  'ewsd-error-maxsize': 'Не удалось обновить настройки: размер списка отслеживаемых разделов превышает максимально допустимый. Уменьшите размер списка, чтобы это исправить.',
  'ewsd-error-processing': 'Возникли проблемы при обработке списка разделов: $1/$2',
  'ewsd-close-confirm': 'Список разделов не был сохранён. Закрыть?',
  'ewsd-close-confirm-yes': 'Закрыть',
  'ewsd-close-confirm-no': 'Отмена',

  // Move section dialog
  'msd-title': 'Перенести тему',
  'msd-move': 'Перенести',
  'msd-reload': 'Обновить',
  'msd-targetpage': 'Введите название страницы форума или обсуждения, куда вы хотите перенести тему:',
  'msd-summaryending': 'Описание правки (будет добавлено к стандартному)',
  'msd-error-wrongpage': 'Неверно указана страница.',
  'msd-error-sourcepagedeleted': 'Текущая страница была удалена.',
  'msd-error-targetpagedoesntexist': 'Целевая страница не существует.',
  'msd-error-invalidpagename': 'Указано невозможное название страницы.',
  'msd-error-editconflict': 'Конфликт редактирования. Просто нажмите «{{int:ooui-dialog-process-retry}}».',
  'msd-error-editingtargetpage': 'Ошибка при редактировании целевой страницы.',
  'msd-error-editingsourcepage': 'Ошибка при редактировании исходной страницы. Вам придётся отредактировать её вручную.',
  'msd-moved': '<p>Тема успешно перенесена. Вы можете обновить страницу или перейти на <a href="$1">страницу, куда была перенесена тема</a>.</p>',
  'msd-bottom': 'Код может быть другим, если страница будет обновлена за время простоя окна.',

  // Move section code
  'move-sourcepagecode': '{{перенесено на|$1|$2}}\n<small>Для бота: $3</small>',
  'move-targetpagecode': '{{перенесено с|$1|$2}}',

  // Edit summary phrases
  'es-reply': 'ответ',
  'es-reply-genitive': 'ответа',
  'es-reply-by-genitive': '{{int:convenientdiscussions-es-reply-genitive}} $1',
  'es-addition': 'дополнение',
  'es-addition-genitive': 'дополнения',
  'es-delete': 'удаление',
  'es-edit': 'редактирование',
  'es-topic-genitive': 'темы',
  'es-subsection-genitive': 'подраздела',
  'es-topic-openingcomment-genitive': 'описания темы',
  'es-subsection-openingcomment-genitive': 'описания подраздела',
  'es-comment-genitive': 'сообщения',
  'es-comment-by-genitive': '{{int:convenientdiscussions-es-comment-genitive}} $1',
  'es-new-topic': 'новая тема',
  'es-new-subsection': 'новый подраздел',
  'es-to': '',
  'es-moved': 'перенесено',
  'es-moved-from': '{{int:convenientdiscussions-es-moved}} с [[$1]]',
  'es-moved-to': '{{int:convenientdiscussions-es-moved}} на [[$1]]',
  'es-reply-to': '{{int:convenientdiscussions-es-reply}} {{int:convenientdiscussions-es-to}} $1',
  'es-action-to': '$1 $2',

  // Generic errors
  'error-loaddata': '{{int:convenientdiscussions-script-name}}: не удалось загрузить данные, необходимые скрипту.',
  'error-processpage': '{{int:convenientdiscussions-script-name}}: не удалось обработать страницу.',
  'error-reloadpage': 'Не удалось обновить страницу.',
  'error-api': 'Ошибка API',
  'error-network': 'Сетевая ошибка.',
  'error-nodata': 'В ответе сервера отсутствуют запрошенные данные.',
  'error-unknown': 'Неизвестная ошибка.',
  'error-javascript': 'Произошла ошибка JavaScript. Подробности см. в консоли JavaScript (F12 → Консоль).',
  'error-locatecomment': 'Не удалось определить местоположение сообщения в коде. Это может быть связано со сложностью кода сообщения, недоработкой скрипта или тем, что сообщение было удалено или сильно отредактировано. Вы можете попробовать <a class="cd-message-reloadPage">обновить страницу</a>.',
  'error-locatesection': 'Не удалось определить местоположение раздела в коде. Это может быть связано со сложностью кода первого сообщения раздела, недоработкой скрипта или тем, что раздел был удалён. Вы можете попробовать <a class="cd-message-reloadPage">обновить страницу</a>.',

  // Comment form fields
  'cf-headline': 'Заголовок',
  'cf-headline-topic': 'Название темы',
  'cf-headline-subsection': 'Название подраздела раздела «$1»',
  'cf-headline-topic-lowercase': 'название темы',
  'cf-headline-subsection-lowercase': 'название подраздела',
  'cf-comment-placeholder-replytosection': 'Ответ в тему «$1»',
  'cf-comment-placeholder-replytocomment': 'Ответ $1',
  'cf-comment-placeholder-addsection': 'Текст сообщения',
  'cf-comment-placeholder-addsubsection': 'Текст сообщения',
  'cf-summary-placeholder': 'Описание изменений',
  'cf-summary-preview': 'Предпросмотр описания изменения',

  // Comment form buttons
  'cf-save': 'Сохранить',
  'cf-save-short': 'Сохранить',
  'cf-delete-button': 'Удалить',
  'cf-delete-button-short': 'Удалить',
  'cf-addtopic': 'Добавить тему',
  'cf-addtopic-short': 'Добавить',
  'cf-add-subsection': 'Добавить подраздел',
  'cf-add-subsection-short': 'Добавить',
  'cf-reply': 'Ответить',
  'cf-reply-short': 'Ответ',
  'cf-preview': 'Предпросмотреть',
  'cf-preview-short': 'Просмотр',
  'cf-viewchanges': 'Просмотреть изменения',
  'cf-viewchanges-short': 'Изменения',
  'cf-cancel': 'Отменить',
  'cf-cancel-short': 'Отмена',
  'cf-settings': 'Настройки',
  'cf-settings-tooltip': 'Настройки {{int:convenientdiscussions-script-name-genitive}}',
  'cf-help': '?',
  'cf-help-short': '?',
  'cf-shortcuts': 'Сочетания клавиш',
  'cf-shortcuts-description': '<ul>\n<li><b>Ctrl+Enter</b> — отправить</li>\n<li><b>Esc</b> — отменить</li>\n<li><b>Q</b> (<b>Ctrl+Alt+Q</b>) — цитировать</li>\n</ul>',
  'cf-error-tryagain': 'Попробовать ещё раз',
  'cf-error-cancel': 'Отмена',
  'cf-quote-tooltip': 'Цитировать выделенный текст',
  'cf-quote-placeholder': 'Цитируемый текст',

  // Comment form options
  'cf-minoredit': 'Малое изменение',
  'cf-watchpage': 'В список наблюдения',
  'cf-watchsection-topic': 'Следить за темой',
  'cf-watchsection-subsection': 'Следить за подразделом',
  'cf-watchsection-tooltip': 'Добавить раздел в список наблюдения. Это влияет на уведомления и выделение жирным ссылки в списке наблюдения',
  'cf-notify-sectionauthor': 'Уведомить автора раздела',
  'cf-notify-commentauthor': 'Уведомить адресата',
  'cf-notify-tooltip': 'Функцией пинга',
  'cf-notify-tooltip-unreg': 'Невозможно послать уведомление незарегистрированному участнику',
  'cf-insmallfont': 'Мелким шрифтом',
  'cf-nosignature': 'Без подписи',
  'cf-delete': 'Удалить',

  // Other comment form-related strings
  'cf-block-preview': 'Предпросмотр',
  'cf-block-viewchanges': 'Просмотр изменений',
  'cf-block-close': 'Закрыть',
  'cf-notice-nochanges': 'Изменений нет.',

  // Reactions to the text entered in the form
  'cf-reaction-templateinheadline': 'Не используйте шаблоны в заголовках — это ломает ссылки на разделы.',
  // Minifier eats "~~\~~" and "'~~' + '~~'"
  'cf-reaction-signature': 'Вводить <kbd>~~'.concat('~~</kbd> не нужно — подпись подставится автоматически.'),
  'cf-reaction-pre': 'Теги <code>&lt;pre&gt;</code> ломают разметку обсуждений — используйте <code>&lt;syntaxhighlight&gt;</code>.',

  // Comment form error messages
  'cf-error-getpagecode': 'Не удалось получить код страницы.',
  'cf-error-findplace': 'Не удалось найти место в коде для вставки сообщения',
  'cf-error-findplace-unexpectedheading': 'неожиданный заголовок',
  'cf-error-numberedlist': 'Невозможно корректно сформировать сообщение, не исказив разметку нумерованного списка. Уберите списки из сообщения.',
  'cf-error-delete-repliestocomment': 'Нельзя удалить сообщение, так как на него уже есть ответы.',
  'cf-error-delete-repliesinsection': 'Нельзя удалить тему, так как в ней уже есть ответы.',
  'cf-error-preview': 'Не удалось предпросмотреть сообщение.',
  'cf-error-viewchanges': 'Не удалось получить изменения.',
  'cf-error-couldntedit': 'Не удалось отредактировать страницу.',
  'cf-error-pagenotedited': 'Страница не была отредактирована.',
  'cf-error-blocked': 'Вы заблокированы. Страница не была отредактирована.',
  'cf-error-pagedoesntexist': 'Страница не существует.',
  'cf-error-pagedeleted': 'Страница была удалена.',
  'cf-error-editconflict': 'Конфликт редактирования. Пробуем ещё раз…',
  'cf-error-spamblacklist': 'Ошибка: адрес $1 находится в чёрном списке. Страница не была отредактирована.',
  'cf-error-titleblacklist': 'Ошибка: название страницы находится в чёрном списке. Страница не была отредактирована.',
  'cf-error-abusefilter': 'Ваша правка была автоматически отклонена фильтром правок «$1».',

  // Comment form confirmations
  'cf-confirm-noheadline': 'Вы не ввели $1. Всё равно отправить форму?',
  'cf-confirm-empty': 'Вы действительно хотите отправить пустое сообщение?',
  'cf-confirm-long': 'Длина этого сообщения больше $1 символов. Вы действительно хотите его отправить?',
  'cf-confirm-secondlevelheading': 'Сообщение содержит код раздела второго уровня. Если вы переносите исходный код, лучше воспользоваться стандартной функцией правки кода, в противном случае код может быть изменён непредсказуемым образом. Вы действительно хотите отправить сообщение?',
  'cf-confirm-delete': 'Вы действительно хотите удалить сообщение?',
  'cf-confirm-delete-yes': 'Удалить',
  'cf-confirm-delete-no': 'Отмена',
  'cf-confirm-close': 'Вы действительно хотите закрыть форму? Введённый текст будет потерян.',
  'cf-confirm-close-yes': 'Закрыть',
  'cf-confirm-close-no': 'Отмена',

  // Section/comment not found
  'deadanchor-section-title': 'Раздел не найден',
  'deadanchor-section-text': 'Он мог быть переименован или уйти в архив.',
  'deadanchor-comment-title': 'Сообщение не найдено',
  'deadanchor-comment-text': 'Оно могло уйти в архив.',
  'deadanchor-searchinarchive': 'Поискать в архиве?',

  // Navigation panel
  'navpanel-refresh': 'Обновить страницу',
  'navpanel-refresh-tooltip': 'Нажмите, чтобы обновить страницу',
  'navpanel-previous': 'Перейти к предыдущему новому сообщению',
  'navpanel-next': 'Перейти к следующему новому сообщению',
  'navpanel-firstunseen': 'Перейти к первому непросмотренному сообщению',
  'navpanel-commentform': 'Перейти к следующей форме ответа вне видимой области страницы',
  'navpanel-newcomments-count': '$1 {{plural:$1|новое сообщение|новых сообщения|новых сообщений}}. {{int:convenientdiscussions-navpanel-refresh-tooltip}}',
  'navpanel-newcomments-insection': 'Раздел «$1»:',
  'navpanel-newcomments-outsideofsections': 'Вне разделов',
  'navpanel-newcomments-toyou': '(вам)',
  'navpanel-newcomments-unknownauthor': 'Неизвестный автор',
  'navpanel-newcomments-unknowndate': 'неизвестная дата',

  // Notification texts
  'notification-toyou': '$1 {{gender:$2|ответил|ответила}} на ваше сообщение$3. <a href="$4" class="cd-notification-reloadPage">Обновить страницу</a>$5.',
  'notification-toyou-browser': '$1 {{gender:$2|ответил|ответила}} на ваше сообщение$3 на странице «$4».',
  'notification-insection': '$1 {{gender:$2|ответил|ответила}} в разделе «$3». <a href="$4" class="cd-notification-reloadPage">Обновить страницу</a>$5.',
  'notification-insection-browser': '$1 {{gender:$2|ответил|ответила}} в разделе «$3» на странице «$4».',
  'notification-newcomments': '$1 {{plural:$1|новое сообщение|новых сообщения|новых сообщений}}$2, которые могут вас заинтересовать. <a href="$3" class="cd-notification-reloadPage">Обновить страницу</a>$4.',
  'notification-newcomments-browser': '$1 {{plural:$1|новое сообщение|новых сообщения|новых сообщений}}$2 на странице «$3», которые могут вас заинтересовать.',
  'notification-formdata': 'данные форм не потеряются',
  'notification-part-insection': 'в разделе «$1»',
  'notification-part-onthispage': 'на этой странице',

  // Watchlist page
  'wl-button-switchinteresting-tooltip': 'Показать только сообщения в разделах, за которыми я слежу, и адресованные мне',
  'wl-button-editwatchedsections-tooltip': 'Редактировать темы, за которыми я слежу',
  'wl-button-scriptsettings-tooltip': 'Настройки {{int:convenientdiscussions-script-name-genitive}}',

  // Log pages
  'lp-comment': 'сообщение',
  'lp-comment-tooltip': 'Перейти к сообщению',
  'lp-comment-toyou': 'сообщение адресовано вам',
  'lp-comment-watchedsection': 'вы следите за этой темой',

  // Rescue comment forms content dialog
  'rd-intro': 'Не удалось найти на странице те сообщения или разделы, к которым относились некоторые из открытых на странице форм. Ниже приведено восстановленное содержимое этих форм. Скопируйте его, если нужно.',
  'rd-close': 'Закрыть',

  // Other
  'addtopicbutton-tooltip': 'Откройте в новой вкладке, чтобы создать тему на обычной странице, а не в {{int:convenientdiscussions-script-name-prepositional}}.',
};