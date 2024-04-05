import type {
	AdminPermissionEnum,
	AlertEnumType,
	AnalyticsCalendarPageTypeEnum,
	AnalyticsEventTypeForRegistrationEnumType,
	AnalyticsNavMenuItemEnum,
	AnalyticsPaywallClickFromEnum,
	CalendarDayForDateEnum,
	CurrencyEnumType,
	GenderEnum,
	GlobalSettingsAliasEnumType,
	GlobalSettingsGroupEnumType,
	MessageTypeEnum,
	SortableModelsTypeEnum,
	SubscriptionPeriodIntervalEnumType,
	SubscriptionPlatformEnumType,
	SubscriptionTypeEnumType,
	UserBlockingEnum,
	UserNotificationTypeEnumType,
	UserPermissionEnum,
	UserPreferredDistanceUnitEnumType,
	UserPreferredSearchEnumType,
	UserProviderEnumType,
	ZodiacSignEnum
} from './enums';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	/**
	 * The `Upload` special type represents a file to be uploaded in the same HTTP request as specified by
	 *  [graphql-multipart-request-spec](https://github.com/jaydenseric/graphql-multipart-request-spec).
	 */
	Upload: { input: any; output: any };
}

export interface AdminInput {
	email: Scalars['String']['input'];
	name: Scalars['String']['input'];
	password?: InputMaybe<Scalars['String']['input']>;
	role_id?: InputMaybe<Scalars['Int']['input']>;
}

/** Список всех возможных разрешений для типа: graph_admin */

/** Список возможных привязок предупреждающих сообщений. */

export interface CalendarDayInput {
	active: Scalars['Boolean']['input'];
	date: Scalars['String']['input'];
	for_date: CalendarDayForDateEnum;
	translates: Array<CalendarDayTranslateInput>;
}

export interface CalendarDayTranslateInput {
	description?: InputMaybe<Scalars['String']['input']>;
	language: Scalars['String']['input'];
	tips?: InputMaybe<Scalars['String']['input']>;
}

export interface CoordinatesInput {
	latitude: Scalars['Float']['input'];
	longitude: Scalars['Float']['input'];
}

export interface CountryInput {
	iso_alpha_2: Scalars['String']['input'];
	translates: Array<CountryTranslateInput>;
}

export interface CountryTranslateInput {
	language: Scalars['String']['input'];
	name: Scalars['String']['input'];
}

/** Список валют. */

export interface DivinationInput {
	active: Scalars['Boolean']['input'];
	gender_id: Scalars['ID']['input'];
	translates: Array<DivinationTranslateInput>;
	zodiac_sign_id: Scalars['ID']['input'];
}

export interface DivinationTranslateInput {
	language: Scalars['String']['input'];
	name: Scalars['String']['input'];
}

export interface FamilyStatusInput {
	active: Scalars['Boolean']['input'];
	translates: Array<FamilyStatusTranslateInput>;
}

export interface FamilyStatusTranslateInput {
	language: Scalars['String']['input'];
	name: Scalars['String']['input'];
}

export interface FaqInput {
	sort?: InputMaybe<Scalars['Int']['input']>;
	translates: Array<FaqTranslateInput>;
}

export interface FaqTranslateInput {
	answer: Scalars['String']['input'];
	language: Scalars['String']['input'];
	question: Scalars['String']['input'];
}

export interface FileInput {
	file: Scalars['Upload']['input'];
}

export interface GenderInput {
	active: Scalars['Boolean']['input'];
	translates: Array<GenderTranslateInput>;
}

export interface GenderTranslateInput {
	language: Scalars['String']['input'];
	name: Scalars['String']['input'];
}

export interface GlobalSettingInput {
	alias: GlobalSettingsAliasEnumType;
	group: GlobalSettingsGroupEnumType;
	value?: InputMaybe<Scalars['String']['input']>;
}

/** Список доступних alias. */

/** Список доступних груп. */

export interface LifePreferenceInput {
	active: Scalars['Boolean']['input'];
	translates: Array<LifePreferenceTranslateInput>;
}

export interface LifePreferenceTranslateInput {
	language: Scalars['String']['input'];
	name: Scalars['String']['input'];
}

export interface ListOfFilesInput {
	files: Array<InputMaybe<FileInput>>;
}

export interface LookingForInput {
	active: Scalars['Boolean']['input'];
	translates: Array<LookingForTranslateInput>;
}

export interface LookingForTranslateInput {
	language: Scalars['String']['input'];
	name: Scalars['String']['input'];
}

/** Список типов сообщений. */

export interface ReportReasonInput {
	active: Scalars['Boolean']['input'];
	translates: Array<ReportReasonTranslateInput>;
}

export interface ReportReasonTranslateInput {
	language: Scalars['String']['input'];
	name: Scalars['String']['input'];
}

export interface RoleTranslateInputType {
	/** Language */
	language: Scalars['String']['input'];
	/** Название */
	title: Scalars['String']['input'];
}

/** Список сущностей, которые поддерживают сортировку перетаскиванием */

export interface SubscriptionInput {
	platform: SubscriptionPlatformEnumType;
	platform_package_name?: InputMaybe<Scalars['String']['input']>;
	platform_subscription_id: Scalars['String']['input'];
	token: Scalars['String']['input'];
}

/** Список возможных значений периода. */

export interface SubscriptionPlanInput {
	discount: Scalars['Int']['input'];
	external_shop_id: Scalars['String']['input'];
	is_default: Scalars['Boolean']['input'];
	name: Scalars['String']['input'];
	translates: Array<SubscriptionPlanTranslateInput>;
}

export interface SubscriptionPlanTranslateInput {
	description: Scalars['String']['input'];
	language: Scalars['String']['input'];
}

/** Список возможных платформ покупки подписки. */

/** Список возможных значений периода. */

export interface UserInput {
	birthday: Scalars['String']['input'];
	description?: InputMaybe<Scalars['String']['input']>;
	email?: InputMaybe<Scalars['String']['input']>;
	fake: Scalars['Boolean']['input'];
	family_status_id: Scalars['ID']['input'];
	gender_id: Scalars['ID']['input'];
	is_pro: Scalars['Boolean']['input'];
	life_preferences: Array<Scalars['ID']['input']>;
	looking_for: Array<Scalars['ID']['input']>;
	looking_for_genders: Array<Scalars['ID']['input']>;
	name: Scalars['String']['input'];
	user_settlements?: InputMaybe<Array<UserSettlementInput>>;
}

/** Список всех возможных разрешений для типа: graph_user */

/** Предпочитаемая единица измерения расстояния */

/** Предпочитаемый способ поиска пользователей */

export interface UserProfileInput {
	birthday: Scalars['String']['input'];
	coordinates?: InputMaybe<CoordinatesInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	family_status_id: Scalars['ID']['input'];
	gender_id: Scalars['ID']['input'];
	life_preferences: Array<Scalars['ID']['input']>;
	looking_for: Array<Scalars['ID']['input']>;
	looking_for_genders: Array<Scalars['ID']['input']>;
	name: Scalars['String']['input'];
	preferred_distance?: InputMaybe<Scalars['Float']['input']>;
	preferred_distance_unit?: InputMaybe<UserPreferredDistanceUnitEnumType>;
	preferred_search: UserPreferredSearchEnumType;
	user_settlements?: InputMaybe<Array<UserSettlementInput>>;
}

/** Список провайдеров для аутентификации через социальные сети. */

export interface UserReportInput {
	/** Сообщение того кто создает жалобу */
	message?: InputMaybe<Scalars['String']['input']>;
	/** Изображение пользователя на которое создается жалоба */
	photo_id?: InputMaybe<Scalars['ID']['input']>;
	report_reason_id: Scalars['ID']['input'];
	/** Пользователь на которого создается жалоба */
	user_id: Scalars['ID']['input'];
	/** Сообщение из чата на которое создается жалоба */
	user_message?: InputMaybe<Scalars['String']['input']>;
}

export interface UserSettlementInput {
	active: Scalars['Boolean']['input'];
	settlement_id: Scalars['ID']['input'];
}

export interface WeeklyHoroscopeInput {
	from: Scalars['String']['input'];
	gender_id: Scalars['Int']['input'];
	to: Scalars['String']['input'];
	translates: Array<WeeklyHoroscopeTranslateInput>;
	zodiac_sign_id: Scalars['Int']['input'];
}

export interface WeeklyHoroscopeTranslateInput {
	description: Scalars['String']['input'];
	language: Scalars['String']['input'];
}

export interface ZodiacCompatibilityInput {
	percent: Scalars['Int']['input'];
	translates: Array<ZodiacCompatibilityTranslateInput>;
}

export interface ZodiacCompatibilityTranslateInput {
	language: Scalars['String']['input'];
	text?: InputMaybe<Scalars['String']['input']>;
}

export interface ZodiacSignInput {
	translates: Array<ZodiacSignTranslateInput>;
}

export interface ZodiacSignTranslateInput {
	language: Scalars['String']['input'];
	man_about?: InputMaybe<Scalars['String']['input']>;
	man_about_short?: InputMaybe<Scalars['String']['input']>;
	man_as_lover?: InputMaybe<Scalars['String']['input']>;
	man_as_sex_partner?: InputMaybe<Scalars['String']['input']>;
	man_as_spouse?: InputMaybe<Scalars['String']['input']>;
	man_at_work?: InputMaybe<Scalars['String']['input']>;
	name: Scalars['String']['input'];
	other_about?: InputMaybe<Scalars['String']['input']>;
	other_about_short?: InputMaybe<Scalars['String']['input']>;
	other_as_lover?: InputMaybe<Scalars['String']['input']>;
	other_as_sex_partner?: InputMaybe<Scalars['String']['input']>;
	other_as_spouse?: InputMaybe<Scalars['String']['input']>;
	other_at_work?: InputMaybe<Scalars['String']['input']>;
	women_about?: InputMaybe<Scalars['String']['input']>;
	women_about_short?: InputMaybe<Scalars['String']['input']>;
	women_as_lover?: InputMaybe<Scalars['String']['input']>;
	women_as_sex_partner?: InputMaybe<Scalars['String']['input']>;
	women_as_spouse?: InputMaybe<Scalars['String']['input']>;
	women_at_work?: InputMaybe<Scalars['String']['input']>;
}

export type GlobalSettingsFragmentFragment = {
	__typename?: 'GlobalSettingType';
	id: string;
	alias: GlobalSettingsAliasEnumType;
	value?: string | null;
	group: GlobalSettingsGroupEnumType;
};

export type UserUnsubscribeMutationVariables = Exact<{
	token: Scalars['String']['input'];
}>;

export type UserUnsubscribeMutation = { __typename?: 'Mutation'; userNotificationsUnsubscribe: boolean };

export type GetPrivacyPolicyPageQueryVariables = Exact<{ [key: string]: never }>;

export type GetPrivacyPolicyPageQuery = {
	__typename?: 'Query';
	globalSettings: Array<{
		__typename?: 'GlobalSettingType';
		id: string;
		alias: GlobalSettingsAliasEnumType;
		value?: string | null;
		group: GlobalSettingsGroupEnumType;
	}>;
};

export type GetUserAgreementPageQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserAgreementPageQuery = {
	__typename?: 'Query';
	globalSettings: Array<{
		__typename?: 'GlobalSettingType';
		id: string;
		alias: GlobalSettingsAliasEnumType;
		value?: string | null;
		group: GlobalSettingsGroupEnumType;
	}>;
};
