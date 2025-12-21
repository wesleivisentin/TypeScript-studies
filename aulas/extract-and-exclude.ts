// Geralmente usamos o Extract e Exclude em tipos literais

//Extract<Type, Union>
type AppEvents = "click" | "hover" | "scroll" | "resize";

type MarketingEvents = Extract<
  AppEvents,
  "click" | "scroll" | { name: string }
>;

const event: MarketingEvents = "click";

//Exclude<UnionType, ExcludedMembers>
type UserRoles = "admin" | "editor" | "viewer" | "guest";

type ViewCommentsRoles = Exclude<UserRoles, "guest">;

const event2: ViewCommentsRoles = "admin";
