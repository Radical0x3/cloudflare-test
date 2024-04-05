export enum AdminPermissionEnum {
	AdminCreate = 'admin_create',
	AdminDelete = 'admin_delete',
	AdminList = 'admin_list',
	AdminUpdate = 'admin_update',
	CalendarDayCreate = 'calendar_day_create',
	CalendarDayDelete = 'calendar_day_delete',
	CalendarDayImport = 'calendar_day_import',
	CalendarDayList = 'calendar_day_list',
	CalendarDayUpdate = 'calendar_day_update',
	ChatNotificationList = 'chat_notification_list',
	ChatRoomList = 'chat_room_list',
	CountryCreate = 'country_create',
	CountryDelete = 'country_delete',
	CountryList = 'country_list',
	CountrySelectList = 'country_select_list',
	CountryUpdate = 'country_update',
	DivinationCreate = 'divination_create',
	DivinationDelete = 'divination_delete',
	DivinationImport = 'divination_import',
	DivinationList = 'divination_list',
	DivinationUpdate = 'divination_update',
	FakeUserCreate = 'fake_user_create',
	FakeUserDelete = 'fake_user_delete',
	FakeUserList = 'fake_user_list',
	FakeUserUpdate = 'fake_user_update',
	FamilyStatusCreate = 'family_status_create',
	FamilyStatusDelete = 'family_status_delete',
	FamilyStatusList = 'family_status_list',
	FamilyStatusSelectList = 'family_status_select_list',
	FamilyStatusUpdate = 'family_status_update',
	FaqCreate = 'faq_create',
	FaqDelete = 'faq_delete',
	FaqList = 'faq_list',
	FaqUpdate = 'faq_update',
	GenderList = 'gender_list',
	GenderSelectList = 'gender_select_list',
	GenderUpdate = 'gender_update',
	GlobalSettingCreate = 'global_setting_create',
	GlobalSettingList = 'global_setting_list',
	GlobalSettingUpdate = 'global_setting_update',
	IpAccessCreate = 'ip_access_create',
	IpAccessDelete = 'ip_access_delete',
	IpAccessList = 'ip_access_list',
	IpAccessUpdate = 'ip_access_update',
	LifePreferenceCreate = 'life_preference_create',
	LifePreferenceDelete = 'life_preference_delete',
	LifePreferenceList = 'life_preference_list',
	LifePreferenceSelectList = 'life_preference_select_list',
	LifePreferenceUpdate = 'life_preference_update',
	LookingForCreate = 'looking_for_create',
	LookingForDelete = 'looking_for_delete',
	LookingForList = 'looking_for_list',
	LookingForSelectList = 'looking_for_select_list',
	LookingForUpdate = 'looking_for_update',
	ReportList = 'report_list',
	ReportReasonCreate = 'report_reason_create',
	ReportReasonDelete = 'report_reason_delete',
	ReportReasonList = 'report_reason_list',
	ReportReasonUpdate = 'report_reason_update',
	RoleCreate = 'role_create',
	RoleDelete = 'role_delete',
	RoleList = 'role_list',
	RoleUpdate = 'role_update',
	SettlementCreate = 'settlement_create',
	SettlementDelete = 'settlement_delete',
	SettlementList = 'settlement_list',
	SettlementSelectList = 'settlement_select_list',
	SettlementUpdate = 'settlement_update',
	SubscriptionPlanCreate = 'subscription_plan_create',
	SubscriptionPlanDelete = 'subscription_plan_delete',
	SubscriptionPlanList = 'subscription_plan_list',
	SubscriptionPlanUpdate = 'subscription_plan_update',
	SubscriptionsDelete = 'subscriptions_delete',
	SubscriptionsList = 'subscriptions_list',
	TranslateDelete = 'translate_delete',
	TranslateList = 'translate_list',
	TranslateUpdate = 'translate_update',
	UserBlock = 'user_block',
	UserCreate = 'user_create',
	UserDelete = 'user_delete',
	UserList = 'user_list',
	UserUpdate = 'user_update',
	WeeklyHoroscopeCreate = 'weekly_horoscope_create',
	WeeklyHoroscopeDelete = 'weekly_horoscope_delete',
	WeeklyHoroscopeImport = 'weekly_horoscope_import',
	WeeklyHoroscopeList = 'weekly_horoscope_list',
	WeeklyHoroscopeUpdate = 'weekly_horoscope_update',
	ZodiacSignImport = 'zodiac_sign_import',
	ZodiacSignList = 'zodiac_sign_list',
	ZodiacSignSelectList = 'zodiac_sign_select_list',
	ZodiacSignUpdate = 'zodiac_sign_update'
}

export enum AlertEnumType {
	EmailNotVerified = 'email_not_verified'
}

export enum AnalyticsCalendarPageTypeEnum {
	Month = 'month',
	Week = 'week'
}

export enum AnalyticsEventTypeForRegistrationEnumType {
	RegistrationBirthday = 'registration_birthday',
	RegistrationCode = 'registration_code',
	RegistrationComplete = 'registration_complete',
	RegistrationFamilyStatus = 'registration_family_status',
	RegistrationHobbies = 'registration_hobbies',
	RegistrationLocation = 'registration_location',
	RegistrationLookingFor = 'registration_looking_for',
	RegistrationLookingForGender = 'registration_looking_for_gender',
	RegistrationNameAndGender = 'registration_name_and_gender',
	RegistrationPhoto = 'registration_photo',
	RegistrationProfileDescription = 'registration_profile_description'
}

export enum AnalyticsNavMenuItemEnum {
	Calendar = 'calendar',
	EditProfile = 'edit_profile',
	Messages = 'messages',
	Notification = 'notification',
	Paywall = 'paywall',
	Profile = 'profile',
	Swipe = 'swipe'
}

export enum AnalyticsPaywallClickFromEnum {
	Calendar = 'calendar',
	Matches = 'matches',
	Profile = 'profile'
}

export enum CalendarDayForDateEnum {
	Bad = 'bad',
	Good = 'good',
	Unclear = 'unclear'
}

export enum CurrencyEnumType {
	Byn = 'BYN',
	Eur = 'EUR',
	Rub = 'RUB',
	Uah = 'UAH',
	Usd = 'USD'
}

export enum GenderEnum {
	Female = 'female',
	Male = 'male',
	Other = 'other'
}

export enum GlobalSettingsAliasEnumType {
	FbLink = 'fb_link',
	FreeProForNewUsers = 'free_pro_for_new_users',
	InstagramLink = 'instagram_link',
	PrivacyPolicy = 'privacy_policy',
	PrivacyPolicyLink = 'privacy_policy_link',
	TgLink = 'tg_link',
	UserAgreement = 'user_agreement',
	UserAgreementLink = 'user_agreement_link'
}

export enum GlobalSettingsGroupEnumType {
	Links = 'links',
	Pages = 'pages',
	Subscriptions = 'subscriptions'
}

export enum MessageTypeEnum {
	Danger = 'danger',
	Success = 'success',
	Warning = 'warning'
}

export enum SortableModelsTypeEnum {
	Faq = 'faq',
	Media = 'media',
	ZodiacSign = 'zodiac_sign'
}

export enum SubscriptionPeriodIntervalEnumType {
	Day = 'day',
	Month = 'month',
	Year = 'year'
}

export enum SubscriptionPlatformEnumType {
	AppStore = 'app_store',
	GooglePlay = 'google_play'
}

export enum SubscriptionTypeEnumType {
	Manual = 'manual',
	Promotion = 'promotion',
	Store = 'store'
}

export enum UserBlockingEnum {
	ByAccount = 'by_account',
	ByDevice = 'by_device',
	NotBlocked = 'not_blocked'
}

export enum UserNotificationTypeEnumType {
	LikeReceived = 'like_received',
	LoggedInFromNewDevice = 'logged_in_from_new_device',
	NewChatMessage = 'new_chat_message',
	NewMatch = 'new_match',
	NewUsersNearby = 'new_users_nearby',
	ReceivedFreePro = 'received_free_pro',
	RegistrationNotCompleted = 'registration_not_completed',
	UserHasNotLoggedIntoAppFor_3Days = 'user_has_not_logged_into_app_for_3_days',
	UserHasNotLoggedIntoAppFor_10Days = 'user_has_not_logged_into_app_for_10_days',
	WeeklyCalendarUpdated = 'weekly_calendar_updated'
}

export enum UserPermissionEnum {
	RoleList = 'role_list'
}

export enum UserPreferredDistanceUnitEnumType {
	Km = 'km',
	Mile = 'mile'
}

export enum UserPreferredSearchEnumType {
	City = 'city',
	Location = 'location'
}

export enum UserProviderEnumType {
	Apple = 'apple',
	Facebook = 'facebook',
	Google = 'google'
}

export enum ZodiacSignEnum {
	Aquarius = 'aquarius',
	Aries = 'aries',
	Cancer = 'cancer',
	Capricorn = 'capricorn',
	Gemini = 'gemini',
	Leo = 'leo',
	Libra = 'libra',
	Pisces = 'pisces',
	Sagittarius = 'sagittarius',
	Scorpio = 'scorpio',
	Taurus = 'taurus',
	Virgo = 'virgo'
}
